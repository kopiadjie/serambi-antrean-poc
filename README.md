📌 Background & Problem Statement
Dalam operasional layanan publik skala besar (seperti penukaran uang SERAMBI), antrean fisik yang panjang seringkali menimbulkan beberapa kendala kritikal:

Inefisiensi & Ketidaknyamanan: Masyarakat harus berdiri dalam waktu lama, yang menurunkan kualitas layanan.

Pelanggaran Antrean: Praktik "memotong antrean" dari tengah sering terjadi akibat pengawasan manual yang sulit pada barisan yang panjang.

Penyalahgunaan Identitas: Adanya upaya mewakilkan antrean atau ketidaksesuaian identitas (KTP) yang sering luput dari pemeriksaan petugas di barisan fisik.

💡 The Solution: Serambi Antrean PoC
Proyek ini merupakan Proof of Concept (PoC) sistem intervensi digital yang merombak antrean fisik menjadi antrean berbasis data yang terkendali. Solusi yang ditawarkan meliputi:

QR-Gate Access: Antrean hanya dapat diambil melalui pemindaian kode QR di lokasi fisik oleh panitia, memastikan hanya masyarakat yang hadir di lokasi yang mendapatkan nomor.

Virtual Waiting Room: Masyarakat dapat menunggu dengan nyaman di area duduk yang disediakan tanpa harus berdiri di barisan, karena posisi antrean terpantau secara real-time melalui perangkat masing-masing.

Anti-Jumping Mechanism: Sistem penomoran terkunci secara urut pada database, sehingga tidak ada celah untuk memotong urutan secara ilegal.

Strict Verification Point: Petugas memiliki otoritas penuh melalui Dashboard Admin untuk melakukan validasi kesesuaian identitas (KTP) sebelum status antrean diubah menjadi "Diterima". Antrean yang tidak sesuai aturan dapat "Ditolak" secara instan oleh sistem, memberikan efek jera terhadap pelanggaran aturan.

🛠️ Technical Highlights
Automated Sync: Sinkronisasi status antara Admin dan User dalam < 2 detik.

Smart Suffix: Penambahan identitas visual -A pada nomor yang telah tervalidasi sebagai bukti autentik saat menuju loket.

Lightweight Architecture: Menggunakan Node.js dan SQLite untuk performa cepat dengan sumber daya minimal.

Kenapa Deskripsi Ini Efektif?
Menjelaskan "Intervensi": Anda tidak hanya membuat aplikasi, tapi memberikan intervensi terhadap perilaku masyarakat (mencegah srobot, mencegah perwakilan).

Kesesuaian Identitas: Menonjolkan fitur "Tolak" sebagai alat penegakan aturan (enforcement) membuat sistem Anda terlihat memiliki nilai keamanan yang tinggi.

Human-Centric: Mengangkat masalah "tidak perlu berdiri lama" menunjukkan bahwa Anda peduli pada user experience masyarakat di Medan.