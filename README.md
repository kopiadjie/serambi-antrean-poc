# Serambi Antrean PoC (Proof of Concept) 🛡️

**Serambi Antrean** adalah sistem manajemen layanan publik digital yang dirancang untuk mengoptimalkan efisiensi operasional dan kenyamanan pengguna dalam proses antrean skala besar. Proyek ini hadir sebagai solusi teknologi untuk mentransformasi metode antrean konvensional menjadi ekosistem yang lebih teratur dan transparan.

---

## 📌 Latar Belakang & Permasalahan

Dalam penyelenggaraan layanan publik dengan volume massa yang tinggi, metode antrean fisik konvensional seringkali menghadapi tantangan logistik yang signifikan:

1. **Optimalisasi Kenyamanan**: Antrean baris yang panjang mengharuskan masyarakat berdiri dalam waktu lama, yang secara langsung dapat menurunkan tingkat kepuasan layanan.
2. **Integritas Urutan Antrean**: Sulitnya pengawasan manual pada barisan fisik membuka celah bagi praktik manipulasi urutan (penyerobotan) yang merugikan pengguna lain.
3. **Validasi Identitas**: Kurangnya sistem verifikasi yang terintegrasi memudahkan upaya penggunaan identitas yang tidak sah (perwakilan antrean) atau ketidaksesuaian data KTP yang luput dari pemeriksaan petugas.

---

## 💡 Solusi: Intervensi Digital

Proyek ini menghadirkan intervensi teknologi untuk merombak antrean fisik menjadi antrean berbasis data yang terkendali:

### 📱 Ruang Tunggu Virtual
Masyarakat dapat memantau posisi antrean melalui perangkat masing-masing secara *real-time*. Hal ini memberikan fleksibilitas bagi pengguna untuk menunggu di area yang lebih nyaman tanpa harus berada dalam barisan fisik yang statis.

### 🔒 Konsistensi Alur Urutan
Sistem menggunakan algoritma penomoran yang terkunci secara otomatis pada database. Mekanisme ini memastikan setiap nomor dikeluarkan berdasarkan urutan waktu yang adil, sehingga menutup celah manipulasi urutan secara ilegal.

### ⚖️ Verifikasi Otoritas Terpusat
Melalui *Dashboard Admin*, petugas memiliki kendali penuh untuk memvalidasi kesesuaian identitas pengguna. Antrean hanya dinyatakan sah (**Diterima**) setelah melalui pengecekan fisik data identitas. Sistem secara tegas mengizinkan pembatalan (**Ditolak**) terhadap upaya pelanggaran aturan guna menjaga keadilan bagi seluruh pengguna.

---

## 🛠️ Keunggulan Teknis

* **Real-Time Synchronization**: Sinkronisasi status antara panel admin dan perangkat pengguna berlangsung secara instan (< 2 detik).
* **Smart Validation Suffix**: Penambahan identitas visual `-A` pada nomor yang telah tervalidasi sebagai sertifikasi digital saat menuju loket pelayanan.
* **Lightweight Architecture**: Dibangun menggunakan *Node.js* dan *SQLite* untuk memastikan performa yang responsif dengan konsumsi sumber daya server yang minimal.

---

## 🎯 Mengapa Sistem Ini Efektif?

* **Pendekatan Human-Centric**: Mengutamakan martabat dan kenyamanan pengguna dengan menghapus kewajiban antrean berdiri.
* **Penegakan Aturan (Enforcement)**: Fitur penolakan antrean berfungsi sebagai instrumen kepatuhan untuk memastikan hanya pengguna yang sah yang mendapatkan layanan.
* **Transparansi Layanan**: Status kuota yang ditampilkan secara terbuka meningkatkan kepercayaan masyarakat terhadap kredibilitas penyelenggara layanan.

---

## 🚀 Cara Menjalankan Project

1. Pastikan **Node.js** sudah terinstal di perangkat Anda.
2. Clone repositori ini dan masuk ke direktori proyek.
3. Instal dependensi:
   ```bash
   npm install