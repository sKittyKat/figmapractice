/* ==========================================================================
   MOCHILOVE - LOGIKA INTI DENGAN STUDIO FIGMA FOKUS TUGAS & PROGRESI TERKUNCI
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  const DEFAULT_STATE = {
    gfName: "Tuan Putri",
    daysTogether: "1 Year 6 Months",
    heartsSent: 0,
    theme: "sakura",
    customNotes: [],
    redeemedCoupons: [],
    currentFigmaDay: 1,
    figmaStreak: 1,
    lovePoints: 0,
    completedFigmaDays: [],
    subChecklistState: {},
    customFigmaQuests: []
  };

  let appState = JSON.parse(localStorage.getItem('mochiLoveState')) || DEFAULT_STATE;
  if (!appState.completedFigmaDays) appState.completedFigmaDays = [];
  if (!appState.subChecklistState) appState.subChecklistState = {};
    if (!appState.customFigmaQuests) appState.customFigmaQuests = [];
  if (appState.heartsSent === 1420 && appState.daysTogether === 365) {
    appState.heartsSent = 0;
    appState.daysTogether = "1 Year 6 Months";
    saveState();
  }
  if (!appState.customVouchers || appState.customVouchers.length === 0) {
    appState.customVouchers = [
      { id: 1, title: "Monchichi Besar", desc: "Tukarkan dengan satu boneka Monchichi ukuran besar impianmu!", icon: "🐵", tag: "Hadiah Spesial", cost: 1000 },
      { id: 2, title: "Hirono Besar", desc: "Satu buah figur Hirono besar khusus untuk kesayanganku.", icon: "🎁", tag: "Hadiah Spesial", cost: 1000 },
      { id: 3, title: "Special Dinner", desc: "Makan malam romantis berdua di tempat yang spesial.", icon: "🍽️", tag: "Kencan", cost: 1000 },
      { id: 4, title: "Pergi Ke Suatu Tempat Spesial", desc: "Ayo kita pergi liburan atau mengunjungi tempat rahasia yang spesial!", icon: "✈️", tag: "Liburan", cost: 3500 },
      { id: 5, title: "Dinner Date", desc: "Kencan makan malam santai berdua yang manis.", icon: "🍝", tag: "Kencan", cost: 500 },
      { id: 6, title: "Beli Baju Yang Kamu Mau Bebas", desc: "Pilih baju mana saja yang kamu suka, aku yang belikan!", icon: "👗", tag: "Belanja", cost: 1000 }
    ];
    saveState();
  }
  if (!appState.currentFigmaDay) appState.currentFigmaDay = 1;
  if (!appState.figmaStreak) appState.figmaStreak = 1;
  if (typeof appState.lovePoints === 'undefined') appState.lovePoints = appState.completedFigmaDays.length * 50;

  function isDayUnlocked(dayNum) {
    if (dayNum === 1) return true;
    return appState.completedFigmaDays.includes(dayNum - 1);
  }

  // Video IDs dari channel resmi Figma (selalu bisa di-embed & di-link)
  // clSHs94hNNc = Figma in 5: Auto Layout
  // BOt3MNB71gI = A Guide to Auto Layout
  // jQ1sfKIl50E = Office hours: Auto layout
  // ezldKx-jPag = Figma Tutorial: Components

  const figmaCurriculum = [
    {
      day: 1, level: "beginner", levelLabel: "Pemula 🐣",
      title: "Hari 1: Auto Layout & Tombol Responsif",
      time: "15 mnt",
      concepts: ["#AutoLayout", "#Constraints", "#Padding", "#CornerRadius"],
      objective: "Kuasai Figma Auto Layout untuk membuat tombol yang sepenuhnya responsif - menyesuaikan panjang teks secara otomatis sambil mempertahankan padding yang konsisten.",
      dim: "Menyesuaikan otomatis", radius: "999px (Penuh)", color: "HSL(345, 90%, 68%)",
      steps: [
        "1. Teks Dasar: Tekan shortcut 'T' pada keyboard, klik area kosong di kanvas, lalu ketik 'Kirim Cinta ❤️'. Di panel kanan (Text), ubah font ke Inter, ukuran 16px, dan ketebalan SemiBold.",
        "2. Konversi ke Auto Layout: Pastikan teks masih terpilih, lalu tekan pintasan Shift + A. Ini akan otomatis membungkus teks dalam sebuah Frame (bingkai) dengan sifat Auto Layout.",
        "3. Atur Jarak (Padding): Lihat panel kanan pada bagian 'Auto Layout'. Atur Horizontal padding (ikon panah kiri-kanan) menjadi 24px, dan Vertical padding (ikon panah atas-bawah) menjadi 12px.",
        "4. Mewarnai Tombol: Gulir ke bawah pada panel kanan ke bagian 'Fill', klik tanda '+'. Ubah kode warnanya menjadi HSL(345, 90%, 68%) atau ketik hex warna kesukaanmu.",
        "5. Membuat Sudut Membulat: Pindah ke bagian atas panel kanan (tepat di bawah X/Y dan W/H), cari kotak dengan ikon lengkungan (Corner Radius), dan ketik 999 untuk membuatnya bulat sempurna (Pill shape).",
        "6. Uji Responsivitas: Ketik teks tambahan pada tombol tersebut. Perhatikan bagaimana bingkai tombol otomatis memanjang mengikuti teks tanpa merusak proporsi padding!"
      ],
      tip: "Tekan Shift + A untuk langsung membungkus layer apa pun dalam Auto Layout. Ini pintasan paling kuat di Figma!",
      videoUrl: "https://www.youtube.com/embed/7TF2ZmtkZz0",
      externalLink: "https://www.youtube.com/watch?v=7TF2ZmtkZz0"
    },
    {
      day: 2, level: "beginner", levelLabel: "Pemula 🐣",
      title: "Hari 2: Glassmorphism Lanjutan & Kedalaman",
      time: "20 mnt",
      concepts: ["#Glassmorphism", "#BackgroundBlur", "#DropShadow", "#InnerShadow"],
      objective: "Buat kartu kaca tembus pandang yang canggih menggunakan beberapa lapisan bayangan dan keburaman latar belakang untuk sentuhan premium.",
      dim: "320px x 200px", radius: "24px", color: "RGBA(255,255,255,0.4)",
      steps: [
        "1. Gambar Kanvas Utama: Tekan 'R' (Rectangle) dan gambar kotak berukuran 320x200px. Pada panel kanan (Properties), atur Corner Radius menjadi 24px agar melengkung manis.",
        "2. Efek Transparansi Kaca: Buka bagian 'Fill', pilih warna Putih (#FFFFFF), dan ubah angka persentase Opacity (sebelah hex warna) menjadi 40%.",
        "3. Menambahkan Efek Buram (Blur): Cari bagian 'Effects' di panel kanan, klik tombol '+'. Ubah tipe efek dari 'Drop Shadow' menjadi 'Background Blur'. Klik ikon matahari di sebelahnya dan atur kekuatan blur ke angka 24.",
        "4. Menambahkan Cahaya Tepi (Inner Shadow): Klik '+' lagi pada 'Effects', pilih 'Inner Shadow'. Klik ikon matahari: ubah warnanya menjadi Putih murni, Opacity 20%, X: 0, Y: 1, dan Blur: 0. Ini memberi kesan pantulan cahaya di ujung atas kaca.",
        "5. Bayangan Melayang (Drop Shadow): Klik '+' sekali lagi, biarkan di 'Drop Shadow'. Atur warnanya Hitam (#000000), Opacity 10%, Y: 12, Blur: 32. Efek ini mengangkat kartu dari latar belakangnya.",
        "6. Tes Pandangan Tembus: Gambar bentuk abstrak (misalnya lingkaran berwarna cerah dengan 'O') dan letakkan tepat di belakang (layer lebih bawah) dari kartu kacamu. Kaca glassmorphism-mu sudah selesai!"
      ],
      tip: "Background Blur HANYA akan terlihat jika opasitas pada bagian 'Fill' (bukan opasitas layer utuh) berada di bawah 100%, DAN harus ada objek dengan warna tegas di belakangnya!",
      videoUrl: "https://www.youtube.com/embed/zzhSFobLkYw",
      externalLink: "https://www.youtube.com/watch?v=zzhSFobLkYw"
    },
    {
      day: 3, level: "beginner", levelLabel: "Pemula 🐣",
      title: "Hari 3: Skala Tipografi & Hierarki Visual",
      time: "20 mnt",
      concepts: ["#Typography", "#FontPairing", "#LineHeight", "#Hierarchy"],
      objective: "Bangun hierarki tipografi yang kuat dengan menggabungkan font serif tampilan dan sans-serif yang mudah dibaca.",
      dim: "Kolom lebar 340px", radius: "16px", color: "#2C2C2C & #757575",
      steps: [
        "1. Judul Utama (Heading 1): Tekan 'T', klik kanvas. Tulis judul menarik. Di panel Text, set font ke 'Playfair Display' (atau Serif elegan lain), ukuran 40px, gaya Bold. Atur Line-height (Tinggi baris) ke 110% dan Letter-spacing (Jarak huruf) ke -1% untuk kesan padat dan mewah.",
        "2. Sub-judul (Heading 2): Buat teks baru. Set font ke 'Inter' (Sans-serif), ukuran 18px, Medium. Ubah warna 'Fill' menjadi abu-abu medium (#757575), dan Line-height ke 130%.",
        "3. Teks Tubuh (Body Paragraph): Buat blok teks panjang (tekan dan seret 'T' untuk membentuk Text Box). Set font ke 'Inter', ukuran 15px, Regular. Atur Line-height ke 150% agar sangat nyaman dibaca.",
        "4. Pengelompokan Otomatis: Blok/Pilih ketiga layer teks tersebut di kanvas, lalu tekan Shift + A (Auto Layout). Ini mengubah mereka menjadi tumpukan (stack) vertikal rapi.",
        "5. Penyesuaian Jarak: Di panel Auto Layout kanan, atur jarak vertikal (gap) antara semua item menjadi 16px. Hierarki visualmu sekarang terlihat seimbang secara profesional!"
      ],
      tip: "Gunakan persentase (misal: 150%) untuk Line Height. Ini membuat spasi antar baris akan menyesuaikan sendiri secara proporsional walau kamu memperbesar atau memperkecil ukuran font!",
      videoUrl: "https://www.youtube.com/embed/qZ-305tA5F4",
      externalLink: "https://www.youtube.com/watch?v=qZ-305tA5F4"
    },
    {
      day: 4, level: "beginner", levelLabel: "Pemula 🐣",
      title: "Hari 4: Komponen Induk (Master Components)",
      time: "15 mnt",
      concepts: ["#Components", "#Reusability", "#DesignSystems"],
      objective: "Pelajari cara membuat Komponen Induk untuk aset yang dapat digunakan kembali, memastikan konsistensi.",
      dim: "Menyesuaikan otomatis", radius: "Variabel", color: "Bervariasi",
      steps: [
        "1. Buat Objek Dasar: Buat sebuah tombol cantik (lengkap dengan teks, ikon, Fill, Auto Layout, dan Radius) persis seperti yang kita buat di Hari 1.",
        "2. Ubah Menjadi Master Component: Pilih frame tombol tersebut, lalu lihat ke bar bagian atas-tengah di layar Figma. Klik ikon berbentuk Empat Wajik (Create Component), atau tekan shortcut sakti Ctrl+Alt+K (Win) / Cmd+Option+K (Mac).",
        "3. Verifikasi Induk: Perhatikan panel 'Layers' di sebelah kiri. Ikon untuk tombolmu kini berubah menjadi empak wajik berwarna ungu penuh. Ini berarti ia adalah 'Main Component' (Komponen Induk).",
        "4. Membuat Kloningan (Instances): Tahan tombol Alt (Win) / Option (Mac) di keyboardmu, lalu klik dan seret komponen induk tadi ke tempat lain. Kamu baru saja menciptakan anak komponen ('Instance') dengan ikon wajik berongga tunggal.",
        "5. Eksperimen Sinkronisasi: Ubah warna Fill atau ketebalan garis hanya pada 'Komponen Induk'. Saksikan keajaibannya: semua anak kloningannya di layar akan langsung berubah mengikuti induknya!"
      ],
      tip: "Komponen utama (induk) adalah sumber kebenaran (Source of Truth). Jika kamu mengedit warna atau padding induknya, semua turunan (instance) di seluruh halaman desainmu akan ikut berubah secara otomatis!",
      videoUrl: "https://www.youtube.com/embed/k74IheEW-lI",
      externalLink: "https://www.youtube.com/watch?v=k74IheEW-lI"
    },
    {
      day: 5, level: "beginner", levelLabel: "Pemula 🐣",
      title: "Hari 5: Varian & Status Tombol (Variants)",
      time: "20 mnt",
      concepts: ["#Variants", "#ComponentProperties", "#States"],
      objective: "Perluas arsitektur komponenmu dengan menambahkan varian untuk status hover, aktif, dan nonaktif.",
      dim: "Menyesuaikan otomatis", radius: "999px", color: "Tema Ganda",
      steps: [
        "1. Siapkan Induk: Pilih Komponen Induk tombol ungu (empat wajik) yang kamu buat di Hari 4.",
        "2. Tambah Varian: Lihat di menu Properties panel sebelah kanan. Klik tanda plus (+) di samping menu 'Properties' lalu pilih 'Variant'. Figma otomatis membuatkan kotak putus-putus ungu yang menampung tombolmu.",
        "3. Beri Nama Properti: Di panel Kanan (seksi Current Variant), ubah nama Property 1 menjadi 'State' (Kondisi), dan nilainya menjadi 'Default'.",
        "4. Gandakan Varian: Di dalam kotak putus-putus ungu itu, klik tombolmu, lalu klik ikon (+) kecil di pojok bawahnya untuk membuat salinan varian baru. Beri nilai 'Hover' pada properti State-nya.",
        "5. Kustomisasi Visual State Hover: Pada tombol berstatus Hover tersebut, ubah warna Fill-nya menjadi sedikit lebih gelap atau lebih terang. Coba juga tambahkan sedikit Drop Shadow. Sekarang kamu punya tombol responsif yang utuh!"
      ],
      tip: "Gunakan nama properti Boolean yang cerdas! Jika kamu menamai nilai varianmu dengan kata 'True' atau 'False' (misalnya properti 'Has Icon?'), Figma akan otomatis merubahnya menjadi tombol Switch (On/Off) di panel desain!",
      videoUrl: "https://www.youtube.com/embed/rIeP3oF6w-w",
      externalLink: "https://www.youtube.com/watch?v=rIeP3oF6w-w"
    }  ,
    {
      day: 6, level: "intermediate", levelLabel: "Menengah 🔥",
      title: "Hari 6: Masking Bentuk Lanjutan",
      time: "20 mnt",
      concepts: ["#Masking", "#BooleanGroups", "#ImageCropping"],
      objective: "Buat profil atau header rumit dengan memotong gambar di dalam perpotongan berbagai bentuk geometris kompleks.",
      dim: "Menyesuaikan", radius: "Kustom", color: "Bervariasi",
      steps: [
        "1. Buat Bentuk Masker: Gambar sebuah bentuk geometris (misal lingkaran dengan tekan 'O' atau poligon). Ini akan menjadi 'cetakan' untuk gambarmu.",
        "2. Letakkan Gambar: Tempelkan (Ctrl+V) foto atau gambar resolusi tinggi tepat di atas bentuk yang baru saja kamu buat (di panel Layers, pastikan layer foto ada di atas layer bentuk).",
        "3. Terapkan Masking: Pilih kedua layer tersebut di panel kiri. Lihat ke menu bar tengah atas, lalu klik ikon bulan sabit bersusun (Use as Mask), atau tekan Ctrl+Alt+M (Win) / Ctrl+Cmd+M (Mac).",
        "4. Edit Masker Kapan Saja: Jika kamu mengklik gambar di dalam grup masker, kamu bebas menggeser, memutar, atau membesarkan gambar tersebut (Scale) tanpa mengubah bentuk luar cetakan maskernya."
      ],
      tip: "Masking di Figma bekerja dari bawah ke atas. Layer paling BAWAH yang kamu pilih akan bertindak sebagai bentuk stensil untuk semua layer di atasnya!",
      videoUrl: "https://www.youtube.com/embed/n3H5aL7vNlE",
      externalLink: "https://www.youtube.com/watch?v=n3H5aL7vNlE"
    },
    {
      day: 7, level: "intermediate", levelLabel: "Menengah 🔥",
      title: "Hari 7: Prototyping Dasar (Klik & Hover)",
      time: "20 mnt",
      concepts: ["#Prototyping", "#Interactions", "#SmartAnimate"],
      objective: "Hubungkan dua frame dan perkenalkan animasi interaktif agar desainmu terasa seperti aplikasi nyata.",
      dim: "Frame iPhone 14", radius: "0px", color: "#FFFFFF",
      steps: [
        "1. Siapkan Dua Layar: Buat dua Frame ukuran HP yang berbeda. Letakkan tombol (seperti tombol Hari 1) di layar pertama.",
        "2. Masuk Mode Prototype: Pindah ke mode Prototype dengan mengklik tab 'Prototype' di bagian paling kanan atas layar Figma.",
        "3. Menarik Kabel Koneksi: Klik tombolmu di layar pertama. Kamu akan melihat bulatan biru (+). Tarik bulatan biru itu ke arah Frame layar kedua.",
        "4. Atur Detail Animasi: Setelah dilepas, menu Interaction Details akan muncul. Pada baris pertama pilih 'On click'. Pada bagian Animation, ubah 'Instant' menjadi 'Smart Animate'. Atur kurva menjadi 'Ease Out' 300ms.",
        "5. Mainkan Simulasi: Tekan tombol 'Play' (segitiga ▶️) di ujung kanan atas layar Figma (Present) untuk mencoba langsung desain aplikasi interaktifmu!"
      ],
      tip: "Kunci keberhasilan Smart Animate adalah NAMA LAYER. Pastikan nama layer dari elemen yang ingin kamu animasikan persis sama persis (huruf besar/kecilnya) di layar 1 dan layar 2!",
      videoUrl: "https://www.youtube.com/embed/RkM44oE1eYI",
      externalLink: "https://www.youtube.com/watch?v=RkM44oE1eYI"
    },
    {
      day: 8, level: "intermediate", levelLabel: "Menengah 🔥",
      title: "Hari 8: Komponen Navigasi Bawah Tab Bar",
      time: "25 mnt",
      concepts: ["#TabBar", "#AutoLayout", "#Constraints"],
      objective: "Desain bilah navigasi bawah ponsel standar industri menggunakan varian dan properti instance untuk menukar ikon.",
      dim: "390px x 80px", radius: "0px", color: "Tebal Cerah",
      steps: [
        "1. Susun Ikon & Label: Cari 4-5 set ikon. Ketikkan nama tab (Home, Search, dsb) di bawah setiap ikon. Ubah tiap set ikon+teks menjadi vertikal Auto Layout (Shift + A), beri nama 'Tab Item'.",
        "2. Susun Bilah Tab: Pilih semua 4 'Tab Item' yang sudah kamu buat. Tekan Shift+A lagi untuk membuat baris utuh. Atur jarak antar tab (Gap) secara otomatis (Horizontal gap = Auto).",
        "3. Ukuran & Constraint Fleksibel: Atur lebar grup bilah tab menjadi 390px (lebar layar umum ponsel). Pastikan properti Horizontal Resizing di-set ke 'Fill container' agar merenggang proporsional.",
        "4. Komponen Induk Navigasi: Ubah bilah tab ini menjadi Komponen Utama (Ctrl+Alt+K) agar kamu bisa meletakkannya di semua Frame layar aplikasi secara instan.",
        "5. Kunci ke Bawah: Tempatkan navigasi ke Frame layarmu (di bagian paling bawah). Di panel kanan, set Constraints-nya ke 'Left & Right' (Horizontal) dan 'Bottom' (Vertikal). Jika tinggi Frame diubah, tab bar akan selalu diam di bawah!"
      ],
      tip: "Untuk menjaga menu agar melayang saat di-scroll di simulasi prototype, ceklis kotak 'Fix position when scrolling' di menu Prototype panel kanan!",
      videoUrl: "https://www.youtube.com/embed/w7m_0F-fKzE",
      externalLink: "https://www.youtube.com/watch?v=w7m_0F-fKzE"
    },
    {
      day: 9, level: "intermediate", levelLabel: "Menengah 🔥",
      title: "Hari 9: Pengantar Variables (Design Tokens)",
      time: "20 mnt",
      concepts: ["#Variables", "#ColorTokens", "#DesignSystem"],
      objective: "Beralih dari pemilih warna statis ke Variabel Figma tingkat lanjut, meletakkan dasar untuk dukungan mode gelap nanti.",
      dim: "Panel Variabel", radius: "-", color: "Sistem Warna",
      steps: [
        "1. Buka Menu Variabel Lokal: Jangan pilih layer apa pun. Klik latar kanvas kosong. Di panel kanan (Design), klik ikon (Local Variables) yang terlihat seperti tabel.",
        "2. Buat Koleksi Warna Baru: Klik 'Create variable', lalu pilih 'Color'. Beri nama cerdas seperti 'Brand/Primary' dan isi kodenya dengan hex #FF6B81.",
        "3. Sistematisasi Skema Mode Terang: Buat variabel untuk warna lain: Surface (Putih), Text-Primary (Abu Gelap), Text-Secondary (Abu Muda), dan Border (Abu Samar).",
        "4. Terapkan Variabel ke Desain: Kembali ke bentuk kartu atau teksmu. Jangan asal klik hex warna! Klik ikon segi empat bertitik-titik (Style/Variable picker) di dekat kode warna, lalu pilih variabel 'Brand/Primary' yang tadi kamu buat.",
        "5. Kekuatan Global: Ubah nilai 'Brand/Primary' di menu Local Variables menjadi Biru. Semua elemen (teks, ikon, kotak) di seluruh proyek yang menggunakan variabel ini akan serentak berubah warna!"
      ],
      tip: "Pemisahan sangat penting. Alih-alih menamai variabel 'Red-500', namailah dengan fungsi tujuannya seperti 'Button-Background-Danger'. Ini membuat peralihan warna tema sangat mudah dipahami!",
      videoUrl: "https://www.youtube.com/embed/t0D4W2Q-Otc",
      externalLink: "https://www.youtube.com/watch?v=t0D4W2Q-Otc"
    },
    {
      day: 10, level: "intermediate", levelLabel: "Menengah 🔥",
      title: "Hari 10: Auto Layout Absolute Positioning",
      time: "20 mnt",
      concepts: ["#AbsolutePosition", "#Badges", "#Overlays"],
      objective: "Kuasai seni menempatkan elemen secara absolut (seperti lencana pemberitahuan merah) dengan sempurna di dalam bingkai Auto Layout yang ketat.",
      dim: "Ikon Notifikasi", radius: "100px", color: "#FF0000",
      steps: [
        "1. Persiapan Ikon Dasar: Buat ikon lonceng sederhana. Bungkus ikon tersebut dengan Auto Layout (Shift + A). Tambahkan warna isi atau padding jika perlu.",
        "2. Buat Lencana Notifikasi: Gambar lingkaran merah berukuran 12x12px dengan angka di tengahnya, jadikan satu frame Auto Layout berukuran kecil.",
        "3. Tempel Lencana ke Lonceng: Seret lencana merah tadi masuk ke dalam grup Auto Layout lonceng. Lencana awalnya akan tersusun kaku bersebelahan dengan lonceng (tidak tumpang tindih).",
        "4. Ubah ke Posisi Bebas (Absolute): Pilih lencana merah saja, lalu di panel Kanan bagian Auto Layout frame atas, klik ikon yang terlihat seperti kursor '+' (Absolute position) di sudut kanan.",
        "5. Sesuaikan Penempatan Tumpang Tindih: Sekarang lencana merah terbebas dari aturan susunan Auto Layout! Geser letaknya menggunakan Constraints (misal ke Pojok Kanan Atas) agar lencana pas melayang di ujung lonceng."
      ],
      tip: "Absolute Positioning di Auto Layout adalah trik sakti untuk meletakkan titik notifikasi, tombol 'X' keluar yang melayang, atau dekorasi tumpang-tindih tanpa merusak tatanan layout otomatis yang rapi!",
      videoUrl: "https://www.youtube.com/embed/bN5bJ-K-t9A",
      externalLink: "https://www.youtube.com/watch?v=bN5bJ-K-t9A"
    }  ,
    {
      day: 11, level: "intermediate", levelLabel: "Menengah 🔥",
      title: "Hari 11: Sistem Grid Layout Lanjutan",
      time: "20 mnt",
      concepts: ["#LayoutGrid", "#ResponsiveDesign", "#Columns"],
      objective: "Siapkan kerangka susunan kolom yang fleksibel dan profesional agar desain UI-mu selaras di berbagai ukuran layar ponsel atau web.",
      dim: "Grid Utama", radius: "-", color: "Merah Lembut",
      steps: [
        "1. Pilih Bingkai Utama: Klik pada Frame utama layarmu (contoh: frame 'iPhone 14'). Pastikan kamu memilih frame luar, bukan elemen di dalamnya.",
        "2. Aktifkan Layout Grid: Di panel Kanan (Design), temukan bagian 'Layout grid', lalu klik tanda tambah (+).",
        "3. Konfigurasi Mode Kolom: Secara default, grid berupa kotak-kotak piksel 8x8. Klik ikon menu grid 9-kotak di sebelah kiri tulisannya, lalu ubah opsi 'Grid' menjadi 'Columns'.",
        "4. Atur Parameter Kolom (Mobile): Untuk desain ponsel, isi angka Count = 4. Margin = 16px (memberi jarak bernapas di tepi kiri/kanan layar), dan Gutter = 16px (jarak antar kolom).",
        "5. Sesuaikan Elemen dengan Grid: Tarik kotak-kotak komponen desainmu. Saat mendekati pinggir kolom grid merah yang tembus pandang itu, bentukmu akan menempel secara otomatis (snap) ke garis tersebut. Desainmu kini selaras sempurna!"
      ],
      tip: "Shortcut penting: Tekan Shift + G untuk memunculkan atau menyembunyikan grid tata letak transparan merah di layarmu seketika saat sedang mendesain!",
      videoUrl: "https://www.youtube.com/embed/P6W_bE4xK_8",
      externalLink: "https://www.youtube.com/watch?v=P6W_bE4xK_8"
    },
    {
      day: 12, level: "intermediate", levelLabel: "Menengah 🔥",
      title: "Hari 12: Micro-Interactions Lottie & GIF",
      time: "15 mnt",
      concepts: ["#Lottie", "#GIFs", "#MicroInteractions"],
      objective: "Impor animasi Lottie atau GIF yang sudah jadi untuk menambahkan efek kilauan instan (seperti animasi detak jantung saat tombol ditekan).",
      dim: "Ikon Animasi", radius: "-", color: "-",
      steps: [
        "1. Cari File Animasi Lottie/GIF: Buka plugin 'LottieFiles' di Figma (Klik kanan area kosong -> Plugins -> LottieFiles) atau temukan GIF transparan.",
        "2. Buat Pengganti Tempat (Placeholder): Gambar frame persegi (tekan 'F') tepat di atas area tempat animasi harus muncul (contoh: di atas tombol 'Suka').",
        "3. Masukkan Media Animasi: Pada panel kanan, ubah mode 'Fill' kotak tadi dari bentuk kotak warna Solid menjadi pilihan drop-down 'Video' atau 'Image' (jika GIF). Unggah dan masukkan aset videomu.",
        "4. Mode Pemotongan: Pastikan pengaturan potong gambar (Fill Settings) diatur ke 'Fit' atau 'Fill' agar animasi tidak terpotong aneh dalam kotaknya.",
        "5. Uji Prototipe Interaktif: Masuk mode Prototype, hubungkan tombol ke overlay yang memunculkan GIF ini. Klik 'Play' (segitiga di atas kanan). Lihat animasimu bermain otomatis saat interaksi diklik!"
      ],
      tip: "GIF sangat bagus untuk efek animasi kecil yang terus berulang (seperti partikel atau loading), tetapi gunakan MP4 jika kamu butuh efek yang beresolusi tinggi di area layar yang besar demi performa yang mulus.",
      videoUrl: "https://www.youtube.com/embed/5-9_T1xQ15k",
      externalLink: "https://www.youtube.com/watch?v=5-9_T1xQ15k"
    },
    {
      day: 13, level: "advanced", levelLabel: "Pro 🏆",
      title: "Hari 13: Kustomisasi Shadow (Neumorphism)",
      time: "20 mnt",
      concepts: ["#Neumorphism", "#ShadowPlay", "#Depth"],
      objective: "Buat elemen lembut menonjol seperti efek 3D plastik cetakan dengan menggabungkan dua arah drop shadow (bayangan jatuh).",
      dim: "200px x 200px", radius: "50px", color: "Abu Terang (#E0E5EC)",
      steps: [
        "1. Buat Bentuk & Samakan Warna Dasar: Gambar kotak 200x200px, beri lengkungan 50px. Jadikan warna Fill bingkai latar layar (Background Frame) sama persis dengan warna bentuk kotaknya, misal abu terang (#E0E5EC).",
        "2. Bayangan Sudut Gelap (Kanan Bawah): Pada bentuk, klik (+) pada 'Effects' -> 'Drop Shadow'. Atur sumbu X: 8, Y: 8, Blur: 16. Pilih warna Hitam (#000000) dan setel Opacity ke angka kecil (sekitar 15%).",
        "3. Bayangan Cahaya (Kiri Atas): Klik (+) lagi pada 'Effects' untuk Drop Shadow ke-2. Atur arah bayangannya kebalikannya: X: -8, Y: -8, Blur: 16. Kali ini pilih warnanya menjadi Putih Murni (#FFFFFF) dan Opacity naikkan agak terang (70%).",
        "4. Keseimbangan (Tweaking): Bermainlah dengan nilai persentase Opacity dari kedua bayangan itu hingga mendapatkan tekstur seolah-olah tombol membulat itu dipahat dari dasar layar abu-abu."
      ],
      tip: "Trik desain neumorphism hanya bisa bekerja dengan baik jika bentuk dan layarnya tidak berwarna hitam murni atau putih murni, harus abu-abu, pastel pudar, atau warna dengan intensitas tengah!",
      videoUrl: "https://www.youtube.com/embed/j_8o20O-rB0",
      externalLink: "https://www.youtube.com/watch?v=j_8o20O-rB0"
    },
    {
      day: 14, level: "advanced", levelLabel: "Pro 🏆",
      title: "Hari 14: Scrolling Horisontal (Carousel)",
      time: "20 mnt",
      concepts: ["#Prototyping", "#OverflowScroll", "#Carousel"],
      objective: "Bangun korsel gulir interaktif ke samping (horizontal) untuk gambar atau kartu produk di dalam layar aplikasi ponsel.",
      dim: "Lebar Area Konten", radius: "0px", color: "Campuran",
      steps: [
        "1. Siapkan Deretan Kartu: Buat 3 atau 4 kartu desain (seperti resep makanan atau produk belanja).",
        "2. Kunci dalam Frame Mendatar (Row): Pilih semua kartu tersebut, tekan Shift + A. Di opsi Auto Layout kanan, pastikan panahnya menunjuk arah Horizontal (Kanan), bukan Vertikal (Bawah).",
        "3. Potong Lebar Frame: Klik grup frame baris kartu itu. Tarik pinggiran kanannya untuk memperpendek/memotong kotaknya sehingga hanya seukuran lebar layar ponsel (teks 'Clip content' di panel kanan harus diaktifkan agar kartu di luar batas menghilang).",
        "4. Jadikan Bisa Digulir: Pindah ke tab 'Prototype' (atas kanan). Di bagian 'Scroll behavior', temukan menu drop-down 'Overflow' dan ganti pengaturannya menjadi 'Horizontal'.",
        "5. Tes Sentuh: Klik 'Present' (tombol Segitiga Atas Kanan). Sekarang cobalah menarik kartumu dengan mouse/jari dari kiri ke kanan. Voila! Efek korsel halus berhasil dibuat."
      ],
      tip: "Jangan lupa untuk menyisakan bantalan/jarak (padding) sedikit di area 'Clip content', sehingga sisi kanan dari kartu berikutnya tetap terlihat sedikit sebagai petunjuk kepada pengguna bahwa area itu bisa digeser/di-swipe!",
      videoUrl: "https://www.youtube.com/embed/Fw95-v7WfF0",
      externalLink: "https://www.youtube.com/watch?v=Fw95-v7WfF0"
    },
    {
      day: 15, level: "advanced", levelLabel: "Pro 🏆",
      title: "Hari 15: Arsitektur UI Mode Gelap (Dark Mode)",
      time: "25 mnt",
      concepts: ["#DarkMode", "#VariableModes", "#Contrast"],
      objective: "Gunakan Mode Variabel (fitur lanjutan Figma) untuk menukar skema warna seluruh antarmukamu dari Terang ke Gelap hanya dengan satu sakelar klik.",
      dim: "Panel UI Penuh", radius: "-", color: "Abu Gelap (#121212)",
      steps: [
        "1. Buka Tabel Variabel (Local Variables): Buka kembali kotak Local Variables yang kamu buat di Hari 9.",
        "2. Tambahkan Dimensi Mode Baru: Di bagian atas kolom 'Value' warnamu, klik tanda tambah kecil '+' untuk menciptakan kolom tema nilai kedua. Beri nama kolom pertama 'Light Mode' dan kolom kedua 'Dark Mode'.",
        "3. Petakan Warna Silang: Jika di Light Mode variabel 'Surface' nilainya Putih, ganti nilainya di kolom Dark Mode menjadi Abu Sangat Gelap (#121212). Lakukan hal kebalikan untuk warna Teks (Hitam -> Putih).",
        "4. Bungkus Desain dalam Layer Frame: Tempatkan layar keseluruhan UI aplikasi di dalam Frame utama (F).",
        "5. Uji Sakelar Sihir: Pilih Frame layar utama tersebut. Di panel Layer sebelah kanan (Properties), klik ikon sakelar kecil berupa kotak tumpang tindih (Layer Variable Mode), lalu ubah pengaturannya dari 'Auto' menjadi 'Dark Mode'. Seluruh halaman desainmu akan terbalik warnanya sekejap mata secara konsisten!"
      ],
      tip: "Untuk meminimalisir mata lelah di ruang gelap, hindari penggunaan teks putih murni mentereng (#FFFFFF) atau layar belakang hitam murni (#000000). Gunakan varian abu-abu atau aksen redup!",
      videoUrl: "https://www.youtube.com/embed/w7m_0F-fKzE",
      externalLink: "https://www.youtube.com/watch?v=w7m_0F-fKzE"
    }  ,
    {
      day: 16, level: "advanced", levelLabel: "Pro 🏆",
      title: "Hari 16: Form Inputs & States Interaktif",
      time: "25 mnt",
      concepts: ["#Forms", "#Variants", "#InteractiveComponents"],
      objective: "Rancang komponen kotak teks isian (Text Input) berpresisi tinggi dengan varian gaya Kosong, Fokus, Berisi, dan Error.",
      dim: "Input Lebar Fleksibel", radius: "8px", color: "Garis Tipis",
      steps: [
        "1. Susun Kerangka Dasar: Tulis dua kata: Label (misal 'Email') di atas, dan 'Masukkan email' di bawah. Pilih yang bawah (placeholder), beri jarak luar (Auto Layout) dan beri garis batas abu-abu (Stroke, 1px) dengan sudut melengkung 8px.",
        "2. Buat Komponen Induk: Ubah tatanan isian kotak itu menjadi Komponen (Ctrl+Alt+K), lalu tambahkan Variants (tanda + di properti).",
        "3. State 1 (Default): Ubah warna tulisan di kotak jadi abu-abu. Garis luarnya tipis abu-abu.",
        "4. State 2 (Fokus/Mengetik): Buat Variant baru, ubah namanya jadi 'Focused'. Tebalkan garis pinggir kotak dan ubah warnanya jadi warna utama (Biru/Pink). Tambahkan baris vertikal kecil menyerupai kursor '|' berkedip.",
        "5. State 3 (Error): Buat Variant ketiga (Error). Ubah warna teks peringatan & tepi kotak menjadi merah terang. Saat kamu membuat form, cukup panggil komponen ini dan ubah properti statusnya dari kanan tanpa menggambar ulang!"
      ],
      tip: "Gunakan fitur 'Interactive Components' di prototype untuk langsung merubah status Default ke Focus ketika kotaknya diklik pengguna di layar presentasi!",
      videoUrl: "https://www.youtube.com/embed/n3H5aL7vNlE",
      externalLink: "https://www.youtube.com/watch?v=n3H5aL7vNlE"
    },
    {
      day: 17, level: "advanced", levelLabel: "Pro 🏆",
      title: "Hari 17: Animasi Transisi Halaman Cerdas",
      time: "20 mnt",
      concepts: ["#SmartAnimate", "#PageTransitions", "#MatchingLayers"],
      objective: "Animasi dari bentuk kartu produk kecil yang meluas mekar menjadi halaman detail berlayar penuh menggunakan Smart Animate.",
      dim: "Hero Gambar Ponsel", radius: "0px", color: "-",
      steps: [
        "1. Desain Frame Awal: Siapkan desain kartu berukuran persegi panjang (Katakanlah produk sepatu). Beri label nama layer pada gambar sepatunya: 'HeroImage'.",
        "2. Desain Frame Detail: Salin Frame awal ke Frame kedua (halaman detail). Di halaman kedua, seret dan perbesar ukuran kotak 'HeroImage' tersebut hingga memenuhi setengah bagian atas layar.",
        "3. Penghubung Animasi Cerdas: Masuk mode Prototype. Tarik kabel panah dari kartu sepatu di Frame pertama menuju ke badan Frame kedua.",
        "4. Mode Animasi: Di menu Interaksi, ubah opsi ke 'Smart Animate'. Ini penting: figma akan secara ajaib menyadari bahwa bentuk 'HeroImage' di layar pertama adalah bentuk yang persis sama dengan 'HeroImage' membesar di layar kedua, lalu melengkungkannya secara otomatis dan halus!"
      ],
      tip: "Penamaan nama frame dan gambar sangat kritis di sini! Jika ada huruf atau spasi yang berbeda di nama elemen antara layar awal & layar akhir, fitur Smart Animate akan gagap dan berubah menjadi lompatan gambar (Dissolve) standar.",
      videoUrl: "https://www.youtube.com/embed/RkM44oE1eYI",
      externalLink: "https://www.youtube.com/watch?v=RkM44oE1eYI"
    },
    {
      day: 18, level: "advanced", levelLabel: "Pro 🏆",
      title: "Hari 18: Dashboard dengan Grafik & Data",
      time: "30 mnt",
      concepts: ["#DataVisualization", "#Vectors", "#DashboardUI"],
      objective: "Desain kartu analitik dasbor menggunakan alat Pen Vector untuk membuat grafik garis (Line Chart) data statistik khusus yang halus.",
      dim: "Dasbor Aplikasi", radius: "24px", color: "Gradien Transparan",
      steps: [
        "1. Mulai Rangka Grafik: Tekan pintasan 'P' pada keyboard untuk mengaktifkan alat Vector Pen.",
        "2. Menggambar Titik Lengkung Garis: Klik di beberapa titik pada kanvas naik-turun dari kiri ke kanan. Tahan tombol klik sambil menarik garis keluar (Click & Drag) untuk mengubah sudut patahan yang kasar menjadi bukit lekukan yang meliuk mulus.",
        "3. Warna Garis: Tutup mode Vector dengan menekan 'Enter'. Di Panel kanan 'Stroke', atur tebal garisnya menjadi 3px dan warnai cerah menyala.",
        "4. Arsir Bawah Tanah Grafik: Duplikat garis meliukmu. Kali ini hapus Stroke-nya (Klik '-' pada seksi Stroke), dan gantikan dengan menambahkan Fill. Tutup jalur terbuka pada vektornya.",
        "5. Terapkan Transisi Warna Linear (Gradient): Pada kotak palet warna Fill, ubah mode cat Solid di atas menjadi Linear (Gradien). Jadikan arah cat lurus dari atas ke bawah. Beri opacity 50% di atas lalu turun drastis ke 0% (transparan murni) di bagian paling bawah untuk memberi kesan pendaran elegan."
      ],
      tip: "Ubah properti Vector dari sudut tajam (miter/bevel) menjadi lengkung sudut dalam dengan menekan tombol 'Bend Tool' atau menyesuaikan sudut (Corner Radius) secara massal di panel khusus vektor!",
      videoUrl: "https://www.youtube.com/embed/w7m_0F-fKzE",
      externalLink: "https://www.youtube.com/watch?v=w7m_0F-fKzE"
    },
    {
      day: 19, level: "advanced", levelLabel: "Pro 🏆",
      title: "Hari 19: Tooltip Cerdas Bersarang",
      time: "20 mnt",
      concepts: ["#InteractiveComponents", "#Tooltips", "#HoverState"],
      objective: "Gabungkan status interaksi sekunder di atas tombol (seperti jendela pop-up penjelas kecil ketika mouse ditahan sebentar).",
      dim: "Tooltip Minimal", radius: "4px", color: "Gelap Pekat",
      steps: [
        "1. Tulis Pesan Pop-Up: Ketik teks pendek (misalnya: 'Klik untuk mengunduh laporan'). Beri Auto Layout, tambahkan Fill abu tua dan teks putih, lengkungkan radius menjadi 4px. Ini akan jadi desain Tooltip-mu.",
        "2. Kombinasikan Komponen: Ambil komponen Ikon Info atau tombol. Gabungkan menjadi satu Varian Interaktif khusus. State pertama: hanya ada ikon info (Tooltip berstatus 'Hidden'/Sembunyi dengan opacity 0%).",
        "3. Tampilkan di State Kedua: Tambahkan Varian kedua. Di varian ini, munculkan bentuk kotak panjang Tooltip tadi sedikit berada di atas ikon dengan opacity 100%.",
        "4. Merajut Interaksi Otomatis (Hovering): Masuk panel Prototype. Hubungkan Varian 1 ke Varian 2. Pada opsi kondisi pelatuk trigger-nya ubah menjadi 'While Hovering' (Saat melayang) dan centang Smart Animate.",
        "5. Uji Coba Lintas Halaman: Letakkan komponen ini di sembarang halamamu. Masuk mode presentasi Play. Setiap kali kursormu menyentuh tombol ikon tersebut, kotak hitam tooltip akan merangkak muncul perlahan dengan sendirinya!"
      ],
      tip: "Selalu berikan jeda kecil (Delay) jika Tooltip-mu sangat penting namun berpotensi mengganggu saat tertutup oleh pergerakan mouse liar. Gunakan durasi 'Delay: 300ms' pada interaksi agar tooltip tidak kejang-kejang muncul-hilang seketika.",
      videoUrl: "https://www.youtube.com/embed/t0D4W2Q-Otc",
      externalLink: "https://www.youtube.com/watch?v=t0D4W2Q-Otc"
    },
    {
      day: 20, level: "expert", levelLabel: "Master 👑",
      title: "Hari 20: Auto Layout - Fitur Menggulung Teks Penuh",
      time: "25 mnt",
      concepts: ["#TextWrapping", "#FillContainer", "#Responsive"],
      objective: "Jinakkan penataan teks dalam Auto Layout untuk menyesuaikan baris saat kartu aplikasi memanjang atau diubah dimensinya di berbagai tampilan perangkat.",
      dim: "Kolom Artikel Panjang", radius: "-", color: "Transparan",
      steps: [
        "1. Bentuk Grid Bingkai Paragraf: Buat bingkai (F) vertikal berisi sebuah gambar di atas dan blok deskripsi teks artikel tebal panjang (T) tepat di bawahnya. Bungkus semuanya dengan mode Auto Layout (Shift+A).",
        "2. Amati Pelanggaran Layout: Coba perkecil paksa lebar bingkainya secara drastis dari sisi samping. Kamu akan melihat teks artikelnya tertabrak dan meluber keluar dari batas bingkai pembungkus secara mengerikan.",
        "3. Mengaktifkan 'Fill Container': Klik kotak lapisan elemen teksnya saja. Di bagian panel atas Auto Layout (Resizing / Pengubahan Dimensi) di sebelah kanan, ubah properti lebarnya dari ukuran statis angka absolut (atau 'Hug') menjadi mode fleksibel: 'Fill Container' (Penuhi Kontainer).",
        "4. Tes Tekanan Lebar: Tarik kembali lebar frame-nya maju atau mundur. Ajaib! Kini kotak lapisan teks akan menahan posisinya di batas bingkai sambil mendorong kata-katanya agar membengkok membuat baris baru di bawahnya.",
        "5. Mengunci Ketinggian (Hug): Pastikan properti vertikal bagian tingginya (Height) disetel pada 'Hug contents' agar kotak luarnya bisa mulur ikut memanjang jika teks tumpah ruah membentuk sepuluh baris panjang!"
      ],
      tip: "Kombinasi pamungkas untuk card artikel yang responsif sempurna adalah: Bingkai Induk [Lebar: Fixed/Fill] -> Kotak Teks di Dalamnya [Lebar: Fill Container, Tinggi: Hug Contents].",
      videoUrl: "https://www.youtube.com/embed/bN5bJ-K-t9A",
      externalLink: "https://www.youtube.com/watch?v=bN5bJ-K-t9A"
    }  ,
    {
      day: 21, level: "expert", levelLabel: "Master 👑",
      title: "Hari 21: Auto Layout Lanjutan Bersarang (Nesting)",
      time: "25 mnt",
      concepts: ["#NestedAutoLayout", "#ComplexGrids", "#Alignment"],
      objective: "Buat arsitektur kompleks tata letak kartu ganda dalam ganda tanpa membuat batasan dan tata letak hancur berantakan.",
      dim: "Menyesuaikan otomatis", radius: "-", color: "-",
      steps: [
        "1. Susun Tingkat Terendah: Buat blok terkecil dulu. Buat tatanan Avatar Profil bulat dan Teks Nama dalam barisan Auto Layout mendatar (Horizontal Row). Beri nama 'User Info'.",
        "2. Buat Tingkat Menengah: Tambahkan ikon Bookmark di sebelah kanannya. Pilih blok 'User Info' tadi dan ikon Bookmark tersebut, beri Shift+A. Ubah jaraknya (Gap) jadi sangat lebar, misal mode 'Auto', agar Avatar terdorong ke paling kiri dan Bookmark ke ujung kanan.",
        "3. Pasang Badan Konten Utama: Ketik teks deskripsi artikel besar di bawah susunan kepala profil tadi. Pilih teks itu dan juga kerangka menengah tadi. Beri Shift+A lagi menjadi blok Vertikal besar yang utuh.",
        "4. Tambahkan Tingkat Ekstra: Sisipkan foto lebar mendatar (Header Image) ke dalam frame vertikal raksasamu tadi dan letakkan tepat di posisi atas. Beri margin, padding pinggiran sebesar 24px agar bernapas.",
        "5. Cek Sistem Nesting: Di panel sebelah kiri, kamu harus melihat tumpukan frame berundak. Auto Layout menempel di dalam Auto Layout! Kini ubah lebar foto utamanya ke mode fleksibel ('Fill container') dan rasakan kekuatan kontrol absolut di tanganmu!"
      ],
      tip: "Bangunlah fondasi selalu dari elemen yang paling kecil dulu ke yang paling besar layaknya boneka Matryoshka Rusia. Hindari langsung melempar semua item lalu menekan Shift+A bersamaan karena akan menjadi bencana!",
      videoUrl: "https://www.youtube.com/embed/P6W_bE4xK_8",
      externalLink: "https://www.youtube.com/watch?v=P6W_bE4xK_8"
    },
    {
      day: 22, level: "expert", levelLabel: "Master 👑",
      title: "Hari 22: Desain Vektor Logo Khusus (Boolean)",
      time: "30 mnt",
      concepts: ["#BooleanOperations", "#Vectors", "#Union", "#Subtract"],
      objective: "Rancang logo datar berbentuk awan geometris kompleks dengan mengukir, memotong, dan menyatukan perpotongan vektor yang mulus tanpa garis batas.",
      dim: "200px x 200px", radius: "-", color: "Gradien Kuning",
      steps: [
        "1. Menumpuk Lingkaran Saling Silang: Gambar 4 lingkaran utuh bulat (tekan 'O' + seret). Susun berdekatan dan tumpang tindih hingga menyerupai formasi awan bergelombang.",
        "2. Dasar Datar: Gambar sebuah kotak persegi panjang, ratakan ujung batas bawahnya dengan bagian bawah kumpulan lingkaran-lingkaran tadi untuk merapikan dasar awan.",
        "3. Pilih Pasukan Geometri: Seleksi blok semua lingkaran dan kotak di layarmu secara bersamaan menggunakan klik tarik.",
        "4. Mode Satukan (Union): Perhatikan bar atas tengah layar Figma-mu. Cari menu dengan gambar dua bentuk yang terjalin tumpang tindih (Boolean Groups). Klik ikon panah ke bawahnya, pilih opsi menu pertama 'Union Selection'. Seluruh tumpukan itu kini melebur sempurna jadi satu bentuk padat tanpa sisa pinggiran potong!",
        "5. Eksperimen Pemotongan (Subtract): Buat bulan sabit terbalik. Taruh di tengah awan, pilih keduanya, lalu kali ini gunakan opsi 'Subtract Selection'. Kamu akan melihat bulan itu berlubang (memakan) ke dalam tubuh awanmu seperti gigitan cookie."
      ],
      tip: "Kekuatan tersembunyi Boolean adalah bentuknya tetap non-destruktif! Kamu masih bisa mengklik ganda kelompok 'Union' dan menggeser lingkaran awalmu di dalamnya dan efek fusi jaring akan tetap berjalan langsung secara dinamis!",
      videoUrl: "https://www.youtube.com/embed/5-9_T1xQ15k",
      externalLink: "https://www.youtube.com/watch?v=5-9_T1xQ15k"
    },
    {
      day: 23, level: "expert", levelLabel: "Master 👑",
      title: "Hari 23: Varian Banyak Properti (Multi-Dimensional)",
      time: "25 mnt",
      concepts: ["#ComplexVariants", "#MultiProperties", "#DesignSystem"],
      objective: "Kelola sistem desain raksasa yang mewadahi tombol yang sama persis namun bisa disulap secara instan menjadi Mode Terang/Gelap, Tipe Utama/Sekunder, dan Status Kecil/Besar.",
      dim: "Matriks Varian Lanjutan", radius: "-", color: "Tema Kompleks",
      steps: [
        "1. Buat Area Pembiakan Induk: Tarik komponen Tombol yang sudah ada properti 'State'-nya ke tengah kanvas lapang. Aktifkan penampung warna ungu varian.",
        "2. Menambah Dimensi Properti 2: Di panel Kanan (seksi Properties), klik tanda (+) dan pilih 'Variant'. Ubah namanya menjadi 'Type', nilainya 'Primary'.",
        "3. Tambah Dimensi ke-3: Klik lagi (+) dan pilih Variant, namai properti baru 'Size', nilai awal 'Large'.",
        "4. Bikin Variasi Kuadratik (Duplikasi Lebar): Salin seluruh varian tombol di dalam bingkai tersebut. Edit set baru tombol hasil salinan itu dengan mengubah ukurannya menjadi kecil, pinggiran tipis. Di panel kanan pada set baru ini, ubah nilai pop-up properti 'Size' menjadi 'Small'.",
        "5. Gunakan Kombinasi Dewa: Ambil (tarik dari menu tab panel Asset) komponen induk tombol barumu ke area kerja biasa di luar bingkai ungu. Cek properti di panel desain kananmu. Kamu kini bisa secara ajaib mengatur Status, Ukuran, dan Tipe tombol hanya lewat tiga klik dropdown menu pilihan tanpa menempel elemen yang berat secara manual lagi!"
      ],
      tip: "Sistem desain besar seperti Apple UI dan Material Design Google menggunakan Varian Multi-Dimensi ini secara radikal untuk menyimpan ratusan tipe kontrol kotak sakelar dalam satu lencana komponen saja!",
      videoUrl: "https://www.youtube.com/embed/j_8o20O-rB0",
      externalLink: "https://www.youtube.com/watch?v=j_8o20O-rB0"
    },
    {
      day: 24, level: "expert", levelLabel: "Master 👑",
      title: "Hari 24: Menu Menggulung Parallax Memukau",
      time: "30 mnt",
      concepts: ["#ScrollAnimation", "#Parallax", "#PrototypeTricks"],
      objective: "Rancang halaman hero interaktif dengan gaya efek Parallax visual di mana latar belakang meluncur lebih lambat daripada teks atau judul di atasnya saat digeser pengguna.",
      dim: "Layar Web Horizontal", radius: "0px", color: "-",
      steps: [
        "1. Setting Layar Panjang: Buat frame 'Desktop' (Layar Penuh). Sisipkan sebuah gambar tebing/pemandangan gunung lebar menutupi seluruh dimensi layar di dalamnya. Namai: 'Background Base'.",
        "2. Duplikat Layar Kedua: Kloning frame pertama itu ke frame baru. Pada frame yang kedua ini, geser posisi foto Background Base tadi ke arah kiri sebesar 50 pixel.",
        "3. Tambahkan Aset Lapis Utama (Foreground): Masukkan elemen teks judul 'Gunung Terjal' yang sangat besar di atas lapisan layar itu. Pada frame kedua, geser teks 'Gunung Terjal' ke kiri sejauh jarak ekstrem (sekitar 300 pixel) atau sampai nyaris tak terlihat keluar dari sisi frame.",
        "4. Menjalin Tali Penggulung: Pindah ke menu mode Prototype. Hubungkan Frame pertama ke Frame kedua. Atur trigger-nya ke kondisi tindakan 'On Drag' (Saat digeser manual) alih-alih klik. Atur animasinya ke 'Smart Animate', set Ease Out durasi cukup 600ms lambat agar terasa megah.",
        "5. Mainkan Bioskop Virtual: Masuk mode putar prototipe. Geser pelan layar dari kiri. Saksikan pesona kedalaman ilusi optik 3D karena perpindahan jarak pergeseran teks dan gambar di baliknya terjadi dalam kecepatan yang bervariasi asimetris (Parallax Illusion)!"
      ],
      tip: "Formula Parallax murni: Elemen objek jarak dekat (Foreground) harus bergerak berpindah tempat secara drastis dalam kanvas dibanding pergerakan elemen gambar layar belakang (Background).",
      videoUrl: "https://www.youtube.com/embed/Fw95-v7WfF0",
      externalLink: "https://www.youtube.com/watch?v=Fw95-v7WfF0"
    },
    {
      day: 25, level: "expert", levelLabel: "Master 👑",
      title: "Hari 25: Integrasi Komponen Video Prototype",
      time: "20 mnt",
      concepts: ["#VideoIntegration", "#Playbacks", "#Mockups"],
      objective: "Bawa prototipe aplikasi UI ke level dewa dengan menyematkan putaran loop klip video MP4 mini sesungguhnya beresolusi tinggi.",
      dim: "Frame Berjalan", radius: "12px", color: "-",
      steps: [
        "1. Unduh Video Aset: Ambil klip pergerakan pendek 3-4 detik atau render animasi gerakan mikro (.MP4).",
        "2. Masukkan ke Bingkai Foto (Shape): Di kanvas Figma, buat Frame biasa ukuran video profil (misal 400x300). Tarik dan lepaskan file MP4 tersebut secara ajaib dari luar menu (Desktop komputermu) langsung ke atas Frame tersebut di Figma.",
        "3. Ganti Mode Media Pengisi Layar (Fill): Di panel Kanan (Fill settings), pastikan modenya bertuliskan label ikon 'Video', dan kotak gambarnya berada pada posisi 'Fill' atau membentang penuh (bukan 'Fit' atau pas) untuk menghindari sisi bolong hitam.",
        "4. Konfigurasi Pemutaran Putaran Tak Terbatas: Pastikan di panel Kanan menu 'Video', ikon Loop berulang (gambar panah melingkar) dicentang terang. Hilangkan tanda centang di opsi 'Audio' agar suaranya tak berisik bertabrakan saat demo.",
        "5. Luncurkan Simulasi Hidup: Mainkan Prototype (Segitiga putar Present atas-kanan). Bumbui presentasi aplikasi fiktifmu dengan banner produk yang benar-benar bermain sinematik atau memantulkan sorotan iklan seolah-olah itu hidup! Figma bukan lagi sekadar pajangan gambar benda mati."
      ],
      tip: "Sematan format ekstensi video GIF tidak bisa memicu efek audio/video properties seperti auto-playback dan putaran loop (putaran selamanya) secara native dalam file mock-up Figma sefleksibel format penyematan standar .MP4 berkualitas bagus.",
      videoUrl: "https://www.youtube.com/embed/w7m_0F-fKzE",
      externalLink: "https://www.youtube.com/watch?v=w7m_0F-fKzE"
    }  ,
    {
      day: 26, level: "expert", levelLabel: "Master 👑",
      title: "Hari 26: Navigasi Menu Melayang (Sticky Header)",
      time: "25 mnt",
      concepts: ["#StickyScroll", "#FixedPositioning", "#Layouts"],
      objective: "Ciptakan ilusi menu bar (bilah navigasi atas) yang menempel lekat terus di bagian atas saat halaman web panjang ditarik ke arah bawah guliran panjang.",
      dim: "Baris Navigasi Atas", radius: "-", color: "Kaca Transparan Latar",
      steps: [
        "1. Susun Menu Bar Navigasi: Rancang kotak bilah menu atas untuk halaman Web lengkap dengan logo dan teks menu (Home, About). Tambahkan warna dengan opasitas 80% plus efek blur kaca.",
        "2. Buat Bingkai Desktop Tinggi: Siapkan satu frame Desktop yang sangat menjulang tinggi (di atas 2000 piksel) penuh dengan gambar dan paragraf konten yang sangat panjang menjuntai ke bawah.",
        "3. Letakkan Menu di Puncak: Tarik dan posisikan baris navigasi tadi tepat di atap (bagian atas) frame desktop super panjangmu.",
        "4. Kunci Paku Posisi Tetap: Pada panel kanan, temukan opsi pengaturan Constraints. Setel constraint ke kombinasi jitu: 'Left & Right' dan 'Top'. Kemudian di opsi bagian Prototype, centang kotak bertuliskan: 'Fix position when scrolling' atau 'Sticky' position.",
        "5. Validasi Efek Lem Menempel: Tekan mode Present/Play. Gunakan roda kursor mouse untuk menarik turun layar. Teks konten web akan bergulir ke arah atas layar dan tenggelam tertutupi di bawah baris menu navigasi atap kaca transparan tersebut."
      ],
      tip: "Elemen apa pun di Figma bisa dipaku (dipaksa menempel mati) ke posisi pinggiran layar saat digeser secara teknikal asalkan bingkai halaman luarnya memiliki fitur penggeser tumpahan (Overflow: Vertical/Horizontal) menyala!",
      videoUrl: "https://www.youtube.com/embed/n3H5aL7vNlE",
      externalLink: "https://www.youtube.com/watch?v=n3H5aL7vNlE"
    },
    {
      day: 27, level: "expert", levelLabel: "Master 👑",
      title: "Hari 27: Efek Hantu Melayang (Glow Hover State)",
      time: "15 mnt",
      concepts: ["#DropShadow", "#GlowEffects", "#InteractiveVariants"],
      objective: "Berikan nyawa magis pada tombol ikon atau desain kartu sehingga mereka bersinar terang secara holografis kala kursor sentuh tanpa menyala norak.",
      dim: "Satu Titik Bersinar", radius: "50%", color: "Cyan Terang Neon",
      steps: [
        "1. Objek Neon: Gambar ikon atau tombol gelap dengan garis neon menyala warna kontras cerah (misalnya biru cyan 100%). Konversi elemen tunggal itu menjadi master Komponen (Ctrl+Alt+K) plus variannya.",
        "2. Manipulasi State Kedua: Pilih Variant 2 (Hover). Di panel kanan (Effects), ketuk kotak (+). Terapkan efek jenis: 'Drop Shadow'.",
        "3. Teknik Pantulan Pendaran (Glow): Jangan atur shadow itu menjauh (set X=0, Y=0). Justru hancurkan pinggirannya dengan membuat nilainya buyar luas (Blur: 30) dan renggang (Spread: 10). Atur warna bayangannya agar persis setema (atau sedikit lebih muda) dengan cyan garis awal tadi. Naikkan opacity ke angka dominan tajam (60-80%).",
        "4. Rakit Interaksi Mouse-masuk: Ikat benang prototype tali biru dari Varian tombol normal redup menuju Varian 2 bercahaya pendar. Ubah metode pemicunya ke kondisi mouse melayang ('While Hovering').",
        "5. Bawa Tampil: Pasang anak tiruannya di atas panel layar pet gelap polos. Tes hasil interaksimu. Saat kursor singgah mendekat, ia akan meledakkan lingkaran partikel bersinar bak sihir pendar yang menakjubkan!"
      ],
      tip: "Buat pendaran lebih kaya (Glow 3D) dengan menggandakan 2 atau 3 efek drop-shadow berwarna beda dengan kombinasi blur bertahap: Shadow 1 (Blur 5), Shadow 2 (Blur 15), Shadow 3 (Blur 40). Hal ini sangat jamak di estetika Cyberpunk!",
      videoUrl: "https://www.youtube.com/embed/RkM44oE1eYI",
      externalLink: "https://www.youtube.com/watch?v=RkM44oE1eYI"
    },
    {
      day: 28, level: "expert", levelLabel: "Master 👑",
      title: "Hari 28: Widget Perpustakaan Tim Publik",
      time: "20 mnt",
      concepts: ["#TeamLibraries", "#Publishing", "#AssetPanels"],
      objective: "Kemasi seluruh perbekalan senjata aset tombol dan sistem palet warna warna dasar filemu menjadi sistem publik (Team Library) raksasa yang bebas diseret tanpa hancur lintas seluruh desain baru.",
      dim: "Sistem Terhubung", radius: "-", color: "Status Emas",
      steps: [
        "1. File Terorganisir: Pastikan semua aset dan master Komponen serta Variables warna tersimpan menumpuk di file Figma mandiri berjudul khusus 'Design System Core'.",
        "2. Memanggil Panel Aset: Lirik pinggir sebelah paling pojok kiri atas aplikasi Figma-mu, beralih klik nama label Tab menu dari 'Layers' menjadi panel baru 'Assets'.",
        "3. Menerbitkan Kerajaan Desain: Klik ikon buku terbuka hitam mungil berjejer (Team Library icon) di deretan paling atas menu 'Assets'. Jendela raksasa akan melesat muncul menanyakan detail aset perubahan yang baru dibuat.",
        "4. Menulis Catatan Sinkronisasi (Commit): Tuliskan komentar (misal: 'Pembuatan Komponen Varian Tombol Pertama'). Tekan tombol publikasikan (Publish) warna biru raksasa. Tunggu Figma menyelesaikan sinkronisasi data ke cloud langit server.",
        "5. Panen Manfaat dari Jauh: Buka layar lembar kerja kanvas halaman kosong total milik file projek yang berbeda. Kembali buka laci 'Assets' dan klik simbol buku. Centang aktifkan kotak file 'Design System Core'. Sekarang kamu bisa sesuka hati seret semua keping puzzle aset komponen tanpa takut hancur lagi!"
      ],
      tip: "Memisahkan (Decoupling) master file Design System berisi set master komponen dan file halaman untuk kanvas coretan kerja (Mockup project files) merupakan kewajiban bagi seluruh desainer arsitektur kelas Pro untuk kebersihan penyimpanan file!",
      videoUrl: "https://www.youtube.com/embed/w7m_0F-fKzE",
      externalLink: "https://www.youtube.com/watch?v=w7m_0F-fKzE"
    },
    {
      day: 29, level: "expert", levelLabel: "Master 👑",
      title: "Hari 29: Komponen Drag and Drop Lanjut",
      time: "25 mnt",
      concepts: ["#OnDrag", "#SliderInteractions", "#Constraints"],
      objective: "Rancang layar slider geser level tingkat harga yang bulat penggesernya merayap mengikuti sentuhan gerak kursor atau gerak usap jari simulasi HP secara instan menempel.",
      dim: "Jalur Batas Abu", radius: "50%", color: "-",
      steps: [
        "1. Menggambar Jalur Rel & Kereta Bola: Gambar garis lurus abu tebal rata membentang. Gambar bola bulat titik di paling ujung pangkal kiri garis jalur tersebut (sebagai alat penggesernya). Bungkus dengan wadah kerangka bingkai besar (Frame).",
        "2. Kloning Rel: Buat kembaran Frame itu. Di dalam salinan Frame baru itu, tarik titik penggeser bola tersebut hingga mentok pol menabrak ujung ujung dinding kanan dari jalur lurus tersebut.",
        "3. Sambung Pipa Interaksi: Masuk lab prototype. Arahkan konektor panah rel kereta dari lingkaran (bukan frame utuhnya) di versi titik sebelah kiri merayap menuju Frame kembarannya titik kanan yang penuh tadi.",
        "4. Modifikasi Tarikan Gerak Alam: Ubah pemicu metode klik di panel interaction-nya (Interaction Details) jadi menu pilihan pemicu 'On Drag'. Ubah tipe animasinya: 'Smart Animate'.",
        "5. Coba Tes Sentuhan: Uji Coba Mode Present. Arahkan jepitan mouse-mu menjepit mencubit bola bulatan awal tadi (klik kiri tahan), lalu dorong tarik perlahan membelah lintasan. Bola itu serasa meluncur magnetis lengket pas bersandar di pergerakan kursor mouse milikmu!"
      ],
      tip: "Kamu bisa merajut pemicu efek gerak tarikan ganda (On Drag) ke dalam lebih dari satu elemen varian arah gerak. Menggerakkan kartu vertikal buang-atas dan lempar horisontal-buang (Gaya geser aplikasi jodoh) dapat disatukan lewat logika On-Drag gabungan ini!",
      videoUrl: "https://www.youtube.com/embed/t0D4W2Q-Otc",
      externalLink: "https://www.youtube.com/watch?v=t0D4W2Q-Otc"
    },
    {
      day: 30, level: "expert", levelLabel: "Master 👑",
      title: "Hari 30: Penyerahan Desain Akhir (Handoff) Developer",
      time: "20 mnt",
      concepts: ["#DevMode", "#CSSExport", "#Handoff", "#Specs"],
      objective: "Inspeksi hasil keringat darah desain mutakhirmu dari sisi pandang murni sebagai seorang kuli bangunan aplikasi (Programmer Web/Mobile Dev Mode) guna membangun keajaiban logika realita sesungguhnya.",
      dim: "Layar Dev Mode", radius: "-", color: "Kode Merah Muda",
      steps: [
        "1. Ganti Topi Jabatan: Temukan panel tuas pengalih berbentuk simbol penulisan koding rahasia '</>' yang melayang angkuh di sekitar sudut atas kanan sebelah profil wajah pengguna (Toggle Dev Mode). Alihkan sakelarnya.",
        "2. Pengecekan Garis Inspeksi: Layar antarmuka mendadak berubah serba fungsional teknikal (biru kehijauan kaku). Kini, klik tombol atau lapisan lencana desain pendar neon cerdas milikmu.",
        "3. Panel Pengukuran Otomatis: Panel area kanan tidak lagi memperlihatkan properti edit cat kosmetik belaka, melainkan data koordinat CSS asli yang hidup: ukurannya, kode border-radius 24px-nya, hingga bayang-bayang CSS dan hex warnanya siap di-copy.",
        "4. Kloning Konstruksi: Arahkan matamu melayang menembus garis batas jarak antar tiap elemen tatanan yang kini mencuat tajam terang layaknya mistar penggaris mekanik yang muncul melayang-layang.",
        "5. Simpan Kekuatan Ini Selamanya: Kamu kini sah dan dinobatkan dengan piala lulusan master Akademi sihir desain Figma. Bekal dan ilmu sakti Handoff ini memastikan para pembuat koding Front-end Developer akan menyembah dan mencium hasil mahakarya tatanan simetris dan rapi ciptaan tanganmu seumur hidup!"
      ],
      tip: "Jika kamu memberikan nama varian dan nama mode warna palet dengan kaidah rapi ('Primary/Hover' atau 'Success-500'), seluruh tabel aturan Dev Mode CSS-mu ini akan tampil tersaji dengan wangi berstruktur bersih yang disukai dan dikagumi langsung dari meja programmer asli!",
      videoUrl: "https://www.youtube.com/embed/bN5bJ-K-t9A",
      externalLink: "https://www.youtube.com/watch?v=bN5bJ-K-t9A"
    }
  ];

  function getAllQuests() {
    return [...figmaCurriculum, ...appState.customFigmaQuests];
  }
  function getQuestByDay(dayNum) {
    return getAllQuests().find(q => q.day === dayNum) || getAllQuests()[0];
  }

  // DOM Elements
  const gfNameEl = document.getElementById('gfName');
  const daysTogetherEl = document.getElementById('daysTogether');
  const bodyEl = document.body;
  const tabFigmaStudio = document.getElementById('tabFigmaStudio');
  const tabLoveHub = document.getElementById('tabLoveHub');
  const figmaStudioView = document.getElementById('figmaStudioView');
  const loveHubView = document.getElementById('loveHubView');
  const courseProgressText = document.getElementById('courseProgressText');
  const figmaStreakNum = document.getElementById('figmaStreakNum');
  const completedCountNum = document.getElementById('completedCountNum');
  const lovePointsNum = document.getElementById('lovePointsNum');
  const courseBarFill = document.getElementById('courseBarFill');
  const prevDayBtn = document.getElementById('prevDayBtn');
  const nextDayBtn = document.getElementById('nextDayBtn');
  const currentDaySelectorLabel = document.getElementById('currentDaySelectorLabel');
  const questLevelBadge = document.getElementById('questLevelBadge');
  const questLockStatusBadge = document.getElementById('questLockStatusBadge');
  const questTitle = document.getElementById('questTitle');
  const questTime = document.getElementById('questTime');
  const conceptTagsRow = document.getElementById('conceptTagsRow');
  const questObjective = document.getElementById('questObjective');
  const specDimVal = document.getElementById('specDimVal');
  const specRadiusVal = document.getElementById('specRadiusVal');
  const specColorVal = document.getElementById('specColorVal');
  const checklistProgressText = document.getElementById('checklistProgressText');
  const checklistItemsContainer = document.getElementById('checklistItemsContainer');
  const questTipBox = document.getElementById('questTipBox');
  const ytThumbnailPlayer = document.getElementById('ytThumbnailPlayer');
  const ytThumbnailImg = document.getElementById('ytThumbnailImg');
  const externalVideoLink = document.getElementById('externalVideoLink');
  const lockNoticeMessage = document.getElementById('lockNoticeMessage');
  const lockedPrevDayNum = document.getElementById('lockedPrevDayNum');
  const completeQuestBtn = document.getElementById('completeQuestBtn');
  const uploadScreenshotContainer = document.getElementById('uploadScreenshotContainer');
  const screenshotUpload = document.getElementById('screenshotUpload');
  const screenshotPreview = document.getElementById('screenshotPreview');
  let hasUploadedScreenshot = false;
  
  function resetScreenshotUpload() {
    hasUploadedScreenshot = false;
    if(screenshotUpload) screenshotUpload.value = '';
    if(screenshotPreview) {
      screenshotPreview.src = '';
      screenshotPreview.style.display = 'none';
    }
  }

  if (screenshotUpload) {
    screenshotUpload.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (file) {
        hasUploadedScreenshot = true;
        screenshotPreview.src = URL.createObjectURL(file);
        screenshotPreview.style.display = 'block';
        renderFigmaWorkspace();
      }
    });
  }
  const nextRewardDayNum = document.getElementById('nextRewardDayNum');
  const curriculumModal = document.getElementById('curriculumModal');
  const curriculumBtn = document.getElementById('curriculumBtn');
  const closeCurriculumModalBtn = document.getElementById('closeCurriculumModalBtn');
  const curriculumGrid = document.getElementById('curriculumGrid');
  const filterTabs = document.querySelectorAll('.filter-tab');
  const envelope = document.getElementById('envelope');
  const openNoteBtn = document.getElementById('openNoteBtn');
  const newNoteBtn = document.getElementById('newNoteBtn');
  const noteTitle = document.getElementById('noteTitle');
  const noteBody = document.getElementById('noteBody');
  const noteSignoff = document.getElementById('noteSignoff');
  const sendHugBtn = document.getElementById('sendHugBtn');
  const moodChips = document.querySelectorAll('.mood-chip');
  const responseIcon = document.getElementById('responseIcon');
  const responseTitle = document.getElementById('responseTitle');
  const responseDesc = document.getElementById('responseDesc');
  const vouchersCarousel = document.getElementById('vouchersCarousel');
  const customizeBtn = document.getElementById('customizeBtn');
  const customizerDrawer = document.getElementById('customizerDrawer');
  const closeCustomizerBtn = document.getElementById('closeCustomizerBtn');
  const inputGfName = document.getElementById('inputGfName');
  const inputDays = document.getElementById('inputDays');
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const saveSettingsBtn = document.getElementById('saveSettingsBtn');
  const inputCustomQuestTitle = document.getElementById('inputCustomQuestTitle');
  const inputCustomVideoUrl = document.getElementById('inputCustomVideoUrl');
  const inputCustomQuestSteps = document.getElementById('inputCustomQuestSteps');
  const addCustomQuestBtn = document.getElementById('addCustomQuestBtn');
  const figmaSpecBtn = document.getElementById('figmaSpecBtn');
  const figmaModal = document.getElementById('figmaModal');
  const closeFigmaModalBtn = document.getElementById('closeFigmaModalBtn');
  const copyFigmaTokensBtn = document.getElementById('copyFigmaTokensBtn');
  const stickerCanvasArea = document.getElementById('stickerCanvasArea');
  const stickerAddBtns = document.querySelectorAll('.sticker-add-btn');
  const clearStickersBtn = document.getElementById('clearStickersBtn');

    function applyState() {
    gfNameEl.textContent = appState.gfName;
    daysTogetherEl.textContent = appState.daysTogether;
    figmaStreakNum.textContent = appState.figmaStreak;
    if (lovePointsNum) lovePointsNum.textContent = appState.lovePoints;
    
    // Sync counters
    const heartsSentEl = document.getElementById('heartsSent');
    if (heartsSentEl) heartsSentEl.textContent = appState.heartsSent;
    const couponsRemainingEl = document.getElementById('couponsRemaining');
    if (couponsRemainingEl && appState.customVouchers) couponsRemainingEl.textContent = appState.customVouchers.length - appState.redeemedCoupons.length;

    bodyEl.setAttribute('data-theme', appState.theme);
    inputGfName.value = appState.gfName;
    inputDays.value = appState.daysTogether;
    renderCourseProgress();
    renderFigmaWorkspace();
    renderVouchers();
  }

  function saveState() {
    localStorage.setItem('mochiLoveState', JSON.stringify(appState));
  }

  tabFigmaStudio.addEventListener('click', () => {
    tabFigmaStudio.classList.add('active');
    tabLoveHub.classList.remove('active');
    figmaStudioView.style.display = 'block';
    loveHubView.style.display = 'none';
  });

  tabLoveHub.addEventListener('click', () => {
    tabLoveHub.classList.add('active');
    tabFigmaStudio.classList.remove('active');
    loveHubView.style.display = 'block';
    figmaStudioView.style.display = 'none';
  });

  function renderCourseProgress() {
    const totalCount = getAllQuests().length;
    const completedCount = appState.completedFigmaDays.length;
    const percent = Math.min(100, Math.round((completedCount / totalCount) * 100));
    courseProgressText.textContent = `Hari ${appState.currentFigmaDay} dari ${totalCount}`;
    completedCountNum.textContent = `${completedCount} / ${totalCount}`;
    courseBarFill.style.width = `${Math.max(3.3, percent)}%`;
  }

  function renderFigmaWorkspace() {
    const dayNum = appState.currentFigmaDay;
    const quest = getQuestByDay(dayNum);
    if (!quest) return;
    const unlocked = isDayUnlocked(dayNum);
    const completed = appState.completedFigmaDays.includes(dayNum);

    currentDaySelectorLabel.textContent = `Hari ${quest.day}: ${unlocked ? (completed ? '✅ Selesai' : '⚡ Terbuka') : '🔒 Terkunci'}`;
    questLevelBadge.textContent = quest.levelLabel;
    questLevelBadge.className = `level-badge ${quest.level}`;

    if (completed) {
      questLockStatusBadge.textContent = "✅ Selesai";
      questLockStatusBadge.className = "status-pill-badge completed";
    } else if (unlocked) {
      questLockStatusBadge.textContent = "⚡ Sedang Berjalan";
      questLockStatusBadge.className = "status-pill-badge";
    } else {
      questLockStatusBadge.textContent = "🔒 Terkunci";
      questLockStatusBadge.className = "status-pill-badge locked";
    }

    questTitle.textContent = quest.title;
    questTime.innerHTML = `<i class="fa-regular fa-clock"></i> ${quest.time}`;
    questObjective.textContent = quest.objective;

    conceptTagsRow.innerHTML = '';
    (quest.concepts || []).forEach(c => {
      const tag = document.createElement('span');
      tag.className = 'concept-tag';
      tag.textContent = c;
      conceptTagsRow.appendChild(tag);
    });

    specDimVal.textContent = quest.dim || "Auto Layout";
    specRadiusVal.textContent = quest.radius || "16px";
    specColorVal.textContent = quest.color || "#FFB7C5";

    renderSubChecklist(quest);
    questTipBox.innerHTML = `<i class="fa-solid fa-lightbulb"></i> <strong>Tips Pro:</strong> ${quest.tip}`;

    // Update thumbnail player
    const videoId = quest.videoUrl.replace('https://www.youtube.com/embed/', '');
    if (ytThumbnailImg) {
      ytThumbnailImg.src = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
      ytThumbnailImg.onerror = function() {
        this.onerror = null;
        this.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
      };
    }
    if (ytThumbnailPlayer) {
      ytThumbnailPlayer.onclick = () => window.open(quest.externalLink, '_blank');
    }
    externalVideoLink.href = quest.externalLink;
    nextRewardDayNum.textContent = quest.day + 1;

        if (!unlocked) {
      lockNoticeMessage.style.display = 'block';
      lockedPrevDayNum.textContent = quest.day - 1;
      if (uploadScreenshotContainer) uploadScreenshotContainer.style.display = 'none';
      completeQuestBtn.disabled = true;
      completeQuestBtn.style.opacity = '0.5';
      completeQuestBtn.style.cursor = 'not-allowed';
      completeQuestBtn.innerHTML = '<i class="fa-solid fa-lock"></i> Terkunci (Selesaikan Hari ke-' + (quest.day - 1) + ' Dahulu)';
    } else {
      lockNoticeMessage.style.display = 'none';
      if (completed) {
        if (uploadScreenshotContainer) uploadScreenshotContainer.style.display = 'none';
        completeQuestBtn.disabled = false;
        completeQuestBtn.style.opacity = '1';
        completeQuestBtn.style.cursor = 'pointer';
        completeQuestBtn.innerHTML = '<i class="fa-solid fa-circle-check"></i> Tugas Sudah Diselesaikan! 🎉';
        completeQuestBtn.style.background = 'linear-gradient(135deg, #16a34a, #15803d)';
      } else {
        if (uploadScreenshotContainer) uploadScreenshotContainer.style.display = 'block';
        if (!hasUploadedScreenshot) {
          completeQuestBtn.disabled = true;
          completeQuestBtn.style.opacity = '0.5';
          completeQuestBtn.style.cursor = 'not-allowed';
          completeQuestBtn.innerHTML = '<i class="fa-solid fa-camera"></i> Menunggu Screenshot...';
          completeQuestBtn.style.background = 'linear-gradient(135deg, #9ca3af, #6b7280)';
        } else {
          completeQuestBtn.disabled = false;
          completeQuestBtn.style.opacity = '1';
          completeQuestBtn.style.cursor = 'pointer';
          completeQuestBtn.innerHTML = '<i class="fa-solid fa-circle-check"></i> Tandai Selesai & Buka Hari Berikutnya! 🎉';
          completeQuestBtn.style.background = 'linear-gradient(135deg, #22c55e, #15803d)';
        }
      }
    }
  }

  function renderSubChecklist(quest) {
    checklistItemsContainer.innerHTML = '';
    const checkedSteps = appState.subChecklistState[quest.day] || [];
    checklistProgressText.textContent = `${checkedSteps.length} / ${quest.steps.length} Langkah Selesai`;
    quest.steps.forEach((stepText, idx) => {
      const isChecked = checkedSteps.includes(idx);
      const row = document.createElement('div');
      row.className = `checklist-item-row ${isChecked ? 'checked' : ''}`;
      row.innerHTML = `
        <div class="checklist-checkbox">${isChecked ? '<i class="fa-solid fa-check" style="font-size:0.75rem;"></i>' : ''}</div>
        <div class="checklist-text">${stepText}</div>
      `;
      row.addEventListener('click', () => {
        if (!appState.subChecklistState[quest.day]) appState.subChecklistState[quest.day] = [];
        const arr = appState.subChecklistState[quest.day];
        if (arr.includes(idx)) {
          appState.subChecklistState[quest.day] = arr.filter(i => i !== idx);
        } else {
          arr.push(idx);
        }
        saveState();
        renderSubChecklist(quest);
      });
      checklistItemsContainer.appendChild(row);
    });
  }

  prevDayBtn.addEventListener('click', () => {
    if (appState.currentFigmaDay > 1) {
      appState.currentFigmaDay -= 1; resetScreenshotUpload();
      saveState();
      applyState();
    }
  });

  nextDayBtn.addEventListener('click', () => {
    const totalCount = getAllQuests().length;
    if (appState.currentFigmaDay < totalCount) {
      const targetDay = appState.currentFigmaDay + 1;
      if (isDayUnlocked(targetDay)) {
        appState.currentFigmaDay = targetDay; resetScreenshotUpload();
        saveState();
        applyState();
      } else {
        alert(`🔒 Hari ke-${targetDay} masih terkunci! Selesaikan Hari ke-${appState.currentFigmaDay} dahulu!`);
      }
    }
  });

  completeQuestBtn.addEventListener('click', () => {
    const currentDay = appState.currentFigmaDay;
    if (!isDayUnlocked(currentDay)) {
      alert(`🔒 Hari ke-${currentDay} masih terkunci!`);
      return;
    }
    if (!appState.completedFigmaDays.includes(currentDay)) {
      appState.completedFigmaDays.push(currentDay);
      appState.figmaStreak += 1;
      appState.lovePoints += 50;
      if (currentDay < getAllQuests().length) appState.currentFigmaDay = currentDay + 1; resetScreenshotUpload();
      saveState();
      applyState();
      triggerConfetti(0.5, 0.4);
      alert(`🎉 Selamat! Hari ke-${currentDay} Selesai! Kamu dapat 50 Poin Cinta! Hari ke-${currentDay + 1} sekarang TERBUKA! 🔥 Rekor Beruntun: ${appState.figmaStreak}`);
    } else {
      alert("✨ Kamu sudah menyelesaikan tugas ini! Bisa diulang atau berlatih kapan saja!");
    }
  });

  curriculumBtn.addEventListener('click', () => { renderCurriculumGrid("all"); curriculumModal.classList.add('active'); });
  closeCurriculumModalBtn.addEventListener('click', () => curriculumModal.classList.remove('active'));
  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      filterTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      renderCurriculumGrid(tab.dataset.filter);
    });
  });

  function renderCurriculumGrid(filterLevel = "all") {
    curriculumGrid.innerHTML = '';
    getAllQuests().filter(q => filterLevel === 'all' || q.level === filterLevel).forEach(q => {
      const isCompleted = appState.completedFigmaDays.includes(q.day);
      const isCurrent = appState.currentFigmaDay === q.day;
      const unlocked = isDayUnlocked(q.day);
      const card = document.createElement('div');
      card.className = `quest-roadmap-card ${isCompleted ? 'completed' : ''} ${!unlocked ? 'locked' : ''}`;
      card.innerHTML = `
        <div class="quest-card-header">
          <span class="day-number-badge">Hari ${q.day}</span>
          <span class="level-badge ${q.level}">${q.levelLabel}</span>
        </div>
        <h5>${q.title}</h5>
        <p>${q.objective}</p>
        <div class="quest-card-footer">
          <span style="font-size:0.78rem;font-weight:700;color:#64748b;">⏱️ ${q.time}</span>
          <button class="start-quest-btn" onclick="selectFigmaDay(${q.day})">
            ${isCompleted ? 'Ulangi 🔄' : (unlocked ? (isCurrent ? 'Saat Ini 👉' : 'Mulai 🚀') : 'Terkunci 🔒')}
          </button>
        </div>
      `;
      curriculumGrid.appendChild(card);
    });
  }

  window.selectFigmaDay = function(dayNum) {
    if (isDayUnlocked(dayNum)) {
      appState.currentFigmaDay = dayNum; resetScreenshotUpload();
      saveState(); applyState();
      curriculumModal.classList.remove('active');
      tabFigmaStudio.click();
    } else {
      alert(`🔒 Hari ke-${dayNum} terkunci! Selesaikan Hari ke-${dayNum - 1} dahulu!`);
    }
  };

  addCustomQuestBtn.addEventListener('click', () => {
    const title = inputCustomQuestTitle.value.trim();
    const videoUrlRaw = inputCustomVideoUrl.value.trim();
    const stepsText = inputCustomQuestSteps.value.trim();
    if (title) {
      let videoEmbed = "https://www.youtube.com/embed/clSHs94hNNc";
      let videoExternal = videoUrlRaw || "https://www.youtube.com/watch?v=clSHs94hNNc";
      if (videoUrlRaw.includes('youtube.com/watch?v=')) {
        const vid = videoUrlRaw.split('v=')[1].split('&')[0];
        videoEmbed = `https://www.youtube.com/embed/${vid}`;
      } else if (videoUrlRaw.includes('youtu.be/')) {
        const vid = videoUrlRaw.split('youtu.be/')[1].split('?')[0];
        videoEmbed = `https://www.youtube.com/embed/${vid}`;
      }
      const nextDayNum = getAllQuests().length + 1;
      const stepsArray = stepsText ? stepsText.split(',').map(s => s.trim()) : ["Ikuti instruksi kustom Figma dari pacarmu!"];
      appState.customFigmaQuests.push({
        day: nextDayNum, level: "pro", levelLabel: "Tugas Kustom 👑",
        title, time: "15 mnt", concepts: ["#CustomTask"],
        objective: "Tugas harian Figma khusus yang dibuat hanya untukmu!",
        dim: "Kustom", radius: "Kustom", color: "Kustom",
        steps: stepsArray, tip: "Latihan membuat sempurna!",
        videoUrl: videoEmbed, externalLink: videoExternal
      });
      appState.currentFigmaDay = nextDayNum;
      saveState(); applyState();
      inputCustomQuestTitle.value = '';
      inputCustomVideoUrl.value = '';
      inputCustomQuestSteps.value = '';
      alert(`✨ Tugas Kustom Hari ke-${nextDayNum} berhasil ditambahkan!`);
    }
  });

  // Background Hearts Canvas
  const canvas = document.getElementById('heartCanvas');
  const ctx = canvas.getContext('2d');
  function resizeCanvas() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();
  class HeartParticle {
    constructor() { this.reset(); }
    reset() {
      this.x = Math.random() * canvas.width;
      this.y = canvas.height + 20;
      this.size = Math.random() * 15 + 10;
      this.speedY = Math.random() * 1.5 + 0.8;
      this.speedX = Math.sin(Math.random() * Math.PI) * 0.8;
      this.opacity = Math.random() * 0.5 + 0.3;
    }
    update() { this.y -= this.speedY; this.x += this.speedX; if (this.y < -20) this.reset(); }
    draw() {
      ctx.save(); ctx.globalAlpha = this.opacity;
      ctx.font = `${this.size}px serif`; ctx.fillText('💖', this.x, this.y);
      ctx.restore();
    }
  }
  const hearts = Array.from({length: 20}, () => new HeartParticle());
  function animateHearts() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    hearts.forEach(h => { h.update(); h.draw(); });
    requestAnimationFrame(animateHearts);
  }
  animateHearts();

  // Love Notes
  const loveNotes = [
    { title: "Surat Cinta ❤️", body: "aku sayang banget kamu forever sayangku jangan lupa tetap pentingkan dirimu sendiri", signoff: "Dari Abang" },
    { title: "Surat Cinta ❤️", body: "ayo sayang semangat kamu pasti bisa terus majuu jangan lupa energinya diisi jangan capek capek love you", signoff: "Dari Abang" },
    { title: "Surat Cinta ❤️", body: "i love you my baby sampe kapanpun aku selalu disini sama kamu sayang walau kita sering berbeda pendapat tapi abang selalu love you", signoff: "Dari Abang" },
    { title: "Surat Cinta ❤️", body: "aku sayang banget sama kamu ayok semangat har ini sayang ku", signoff: "Dari Abang" },
    { title: "Surat Cinta ❤️", body: "jangan lupa mam nya duluy sebelum mengerjakan aku pasti akan selalu dukung kamu", signoff: "Dari Abang" },
    { title: "Surat Cinta ❤️", body: "cintaku lebihd ari langit ke 50000 ke kamu jadi selalu abang love bikooy", signoff: "Dari Abang" },
    { title: "Surat Cinta ❤️", body: "jangan capek capek ya sayang kamu akan selalu menjadi my sunshine everyday untul die", signoff: "Dari Abang" },
    { title: "Surat Cinta ❤️", body: "kalau udah nikah nanti abang mau ajak adik jalan jalan keliling dunia", signoff: "Dari Abang" },
    { title: "Surat Cinta ❤️", body: "adik pasti bisa !!!", signoff: "Dari Abang" },
    { title: "Surat Cinta ❤️", body: "aku cinta banget sama kamu dah gak tau kenapa", signoff: "Dari Abang" }
  ];

  openNoteBtn.addEventListener('click', () => {
    const todayStr = new Date().toDateString();
    if (!envelope.classList.contains('open')) {
      if (appState.lastNoteDate !== todayStr) {
        appState.lastNoteDate = todayStr;
        appState.lastNoteIndex = (appState.lastNoteIndex === undefined ? 0 : appState.lastNoteIndex + 1) % loveNotes.length;
        saveState();
      }
      const note = loveNotes[appState.lastNoteIndex !== undefined ? appState.lastNoteIndex : 0];
      noteTitle.textContent = note.title;
      noteBody.textContent = note.body;
      noteSignoff.textContent = note.signoff;
      
      envelope.classList.add('open');
      openNoteBtn.innerHTML = '<i class="fa-solid fa-envelope"></i> Tutup Surat';
      triggerConfetti(0.5, 0.4);
      setTimeout(() => alert("Semangat sayangku Bika"), 300);
    } else {
      envelope.classList.remove('open');
      openNoteBtn.innerHTML = '<i class="fa-solid fa-heart-open"></i> Buka Surat';
    }
  });

  // Mood Station
  const moodResponses = {
    happy: { icon: "🥳", title: "Hore! Kebahagiaanmu menular!", desc: "Melihatmu bahagia membuat hatiku ikut menari-nari! Ayo rayakan dengan camilan manis!" },
    tired: { icon: "🛋️", title: "Istirahatlah, si tukang tidur manisku...", desc: "Pergi selimuti dirimu! Kamu sudah melakukan yang terbaik hari ini. Mengirimkan pelukan lembut." },
    stressed: { icon: "🫂", title: "Pelukan Besar yang Hangat Datang!", desc: "Ambil napas dalam... 1, 2, 3... dan hembuskan. Semuanya akan berjalan baik. Aku di sini untukmu!" },
    excited: { icon: "🎉", title: "Woohoo! Ceritakan semuanya padaku!", desc: "Aku suka melihat matamu berbinar! Tidak sabar untuk menyemangatimu!" },
    missing: { icon: "🥺", title: "Aku juga kangen kamu!", desc: "Menghitung detik sampai aku bisa menggenggam tanganmu lagi. Ciuman virtual ke pipimu 💋!" },
    boba: { icon: "🧋", title: "Keadaan Darurat Boba Disetujui!", desc: "Voucher boba-mu telah diaktifkan! Teh susu taro atau boba gula aren dalam perjalanan!" }
  };

  sendHugBtn.addEventListener('click', () => {
    appState.heartsSent += 1; saveState();
    triggerConfetti(0.8, 0.3);
    sendHugBtn.innerHTML = '<i class="fa-solid fa-check"></i> Pelukan Terkirim! ❤️';
    setTimeout(() => { sendHugBtn.innerHTML = '<i class="fa-solid fa-heart"></i> Ketuk untuk Pelukan'; }, 2000);
  });

  moodChips.forEach(chip => {
    chip.addEventListener('click', () => {
      moodChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      const resp = moodResponses[chip.dataset.mood];
      responseIcon.textContent = resp.icon;
      responseTitle.textContent = resp.title;
      responseDesc.textContent = resp.desc;
    });
  });

  // Vouchers in state

  function renderVouchers() {
    vouchersCarousel.innerHTML = '';
    appState.customVouchers.forEach(v => {
      const isRedeemed = appState.redeemedCoupons.includes(v.id);
      const canAfford = appState.lovePoints >= v.cost;
      
      let btnText = isRedeemed ? 'Sudah Ditukar' : (!canAfford ? `Butuh ${v.cost} Poin 🔒` : `Tukar (${v.cost} Poin) 🎟️`);
      let btnDisabled = (isRedeemed || !canAfford) ? 'disabled' : '';

      const card = document.createElement('div');
      card.className = `voucher-card ${isRedeemed ? 'redeemed' : ''}`;
      card.innerHTML = `
        <div class="voucher-header"><span class="voucher-icon">${v.icon}</span><span class="voucher-tag">${v.tag}</span></div>
        <div class="voucher-body"><h4>${v.title}</h4><p>${v.desc}</p><p style="margin-top:8px;font-size:0.85rem;color:#ff6b81;font-weight:bold;">Biaya: ${v.cost} Poin Cinta</p></div>
        <button class="redeem-btn" ${btnDisabled} onclick="redeemCoupon(${v.id}, ${v.cost})">
          ${btnText}
        </button>
        ${isRedeemed ? '<div class="redeemed-stamp">SUDAH DITUKAR</div>' : ''}
      `;
      vouchersCarousel.appendChild(card);
    });
  }

  window.redeemCoupon = function(id, cost) {
    if (!appState.redeemedCoupons.includes(id)) {
      if (appState.lovePoints >= cost) {
        appState.lovePoints -= cost;
        appState.redeemedCoupons.push(id);
        saveState();
        applyState();
        renderVouchers();
        triggerConfetti(0.5, 0.5);
      } else {
        alert("🔒 Poin Cinta kamu belum cukup! Kumpulkan lebih banyak poin dengan menyelesaikan tugas Figma.");
      }
    }
  };

  // Draggable Sticker Canvas
  stickerAddBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const sticker = document.createElement('div');
      sticker.className = 'draggable-sticker';
      sticker.textContent = btn.dataset.sticker;
      const r = stickerCanvasArea.getBoundingClientRect();
      sticker.style.left = `${Math.random() * (r.width - 60) + 10}px`;
      sticker.style.top = `${Math.random() * (r.height - 60) + 10}px`;
      makeDraggable(sticker);
      stickerCanvasArea.appendChild(sticker);
    });
  });

  function makeDraggable(el) {
    let isDragging = false, offsetX = 0, offsetY = 0;
    el.addEventListener('mousedown', (e) => { isDragging = true; offsetX = e.clientX - el.offsetLeft; offsetY = e.clientY - el.offsetTop; el.style.zIndex = 100; });
    document.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      const r = stickerCanvasArea.getBoundingClientRect();
      el.style.left = `${Math.max(0, Math.min(e.clientX - offsetX, r.width - 50))}px`;
      el.style.top = `${Math.max(0, Math.min(e.clientY - offsetY, r.height - 50))}px`;
    });
    document.addEventListener('mouseup', () => { isDragging = false; });
  }
  clearStickersBtn.addEventListener('click', () => stickerCanvasArea.querySelectorAll('.draggable-sticker').forEach(s => s.remove()));

  // Customizer Drawer
  customizeBtn.addEventListener('click', () => {
    const user = prompt("Username Admin:");
    if (user === "nadzi") {
      const pass = prompt("Password Admin:");
      if (pass === "monkenoge123") {
        customizerDrawer.classList.add('active');
        if (typeof renderAdminVouchers === 'function') renderAdminVouchers();
      } else {
        alert("Password salah!");
      }
    } else {
      alert("Akses ditolak! Menu kustomisasi hanya untuk Admin.");
    }
  });
  closeCustomizerBtn.addEventListener('click', () => customizerDrawer.classList.remove('active'));
  const themesList = ['sakura', 'lavender', 'matcha', 'sunset'];
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      let currentIndex = themesList.indexOf(appState.theme);
      let nextIndex = (currentIndex + 1) % themesList.length;
      appState.theme = themesList[nextIndex];
      saveState();
      bodyEl.setAttribute('data-theme', appState.theme);
      triggerConfetti(0.5, 0.5);
    });
  }

  const resetProgressBtn = document.getElementById('resetProgressBtn');
  if (resetProgressBtn) {
    resetProgressBtn.addEventListener('click', () => {
      const confirmReset = confirm("⚠️ PERINGATAN: Apakah kamu yakin ingin mereset seluruh progres Figma, poin cinta, dan tugas yang sudah selesai? Tindakan ini tidak bisa dibatalkan.");
      if (confirmReset) {
        localStorage.removeItem('mochiLoveState');
        alert("Progres telah direset! Halaman akan dimuat ulang.");
        window.location.reload();
      }
    });
  }

  // --- Admin Mode Logic ---
  const adminLoginBtn = document.getElementById('adminLoginBtn');
  const adminPanel = document.getElementById('adminPanel');
  const adminVoucherList = document.getElementById('adminVoucherList');
  const adminAddVoucherBtn = document.getElementById('adminAddVoucherBtn');
  function renderAdminVouchers() {
    if (!adminVoucherList) return;
    adminVoucherList.innerHTML = '';
    appState.customVouchers.forEach((v, index) => {
      const item = document.createElement('div');
      item.style = "display:flex; justify-content:space-between; align-items:center; padding: 0.5rem; border-bottom: 1px solid #ccc;";
      item.innerHTML = `
        <div><strong>${v.icon} ${v.title}</strong> - ${v.cost} Poin</div>
        <button onclick="deleteAdminVoucher(${index})" style="background:red; color:white; border:none; padding:4px 8px; border-radius:4px; cursor:pointer;"><i class="fa-solid fa-trash"></i></button>
      `;
      adminVoucherList.appendChild(item);
    });
  }

  window.deleteAdminVoucher = function(index) {
    if(confirm("Hapus hadiah ini?")) {
      appState.customVouchers.splice(index, 1);
      saveState();
      renderAdminVouchers();
      renderVouchers();
    }
  };

  if (adminAddVoucherBtn) {
    adminAddVoucherBtn.addEventListener('click', () => {
      const title = document.getElementById('adminVoucherTitle').value.trim();
      const desc = document.getElementById('adminVoucherDesc').value.trim();
      const icon = document.getElementById('adminVoucherIcon').value.trim() || "🎁";
      const tag = document.getElementById('adminVoucherTag').value.trim() || "Spesial";
      const cost = parseInt(document.getElementById('adminVoucherCost').value) || 1000;

      if (!title) return alert("Judul tidak boleh kosong!");

      const newId = Date.now(); // unique ID
      appState.customVouchers.push({ id: newId, title, desc, icon, tag, cost });
      saveState();
      
      document.getElementById('adminVoucherTitle').value = '';
      document.getElementById('adminVoucherDesc').value = '';
      document.getElementById('adminVoucherIcon').value = '';
      document.getElementById('adminVoucherTag').value = '';
      document.getElementById('adminVoucherCost').value = '';
      
      renderAdminVouchers();
      renderVouchers();
      alert("Hadiah berhasil ditambahkan!");
    });
  }
  // ------------------------

  saveSettingsBtn.addEventListener('click', () => {
    appState.gfName = inputGfName.value.trim() || "Tuan Putri";
    appState.daysTogether = inputDays.value.trim() || "1 Year 6 Months";
    saveState(); applyState();
    customizerDrawer.classList.remove('active');
    triggerConfetti(0.5, 0.5);
  });

  // Figma Spec Modal
  figmaSpecBtn.addEventListener('click', () => figmaModal.classList.add('active'));
  closeFigmaModalBtn.addEventListener('click', () => figmaModal.classList.remove('active'));
  copyFigmaTokensBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(JSON.stringify({
      name: "Sistem Desain Bikoymaniuy",
      colorTokens: { primaryPink: "hsl(345,90%,68%)", softPurple: "hsl(270,85%,75%)" },
      typography: { heading: "Fredoka 700", body: "Nunito 700" },
      radii: { card: "24px", button: "999px" }
    }, null, 2)).then(() => {
      copyFigmaTokensBtn.innerHTML = '<i class="fa-solid fa-check"></i> Token Disalin!';
      setTimeout(() => { copyFigmaTokensBtn.innerHTML = '<i class="fa-solid fa-copy"></i> Salin Token JSON ke Clipboard'; }, 2500);
    });
  });

  function triggerConfetti(x = 0.5, y = 0.5) {
    if (typeof confetti === 'function') confetti({ particleCount: 60, spread: 70, origin: { x, y }, colors: ['#ffb7c5', '#d8b4fe', '#fde047', '#a7f3d0'] });
  }

  applyState();
});
