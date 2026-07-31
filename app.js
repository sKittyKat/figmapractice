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
      objective: "Kuasai Figma Auto Layout untuk membuat tombol yang sepenuhnya responsif — menyesuaikan panjang teks secara otomatis sambil mempertahankan padding yang konsisten.",
      dim: "Menyesuaikan otomatis", radius: "999px (Penuh)", color: "HSL(345, 90%, 68%)",
      steps: [
        "1. Tekan 'T' dan ketik 'Kirim Cinta ❤️' dengan font Inter (16px, SemiBold).",
        "2. Dengan teks terpilih, tekan Shift + A untuk menerapkan Auto Layout.",
        "3. Di panel Auto Layout, atur Padding Horizontal ke 24px dan Padding Vertikal ke 12px.",
        "4. Atur Fill ke HSL(345, 90%, 68%) dan Corner Radius ke 999px.",
        "5. Ubah teks menjadi kalimat yang lebih panjang — verifikasi tombol melebar otomatis!"
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
        "1. Gambar persegi panjang (320x200px), atur Corner Radius ke 24px.",
        "2. Atur Fill ke Putih (#FFFFFF) dan kurangi opasitas layer ke 40%.",
        "3. Tambahkan efek 'Background Blur' dan atur kekuatan blur ke 24px.",
        "4. Tambahkan Inner Shadow (Putih, 20% opasitas, Y: 1, Blur: 0) untuk sorotan tepi kaca.",
        "5. Tambahkan Drop Shadow (Hitam, 10% opasitas, Y: 12, Blur: 32) untuk elevasi realistis.",
        "6. Letakkan bentuk berwarna cerah di belakang kartu untuk melihat efek frosted glass."
      ],
      tip: "Background Blur hanya terlihat jika opasitas Fill kurang dari 100% DAN ada konten di bawah frame!",
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
        "1. Buat judul H1 dengan 'Playfair Display' 40px (Bold, line-height 110%, spasi -1%).",
        "2. Buat sub-judul H2 dengan 'Inter' 18px (Medium, #757575, line-height 130%).",
        "3. Buat paragraf bodi dengan 'Inter' 15px (Regular, line-height 150%).",
        "4. Pilih semua layer teks, tekan Shift + A untuk membuat kolom Auto Layout.",
        "5. Atur jarak antar item ke 16px, lalu sesuaikan jarak H1-H2 menjadi 8px."
      ],
      tip: "Gunakan line-height ketat (110-120%) untuk judul besar, dan longgar (140-160%) untuk paragraf bodi.",
      videoUrl: "https://www.youtube.com/embed/O3gwSmExW1Q",
      externalLink: "https://www.youtube.com/watch?v=O3gwSmExW1Q"
    },
    {
      day: 4, level: "beginner", levelLabel: "Pemula 🐣",
      title: "Hari 4: Jaringan Vektor & Ikon Hati Kustom",
      time: "25 mnt",
      concepts: ["#VectorIcons", "#BooleanUnion", "#PenTool", "#CustomShapes"],
      objective: "Gunakan operasi Boolean dan alat Pen untuk membuat ikon hati kustom yang sempurna piksel.",
      dim: "Ikon 64px x 64px", radius: "Vector Smooth", color: "Gradien #FF758C → #FF7EB3",
      steps: [
        "1. Aktifkan kisi layout (Shift + G) dan atur ke 1px untuk presisi tinggi.",
        "2. Gambar dua lingkaran sempurna (40x40px) yang tumpang tindih 50% secara horizontal.",
        "3. Gambar segitiga, balik vertikal, posisikan menghubungkan lengkung bawah lingkaran.",
        "4. Pilih ketiga bentuk, klik dropdown Boolean Groups, pilih 'Union Selection'.",
        "5. Klik dua kali untuk masuk Vector Network, pilih simpul bawah, tambahkan corner radius 2px.",
        "6. Terapkan isian gradien linier (Coral ke Magenta) pada sudut 45 derajat."
      ],
      tip: "Grup Boolean tidak merusak! Kamu bisa klik dua kali kapan saja untuk memindahkan bentuk aslinya.",
      videoUrl: "https://www.youtube.com/embed/AmDKFOXD_Jg",
      externalLink: "https://www.youtube.com/watch?v=AmDKFOXD_Jg"
    },
    {
      day: 5, level: "beginner", levelLabel: "Pemula 🐣",
      title: "Hari 5: Auto Layout Kompleks & Posisi Absolut",
      time: "25 mnt",
      concepts: ["#SpaceBetween", "#AbsolutePosition", "#ZIndex", "#Navbar"],
      objective: "Bangun header navigasi responsif dengan logo terpusat dan lencana pemberitahuan menggunakan pemosisian absolut.",
      dim: "Bar lebar 100%", radius: "0px", color: "#FFFFFF",
      steps: [
        "1. Buat frame Navbar (375x64px). Tambahkan Auto Layout, atur distribusi ke 'Space Between'.",
        "2. Letakkan ikon hamburger di kiri, avatar profil di kanan.",
        "3. Tambahkan teks logo di tengah, pilih, lalu klik 'Absolute Position' di kanan atas.",
        "4. Buat lingkaran merah 16x16px untuk lencana notifikasi. Seret ke dalam frame avatar, atur ke Absolute Position.",
        "5. Sematkan lencana ke kendala Top dan Right dari avatar."
      ],
      tip: "Absolute Position di dalam Auto Layout membuat elemen melayang bebas tanpa mengganggu tata letak flex.",
      videoUrl: "https://www.youtube.com/embed/jQ1sfKIl50E",
      externalLink: "https://www.youtube.com/watch?v=jQ1sfKIl50E"
    },
    {
      day: 6, level: "beginner", levelLabel: "Pemula 🐣",
      title: "Hari 6: Token & Gaya Desain Dasar",
      time: "20 mnt",
      concepts: ["#ColorStyles", "#DesignTokens", "#TypographyStyles", "#Efficiency"],
      objective: "Tetapkan fondasi yang terukur dengan mendefinisikan gaya Warna dan Tipografi yang dapat digunakan kembali di banyak komponen.",
      dim: "Gaya Global", radius: "T/A", color: "Palet Merek",
      steps: [
        "1. Buat 4 contoh warna: Utama (#FFB7C5), Sekunder (#D8B4FE), Latar (#F8F9FA), Teks (#1F2937).",
        "2. Pilih contoh Utama, klik ikon 4-titik di panel Fill, klik '+', beri nama 'Color/Primary'.",
        "3. Pilih layer teks, klik ikon 4-titik di panel Text, simpan sebagai 'Typography/Heading 1'.",
        "4. Buat 3 kartu UI berbeda dan terapkan gaya tersebut ke semuanya.",
        "5. Edit gaya 'Color/Primary' dari sidebar kanan dan lihat semua kartu berubah sekaligus!"
      ],
      tip: "Gunakan konvensi '/' (misal 'Color/Brand/Primary') untuk mengatur gaya ke dalam folder otomatis.",
      videoUrl: "https://www.youtube.com/embed/bI6q16ffdgQ",
      externalLink: "https://www.youtube.com/watch?v=bI6q16ffdgQ"
    },
    {
      day: 7, level: "beginner", levelLabel: "Pemula 🐣",
      title: "Hari 7: Komponen Induk & Instance",
      time: "25 mnt",
      concepts: ["#MasterComponent", "#Instances", "#Overrides", "#ResetAll"],
      objective: "Buat Komponen Induk yang kuat, buat beberapa instance, dan pelajari cara mengelola serta mereset override properti.",
      dim: "Kartu 300x400px", radius: "20px", color: "Ungu Komponen",
      steps: [
        "1. Bangun Kartu Profil: avatar, nama, bio, dan tombol 'Ikuti'.",
        "2. Pilih frame induk, tekan Ctrl+Alt+K untuk menjadikannya Komponen Induk (garis ungu).",
        "3. Tahan Alt lalu seret untuk membuat 3 Instance turunan.",
        "4. Di instance, ganti teks, ubah avatar, dan ubah warna tombol satu menjadi abu-abu.",
        "5. Pilih tombol abu-abu dan klik 'Reset all overrides' untuk mengembalikan ke gaya Induk.",
        "6. Ubah corner radius Komponen Induk — lihat semua instance ikut berubah strukturalnya!"
      ],
      tip: "Jangan gunakan Komponen Induk langsung di desain layar. Simpan di halaman 'Components' dan hanya gunakan Instance.",
      videoUrl: "https://www.youtube.com/embed/d88nvmnj5mU",
      externalLink: "https://www.youtube.com/watch?v=d88nvmnj5mU"
    },
    {
      day: 8, level: "beginner", levelLabel: "Pemula 🐣",
      title: "Hari 8: Prototyping: Dasar Smart Animate",
      time: "25 mnt",
      concepts: ["#SmartAnimate", "#LayerNaming", "#EasingCurves", "#Transitions"],
      objective: "Rancang transisi layar yang mulus menggunakan Smart Animate dan penamaan layer yang konsisten.",
      dim: "Transisi Layar", radius: "T/A", color: "Biru Interaksi",
      steps: [
        "1. Buat 'Layar A' dengan thumbnail kecil di kiri dan judul pendek.",
        "2. Gandakan 'Layar A' menjadi 'Layar B'.",
        "3. Di Layar B, perbesar thumbnail ke lebar penuh. KRITIS: Nama layer harus identik di kedua layar!",
        "4. Beralih ke tab Prototype (Shift + E). Tarik noodle dari thumbnail Layar A ke Layar B.",
        "5. Atur: Trigger = On Click, Action = Navigate To, Animation = Smart Animate.",
        "6. Atur Easing ke 'Ease Out' durasi 400ms. Tekan Shift + Space untuk preview!"
      ],
      tip: "Smart Animate bergantung pada nama layer yang sama persis. Jika berbeda, akan fade bukan morph.",
      videoUrl: "https://www.youtube.com/embed/RSqdlMgjYE4",
      externalLink: "https://www.youtube.com/watch?v=RSqdlMgjYE4"
    },
    {
      day: 9, level: "beginner", levelLabel: "Pemula 🐣",
      title: "Hari 9: Kliping, Masking, & Manipulasi Gambar",
      time: "20 mnt",
      concepts: ["#ClipContent", "#LayerMasks", "#ImageFills", "#Cropping"],
      objective: "Kuasai teknik pemotongan gambar non-destruktif menggunakan kliping Frame dan Vector Masks kustom.",
      dim: "Berbagai Bentuk", radius: "Kompleks", color: "Data Gambar",
      steps: [
        "1. Teknik 1 (Clip Content): Buat Frame 300x300px, letakkan gambar melebihi batas, centang 'Clip Content'.",
        "2. Teknik 2 (Masking): Gambar bentuk kustom dengan Pen, letakkan gambar di atas bentuk tersebut.",
        "3. Pilih bentuk, klik kanan, pilih 'Use as Mask' (Ctrl+Alt+M).",
        "4. Teknik 3 (Image Fill): Gambar lingkaran, ubah Fill ke 'Image', unggah foto, gunakan mode 'Crop'.",
        "5. Kombinasikan teknik ini untuk membuat kolase foto profil yang bertumpuk."
      ],
      tip: "Metode 'Image Fill' adalah pendekatan terbersih untuk avatar dan thumbnail geometris standar.",
      videoUrl: "https://www.youtube.com/embed/6lSvKk7lTl0",
      externalLink: "https://www.youtube.com/watch?v=6lSvKk7lTl0"
    },
    {
      day: 10, level: "beginner", levelLabel: "Pemula 🐣",
      title: "Hari 10: Blend Modes & Gradien Atmosferik",
      time: "25 mnt",
      concepts: ["#BlendModes", "#LinearGradient", "#RadialGradient", "#Multiply"],
      objective: "Buat latar belakang UI kaya dan atmosferik dengan menggabungkan gradien kompleks dan blend mode fotografis.",
      dim: "Layar Penuh", radius: "0px", color: "Multiply / Overlay",
      steps: [
        "1. Buat frame 1440x900px, atur isian dasar ke biru laut gelap (#0B0F19).",
        "2. Tambahkan Radial Gradient besar dari kanan atas (Cyan ke 0% opasitas), lalu dari kiri bawah (Magenta).",
        "3. Impor tekstur noise halus. Letakkan di atas gradien.",
        "4. Di panel Layer, ubah Blend Mode gambar dari 'Pass Through' ke 'Overlay' atau 'Multiply'.",
        "5. Atur opasitas tekstur ke 15% untuk efek premium bertekstur butiran.",
        "6. Letakkan tipografi putih di atas untuk memverifikasi kontras."
      ],
      tip: "'Multiply' menggelapkan, 'Screen' mencerahkan, dan 'Overlay' meningkatkan kontras.",
      videoUrl: "https://www.youtube.com/embed/1pW_sk-2y40",
      externalLink: "https://www.youtube.com/watch?v=1pW_sk-2y40"
    },
    {
      day: 11, level: "intermediate", levelLabel: "Menengah 🌿",
      title: "Hari 11: Komponen Interaktif & Status Hover",
      time: "30 mnt",
      concepts: ["#ComponentVariants", "#HoverState", "#PressedState", "#Microinteractions"],
      objective: "Bangun Komponen Tombol mandiri yang menangani status Hover dan Pressed sendiri tanpa banyak layar.",
      dim: "Set Varian", radius: "12px", color: "Interaktif",
      steps: [
        "1. Desain tombol utama. Ubah menjadi Komponen (Ctrl+Alt+K).",
        "2. Di panel Properti, klik '+' dan tambahkan properti 'Variant'. Klik '+' ungu di kanvas.",
        "3. Beri nama varian pertama 'State=Default' dan kedua 'State=Hover'. Gelapkan isian Hover.",
        "4. Tambahkan varian 'State=Pressed'. Skalakan ke bawah 5% dan gelapkan lebih lanjut.",
        "5. Di mode Prototype, hubungkan Default ke Hover: Trigger 'While Hovering', Smart Animate 200ms.",
        "6. Hubungkan Hover ke Pressed dengan Trigger 'While Pressing'. Preview hasilnya!"
      ],
      tip: "Komponen Interaktif mengurangi jumlah frame dalam prototype secara drastis — file lebih ringan dan cepat.",
      videoUrl: "https://www.youtube.com/embed/guYN5LaAcS8",
      externalLink: "https://www.youtube.com/watch?v=guYN5LaAcS8"
    },
    {
      day: 12, level: "intermediate", levelLabel: "Menengah 🌿",
      title: "Hari 12: Auto Layout Wrap & Grid Responsif",
      time: "25 mnt",
      concepts: ["#AutoLayoutWrap", "#MinMaxWidth", "#TagCloud", "#FluidDesign"],
      objective: "Bangun awan tag yang mengalir dan grid produk responsif yang otomatis membungkus ke baris baru.",
      dim: "Lebar Dinamis", radius: "Bervariasi", color: "Multi-chip",
      steps: [
        "1. Buat 8 komponen Tag berbeda menggunakan Auto Layout.",
        "2. Pilih semua tag, tekan Shift + A untuk membungkus dalam frame Auto Layout induk.",
        "3. Di panel Auto Layout, ubah arah ke 'Wrap' (ikon panah melengkung).",
        "4. Atur lebar frame ke 'Fixed' dan ubah ukurannya — tag membungkus ke baris baru secara otomatis.",
        "5. Terapkan Min Width dan Max Width untuk mencegah kontainer terlalu sempit atau lebar."
      ],
      tip: "Auto Layout Wrap adalah CSS Flexbox-nya Figma — esensial untuk desain web yang responsif.",
      videoUrl: "https://www.youtube.com/embed/c7uycdu7CsY",
      externalLink: "https://www.youtube.com/watch?v=c7uycdu7CsY"
    },
    {
      day: 13, level: "intermediate", levelLabel: "Menengah 🌿",
      title: "Hari 13: Properti Komponen Lanjutan (UI3)",
      time: "35 mnt",
      concepts: ["#BooleanProps", "#TextProps", "#InstanceSwap", "#SidebarControl"],
      objective: "Ekspos properti Boolean, Teks, dan Instance Swap sehingga komponen bisa dikustomisasi penuh dari sidebar kanan.",
      dim: "Mesin Komponen", radius: "16px", color: "Sistem Default",
      steps: [
        "1. Buat komponen 'List Item': ikon kiri, judul, subjudul, dan chevron kanan.",
        "2. Pilih ikon kiri. Di panel Layer, klik 'Create boolean property'. Beri nama 'Show Icon'.",
        "3. Pilih teks judul. Di panel Text, klik 'Create text property'. Beri nama 'Title Text'.",
        "4. Pilih chevron kanan. Di bagian Instance, klik 'Create instance swap property'. Beri nama 'Right Icon'.",
        "5. Letakkan instance di kanvas — kamu bisa kontrol segalanya dari sidebar tanpa klik ke dalam layer!"
      ],
      tip: "Properti komponen menghilangkan kebutuhan ratusan varian hanya untuk perubahan sederhana seperti sembunyikan ikon.",
      videoUrl: "https://www.youtube.com/embed/cRE1hUHauIc",
      externalLink: "https://www.youtube.com/watch?v=cRE1hUHauIc"
    },
    {
      day: 14, level: "intermediate", levelLabel: "Menengah 🌿",
      title: "Hari 14: Scroll & Elemen Tetap (Fixed)",
      time: "20 mnt",
      concepts: ["#ScrollOverflow", "#FixedPosition", "#StickyHeader", "#Prototyping"],
      objective: "Desain layar seluler realistis dengan konten yang bisa digulir dan header/tab bar yang tetap di posisi.",
      dim: "393x852 (iPhone 15)", radius: "40px", color: "Latar Belakang Aplikasi",
      steps: [
        "1. Buat frame iPhone 15. Letakkan Header di atas dan Tab Bar di bawah.",
        "2. Pilih Header, di mode Prototype ubah Position ke 'Fixed (stay in place)'. Ulangi untuk Tab Bar.",
        "3. Buat kolom Auto Layout konten panjang yang melampaui batas bawah frame.",
        "4. Pilih frame iPhone utama, atur 'Overflow behavior' ke 'Vertical'.",
        "5. Presentasikan prototype (Shift + Space) dan gulir — header tetap, konten mengalir!"
      ],
      tip: "Pastikan layer konten yang digulir berada di BAWAH header/footer tetap di panel layer kiri.",
      videoUrl: "https://www.youtube.com/embed/RRWVmxD9ftE",
      externalLink: "https://www.youtube.com/watch?v=RRWVmxD9ftE"
    },
    {
      day: 15, level: "intermediate", levelLabel: "Menengah 🌿",
      title: "Hari 15: Fisika Pegas Kustom dalam Prototype",
      time: "25 mnt",
      concepts: ["#SpringPhysics", "#BouncyUI", "#CustomEasing", "#MicroInteraction"],
      objective: "Ganti transisi linier dengan fisika pegas kustom untuk animasi yang organik dan terasa alami seperti aplikasi nyata.",
      dim: "Toggle Switch", radius: "999px", color: "#34C759",
      steps: [
        "1. Buat Toggle Switch gaya iOS dengan varian Off (abu-abu, kiri) dan On (hijau, kanan).",
        "2. Hubungkan di mode Prototype: On Click → Change To.",
        "3. Di Animation, pilih 'Smart Animate'. Ubah Easing ke 'Custom Spring'.",
        "4. Atur parameter: Mass = 1, Stiffness = 300, Damping = 15.",
        "5. Uji prototype — tombol harus melesat dan memantul organik sebelum berhenti.",
        "6. Turunkan Damping ke 8 untuk efek pantulan karet yang berlebihan."
      ],
      tip: "Animasi pegas terasa jauh lebih alami dari ease biasa. Apple iOS menggunakan fisika pegas hampir di mana-mana.",
      videoUrl: "https://www.youtube.com/embed/9sgs4nL0rFo",
      externalLink: "https://www.youtube.com/watch?v=9sgs4nL0rFo"
    },
    {
      day: 16, level: "intermediate", levelLabel: "Menengah 🌿",
      title: "Hari 16: Masking Lanjutan & Seni Blend Mode",
      time: "30 mnt",
      concepts: ["#MeshGradient", "#LayerBlur", "#OrganicGlow", "#Masking"],
      objective: "Kombinasikan masking tingkat lanjut, layer blur ekstrem, dan blend mode untuk membuat latar belakang mesh gradient dinamis.",
      dim: "Kanvas 1440x900", radius: "0px", color: "Warna Mesh",
      steps: [
        "1. Buat frame besar dengan latar belakang ungu pekat.",
        "2. Gambar 3 blob besar berbentuk amuba dalam warna Cyan, Magenta, dan Kuning.",
        "3. Terapkan 'Layer Blur' besar-besaran (200-300px) sampai menjadi awan warna lembut.",
        "4. Kelompokkan blob. Buat bentuk vektor tajam, letakkan di bawah grup.",
        "5. Pilih bentuk tajam, klik kanan, 'Use as Mask' — awan gradien terkandung dalam bentuk.",
        "6. Animasikan blob berputar di dalam mask menggunakan Smart Animate."
      ],
      tip: "Layer blur ekstrem berat di CPU. Jika Figma lambat, group lalu 'Rasterize Selection'.",
      videoUrl: "https://www.youtube.com/embed/JA50t6wTYZ0",
      externalLink: "https://www.youtube.com/watch?v=JA50t6wTYZ0"
    },
    {
      day: 17, level: "intermediate", levelLabel: "Menengah 🌿",
      title: "Hari 17: Auto Layout Bersarang untuk Dashboard",
      time: "35 mnt",
      concepts: ["#NestedAutoLayout", "#FillContainer", "#Flexbox", "#Dashboard"],
      objective: "Rancang tata letak dashboard kompleks dan responsif dengan menyarangkan banyak frame Auto Layout horizontal dan vertikal.",
      dim: "Aplikasi Desktop", radius: "8px", color: "Skala Netral",
      steps: [
        "1. Buat frame Desktop. Tambahkan Auto Layout (Horizontal). Ini kontainer induk.",
        "2. Tambahkan Sidebar (Lebar Tetap 240px, Fill Height). Tambahkan area Konten Utama (Fill Width, Fill Height).",
        "3. Di dalam Konten Utama, tambahkan Topbar (Fill Width, Tinggi Tetap 64px) dan Grid Dasbor (Fill Width, Fill Height).",
        "4. Di Grid Dasbor, gunakan Auto Layout 'Wrap' untuk menempatkan beberapa kartu data.",
        "5. Atur semua kartu data ke 'Fill Container' horizontal dengan Min Width 300px.",
        "6. Ubah ukuran frame Desktop — lihat seluruh arsitektur beradaptasi secara sempurna!"
      ],
      tip: "Aturan emas: Sarangkan Auto Layout, dan terapkan 'Fill Container' pada elemen bagian dalam secara konsisten.",
      videoUrl: "https://www.youtube.com/embed/WxSYc5afjDY",
      externalLink: "https://www.youtube.com/watch?v=WxSYc5afjDY"
    },
    {
      day: 18, level: "intermediate", levelLabel: "Menengah 🌿",
      title: "Hari 18: Korsel Horizontal (Carousel)",
      time: "25 mnt",
      concepts: ["#HorizontalScroll", "#Carousel", "#OverflowBehavior", "#Pagination"],
      objective: "Bangun korsel poster film yang bisa digeser dengan pengguliran horizontal dan titik halaman.",
      dim: "Layar Seluler", radius: "16px", color: "Mode Gelap",
      steps: [
        "1. Buat frame induk mewakili lebar seluler (393px).",
        "2. Di dalamnya, buat baris Auto Layout sangat lebar berisi 5 kartu poster film besar.",
        "3. Pastikan baris lebar melebihi frame induk.",
        "4. Pilih frame induk, buka Prototype, atur 'Overflow behavior' ke 'Horizontal'.",
        "5. Tambahkan 5 titik pagination. Hubungkan interaksi 'On Drag' ke koordinat X tertentu dengan aksi 'Scroll To'."
      ],
      tip: "Horizontal scrolling (Overflow behavior) sering lebih mulus daripada animasi drag kompleks untuk layar sentuh.",
      videoUrl: "https://www.youtube.com/embed/6nlO05bMuPY",
      externalLink: "https://www.youtube.com/watch?v=6nlO05bMuPY"
    },
    {
      day: 19, level: "intermediate", levelLabel: "Menengah 🌿",
      title: "Hari 19: Arsitektur Sistem Desain",
      time: "40 mnt",
      concepts: ["#DesignSystem", "#FileOrganization", "#AssetExport", "#Handoff"],
      objective: "Strukturkan file Figma Profesional menggunakan Halaman untuk Cover, Foundations, Components, dan Screens.",
      dim: "Struktur File", radius: "Organisasi", color: "Spesifikasi Sistem",
      steps: [
        "1. Buka panel Pages. Buat struktur: Cover, Foundations, Components, Screens, Archive.",
        "2. Pindahkan semua gaya warna/teks dan ikon ke halaman 'Foundations'.",
        "3. Pindahkan semua Komponen Induk ke halaman 'Components'. Kelompokkan dalam frame 'Inputs', 'Buttons', 'Cards'.",
        "4. Tambahkan anotasi teks menjelaskan panduan penggunaan di samping komponen kompleks.",
        "5. Di halaman 'Screens', gunakan HANYA instance yang menarik dari perpustakaan komponen."
      ],
      tip: "File yang terorganisir adalah perbedaan antara desainer junior dan senior. Jaga komponen indukmu!",
      videoUrl: "https://www.youtube.com/embed/PNJxeD29ZTg",
      externalLink: "https://www.youtube.com/watch?v=PNJxeD29ZTg"
    },
    {
      day: 20, level: "intermediate", levelLabel: "Menengah 🌿",
      title: "Hari 20: Prototype Peta Interaktif On-Drag",
      time: "35 mnt",
      concepts: ["#OnDragTrigger", "#MapInterface", "#PinchZoom", "#PrototypeState"],
      objective: "Simulasikan antarmuka peta pan-and-scan menggunakan trigger On-Drag dan Smart Animate multiarah.",
      dim: "Peta Layar Penuh", radius: "0px", color: "Kartografi",
      steps: [
        "1. Tempatkan gambar peta 2000x2000px di dalam frame ponsel (393x852px). Hapus centang 'Clip Content'.",
        "2. Buat Frame A (peta di New York). Gandakan ke Frame B dan geser peta ke Boston.",
        "3. Hubungkan Frame A ke B. Trigger: 'On Drag', Action: Smart Animate.",
        "4. Hubungkan Frame B kembali ke A dengan On Drag trigger.",
        "5. Centang kembali 'Clip Content'. Presentasikan dan seret layar untuk menggeser peta!"
      ],
      tip: "Trigger On Drag menghitung arah otomatis berdasarkan perbedaan koordinat layer antar frame.",
      videoUrl: "https://www.youtube.com/embed/bh98SF7OjUk",
      externalLink: "https://www.youtube.com/watch?v=bh98SF7OjUk"
    },
    {
      day: 21, level: "pro", levelLabel: "Pro 👑",
      title: "Hari 21: Variabel Lokal: Tema Multi-merek",
      time: "40 mnt",
      concepts: ["#FigmaVariables", "#DarkMode", "#ThemeModes", "#VariableCollections"],
      objective: "Implementasikan sistem token menggunakan Figma Local Variables untuk mengubah seluruh UI antara mode Terang dan Gelap secara instan.",
      dim: "Mesin Variabel", radius: "Variabel Global", color: "Mode Terang/Gelap",
      steps: [
        "1. Klik latar kanvas, lalu klik 'Local Variables' di sidebar kanan.",
        "2. Buat Koleksi 'Primitives' dengan nilai hex mentah (misal 'blue-500', 'gray-900').",
        "3. Buat Koleksi 'Semantic Tokens'. Buat variabel Warna bernama 'bg-primary'.",
        "4. Klik kanan nilai 'bg-primary', alias ke 'white'. Tambahkan Mode 'Dark' dan alias ke 'gray-900'.",
        "5. Terapkan variabel 'bg-primary' ke layar UI yang kompleks.",
        "6. Di panel Layer, klik ikon Variables dan alihkan Light ke Dark — seluruh UI berubah instan!"
      ],
      tip: "Jangan pernah hardcode hex di Semantic Tokens. Selalu alias ke Primitives untuk skalabilitas penuh.",
      videoUrl: "https://www.youtube.com/embed/BAIy0brM9r0",
      externalLink: "https://www.youtube.com/watch?v=BAIy0brM9r0"
    },
    {
      day: 22, level: "pro", levelLabel: "Pro 👑",
      title: "Hari 22: Prototype Lanjutan dengan Variabel Matematika",
      time: "45 mnt",
      concepts: ["#NumberVariables", "#Expressions", "#ConditionalLogic", "#ShoppingCart"],
      objective: "Buat keranjang belanja e-commerce fungsional menggunakan Variabel Angka, Ekspresi Matematika, dan interpolasi String.",
      dim: "Mesin Logika", radius: "16px", color: "Data Dinamis",
      steps: [
        "1. Buka Local Variables, buat 2 variabel Number: itemPrice = 49, cartCount = 0.",
        "2. Buat UI: tombol 'Add to Cart', teks kuantitas, dan teks Total Harga.",
        "3. Ikat teks kuantitas ke variabel cartCount.",
        "4. Pilih tombol 'Add to Cart'. Di Prototype, tambahkan On Click → Set Variable.",
        "5. Atur cartCount ke ekspresi: cartCount + 1.",
        "6. Tambahkan aksi Set Variable kedua: displayTotal = '$' + (itemPrice * cartCount).",
        "7. Ikat teks Total ke displayTotal dan uji keranjang yang bisa berhitung langsung!"
      ],
      tip: "Kamu bisa menumpuk banyak aksi Set Variable dalam satu klik untuk membuat logika kompleks tanpa coding.",
      videoUrl: "https://www.youtube.com/embed/XD2YR-LpufQ",
      externalLink: "https://www.youtube.com/watch?v=XD2YR-LpufQ"
    },
    {
      day: 23, level: "pro", levelLabel: "Pro 👑",
      title: "Hari 23: Komponen Bersarang & Eksposur",
      time: "35 mnt",
      concepts: ["#ExposedInstances", "#NestedComponents", "#PropertyOverrides", "#AtomicDesign"],
      objective: "Bangun organisme 'Data Table' menggunakan nesting komponen dalam dan 'Expose Nested Instances' untuk override yang efisien.",
      dim: "Organisme Kompleks", radius: "0px", color: "Batas Sistem",
      steps: [
        "1. Buat komponen Atom: Teks Sel, Ikon Sel, Kotak Centang.",
        "2. Buat komponen Molekul: Header Row dan Data Row. Sarangkan Atom ke dalamnya.",
        "3. Buat organisme Data Table: berisi Header Row dan 5 Data Rows.",
        "4. Pilih Komponen Induk Data Table. Klik ikon roda gigi di 'Nested Instances'.",
        "5. Centang untuk mengekspos properti Checkbox dan Icon atom.",
        "6. Letakkan instance — kontrol checkbox dan ikon langsung dari properties panel tingkat atas!"
      ],
      tip: "Mengekspos nested instances mencegah pengguna menggali 5 lapis layer hanya untuk mengganti satu ikon.",
      videoUrl: "https://www.youtube.com/embed/rxwoox1dmo0",
      externalLink: "https://www.youtube.com/watch?v=rxwoox1dmo0"
    },
    {
      day: 24, level: "pro", levelLabel: "Pro 👑",
      title: "Hari 24: Prototype Responsif dengan Auto Layout",
      time: "30 mnt",
      concepts: ["#ResponsivePrototype", "#Breakpoints", "#MinMaxWidth", "#FluidTesting"],
      objective: "Bangun satu layar yang bertransisi mulus antara tata letak seluler, tablet, dan desktop saat diubah ukuran.",
      dim: "Viewport Dinamis", radius: "Responsif", color: "Grid Breakpoint",
      steps: [
        "1. Buat frame 1440px. Atur ke Auto Layout (Vertikal, Fill Container).",
        "2. Bangun Navigasi menggunakan 'Space Between'. Kelompokkan tautan dalam Auto Layout dan atur ke 'Wrap'.",
        "3. Bangun Hero dengan kolom Teks Kiri dan Gambar Kanan. Atur induknya ke 'Wrap'.",
        "4. Atur Min Width kolom Teks ke 300px, dan kolom Gambar ke 300px.",
        "5. Atur Max Width kontainer ke 1200px dan pusatkan.",
        "6. Seret tepi frame ke dalam — kolom bertumpuk otomatis seperti CSS media queries!"
      ],
      tip: "Min/Max width dan Auto Layout Wrap akhirnya memungkinkan pengujian responsif sejati langsung di kanvas Figma.",
      videoUrl: "https://www.youtube.com/embed/1j2PpsVMt0Y",
      externalLink: "https://www.youtube.com/watch?v=1j2PpsVMt0Y"
    },
    {
      day: 25, level: "pro", levelLabel: "Pro 👑",
      title: "Hari 25: Pemiringan 3D & Maket Perangkat Isometrik",
      time: "40 mnt",
      concepts: ["#Isometric", "#3DRotation", "#MockupGenerator", "#Presentation"],
      objective: "Ubah layar UI datar menjadi maket perangkat isometrik 3D yang memukau dan siap dipresentasikan.",
      dim: "Kanvas Presentasi", radius: "Bezel Perangkat", color: "Pencahayaan Studio",
      steps: [
        "1. Desain layar aplikasi seluler yang menawan (393x852).",
        "2. Instal plugin komunitas 'Vectary 3D' atau 'Rotary'. (Alternatif: Rotasi -45deg, Skew +15deg).",
        "3. Petakan frame UI ke model clay iPhone 3D yang disediakan plugin.",
        "4. Sesuaikan pencahayaan, sudut bayangan, dan warna perangkat.",
        "5. Ekspor sebagai PNG resolusi tinggi dan letakkan di presentasi gaya Dribbble.",
        "6. Tambahkan latar mesh gradient warna-warni dan bola kaca geometris mengambang."
      ],
      tip: "Plugin lebih akurat dari pemiringan manual — pemiringan manual merusak teks dan bingkai.",
      videoUrl: "https://www.youtube.com/embed/fIeE3ICmrLc",
      externalLink: "https://www.youtube.com/watch?v=fIeE3ICmrLc"
    },
    {
      day: 26, level: "pro", levelLabel: "Pro 👑",
      title: "Hari 26: Micro-animation dengan GIF & Video Fill",
      time: "25 mnt",
      concepts: ["#GIFFills", "#VideoIntegration", "#AnimatedPrototype", "#MicroMotion"],
      objective: "Sematkan grafik gerak (GIF dan MP4) langsung ke komponen untuk mensimulasikan status aplikasi yang kaya.",
      dim: "Wadah Media", radius: "24px", color: "Video Pixels",
      steps: [
        "1. Buat komponen dialog modal 'Status Berhasil'.",
        "2. Gambar frame persegi di atas teks sebagai pengganti ikon centang statis.",
        "3. Ubah mode Fill ke 'Video' (atau Image → GIF). Unggah animasi Lottie sebagai GIF atau MP4.",
        "4. Atur mode pemotongan Fill ke 'Fill' atau 'Fit' sesuai rasio aspek.",
        "5. Hubungkan tombol dari layar sebelumnya menggunakan aksi 'Open Overlay'.",
        "6. Jalankan prototype — video/GIF langsung auto-play saat overlay muncul!"
      ],
      tip: "GIF bagus untuk mikro-interaksi kecil, tapi MP4 jauh lebih berperforma untuk area yang luas.",
      videoUrl: "https://www.youtube.com/embed/CZ440x65k-g",
      externalLink: "https://www.youtube.com/watch?v=CZ440x65k-g"
    },
    {
      day: 27, level: "pro", levelLabel: "Pro 👑",
      title: "Hari 27: Logika Boolean & Prototype Bersyarat",
      time: "40 mnt",
      concepts: ["#ConditionalLogic", "#IfElse", "#FormValidation", "#Variables"],
      objective: "Program urutan validasi kata sandi fungsional menggunakan Variabel Boolean dan blok logika If/Else.",
      dim: "Gerbang Logika", radius: "8px", color: "Merah Error / Hijau Sukses",
      steps: [
        "1. Buat variabel Boolean 'isPasswordValid' = false.",
        "2. Desain layar Login dengan tombol 'Submit', layar 'Dasbor Sukses', dan overlay 'Modal Kesalahan'.",
        "3. Pilih tombol Submit, tambahkan On Click → Conditional.",
        "4. Atur kondisi IF: isPasswordValid == true.",
        "5. Di blok IF, tambahkan: Navigate to → Success Dashboard.",
        "6. Di blok ELSE, tambahkan: Open Overlay → Error Modal.",
        "7. Buat toggle yang mengatur isPasswordValid ke true untuk menguji kedua jalur!"
      ],
      tip: "Conditional mengubah Figma dari flipbook statis menjadi mesin logika — ideal untuk usability test realistis.",
      videoUrl: "https://www.youtube.com/embed/klru0jBXZvE",
      externalLink: "https://www.youtube.com/watch?v=klru0jBXZvE"
    },
    {
      day: 28, level: "pro", levelLabel: "Pro 👑",
      title: "Hari 28: Dev Mode, Serah Terima & CSS Flexbox",
      time: "30 mnt",
      concepts: ["#DevMode", "#CSSHandoff", "#RedlineSpecs", "#CodeInspection"],
      objective: "Beralih ke sudut pandang developer: audit file dengan Dev Mode, hasilkan cuplikan CSS/React, dan beri anotasi spesifikasi.",
      dim: "Inspektur Kode", radius: "Syntax Highlighting", color: "Tema VS Code",
      steps: [
        "1. Selesaikan tata letak kompleks. Tekan Shift + D untuk mengaktifkan Dev Mode.",
        "2. Pilih frame Auto Layout bersarang — lihat kode CSS Flexbox di panel kanan (display: flex, gap, padding).",
        "3. Ubah bahasa dari CSS ke React atau iOS Swift untuk lihat interpretasi platform.",
        "4. Gunakan alat 'Measure' untuk verifikasi semua margin dan padding mematuhi sistem grid 8pt.",
        "5. Gunakan fitur 'Annotations' untuk meninggalkan catatan developer tentang z-index atau kurva transisi."
      ],
      tip: "Desainer Pro membangun file Figma seperti developer menulis kode: Variables = tokens, Auto Layout = Flexbox, Components = React.",
      videoUrl: "https://www.youtube.com/embed/GVUchbe86HE",
      externalLink: "https://www.youtube.com/watch?v=GVUchbe86HE"
    },
    {
      day: 29, level: "pro", levelLabel: "Pro 👑",
      title: "Hari 29: Pengembangan Plugin & Otomatisasi",
      time: "45 mnt",
      concepts: ["#FigmaAPI", "#Plugins", "#Automation", "#Scripter"],
      objective: "Tulis skrip dasar menggunakan plugin 'Scripter' untuk mengotomatiskan tugas desain yang berulang.",
      dim: "Terminal Konsol", radius: "0px", color: "#000000",
      steps: [
        "1. Instal plugin 'Scripter' dari Komunitas Figma.",
        "2. Jalankan Scripter — kamu akan melihat editor kode JavaScript.",
        "3. Kita akan menulis skrip untuk membuat 10 kotak berwarna acak.",
        "4. Contoh API: const rect = figma.createRectangle(); rect.x = i * 110;",
        "5. Eksekusi skrip dan lihat Figma menghasilkan bentuk secara instan.",
        "6. Tidak punya pengalaman coding? Gunakan plugin 'Automator' atau 'Similayer' untuk otomatisasi tanpa kode!"
      ],
      tip: "API Plugin Figma sangat kuat. JavaScript dasar membuka pintu untuk mengotomatiskan berjam-jam pekerjaan manual.",
      videoUrl: "https://www.youtube.com/embed/thplNeqE9Tg",
      externalLink: "https://www.youtube.com/watch?v=thplNeqE9Tg"
    },
    {
      day: 30, level: "pro", levelLabel: "Pro 👑",
      title: "Hari 30: Mahakarya Capstone Besar 🎓",
      time: "60+ mnt",
      concepts: ["#MasterCapstone", "#EndToEnd", "#DesignSystem", "#LogicPrototype"],
      objective: "Tantangan Terakhir: Sintesiskan Variables, Auto Layout, Components, dan Logika Bersyarat menjadi prototype interaktif yang siap produksi!",
      dim: "Rancangan Akhir", radius: "Kesempurnaan", color: "Emas Kelulusan 👑",
      steps: [
        "1. FONDASI: Buat sistem variabel token penuh (Warna, Jarak, Radius) dengan mode Terang dan Gelap.",
        "2. KOMPONEN: Bangun kit UI (Tombol, Input, Kartu, Navbar) dengan nested instances, boolean properties, dan interactive states.",
        "3. TATA LETAK: Buat 3 layar fidelitas tinggi (Beranda, Detail, Pembayaran) menggunakan Auto Layout dan komponen library. Pastikan responsif penuh.",
        "4. LOGIKA: Hubungkan semua layar. Gunakan conditional untuk validasi form, variabel angka untuk keranjang belanja, dan animasi pegas untuk transisi.",
        "5. SERAH TERIMA: Atur file dengan teliti, jalankan Dev Mode untuk cek nilai hardcode, bagikan link prototype.",
        "6. KELULUSAN: Rayakan! Kamu telah menguasai Figma dari nol hingga Pro! 🎉"
      ],
      tip: "Kamu resmi menjadi Figma Pro! Keterampilan ini identik dengan yang digunakan Desainer Produk senior di perusahaan teknologi terkemuka. Kamu SIAP! 🎓👑💖",
      videoUrl: "https://www.youtube.com/embed/rF4qdP2GWn8",
      externalLink: "https://www.youtube.com/watch?v=rF4qdP2GWn8"
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
    { title: "Selamat Pagi Matahariku! ☀️", body: "Kamu adalah pikiran favoritku setiap hari. Jangan lupa tersenyum, tarik napas perlahan, dan ketahuilah bahwa kamu sangat dicintai!", signoff: "Selalu milikmu ❤️" },
    { title: "Kamu Sangat Luar Biasa ✨", body: "Hanya ingin mengingatkan bahwa tawamu adalah lagu favoritku di seluruh dunia. Teruslah bersinar hari ini, cintaku!", signoff: "Dengan seluruh cintaku 🌸" },
    { title: "Pelukan Hangat Datang 🧸", body: "Kalau aku ada di sebelahmu sekarang, aku akan memberimu pelukan beruang yang paling hangat dan tidak akan melepaskannya.", signoff: "Mengirim 1.000 ciuman 💋" },
    { title: "Orang Favoritku 🥰", body: "Dari miliaran manusia di Bumi, menemukanmu adalah momen paling beruntung dalam hidupku. Terima kasih telah menjadi dirimu sendiri!", signoff: "Mencintaimu tanpa akhir 💖" }
  ];
  let currentNoteIdx = 0;

  openNoteBtn.addEventListener('click', () => {
    envelope.classList.toggle('open');
    openNoteBtn.innerHTML = envelope.classList.contains('open')
      ? '<i class="fa-solid fa-envelope"></i> Tutup Surat'
      : '<i class="fa-solid fa-heart-open"></i> Buka Surat';
    if (envelope.classList.contains('open')) triggerConfetti(0.5, 0.4);
  });

  newNoteBtn.addEventListener('click', () => {
    currentNoteIdx = (currentNoteIdx + 1) % loveNotes.length;
    const note = loveNotes[currentNoteIdx];
    noteTitle.textContent = note.title;
    noteBody.textContent = note.body;
    noteSignoff.textContent = note.signoff;
    if (!envelope.classList.contains('open')) {
      envelope.classList.add('open');
      openNoteBtn.innerHTML = '<i class="fa-solid fa-envelope"></i> Tutup Surat';
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
