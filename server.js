const express = require('express');
const sqlite3 = require('sqlite3');
const { open } = require('sqlite');
const path = require('path');
const app = express();

app.use(express.json());
// Melayani file statis dari folder 'public'
app.use(express.static(path.join(__dirname, 'public')));

let db;

// 1. Inisialisasi Database
(async () => {
    db = await open({
        filename: './antrean.db',
        driver: sqlite3.Database
    });
    await db.exec(`
        CREATE TABLE IF NOT EXISTS antrean (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            status TEXT DEFAULT 'pending',
            waktu DATETIME DEFAULT CURRENT_TIMESTAMP
        )
    `);
    console.log("Database Ready.");
})();

const KUOTA_MAX = 150;
const KODE_RAHASIA = "2247"; // Pastikan ini sama dengan yang diinput user

// --- API ENDPOINTS ---

app.get('/api/status', async (req, res) => {
    try {
        const row = await db.get("SELECT COUNT(*) as total FROM antrean WHERE status IN ('pending', 'diterima')");
        const aktif = row.total || 0;
        res.json({ 
            sisaKuota: Math.max(0, KUOTA_MAX - aktif),
            bisaAmbil: aktif < KUOTA_MAX 
        });
    } catch (e) { res.status(500).json({error: e.message}); }
});

app.get('/api/posisi/:id', async (req, res) => {
    try {
        const id = req.params.id;
        // Cek status user dulu
        const user = await db.get("SELECT status FROM antrean WHERE id = ?", id);
        if (!user) return res.json({ status: 'not_found', posisi: 0 });
        
        if (user.status === 'ditolak') return res.json({ status: 'ditolak', posisi: 0 });

        const row = await db.get(`
            SELECT COUNT(*) as posisi 
            FROM antrean 
            WHERE status IN ('pending', 'diterima') AND id <= ?
        `, id);
        
        res.json({ status: user.status, posisi: row.posisi || 0 });
    } catch (e) { res.status(500).json({error: e.message}); }
});

app.post('/api/ambil', async (req, res) => {
    const row = await db.get("SELECT COUNT(*) as total FROM antrean WHERE status IN ('pending', 'diterima')");
    if (row.total >= KUOTA_MAX) return res.status(400).json({ message: "Kuota Penuh" });

    const result = await db.run("INSERT INTO antrean (status) VALUES ('pending')");
    res.json({ id: result.lastID });
});

app.post('/api/verifikasi', async (req, res) => {
    const { id, aksi, kode } = req.body;
    
    if (aksi === 'terima') {
        if (kode !== KODE_RAHASIA) return res.status(401).json({ message: "Kode Salah!" });
        await db.run("UPDATE antrean SET status = 'diterima' WHERE id = ?", id);
        
        const row = await db.get(`
            SELECT COUNT(*) as posisi FROM antrean 
            WHERE status IN ('pending', 'diterima') AND id <= ?
        `, id);

        return res.json({ message: "Berhasil", nomorBaru: row.posisi });
    } else {
        await db.run("UPDATE antrean SET status = 'ditolak' WHERE id = ?", id);
        return res.json({ message: "Antrean Dibatalkan/Hangus" });
    }
});

app.get('/api/admin/list', async (req, res) => {
    const rows = await db.all(`
        SELECT a1.*, 
        (SELECT COUNT(*) FROM antrean a2 WHERE a2.status IN ('pending', 'diterima') AND a2.id <= a1.id) as nomor_urut
        FROM antrean a1 ORDER BY id ASC
    `);
    res.json(rows);
});

// Endpoint Reset untuk Admin
app.post('/api/admin/reset', async (req, res) => {
    await db.run("DELETE FROM antrean");
    await db.run("DELETE FROM sqlite_sequence WHERE name='antrean'"); // Reset auto-increment
    res.json({ message: "Database Berhasil Direset!" });
});

// Jalankan di Port 80 (Memerlukan akses admin/sudo di beberapa OS)
app.listen(80, () => {
    console.log('--- SERVER ANTREAN AKTIF ---');
    console.log('Akses Masyarakat: http://localhost');
    console.log('Akses Admin: http://localhost/admin.html');
});