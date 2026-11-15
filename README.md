# Wonderful Indonesia — Explore the Beauty of Indonesia

Website eksplorasi interaktif modern, cinematic, dan immersive untuk menjelajahi keindahan 29 kota di 7 wilayah Indonesia, keanekaragaman budaya, arsitektur bernilai sejarah, dan tradisi adiluhung Nusantara.

---

## 🌟 Fitur Utama

1. **Fullscreen Cinematic Hero**:
   - Background pemandangan alam Indonesia beresolusi tinggi dengan efek *Ken Burns slow zoom*.
   - Tipografi mewah memadukan font serif (*Playfair Display*, *Cinzel*) dan sans-serif (*Plus Jakarta Sans*).
   - Slider otomatis destinasi ikonik (Raja Ampat, Bromo Tengger, Ulun Danu Beratan, Labuan Bajo).
   - Tombol eksplorasi cepat dan indikator scroll interaktif.

2. **Explore 29 Cities across 7 Archipelago Regions**:
   - **Sumatera**: Banda Aceh, Medan, Padang, Pekanbaru, Palembang, Bandar Lampung
   - **Jawa**: Jakarta, Bandung, Yogyakarta, Semarang, Surakarta, Surabaya, Malang
   - **Bali & Nusa Tenggara**: Denpasar, Ubud, Mataram, Kupang
   - **Kalimantan**: Pontianak, Banjarmasin, Samarinda, Balikpapan
   - **Sulawesi**: Makassar, Manado, Palu, Kendari, Gorontalo
   - **Maluku**: Ambon, Ternate
   - **Papua**: Jayapura, Sorong, Merauke
   - Filter real-time per wilayah, pencarian instan (nama kota, provinsi, kuliner, kesenian), serta pengurutan alfabetis.

3. **Halaman Detail Setiap Kota (`/city/:id`)**:
   - **Fullscreen Background Cinematic**: Foto lanskap resolusi tinggi dengan Ken Burns effect dan overlay gradient.
   - **About The City**: Sejarah berdirinya kota, letak geografis & iklim, budaya masyarakat, dan keunikan khas.
   - **Local Culture (6 Pilar Kebudayaan)**:
     - Pakaian Tradisional
     - Senjata Tradisional Pusaka
     - Tarian Tradisional
     - Cita Rasa Makanan Khas
     - Rumah Adat Vernakular
     - Kesenian & Musik Tradisional
   - **Popular Destinations Gallery**: Layout asimetris editorial dinamis dilengkapi **Lightbox Photo Viewer Fullscreen**.
   - **Navigasi Cepat**: Tombol jelajah kota sebelumnya dan berikutnya dalam sekuens kepulauan.

4. **Animasi Khas Daerah Indonesia**:
   - Ilustrasi vektor SVG presisi dan animasi *Framer Motion* yang menghormati makna budaya:
     - **Bali**: Pura Besakih, Keris Bali berluk pamor emas, ornamen Patra ukir, partikel canang sari.
     - **Yogyakarta & Solo**: Gunungan Wayang Kulit, Candi Prambanan, motif Batik Kawung.
     - **Bandung & Jawa Barat**: Gedung Sate berornamen bola tusuk sate, bilah Kujang Pajajaran, bambu Angklung bergetar harmonis.
     - **Jakarta**: Tugu Monas dengan lidah api kemerdekaan berkilau, boneka Ondel-Ondel Betawi, pola Gigi Balang.
     - **Sumatera Barat (Padang)**: Atap Gonjong tanduk kerbau Rumah Gadang, motif Songket Pucuak Rabuang.
     - **Papua**: Siluet Burung Cenderawasih terbang anggun, ukiran Asmat, dan Tifa Papua.
     - **Kalimantan**: Motif Batang Garing Dayak, Mandau bertatahkan kuningan.
     - **Sulawesi**: Perahu Layar Pinisi 7 layar membelah ombak samudra.
     - **Aceh**: Motif Pinto Aceh bersinar emas.

5. **Audio Ambience "Suara Nusantara"**:
   - Synthesizer suara gamelan pentatonis laras *Slendro* dan semilir angin pantai yang dibuat dengan native **Web Audio API** (tanpa dependensi file MP3 eksternal, bebas lag, toggleable langsung di navbar).

6. **Warisan Budaya UNESCO & Kisah Nusantara**:
   - Halaman `/culture`: Khazanah Warisan Budaya Takbenda Dunia (Batik, Wayang Kulit, Keris, Angklung, Saman, Noken, Pinisi, Gamelan) dan Studio Animasi Budaya Interaktif.
   - Halaman `/about`: Sejarah kemaharajaan maritim Sriwijaya-Majapahit, garis biosfer Wallacea, serta filosofi persatuan *Bhinneka Tunggal Ika*.

7. **Kualitas Gambar & Ketahanan (Resilience)**:
   - Komponen `ImageWithFallback` dengan efek shimmer skeleton dan fallback otomatis jika gambar eksternal gagal dimuat.

---

## 🛠️ Tech Stack

- **React 19** (JavaScript / JSX)
- **Vite 8** (Lightning-fast bundler & HMR)
- **Tailwind CSS v4** (`@tailwindcss/vite`)
- **Framer Motion** (Animasi cinematic & transisi vektor)
- **React Router Dom v7** (Navigasi SPA dengan code splitting dynamic import)
- **Lucide React** (Ikonografi modern dan konsisten)
- **Web Audio API** (Synthesizer alunan musik tradisional Nusantara)
- **ESLint 10** (Standar kode bersih, 0 errors, 0 warnings)

---

## 🚀 Menjalankan Project

Pastikan Node.js dan npm telah terinstal di komputer Anda:

```bash
# Instal seluruh dependency
npm install

# Menjalankan server development
npm run dev

# Memeriksa standar kode dengan ESLint
npm run lint

# Membangun versi produksi (Build)
npm run build

# Menjalankan preview dari hasil build
npm run preview
```
