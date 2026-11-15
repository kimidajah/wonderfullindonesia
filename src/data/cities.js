// Data komprehensif 29 kota di 7 wilayah Indonesia
// Wonderful Indonesia — Immersive Cultural Explorer

export const REGIONS = [
  { id: 'all', name: 'Semua Wilayah', count: 29 },
  { id: 'sumatera', name: 'Sumatera', island: 'Sumatera', count: 6 },
  { id: 'jawa', name: 'Jawa', island: 'Jawa', count: 7 },
  { id: 'bali-nusa-tenggara', name: 'Bali & Nusa Tenggara', island: 'Kepulauan Nusa Tenggara', count: 4 },
  { id: 'kalimantan', name: 'Kalimantan', island: 'Borneo', count: 4 },
  { id: 'sulawesi', name: 'Sulawesi', island: 'Celebes', count: 5 },
  { id: 'maluku', name: 'Maluku', island: 'Kepulauan Rempah', count: 2 },
  { id: 'papua', name: 'Papua', island: 'Tanah Papua', count: 3 },
];

export const CITIES = [
  // ================= SUMATERA =================
  {
    id: 'banda-aceh',
    name: 'Banda Aceh',
    province: 'Aceh',
    region: 'Sumatera',
    regionId: 'sumatera',
    nickname: 'Serambi Mekkah',
    taglineEn: 'The Historic Gateway of the Orient',
    coordinates: '5.5483° N, 95.3238° E',
    heroImage: 'https://images.unsplash.com/photo-1596402184320-417e7178b2cd?auto=format&fit=crop&w=2560&q=85',
    fallbackHero: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=2560&q=85',
    shortDescription: 'Kota bersejarah di ujung barat Nusantara dengan arsitektur megah Masjid Raya Baiturrahman, saksi peradaban Islam dan ketangguhan rakyat Aceh.',
    cultureBadges: ['Pinto Aceh', 'Tari Saman', 'Rencong', 'Rumoh Aceh', 'Kopi Gayo'],
    cultureAnimType: 'aceh',
    accentColor: '#10b981',
    about: {
      history: 'Didirikan oleh Sultan Alaidin Johansyah pada tahun 1205 Masehi, Banda Aceh merupakan salah satu kota Islam tertua di Asia Tenggara. Kota ini pernah menjadi pusat Kesultanan Aceh Darussalam yang disegani para penjelajah dunia berkat armada laut dan perdagangan rempahnya.',
      geography: 'Terletak di ujung barat laut Pulau Sumatera di muara Sungai Krueng Aceh, berbatasan langsung dengan Selat Malaka di utara dan Samudra Hindia di barat.',
      cultureCommunity: 'Masyarakat Aceh menjunjung tinggi nilai syariat Islam yang berpadu selaras dengan kearifan adat ("Hukom ngon Adat lagee zat ngon sifeut" — hukum dan adat bagaikan zat dengan sifat). Memiliki tradisi minum kopi yang legendaris di kedai-kedai kopi.',
      uniqueness: 'Memiliki Masjid Raya Baiturrahman yang selamat dari gelombang tsunami 2004, Museum Tsunami megah rancangan Ridwan Kamil, dan Monumen PLTD Apung seberat 2.600 ton yang terdampar di tengah daratan.'
    },
    culture: {
      traditionalAttire: {
        name: 'Ulee Balang & Dara Baro',
        description: 'Pakaian kebesaran adat Aceh dengan songket bersulam benang emas, hiasan kepala Patham Kula yang anggun, serta celana Sileuweu sutra berhias sulaman motif pucuk rebung.'
      },
      traditionalWeapon: {
        name: 'Rencong',
        description: 'Senjata tikam pusaka berbentuk huruf "Bismillah" dalam kaligrafi Arab. Melambangkan keberanian, martabat suci, dan kehormatan para pejuang Aceh.'
      },
      traditionalDance: {
        name: 'Tari Saman & Ratoh Jaroe',
        description: 'Tarian tepuk dada dan paha berkecepatan tinggi yang diakui UNESCO sebagai Warisan Budaya Takbenda Dunia, mencerminkan kekompakan, spiritualitas, dan kedisiplinan luar biasa.'
      },
      signatureFood: {
        name: 'Mie Aceh & Ayam Tangkap',
        description: 'Mie kuning kenyal berbumbu kari rempah pekat berani dengan daging sapi atau kepiting, disajikan bersama Ayam Tangkap yang digoreng harum bertabur daun temurui (kari) dan pandan renyah.'
      },
      traditionalHouse: {
        name: 'Rumoh Aceh',
        description: 'Rumah panggung bertiang tinggi dengan pasak kayu tanpa paku, atap rumbia curam, dan ornamen ukiran motif Pinto Aceh serta awan berarak yang tahan gempa.'
      },
      artsAndMusic: {
        name: 'Rapa’i & Seurune Kalee',
        description: 'Ansambel rebana perkusi Rapa’i yang menggelegar dipadu tiupan meliuk-liuk Seurune Kalee mengiringi doa dan syair-syair heroik peradaban Aceh.'
      }
    },
    destinations: [
      {
        name: 'Masjid Raya Baiturrahman',
        category: 'Landmark Sejarah & Religi',
        description: 'Kubah hitam megah dengan payung hidrolik elektrik modern layaknya Masjid Nabawi, saksi bisu keteguhan spiritual dan kebangkitan rakyat Aceh pasca-tsunami.',
        image: 'https://images.unsplash.com/photo-1596402184320-417e7178b2cd?auto=format&fit=crop&w=1200&q=80'
      },
      {
        name: 'Museum Tsunami Aceh',
        category: 'Monumen Arsitektur Edukasi',
        description: 'Karya arsitektur spektakuler dengan lorong cerobong air yang menghadirkan renungan emosional mendalam dan harapan akan ketangguhan masa depan.',
        image: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=1200&q=80'
      },
      {
        name: 'Pantai Lampuuk',
        category: 'Wisata Alam Bahari',
        description: 'Hamparan pasir putih lembut berlatar tebing kapur kehijauan dan ombak Samudra Hindia yang memikat bagi para peselancar dunia.',
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80'
      }
    ]
  },
  {
    id: 'medan',
    name: 'Medan',
    province: 'Sumatera Utara',
    region: 'Sumatera',
    regionId: 'sumatera',
    nickname: 'Kota Paris van Sumatra',
    taglineEn: 'The Royal Melting Pot of North Sumatra',
    coordinates: '3.5952° N, 98.6722° E',
    heroImage: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=2560&q=85',
    fallbackHero: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=2560&q=85',
    shortDescription: 'Metropolitan multikultural terbesar di barat Indonesia, perpaduan arsitektur Kesultanan Deli, warisan kolonial art-deco, dan surga kuliner legendaris.',
    cultureBadges: ['Kain Ulos', 'Gorga Batak', 'Istana Maimun', 'Durian Ucok', 'Bolu Meranti'],
    cultureAnimType: 'medan',
    accentColor: '#ef4444',
    about: {
      history: 'Bermula dari perkampungan yang didirikan Guru Patimpus Sembiring Pelawi pada 1590 di pertemuan Sungai Deli dan Babura. Kota ini berkembang pesat di abad ke-19 menjadi pusat perkebunan tembakau Deli terbaik di dunia di bawah naungan Kesultanan Deli.',
      geography: 'Terletak di dataran rendah pesisir timur Sumatera Utara, bertetangga dekat dengan Selat Malaka dan menjadi gerbang utama menuju kaldera Danau Toba.',
      cultureCommunity: 'Kota peleburan etnis yang sangat harmonis: Batak, Melayu Deli, Jawa, Tionghoa, Minangkabau, Mandailing, dan Tamil. Terkenal dengan karakter lugas, hangat, dan kebersamaan bersantap.',
      uniqueness: 'Memiliki Istana Maimun bergaya Mughal-Melayu-Spanyol dengan takhta emas kuning kebesaran, serta Masjid Raya Al-Mashun yang dirancang oleh arsitek Belanda dengan marmer Italia.'
    },
    culture: {
      traditionalAttire: {
        name: 'Kain Tenun Ulos & Teluk Belanga',
        description: 'Kain Ulos tenun tangan bermotif magis seperti Ulos Ragidup yang melambangkan berkah kehidupan, dipadukan busana kebesaran Melayu Deli berselendang songket emas.'
      },
      traditionalWeapon: {
        name: 'Piso Halasan & Tumbuk Lada',
        description: 'Pedang pusaka Batak berukir singa-singa pada gagang tanduk rusa pembawa kewibawaan raja, serta belati Tumbuk Lada warisan Melayu pesisir.'
      },
      traditionalDance: {
        name: 'Tari Tor-Tor & Serampang Dua Belas',
        description: 'Gerakan ritmis sakral Tor-Tor dengan iringan Gondang Sabangunan, bersanding dengan kelincahan tari pergaulan Serampang Dua Belas khas Melayu Deli.'
      },
      signatureFood: {
        name: 'Bika Ambon & Soto Medan',
        description: 'Kue kuning bersarang kenyal beraroma serai dan daun jeruk, serta Soto Medan berkuah santan kental gurih berempah jintan dengan suwiran ayam kampung dan perkedel kentang lembut.'
      },
      traditionalHouse: {
        name: 'Rumah Bolon Batak',
        description: 'Rumah panggung megah beratap melengkung seperti haluan kapal tanpa paku, dihiasi ukiran Gorga tiga warna sakral (merah, putih, hitam).'
      },
      artsAndMusic: {
        name: 'Gondang Sabangunan',
        description: 'Ansambel perkusi tradisional terdiri dari Ogung, Taganing, Sarune Bolon, dan Hesek yang menghasilkan resonansi magis pemanggil roh leluhur.'
      }
    },
    destinations: [
      {
        name: 'Istana Maimun',
        category: 'Warisan Kesultanan Deli',
        description: 'Istana megah berwarna kuning cerah yang memadukan arsitektur Melayu, Islam, Spanyol, dan India rancangan kapten zeni Belanda TH van Erp.',
        image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80'
      },
      {
        name: 'Masjid Raya Al-Mashun',
        category: 'Arsitektur Religi Bersejarah',
        description: 'Masjid berkubah oktagonal simetris dengan kaca patri Prancis dan marmer murni yang diimpor dari Italia pada tahun 1906.',
        image: 'https://images.unsplash.com/photo-1590076215667-875d4ef2d7ee?auto=format&fit=crop&w=1200&q=80'
      },
      {
        name: 'Kawasan Kesawan Heritage',
        category: 'Pusat Sejarah & Kuliner',
        description: 'Jalanan bersejarah dengan deretan bangunan art-deco kolonial tempo dulu dan rumah Tjong A Fie Mansion yang memesona.',
        image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80'
      }
    ]
  },
  {
    id: 'padang',
    name: 'Padang',
    province: 'Sumatera Barat',
    region: 'Sumatera',
    regionId: 'sumatera',
    nickname: 'Kota Ranah Minang',
    taglineEn: 'The Gastronomic Soul of Minangkabau',
    coordinates: '0.9471° S, 100.4172° E',
    heroImage: 'https://images.unsplash.com/photo-1578469550956-0e16b69c6a3d?auto=format&fit=crop&w=2560&q=85',
    fallbackHero: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=2560&q=85',
    shortDescription: 'Ibu kota Sumatera Barat di tepi Samudra Hindia, rumah bagi arsitektur Rumah Gadang nan megah dan masakan Rendang terenak di dunia.',
    cultureBadges: ['Rumah Gadang', 'Songket Pandai Sikek', 'Rendang', 'Tari Piring', 'Karih'],
    cultureAnimType: 'padang',
    accentColor: '#f59e0b',
    about: {
      history: 'Padang berkembang sejak abad ke-16 sebagai pelabuhan lada dan emas kerajaan Minangkabau di pesisir barat. Menjadi kota maritim penting yang menghubungkan dataran tinggi Luhak Nan Tigo dengan samudra luas.',
      geography: 'Dikelilingi jajaran Bukit Barisan hijau di timur dan bibir pantai Samudra Hindia di barat, menyajikan perpaduan lanskap pegunungan sejuk dan teluk-teluk eksotis.',
      cultureCommunity: 'Penganut sistem matrilineal terbesar di dunia (garis keturunan ibu). Filosofi "Adat basandi syarak, syarak basandi Kitabullah" dan budaya merantau membentuk karakter Minang yang tangguh dan bijaksana.',
      uniqueness: 'Atap lengkung gonjong menyerupai tanduk kerbau yang menjulang megah, seni penyajian piring bertumpuk pelayan Nasi Padang yang legendaris, serta legenda Malin Kundang di Pantai Air Manis.'
    },
    culture: {
      traditionalAttire: {
        name: 'Limpapeh Rumah Nan Gadang & Deta',
        description: 'Baju Kurung bersulam benang emas dengan hiasan kepala Tingkuluak Tanduk Kerbau bagi wanita kehormatan, dipadu jas roki hitam dan penutup kepala Deta berlipat rapi untuk pemangku adat.'
      },
      traditionalWeapon: {
        name: 'Karih Minang & Kurambiak (Karambit)',
        description: 'Keris pendek Minangkabau yang diselipkan di pinggang depan melambangkan ketegasan, serta bilah melengkung Karambit yang mematikan dalam seni bela diri Silat Harimau.'
      },
      traditionalDance: {
        name: 'Tari Piring & Tari Payung',
        description: 'Penari memegang piring porselen di kedua telapak tangan mengayun cepat penuh akrobatik lalu menginjak pecahan kaca tanpa terluka sebagai simbol rasa syukur panen.'
      },
      signatureFood: {
        name: 'Rendang Daging & Dendeng Batokok',
        description: 'Daging sapi yang dimasak perlahan berjam-jam bersama santan kelapa dan racikan rempah karamelisasi hingga berwarna cokelat gelap pekat gurih tiada tara.'
      },
      traditionalHouse: {
        name: 'Rumah Gadang',
        description: 'Istana kayu beratap ijuk runcing gonjong menyerupai tanduk kerbau pembawa berkah kemenangan, dinding berukiran flora Itik Pulang Patang tanpa satu pun paku logam.'
      },
      artsAndMusic: {
        name: 'Saluang & Talempong',
        description: 'Alat musik tiup bambu Saluang yang mendayu-dayu penuh kerinduan kampung halaman bersahut-sahutan dengan denting ritmis gong logam kecil Talempong.'
      }
    },
    destinations: [
      {
        name: 'Pantai Padang & Jembatan Siti Nurbaya',
        category: 'Ikon Bahari & Senja',
        description: 'Pantai panjang menghadap matahari terbenam Samudra Hindia dengan jembatan ikonik berhias lampu temaram yang menyajikan jajanan jagung bakar.',
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80'
      },
      {
        name: 'Museum Adityawarman',
        category: 'Museum Budaya Minangkabau',
        description: 'Dibangun dengan arsitektur Rumah Gadang Bagonjong gajah maharam megah, menyimpan ribuan artefak etnografi budaya Minang.',
        image: 'https://images.unsplash.com/photo-1578469550956-0e16b69c6a3d?auto=format&fit=crop&w=1200&q=80'
      },
      {
        name: 'Pulau Pasumpahan & Teluk Mandeh',
        category: 'Surga Bahari Tropis',
        description: 'Kepulauan pulau karang nan tenang berair toska gradasi bening yang dijuluki Raja Ampat-nya Ranah Minang.',
        image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80'
      }
    ]
  },
  {
    id: 'pekanbaru',
    name: 'Pekanbaru',
    province: 'Riau',
    region: 'Sumatera',
    regionId: 'sumatera',
    nickname: 'Kota Bertuah',
    taglineEn: 'The Malay Heart of Central Sumatra',
    coordinates: '0.5071° N, 101.4478° E',
    heroImage: 'https://images.unsplash.com/photo-1590076215667-875d4ef2d7ee?auto=format&fit=crop&w=2560&q=85',
    fallbackHero: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=2560&q=85',
    shortDescription: 'Pusat kebudayaan Melayu Riau di tepian Sungai Siak, kota modern bertabur pantun, tenun songket Siak, dan arsitektur masjid megah.',
    cultureBadges: ['Songket Siak', 'Tanjak Melayu', 'Masjid An-Nur', 'Gulai Belacan', 'Bolu Kemojo'],
    cultureAnimType: 'padang',
    accentColor: '#3b82f6',
    about: {
      history: 'Didirikan pada tanggal 23 Juni 1784 oleh Sultan Muhammad Ali Abdul Jalil Muazzam Syah dari Kesultanan Siak Sri Indrapura sebagai pusat pasar baru (Pekan Baharu) di tepi Sungai Siak.',
      geography: 'Berada di dataran rendah tengah Pulau Sumatera yang dialiri Sungai Siak, sungai terdalam di Indonesia yang menghubungkan wilayah pedalaman dengan Selat Malaka.',
      cultureCommunity: 'Kental dengan etika peradaban Melayu yang santun, menjunjung tinggi sastra pantun, gurindam karya Raja Ali Haji, serta nilai keramahan budi pekerti luhur.',
      uniqueness: 'Memiliki Masjid Agung An-Nur yang megah bak Taj Mahal berhias kubah hijau besar, serta tradisi mengenakan mahkota destar penutup kepala Tanjak Melayu.'
    },
    culture: {
      traditionalAttire: {
        name: 'Baju Kurung Cekak Musang & Tanjak',
        description: 'Busana sutra Melayu berkancing lima lambang rukun Islam, dipadukan kain samping Tenun Siak bermotif pucuk rebung dan Tanjak kain songket gagah.'
      },
      traditionalWeapon: {
        name: 'Jenawi & Beladau',
        description: 'Pedang lurus bermata satu Jenawi warisan panglima laut Melayu serta belati melengkung Beladau yang diselipkan di balik pinggang bertenun emas.'
      },
      traditionalDance: {
        name: 'Tari Zapin Melayu',
        description: 'Tarian santun penuh keanggunan langkah berirama marwas dan gambus Arab-Melayu yang sarat pesan dakwah kebajikan dan keharmonisan hidup.'
      },
      signatureFood: {
        name: 'Gulai Patin Asam Pedas & Bolu Kemojo',
        description: 'Ikan patin segar Sungai Siak dimasak dalam kuah merah asam pedas beraroma daun kesum dan asam kandis, ditutup manisnya bolu kemojo beraroma pandan suji.'
      },
      traditionalHouse: {
        name: 'Rumah Selaso Jatuh Kembar',
        description: 'Balai pertemuan Melayu beratap silang selembayung berukir pucuk rebung dan lebah bergantung, melambangkan musyawarah mufakat dan kedamaian.'
      },
      artsAndMusic: {
        name: 'Musik Gambus & Kompang',
        description: 'Petikan gambus yang mengalun puitis mengiringi pembacaan Gurindam Dua Belas dan dentuman rebana Kompang saat menyambut tetamu kehormatan.'
      }
    },
    destinations: [
      {
        name: 'Masjid Agung An-Nur Riau',
        category: 'Ikon Arsitektur Religi',
        description: 'Sering dijuluki Taj Mahal-nya Riau berkat kubah hijau raksasa, menara menjulang, dan kolam pantul air jernih yang memukau di malam hari.',
        image: 'https://images.unsplash.com/photo-1590076215667-875d4ef2d7ee?auto=format&fit=crop&w=1200&q=80'
      },
      {
        name: 'Istana Siak Sri Indrapura',
        category: 'Warisan Monarki Melayu',
        description: 'Kompleks istana kerajaan Siak berjarak dekat dari Pekanbaru, menyimpan cermin kristal ajaib dan alat musik gramofon komet langka dunia.',
        image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80'
      },
      {
        name: 'Kawasan Waterfront Sungai Siak',
        category: 'Tepian Sungai Sejarah',
        description: 'Area rekreasi tepi sungai dengan jembatan Siak IV yang megah dan panorama perahu-perahu tradisional nelayan di kala senja.',
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80'
      }
    ]
  },
  {
    id: 'palembang',
    name: 'Palembang',
    province: 'Sumatera Selatan',
    region: 'Sumatera',
    regionId: 'sumatera',
    nickname: 'Kota Sriwijaya / Bumi Sriwijaya',
    taglineEn: 'The Ancient Cradle of the Maritime Empire',
    coordinates: '2.9761° S, 104.7754° E',
    heroImage: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=2560&q=85',
    fallbackHero: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=2560&q=85',
    shortDescription: 'Kota tertua di Indonesia bekas pusat Kedatuan Sriwijaya, masyhur dengan Jembatan Ampera merah yang membelah Sungai Musi dan lezatnya Pempek.',
    cultureBadges: ['Songket Palembang', 'Jembatan Ampera', 'Pempek', 'Tari Gending Sriwijaya', 'Rumah Limas'],
    cultureAnimType: 'padang',
    accentColor: '#e11d48',
    about: {
      history: 'Berdasarkan Prasasti Kedukan Bukit berangka tahun 683 Masehi, Palembang adalah kota tertua di Nusantara. Pernah menjadi episentrum kemaharajaan maritim Sriwijaya yang menguasai jalur perdagangan maritim Asia Tenggara selama berabad-abad.',
      geography: 'Dikelilingi perairan Sungai Musi yang membentang lebar membelah kota menjadi dua bagian (Seberang Ilir dan Seberang Ulu).',
      cultureCommunity: 'Perpaduan harmonis budaya Melayu, Sriwijaya, dan Tionghoa peranakan. Sangat bangga dengan tradisi kain Songket yang ditenun dengan benang emas murni.',
      uniqueness: 'Jembatan Ampera yang berwarna merah menyala di malam hari, perahu ketek tradisional di Sungai Musi, serta tradisi ngobeng (makan bersama duduk bersila beralas kain).'
    },
    culture: {
      traditionalAttire: {
        name: 'Aesan Gede & Aesan Paksangko',
        description: 'Busana pengantin agung bertabur mahkota Karsun emas bertingkat, selempang songket Lepus benang emas murni peninggalan kemegahan Sriwijaya.'
      },
      traditionalWeapon: {
        name: 'Keris Palembang & Tumbak Trisula',
        description: 'Keris berluk dengan sarung kayu tembesu berlapis perak berukir sulur bunga tanjung, dan tombak bermata tiga lambang kedaulatan laut.'
      },
      traditionalDance: {
        name: 'Tari Gending Sriwijaya & Tanggai',
        description: 'Tarian penyambutan tamu agung dengan kuku-kuku panjang palsu keemasan (Tanggai) dan sajian tepak sirih tanda ketulusan persaudaraan.'
      },
      signatureFood: {
        name: 'Pempek & Tekwan',
        description: 'Olahan adonan ikan tenggiri segar dan tepung sagu kenyal yang digoreng garing, dinikmati bersama kuah cuko hitam kental manis-pedas beraroma gula batok Linggau.'
      },
      traditionalHouse: {
        name: 'Rumah Limas',
        description: 'Rumah kayu bertingkat lantai (Kekijing) dengan ukiran emas gaya Palembang-Tionghoa, terabadikan dalam mata uang rupiah.'
      },
      artsAndMusic: {
        name: 'Dulmuluk & Gamelan Sriwijaya',
        description: 'Seni teater tutur tradisional Dulmuluk yang jenaka berirama rebana dan piul (biola) mengisahkan hikayat kejayaan masa lampau.'
      }
    },
    destinations: [
      {
        name: 'Jembatan Ampera & Benteng Kuto Besak',
        category: 'Landmark Sejarah Maritim',
        description: 'Ikon abadi kota Palembang yang membentang gagah di atas Sungai Musi, berhadapan langsung dengan benteng keraton abad ke-18.',
        image: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=1200&q=80'
      },
      {
        name: 'Pulau Kemaro',
        category: 'Wisata Budaya & Legenda',
        description: 'Delta kecil di tengah Sungai Musi dengan pagoda bertingkat sembilan dan klenteng sakral tempat berseminya kisah cinta abadi Tan Bun An dan Siti Fatimah.',
        image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80'
      },
      {
        name: 'Taman Purbakala Kerajaan Sriwijaya',
        category: 'Situs Purbakala Arkeologi',
        description: 'Kawasan kanal kuno dan museum yang menyimpan prasasti bersejarah dan arca-arca peninggalan dinasti Sriwijaya.',
        image: 'https://images.unsplash.com/photo-1578469550956-0e16b69c6a3d?auto=format&fit=crop&w=1200&q=80'
      }
    ]
  },
  {
    id: 'bandar-lampung',
    name: 'Bandar Lampung',
    province: 'Lampung',
    region: 'Sumatera',
    regionId: 'sumatera',
    nickname: 'Kota Tapis Berseri',
    taglineEn: 'The Southern Gateway of Sumatra',
    coordinates: '5.4500° S, 105.2667° E',
    heroImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2560&q=85',
    fallbackHero: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=2560&q=85',
    shortDescription: 'Pintu gerbang selatan Pulau Sumatera di pesisir Teluk Lampung, kaya akan pesona kain Tapis bersulam emas, gajah Way Kambas, dan lumba-lumba Teluk Kiluan.',
    cultureBadges: ['Kain Tapis', 'Siger Lampung', 'Seruit', 'Tari Bedana', 'Badik Lampung'],
    cultureAnimType: 'padang',
    accentColor: '#d97706',
    about: {
      history: 'Terbentuk dari penggabungan dua kota kembar bersejarah Tanjungkarang dan Telukbetung. Bandar Lampung sejak era kolonial menjadi pelabuhan lada hitam utama dunia yang dikirim ke Eropa melalui Selat Sunda.',
      geography: 'Berada di teluk berbukit di ujung tenggara Sumatera, menghadap langsung ke Selat Sunda dengan pemandangan gugusan kepulauan vulkanik Gunung Krakatau.',
      cultureCommunity: 'Terbagi dalam dua adat besar: Saibatin (pesisir) dan Pepadun (pedalaman). Memiliki mahkota keagungan Siger yang menjadi simbol kebanggaan dan kehormatan wanita Lampung.',
      uniqueness: 'Gerbang selamat datang bertabur mahkota Siger raksasa di puncak bukit, habitat lumba-lumba hidung botol di Teluk Kiluan, serta budidaya kopi robusta kelas dunia.'
    },
    culture: {
      traditionalAttire: {
        name: 'Kain Tapis & Mahkota Siger',
        description: 'Kain tenun katun berhias sulaman benang emas motif kapal peradaban, disempurnakan mahkota Siger sembilan lekukan emas lambang sembilan marga besar.'
      },
      traditionalWeapon: {
        name: 'Terapang & Badik Lampung',
        description: 'Keris pendek berukir burung garuda dari kayu gaharu harum serta badik pusaka penjaga kehormatan keluarga bangsawan Lampung.'
      },
      traditionalDance: {
        name: 'Tari Sigeh Penganten & Bedana',
        description: 'Tarian persembahan membawa tepak sirih bertabur gemerlap kuningan, berpadu dengan keceriaan Tari Bedana yang bernuansa petikan gambus harmonis.'
      },
      signatureFood: {
        name: 'Seruit & Kemplang Panggang',
        description: 'Ikan bakar sungai dibalut sambal terasi mentah, tempoyak durian fermentasi, lalapan segar, serta kerupuk kemplang ikan tenggiri yang dipanggang renyah berpasir.'
      },
      traditionalHouse: {
        name: 'Lamban Nuwo Sesat',
        description: 'Rumah panggung kayu beratap ijuk pelana dengan hiasan kubah payung tiga warna, tempat dewan adat menggelar musyawarah Begawi.'
      },
      artsAndMusic: {
        name: 'Cetik (Gamolan Pekhing)',
        description: 'Instrumen gamelan bambu purba bertangga nada pentatonis yang telah dimainkan masyarakat Lampung sejak ribuan tahun silam.'
      }
    },
    destinations: [
      {
        name: 'Menara Siger & Teluk Lampung',
        category: 'Ikon Kebanggaan Gerbang Sumatera',
        description: 'Monumen mahkota Siger raksasa bercat emas dan merah yang berdiri anggun di atas bukit memandang Selat Sunda yang membentang biru.',
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80'
      },
      {
        name: 'Pulau Pahawang',
        category: 'Wisata Bawah Laut & Terumbu Karang',
        description: 'Gugusan pulau berair jernih bak kristal dengan taman koral anemon penuh ikan badut (nemo) dan pasir timbul yang eksotis.',
        image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80'
      },
      {
        name: 'Pantai Gigi Hiu (Pegadungan)',
        category: 'Formasi Batuan Karang Purba',
        description: 'Gugusan tebing karang runcing menjulang dramatis diterpa deburan ombak besar Samudra Hindia, surga bagi fotografer lanskap.',
        image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80'
      }
    ]
  },

  // ================= JAWA =================
  {
    id: 'jakarta',
    name: 'Jakarta',
    province: 'DKI Jakarta',
    region: 'Jawa',
    regionId: 'jawa',
    nickname: 'Kota Batavia / The Big Durian',
    taglineEn: 'The Dynamic Megacity of the Archipelago',
    coordinates: '6.2088° S, 106.8456° E',
    heroImage: 'https://images.unsplash.com/photo-1555899434-94d1368aa7af?auto=format&fit=crop&w=2560&q=85',
    fallbackHero: 'https://images.unsplash.com/photo-1584810359583-96fc3448beaa?auto=format&fit=crop&w=2560&q=85',
    shortDescription: 'Megapolitan kosmopolitan detak jantung ekonomi Indonesia, tempat bertemunya siluet gedung pencakar langit modern dengan kehangatan budaya Betawi.',
    cultureBadges: ['Ondel-Ondel', 'Monas', 'Batik Betawi', 'Kerak Telor', 'Tanjidor'],
    cultureAnimType: 'jakarta',
    accentColor: '#f97316',
    about: {
      history: 'Bermula dari pelabuhan Sunda Kelapa pada abad ke-12, ditaklukkan Fatahillah menjadi Jayakarta pada 22 Juni 1527, lalu menjadi pusat VOC Batavia, hingga menjelma sebagai ibu kota dan pusat kemajuan bangsa Indonesia.',
      geography: 'Dataran aluvial pantai utara Jawa bagian barat yang bermuara ke Teluk Jakarta dan berbatasan dengan Laut Jawa, dilintasi 13 aliran sungai termasuk Ciliwung.',
      cultureCommunity: 'Masyarakat Betawi yang egaliter, humoris, religius, dan ramah. Kehidupan perkotaan 24 jam dengan fasilitas transportasi modern MRT, LRT, dan TransJakarta.',
      uniqueness: 'Tugu Monas berlidah api emas murni seberat 50 kg, boneka raksasa ikonik Ondel-Ondel penolak bala, Kota Tua berarsitektur kolonial Belanda, dan kuliner Kerak Telor.'
    },
    culture: {
      traditionalAttire: {
        name: 'Baju Sadariah & Kebaya Encim',
        description: 'Baju Sadariah kerah shanghai berkalung sarung pelekat dan peci hitam bagi pria, dipadukan Kebaya Encim berbordir warna cerah khas Betawi.'
      },
      traditionalWeapon: {
        name: 'Golok Betawi & Keris Si Pitung',
        description: 'Bilah golok tempaan baja bergagang tanduk kerbau yang diselipkan di balik sabuk hijau besar, simbol kejantanan para jawara silat Beksi.'
      },
      traditionalDance: {
        name: 'Tari Yapong & Tari Topeng Betawi',
        description: 'Tarian gembira dinamis penuh senyuman diiringi irama tabuhan kendang dan kecrek, serta tari topeng teatrikal bernuansa magis.'
      },
      signatureFood: {
        name: 'Kerak Telor & Soto Betawi',
        description: 'Ketan putih dimasak bersama telur bebek dan ebi gurih di atas wajan tanpa minyak hingga berkerak harum, serta Soto Betawi berkuah santan-susu kaya rempah pala kapulaga.'
      },
      traditionalHouse: {
        name: 'Rumah Kebaya Betawi',
        description: 'Rumah kayu beratap lipat mirip lipatan kebaya dengan teras lapang (serambi) dan ornamen orisinil Gigi Balang bermakna kejujuran dan keberanian.'
      },
      artsAndMusic: {
        name: 'Gambang Kromong & Tanjidor',
        description: 'Harmoni alat musik Tionghoa-Betawi Gambang Kromong bersanding dengan orkes tiup kuningan Eropa Tanjidor yang menghentak ceria.'
      }
    },
    destinations: [
      {
        name: 'Monumen Nasional (Monas)',
        category: 'Landmark Kemerdekaan Bangsa',
        description: 'Tugu obelisk marmer putih setinggi 132 meter dengan lidah api kemerdekaan berlapis emas murni di puncaknya, menghadap alun-alun terluas di dunia.',
        image: 'https://images.unsplash.com/photo-1555899434-94d1368aa7af?auto=format&fit=crop&w=1200&q=80'
      },
      {
        name: 'Kawasan Kota Tua Batavia',
        category: 'Warisan Sejarah Abad ke-17',
        description: 'Alun-alun Fatahillah dengan museum sejarah, cafe Batavia klasik, dan sepeda ontel warna-warni berlatar arsitektur neoklasik.',
        image: 'https://images.unsplash.com/photo-1584810359583-96fc3448beaa?auto=format&fit=crop&w=1200&q=80'
      },
      {
        name: 'Kepulauan Seribu',
        category: 'Taman Nasional Bahari Eksotis',
        description: 'Gugusan pulau karang tropis di utara Jakarta dengan perairan biru bening untuk snorkeling, diving, dan resor santai.',
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80'
      }
    ]
  },
  {
    id: 'bandung',
    name: 'Bandung',
    province: 'Jawa Barat',
    region: 'Jawa',
    regionId: 'jawa',
    nickname: 'Kota Kembang / Paris van Java',
    taglineEn: 'The Creative Highland of Sunda',
    coordinates: '6.9175° S, 107.6191° E',
    heroImage: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=2560&q=85',
    fallbackHero: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=2560&q=85',
    shortDescription: 'Cekungan dataran tinggi berhawa sejuk yang dikelilingi gunung berapi, pusat kreativitas desain, mode, arsitektur art-deco, dan kebudayaan Sunda.',
    cultureBadges: ['Angklung', 'Gedung Sate', 'Tari Jaipong', 'Kujang', 'Peuyeum'],
    cultureAnimType: 'bandung',
    accentColor: '#14b8a6',
    about: {
      history: 'Diresmikan oleh Bupati R.A. Wiranatakusumah II pada tahun 1810 atas perintah Daendels seiring pembangunan Jalan Raya Pos (Grote Postweg). Di era kolonial menjadi pusat intelektual dan perkebunan teh Priangan.',
      geography: 'Berada di cekungan danau purba berketinggian 768 meter di atas permukaan laut, dikelilingi pegunungan Tangkuban Parahu di utara dan Gunung Patuha di selatan.',
      cultureCommunity: 'Masyarakat Sunda yang ramah dan murah senyum dengan filosofi luhur "Someah Hade ka Semoh" serta "Silih Asih, Silih Asah, Silih Asuh" (saling mengasihi, mengajari, dan mengasuh).',
      uniqueness: 'Gedung Sate berarsitektur indo-eropa dengan tusuk sate di puncaknya, getaran merdu bambu Saung Angklung Udjo yang mendunia, dan kawah belerang putih toska Ciwidey.'
    },
    culture: {
      traditionalAttire: {
        name: 'Bedahan Sunda & Kebaya Sunda',
        description: 'Baju Bedahan putih atau hitam berkancing emas dengan kain samping batik Priangan dan bendo batik Sunda untuk pria, berpadu kebaya brokat anggun berhias selendang.'
      },
      traditionalWeapon: {
        name: 'Kujang Sunda',
        description: 'Senjata pusaka bermata lengkung unik menyerupai pulau Jawa dengan lubang-lubang sakral, melambangkan kekuatan spiritual dan kemakmuran Kerajaan Pajajaran.'
      },
      traditionalDance: {
        name: 'Tari Jaipongan & Ketuk Tilu',
        description: 'Tarian enerjik yang menggabungkan unsur pencak silat, ketukan kendang cepat, dan kelenturan gerak pinggul karya maestro Gugum Gumbira.'
      },
      signatureFood: {
        name: 'Batagor & Nasi Timbel Komplit',
        description: 'Bakso tahu ikan tenggiri goreng renyah disiram saus kacang gurih pedas perasan jeruk limau, serta nasi bungkus daun pisang pulen disajikan bersama ayam goreng lengkuas dan sambal terasi.'
      },
      traditionalHouse: {
        name: 'Imah Badak Heuay & Julang Ngapak',
        description: 'Rumah panggung kayu beratap ijuk hitam menyerupai badak menguap atau sayap burung julang yang terbuka, mengalirkan hawa sejuk alami.'
      },
      artsAndMusic: {
        name: 'Angklung & Kacapi Suling',
        description: 'Instrumen bambu goyang nada diatonis karya Daeng Soetigna yang diakui UNESCO, dipadu petikan dawai Kacapi dan tiupan syahdu Suling tembang Cianjuran.'
      }
    },
    destinations: [
      {
        name: 'Gedung Sate & Jalan Braga',
        category: 'Arsitektur Bersejarah Art-Deco',
        description: 'Kantor gubernur ikonik peninggalan 1920 yang memadukan arsitektur Italia, Spanyol, dan pura Hindu Bali, serta kawasan promenade Braga tempo doeloe.',
        image: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=1200&q=80'
      },
      {
        name: 'Kawah Putih Ciwidey',
        category: 'Danau Vulkanik Eksotis',
        description: 'Danau kawah kawah belerang surealis dengan air hijau toska keputihan di tengah kepulan kabut dingin dan ranting pohon cantigi kering.',
        image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80'
      },
      {
        name: 'Tangkuban Parahu',
        category: 'Kawah Berapi Aktif Legenda Sangkuriang',
        description: 'Stratovolcano berbentuk perahu terbalik dengan kawah Ratu raksasa yang mengepulkan asap belerang alami di ketinggian 2.084 mdpl.',
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80'
      }
    ]
  },
  {
    id: 'yogyakarta',
    name: 'Yogyakarta',
    province: 'DI Yogyakarta',
    region: 'Jawa',
    regionId: 'jawa',
    nickname: 'Kota Pelajar / Kota Gudeg',
    taglineEn: 'The Royal Cradle of Javanese Soul',
    coordinates: '7.7956° S, 110.3695° E',
    heroImage: 'https://images.unsplash.com/photo-1596402184320-417e7178b2cd?auto=format&fit=crop&w=2560&q=85',
    fallbackHero: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=2560&q=85',
    shortDescription: 'Pusat kebudayaan Jawa yang dipimpin Sri Sultan Hamengkubuwono, rumah bagi Candi Prambanan, Kraton Ngayogyakarta, dan alunan gamelan mistis.',
    cultureBadges: ['Wayang Kulit', 'Batik Kawung', 'Kraton Yogya', 'Gudeg', 'Keris Mataram'],
    cultureAnimType: 'yogyakarta',
    accentColor: '#eab308',
    about: {
      history: 'Didirikan pada tahun 1755 pasca Perjanjian Giyanti oleh Pangeran Mangkubumi (Sultan Hamengkubuwono I). Kota kerajaan ini mempertahankan status istimewa berkat peran sentral membela kedaulatan Republik Indonesia.',
      geography: 'Terletak di dataran subur antara Gunung Merapi berapi aktif di utara dan gulungan ombak Samudra Hindia (Laut Selatan) di selatan, membentuk Garis Imajiner filosofis.',
      cultureCommunity: 'Masyarakat berpegang teguh pada filosofi "Hamemayu Hayuning Bawana" (menjaga kelestarian alam semesta) dan "Manunggaling Kawula Gusti" (persatuan pemimpin dan rakyat).',
      uniqueness: 'Dipimpin oleh Sultan yang bertahta sekaligus menjabat Gubernur, Candi Prambanan mahakarya Hindu terbesar di Indonesia, serta jalan legendaris Malioboro.'
    },
    culture: {
      traditionalAttire: {
        name: 'Surjan Sembagi & Kain Batik Parang',
        description: 'Baju Surjan motif bunga atau lurik bertabur kancing enam lambang rukun iman, dipadukan kain batik tulis Parang Rusak atau Kawung dan Blangkon berkuncir mondolan.'
      },
      traditionalWeapon: {
        name: 'Keris Kyai & Tombak Pleret',
        description: 'Keris bertuah berlekuk ganjil dengan pamor meteorit Prambanan dan sarung Gayaman berbahan kayu timaha yang sarat energi spiritual Mataram.'
      },
      traditionalDance: {
        name: 'Tari Bedhaya Semang & Beksan Trunajaya',
        description: 'Tarian sakral sembilan putri keraton lambang sembilan lubang hawa manusia diiringi gamelan pelog laras kendang lambat penuh konsentrasi batin.'
      },
      signatureFood: {
        name: 'Gudeg Yu Djum & Bakpia Kukus',
        description: 'Nangka muda dimasak perlahan berhari-hari dalam kuali tanah liat bersama santan, gula kelapa, dan daun jati hingga empuk manis gurih kemerahan, disajikan bersama krecek pedas.'
      },
      traditionalHouse: {
        name: 'Bangsal Kencono Joglo',
        description: 'Paviliun Joglo jati kuno beratap Tajug Lawakan dengan empat pilar utama Saka Guru berukir sulur Praba berlapis prada emas murni.'
      },
      artsAndMusic: {
        name: 'Wayang Kulit Purwa & Gamelan',
        description: 'Pertunjukan wayang kulit semalam suntuk dibawakan Ki Dalang di balik layar kelir diiringi gamelan Kyai Guntursari yang bergaung sakral.'
      }
    },
    destinations: [
      {
        name: 'Kraton Ngayogyakarta Hadiningrat',
        category: 'Istana Kerajaan Aktif',
        description: 'Pusat spiritual dan kebudayaan Jawa tempat tinggal Sultan, menyimpan pusaka karaton, gamelan sakral, dan ornamen filosofi kosmis Mataram.',
        image: 'https://images.unsplash.com/photo-1596402184320-417e7178b2cd?auto=format&fit=crop&w=1200&q=80'
      },
      {
        name: 'Candi Prambanan',
        category: 'Situs Warisan Dunia UNESCO',
        description: 'Kompleks candi Hindu terindah di Asia Tenggara yang menjulang 47 meter ke angkasa mempersembahkan relief kisah epik Ramayana.',
        image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80'
      },
      {
        name: 'Taman Sari Water Castle',
        category: 'Situs Pemandian Raja-Raja',
        description: 'Kompleks istana taman air abad ke-18 dengan lorong bawah tanah rahasia dan masjid melingkar Sumur Gumuling yang artistik.',
        image: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=1200&q=80'
      }
    ]
  },
  {
    id: 'semarang',
    name: 'Semarang',
    province: 'Jawa Tengah',
    region: 'Jawa',
    regionId: 'jawa',
    nickname: 'Kota Lumpia / Venetië van Java',
    taglineEn: 'The Coastal Port of Heritage and Harmony',
    coordinates: '6.9667° S, 110.4167° E',
    heroImage: 'https://images.unsplash.com/photo-1584810359583-96fc3448beaa?auto=format&fit=crop&w=2560&q=85',
    fallbackHero: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=2560&q=85',
    shortDescription: 'Ibu kota Jawa Tengah di pesisir utara, perpaduan bangunan bersejarah Lawang Sewu, klenteng Sam Poo Kong penjelajah Laksamana Cheng Ho, dan Lumpia lezat.',
    cultureBadges: ['Warak Ngendog', 'Lawang Sewu', 'Sam Poo Kong', 'Lumpia Semarang', 'Batik Semarangan'],
    cultureAnimType: 'yogyakarta',
    accentColor: '#38bdf8',
    about: {
      history: 'Bermula dari perbukitan Bergota yang dibuka oleh Ki Ageng Pandanaran pada abad ke-15. Nama Semarang berasal dari pohon asam yang tumbuh jarang-jarang ("asem arang"). Berkembang menjadi pelabuhan dagang utama VOC di Jawa Tengah.',
      geography: 'Memiliki topografi unik yang terbagi menjadi Semarang Bawah (wilayah pesisir dataran rendah) dan Semarang Atas (kawasan perbukitan Candi berhawa sejuk).',
      cultureCommunity: 'Peleburan harmonis tiga etnis besar: Jawa, Tionghoa, dan Arab yang tercermin dalam simbol mitologis Warak Ngendog pada festival Dugderan.',
      uniqueness: 'Gedung pintu seribu Lawang Sewu dengan kaca patri megah, Klenteng Sam Poo Kong dengan patung perunggu Cheng Ho tertinggi, dan Gereja Blenduk berkubah tembaga.'
    },
    culture: {
      traditionalAttire: {
        name: 'Batik Semarangan & Encim Pesisiran',
        description: 'Batik pesisir warna cerah bermotif Tugu Muda, Warak Ngendog, dan burung kuntul dipadukan kebaya encim bordir bunga teratai.'
      },
      traditionalWeapon: {
        name: 'Keris Semarangan & Wedhung',
        description: 'Keris luk gandhik berpamor banyu mili dengan sarung ladrang serta pisau serbaguna Wedhung kebesaran abdi dalem.'
      },
      traditionalDance: {
        name: 'Tari Gambang Semarang & Tari Warak',
        description: 'Tarian gembira lincah perpaduan gerak Jawa dan kelincahan Tionghoa yang diiringi orkes Gambang Semarang bertabur pantun jenaka.'
      },
      signatureFood: {
        name: 'Lumpia Basah/Goreng & Tahu Gimbal',
        description: 'Kulit lumpia garing renyah berisi tumisan rebung muda manis, telur, dan udang segar cocolan saus bawang kental, serta tahu goreng gimbal udang saus petis udang gurih.'
      },
      traditionalHouse: {
        name: 'Rumah Joglo Semarang & Shophouse Kolonial',
        description: 'Rumah joglo beratap srotong khas pesisiran berpadu dengan deretan shophouse berdinding bata tebal jendela louvre di Kota Lama.'
      },
      artsAndMusic: {
        name: 'Gamelan Gambang Semarang',
        description: 'Ansambel unik perpaduan gamelan selendro Jawa dengan instrumen rebab, kendang, dan suling berirama rancak ceria.'
      }
    },
    destinations: [
      {
        name: 'Lawang Sewu',
        category: 'Ikon Cagar Budaya Kereta Api',
        description: 'Gedung kantor pusat Nederlandsch-Indische Spoorweg Maatschappij dengan ribuan daun pintu lengkung dan kaca patri warna-warni yang megah.',
        image: 'https://images.unsplash.com/photo-1584810359583-96fc3448beaa?auto=format&fit=crop&w=1200&q=80'
      },
      {
        name: 'Klenteng Sam Poo Kong',
        category: 'Situs Religi & Sejarah Cheng Ho',
        description: 'Kompleks klenteng merah megah di atas bukit tempat persinggahan Laksamana Cheng Ho pada tahun 1406, simbol akulturasi lintas bangsa.',
        image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80'
      },
      {
        name: 'Kota Lama Semarang (Little Netherland)',
        category: 'Kawasan Konservasi Kolonial',
        description: 'Kawasan jalan berbatu bata dengan deretan gedung megah abad ke-18 dan Gereja Blenduk kubah neoklasik peninggalan 1753.',
        image: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=1200&q=80'
      }
    ]
  },
  {
    id: 'surakarta',
    name: 'Surakarta',
    province: 'Jawa Tengah',
    region: 'Jawa',
    regionId: 'jawa',
    nickname: 'Kota Solo / The Spirit of Java',
    taglineEn: 'The Living Sanctuary of Royal Traditions',
    coordinates: '7.5667° S, 110.8167° E',
    heroImage: 'https://images.unsplash.com/photo-1578469550956-0e16b69c6a3d?auto=format&fit=crop&w=2560&q=85',
    fallbackHero: 'https://images.unsplash.com/photo-1596402184320-417e7178b2cd?auto=format&fit=crop&w=2560&q=85',
    shortDescription: 'Kota budaya tempat bernaungnya dua istana agung Kasunanan Surakarta dan Pura Mangkunegaran, ibu kota batik klasik Nusantara berjiwa adiluhung.',
    cultureBadges: ['Batik Solo', 'Keraton Surakarta', 'Mangkunegaran', 'Serabi Notosuman', 'Tari Bedhaya'],
    cultureAnimType: 'yogyakarta',
    accentColor: '#f59e0b',
    about: {
      history: 'Didirikan pada tahun 1745 oleh Susuhunan Pakubuwana II setelah keraton Kartasura hancur akibat peristiwa Geger Pacinan. Desa Sala di tepi Bengawan Solo dipilih menjadi pusat wangsa Mataram Islam.',
      geography: 'Terletak di dataran aluvial Sungai Bengawan Solo yang legendaris, diapit oleh Gunung Merapi-Merbabu di sebelah barat dan Gunung Lawu di sebelah timur.',
      cultureCommunity: 'Masyarakat menjunjung tinggi tata krama unggah-ungguh basa Jawa halus, keanggunan gerak, kelembutan tutur kata, dan pelestarian ritual kirab malam 1 Suro.',
      uniqueness: 'Dua istana kembar Kraton Kasunanan dan Pura Mangkunegaran yang masih aktif, pasar tekstil tertua Pasar Klewer, dan kereta api uap kuno Jaladara di tengah kota.'
    },
    culture: {
      traditionalAttire: {
        name: 'Beskap Langenharjan & Kebaya Kuthubaru',
        description: 'Beskap hitam berpotongan pendek di belakang untuk memperlihatkan keris bertahtakan permata, bersanding dengan kebaya kuthubaru beludru sutra.'
      },
      traditionalWeapon: {
        name: 'Keris Brojoguno & Tombak Kyai Pleret',
        description: 'Keris tempaan empu Brojoguno yang tersohor ketajaman bilahnya mampu menembus baju zirah besi musuh pada masa perang Mataram.'
      },
      traditionalDance: {
        name: 'Tari Bedhaya Ketawang & Gambyong Pareanom',
        description: 'Tarian sakral persembahan batin kepada Ratu Laut Selatan yang dipentaskan setahun sekali saat Tingalan Dalem Jumenengan Sri Susuhunan.'
      },
      signatureFood: {
        name: 'Selat Solo & Serabi Notosuman',
        description: 'Daging bistik sapi empuk saus encer asam manis disajikan bersama kentang goreng, telur kecap, buncis, dan mayones jawa lembut, serta serabi santan legit.'
      },
      traditionalHouse: {
        name: 'Pendopo Ageng Mangkunegaran',
        description: 'Pendopo joglo kayu jati terbesar di Nusantara yang ditopang tiang-tiang raksasa tanpa sambungan paku dengan langit-langit berlukiskan ornamen Kumudawati.'
      },
      artsAndMusic: {
        name: 'Gamelan Kodok Ngorek & Wayang Orang Sriwedari',
        description: 'Dentang magis gamelan keraton kuno serta pementasan drama tari Wayang Orang legendaris di gedung Sriwedari yang terus hidup sejak 1910.'
      }
    },
    destinations: [
      {
        name: 'Pura Mangkunegaran',
        category: 'Istana Kadipaten Bersejarah',
        description: 'Kompleks istana indah dengan pendopo kayu jati terluas di Indonesia, museum perhiasan emas kerajaan, dan taman klasik bergaya Eropa.',
        image: 'https://images.unsplash.com/photo-1578469550956-0e16b69c6a3d?auto=format&fit=crop&w=1200&q=80'
      },
      {
        name: 'Keraton Kasunanan Surakarta',
        category: 'Pusat Kebudayaan Mataram Islam',
        description: 'Istana raja berpasir pantai selatan di pelatarannya, menara Panggung Songgo Buwono tempat raja bersemedi, dan museum pusaka berharga.',
        image: 'https://images.unsplash.com/photo-1596402184320-417e7178b2cd?auto=format&fit=crop&w=1200&q=80'
      },
      {
        name: 'Kampung Batik Laweyan & Kauman',
        category: 'Sentra Batik Saudagar Abad ke-19',
        description: 'Gang-gang sempit berdinding benteng tinggi peninggalan para saudagar batik tempo doeloe yang memproduksi batik tulis halus berkelas dunia.',
        image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80'
      }
    ]
  },
  {
    id: 'surabaya',
    name: 'Surabaya',
    province: 'Jawa Timur',
    region: 'Jawa',
    regionId: 'jawa',
    nickname: 'Kota Pahlawan',
    taglineEn: 'The Resilient Heroic City of the East',
    coordinates: '7.2575° S, 112.7521° E',
    heroImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=2560&q=85',
    fallbackHero: 'https://images.unsplash.com/photo-1555899434-94d1368aa7af?auto=format&fit=crop&w=2560&q=85',
    shortDescription: 'Metropolitan terbesar kedua di Indonesia, kota pelabuhan maritim tangguh tempat berkobarnya semangat arek-arek Suroboyo mempertahankan kemerdekaan.',
    cultureBadges: ['Tugu Pahlawan', 'Jembatan Suramadu', 'Rawon', 'Tari Remo', 'Bambu Runcing'],
    cultureAnimType: 'yogyakarta',
    accentColor: '#0ea5e9',
    about: {
      history: 'Menurut legenda berasal dari pertarungan epik antara Sura (hiu) dan Baya (buaya). Diakui berdiri pada 31 Mei 1293 memperingati kemenangan pasukan Raden Wijaya mengusir armada Tartar Kekaisaran Mongol.',
      geography: 'Terletak di pesisir utara Jawa Timur menghadap Selat Madura, di muara Kali Mas yang menjadi urat nadi perdagangan maritim ke kawasan timur Indonesia.',
      cultureCommunity: 'Karakteristik "Arek" yang terkenal blak-blakan, egaliter, loyal, berani, dan berjiwa gotong royong tinggi tanpa membedakan kasta.',
      uniqueness: 'Jembatan Suramadu kabel pancang sepanjang 5,4 km yang melintasi lautan, Tugu Pahlawan paku bumi setinggi 41 meter, dan Rawon kuah hitam kluwek.'
    },
    culture: {
      traditionalAttire: {
        name: 'Pakaian Cak & Ning Surabaya',
        description: 'Beskap hitam tanpa kerah berpadu kain jarik corak Surabaya serta terompah bagi Cak, dipadukan kebaya renda anggun dan selendang kerudung renda bagi Ning.'
      },
      traditionalWeapon: {
        name: 'Bambu Runcing & Caluk',
        description: 'Senjata simbolis bambu kuning berpucuk runcing pelindung kedaulatan 10 November 1945, bersanding dengan golok Caluk khas pesisiran.'
      },
      traditionalDance: {
        name: 'Tari Remo & Tari Sparkling Surabaya',
        description: 'Tarian gagah penyambut tamu dengan gelang lonceng gemerincing di pergelangan kaki penari yang berhentak dinamis mengikuti tabuhan gending ludruk.'
      },
      signatureFood: {
        name: 'Rawon Kalkulator & Rujak Cingur',
        description: 'Sup daging sapi kuah hitam kluwek pekat gurih bertabur taoge pendek dan sambal terasi, serta rujak sayur cingur sapi saus petis udang istimewa.'
      },
      traditionalHouse: {
        name: 'Rumah Joglo Sinom Surabaya',
        description: 'Arsitektur joglo terbuka berteritisan lebar menyesuaikan hawa pesisir tropis maritim dengan ventilasi kisi kayu motif flora.'
      },
      artsAndMusic: {
        name: 'Kesenian Teater Ludruk',
        description: 'Drama panggung rakyat bernuansa komedi kritik sosial yang diawali tari Remo dan kidungan parikan jenaka dalam dialek khas Jawa Timuran.'
      }
    },
    destinations: [
      {
        name: 'Tugu Pahlawan & Museum 10 November',
        category: 'Monumen Sejarah Kemerdekaan',
        description: 'Monumen paku terbalik setinggi 41 meter di tengah lapangan hijau mengenang pertempuran heroik 10 November 1945, hari Pahlawan nasional.',
        image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80'
      },
      {
        name: 'Jembatan Nasional Suramadu',
        category: 'Ikon Megastruktur Maritim',
        description: 'Jembatan terpanjang di Indonesia yang menghubungkan Pulau Jawa dan Madura, gemerlap lampu kabel baja memukau di atas gelombang selat.',
        image: 'https://images.unsplash.com/photo-1555899434-94d1368aa7af?auto=format&fit=crop&w=1200&q=80'
      },
      {
        name: 'House of Sampoerna & Jembatan Merah',
        category: 'Warisan Industri & Arsitektur Kolonial',
        description: 'Kompleks bergaya kolonial Belanda 1862 yang memamerkan sejarah industri tembakau dan arsitektur bersejarah di tepi Kali Mas.',
        image: 'https://images.unsplash.com/photo-1584810359583-96fc3448beaa?auto=format&fit=crop&w=1200&q=80'
      }
    ]
  },
  {
    id: 'malang',
    name: 'Malang',
    province: 'Jawa Timur',
    region: 'Jawa',
    regionId: 'jawa',
    nickname: 'Kota Apel / Paris van Oost-Java',
    taglineEn: 'The Alpine Oasis of East Java',
    coordinates: '7.9797° S, 112.6304° E',
    heroImage: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=2560&q=85',
    fallbackHero: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2560&q=85',
    shortDescription: 'Kota dataran tinggi berhawa sejuk yang dikelilingi Gunung Bromo, Semeru, dan Arjuno, terkenal dengan kebun apel hijau, Topeng Malangan, dan Bakso Malang.',
    cultureBadges: ['Topeng Malangan', 'Bromo Tengger', 'Bakso Malang', 'Apel Manalagi', 'Candi Singosari'],
    cultureAnimType: 'yogyakarta',
    accentColor: '#10b981',
    about: {
      history: 'Pusat Kerajaan Singhasari pada abad ke-13 di bawah Raja Kertanegara yang mencetuskan wawasan Nusantara Ekspedisi Pamalayu. Di era kolonial dibangun menjadi kota peristirahatan villa bangsawan Eropa.',
      geography: 'Berada di cekungan pegunungan tinggi 440-500 mdpl yang diapit Gunung Arjuno-Welirang di barat laut, Gunung Kawi di barat, dan kaldera Bromo-Tengger-Semeru di timur.',
      cultureCommunity: 'Masyarakat berkarakteristik Arema yang sportif, terbuka, kreatif, dan memiliki bahasa kebalikan khas "Osob Kiwalan" (misal: "Malang" jadi "Ngalam").',
      uniqueness: 'Seni pahat topeng kayu karakter Panji asmara bangun, hawa sejuk perkebunan apel manalagi, dan mangkuk Bakso Malang bertabur pangsit goreng renyah.'
    },
    culture: {
      traditionalAttire: {
        name: 'Pakaian Malangan & Kebaya Madya',
        description: 'Baju beskap hitam berhias sulaman tepi emas dengan ikat kepala Udheng corak Singosari dan jarik batik motif teratai Singhasari.'
      },
      traditionalWeapon: {
        name: 'Keris Singosari & Belati Cundrik',
        description: 'Keris berpamor miring tempaan Mpu Gandring yang legendaris dalam babad Ken Arok dan Ken Dedes pendiri wangsa Rajasa.'
      },
      traditionalDance: {
        name: 'Tari Topeng Malangan (Bapang)',
        description: 'Tarian dramatik topeng kayu berhidung panjang merah membara dengan gerak tangan merentang lebar melambangkan ketegasan ksatria.'
      },
      signatureFood: {
        name: 'Bakso Malang Komplit & Orem-Orem',
        description: 'Semangkuk bakso daging sapi kenyal berkuah sumsum bening gurih dengan tahu bakso, siomay kukus, pangsit goreng segitiga renyah, dan tempe orem-orem kuah santan kuning.'
      },
      traditionalHouse: {
        name: 'Rumah Limasan Malangan & Villa Art-Deco',
        description: 'Perpaduan rumah adat limasan kayu nangka dengan arsitektur villa kolonial beratap pelana curam dan cerobong semprong hawa dingin.'
      },
      artsAndMusic: {
        name: 'Kesenian Wayang Topeng Kedungmonggo',
        description: 'Tradisi pedalangan topeng kayu warisan Kerajaan Singhasari yang dimainkan secara turun-temurun mengisahkan lakon Panji Semirang.'
      }
    },
    destinations: [
      {
        name: 'Taman Nasional Bromo Tengger Semeru',
        category: 'Pemandangan Kaldera Pasir Vulkanik',
        description: 'Lautan pasir berbisik dengan kawah Bromo yang mengepulkan asap putih di bawah pancaran sunrise spektakuler bukit Penanjakan.',
        image: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=1200&q=80'
      },
      {
        name: 'Kampung Warna-Warni Jodipan',
        category: 'Urban Art Creative Village',
        description: 'Permukiman di bantaran sungai Brantas yang disulap menjadi kanvas mural pelangi warna-warni ceria dengan jembatan kaca gantung.',
        image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80'
      },
      {
        name: 'Candi Singosari & Sumber Sirah',
        category: 'Situs Kerajaan Abad ke-13',
        description: 'Candi batu andesit peninggalan Raja Kertanegara yang dijaga sepasang arca raksasa Dwarapala terbesar di Pulau Jawa.',
        image: 'https://images.unsplash.com/photo-1578469550956-0e16b69c6a3d?auto=format&fit=crop&w=1200&q=80'
      }
    ]
  },

  // ================= BALI & NUSA TENGGARA =================
  {
    id: 'denpasar',
    name: 'Denpasar',
    province: 'Bali',
    region: 'Bali dan Nusa Tenggara',
    regionId: 'bali-nusa-tenggara',
    nickname: 'Kota Den Ayuning Puri',
    taglineEn: 'The Sacred Gateway to Island of Gods',
    coordinates: '8.6705° S, 115.2126° E',
    heroImage: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=2560&q=85',
    fallbackHero: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=2560&q=85',
    shortDescription: 'Ibu kota Provinsi Bali pusat perpaduan harmoni spiritual pura Hindu, pasar seni tradisional sarat dupa harum, pantai matahari terbit Sanur, dan monumen Bajra Sandhi.',
    cultureBadges: ['Pura Hindu', 'Kain Endek', 'Tari Legong', 'Bajra Sandhi', 'Ayam Betutu'],
    cultureAnimType: 'bali',
    accentColor: '#f59e0b',
    about: {
      history: 'Dahulu merupakan pusat Kerajaan Badung. Terkenal dalam lembaran sejarah dunia melalui peristiwa Puputan Badung 1906, ketika raja dan seluruh rakyat bangsawan berpakaian serba putih bertempur hingga titik darah penghabisan mempertahankan kedaulatan tanah leluhur.',
      geography: 'Terletak di dataran pesisir selatan Pulau Bali, diapit oleh perairan Selat Badung di timur dan Samudra Hindia di selatan dengan latar garis pantai Sanur yang tenang.',
      cultureCommunity: 'Berlandaskan falsafah suci "Tri Hita Karana" (keharmonisan hubungan antara manusia dengan Tuhan, manusia dengan sesama, dan manusia dengan alam semesta). Setiap sudut kota dihiasi canang sari dan harum dupa kamboja.',
      uniqueness: 'Monumen Bajra Sandhi yang menyerupai genta pendeta Hindu Bajra di lapangan Renon, Pura Jagatnatha tanpa tembok pembatas, dan tenun ikat Endek Bali.'
    },
    culture: {
      traditionalAttire: {
        name: 'Payas Agung & Destar Udeng Bali',
        description: 'Busana kebesaran bermahkota emas bertingkat bungat cempaka, lilitan kain songket prada benang emas, dan ikat kepala Udeng putih suci dengan lipatan menghadap ke atas.'
      },
      traditionalWeapon: {
        name: 'Keris Bali (Tiying) & Tiuk',
        description: 'Keris bertuah berhulu ukiran dewa Bayu atau Raksasa dari kayu kemuning lapis perak emas bertahtakan permata rubi delima.'
      },
      traditionalDance: {
        name: 'Tari Legong Keraton & Barong Landung',
        description: 'Tarian klasik bertempo cepat dengan lirik lirikan mata seledet yang magis, ayunan kipas sutra, dan kelenturan jemari penari cilik di pelataran pura.'
      },
      signatureFood: {
        name: 'Ayam Betutu Gilimanuk & Nasi Campur Bali',
        description: 'Ayam utuh dibaluri bumbu genep lengkap 15 rempah rahasia dibungkus pelepah pinang dipanggang sekam berjam-jam hingga dagingnya lepas dari tulang, disajikan bersama sambal matah dan lawar kacang panjang.'
      },
      traditionalHouse: {
        name: 'Kompleks Rumah Tradisional Bali (Pekarangan)',
        description: 'Sistem arsitektur Asta Kosala Kosali berpagar bata merah dengan candi bentar, merajan/sanggah suci di hulu kaja-kangin, bale daja, dan bale dauh.'
      },
      artsAndMusic: {
        name: 'Gamelan Gong Kebyar & Semar Pegulingan',
        description: 'Ansambel perkusi gangsa perunggu bertempo eksplosif dan dinamis rancak kebyar yang menggetarkan sukma ciptaan seniman jenius Bali.'
      }
    },
    destinations: [
      {
        name: 'Monumen Perjuangan Bajra Sandhi',
        category: 'Monumen Arsitektur Spiritual',
        description: 'Monumen batu andesit hitam megah berbentuk genta semadi pendeta Hindu dengan museum diorama perjuangan rakyat Bali di Renon.',
        image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80'
      },
      {
        name: 'Pantai Sanur & Sunrise Promenade',
        category: 'Pesona Matahari Terbit Karang',
        description: 'Pantai berpasir putih dengan ombak tenang terlindung gugusan karang, jajaran perahu cadik tradisional jukung di bawah cahaya fajar keemasan.',
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80'
      },
      {
        name: 'Pura Jagatnatha Denpasar',
        category: 'Pura Suci Sang Hyang Widhi',
        description: 'Pura umum pusat persembahyangan purnama dan tilem berpadmasana karang karang dari batu pualam putih di tengah kolam teratai.',
        image: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=1200&q=80'
      }
    ]
  },
  {
    id: 'ubud',
    name: 'Ubud',
    province: 'Bali',
    region: 'Bali dan Nusa Tenggara',
    regionId: 'bali-nusa-tenggara',
    nickname: 'Jantung Seni & Jiwa Dewata',
    taglineEn: 'The Serene Cultural Sanctuary of Bali',
    coordinates: '8.5069° S, 115.2625° E',
    heroImage: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=2560&q=85',
    fallbackHero: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=2560&q=85',
    shortDescription: 'Lembah ngarai hijau bertabur terasering sawah Subak Tegalalang, puri agung para maestro lukis dan pahat, hutan monyet sakral, dan ketenangan jiwa.',
    cultureBadges: ['Sawah Subak', 'Tari Kecak Api', 'Puri Saren Agung', 'Seni Ukir Kayu', 'Sacred Monkey Forest'],
    cultureAnimType: 'bali',
    accentColor: '#10b981',
    about: {
      history: 'Ditemukan oleh pendeta suci Rsi Markandeya pada abad ke-8 di pertemuan dua sungai Campuhan yang dianggap bertuah menyembuhkan ("Ubad" = obat/penawar). Menjadi pusat patronase seni rupa dunia sejak era Raja Tjokorda Gde Agung Sukawati bersama Walter Spies dan Rudolf Bonnet.',
      geography: 'Terletak di dataran perbukitan tengah Gianyar pada ketinggian 300 mdpl, dikelilingi jurang-jurang sungai berarus deras dan hamparan hutan rimbun hijau.',
      cultureCommunity: 'Komunitas seniman pelukis gaya Batuan dan Ubud, pematung kayu Mas, dan penari pura. Menjunjung tinggi sistem irigasi egaliter Subak warisan leluhur yang diakui UNESCO.',
      uniqueness: 'Pertunjukan Tari Kecak api magis di pelataran Pura Dalem Ubud, terasering sawah bertingkat Tegalalang dengan ayunan nirwana, dan ribuan kera abu-abu ekor panjang di Monkey Forest.'
    },
    culture: {
      traditionalAttire: {
        name: 'Busana Adat Madya Bali & Kamen Cepuk',
        description: 'Kain kamen tenun Cepuk Nusa Penida penangkal bala beralas sabuk prada emas dan selendang kuning melingkari pinggang dengan bunga kamboja di telinga.'
      },
      traditionalWeapon: {
        name: 'Keris Kamardikan & Golok Pengentas',
        description: 'Keris seni berbilah pamor beras wutah dengan hulu ukiran gading dewa Ganesha atau Barong Macan ciptaan pande besi Gianyar.'
      },
      traditionalDance: {
        name: 'Tari Kecak Ramayana & Tari Pendet',
        description: 'Paduan suara ritmis puluhan pria bertelanjang dada melingkari lidah api menyuarakan "Cak-cak-cak" sakral mengiringi kisah pembebasan Dewi Shinta.'
      },
      signatureFood: {
        name: 'Bebek Bengil & Lawar Kuwir',
        description: 'Bebek sawah berbumbu rempah rahasia yang digoreng hingga renyah garing keemasan dinikmati bersama lawar daging entog kelapa bakar parut dan sambal embe bawang goreng.'
      },
      traditionalHouse: {
        name: 'Puri Saren Agung (Istana Ubud)',
        description: 'Kompleks puri raja berarsitektur bata merah ukiran klasik bali dengan pintu Kori Agung berlapis prada emas tempat pagelaran seni tari setiap malam.'
      },
      artsAndMusic: {
        name: 'Gamelan Jegog & Seni Lukis Ubud Pita Maha',
        description: 'Aliran seni lukis kanvas detil kehidupan mistis Bali yayasan Pita Maha berpadu dentang bambu raksasa Jegog yang menggetarkan bumi.'
      }
    },
    destinations: [
      {
        name: 'Terasering Sawah Tegalalang (Subak)',
        category: 'Pemandangan Terasering Warisan UNESCO',
        description: 'Undak-undakan sawah hijau zamrud bertingkat dengan pohon kelapa menjulang dan sistem pengairan irigasi Subak yang berusia seribu tahun.',
        image: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=1200&q=80'
      },
      {
        name: 'Sacred Monkey Forest Sanctuary (Padangtegal)',
        category: 'Cagar Hutan & Suaka Primata Sakral',
        description: 'Hutan lindung rimbun bernuansa mistis dengan ratusan patung batu berlumut, jembatan naga, dan ratusan monyet abu-abu ekor panjang yang ramah.',
        image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80'
      },
      {
        name: 'Puri Saren Agung (Ubud Palace)',
        category: 'Istana Kerajaan Seni Budaya',
        description: 'Kediaman bersejarah keluarga kerajaan Ubud dengan taman lotus yang mempesona dan panggung terbuka tari Bali kelas dunia di bawah langit malam.',
        image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80'
      }
    ]
  },
  {
    id: 'mataram',
    name: 'Mataram',
    province: 'Nusa Tenggara Barat',
    region: 'Bali dan Nusa Tenggara',
    regionId: 'bali-nusa-tenggara',
    nickname: 'Kota Seribu Masjid',
    taglineEn: 'The Pearl of Lombok Island',
    coordinates: '8.5833° S, 116.1167° E',
    heroImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2560&q=85',
    fallbackHero: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=2560&q=85',
    shortDescription: 'Ibu kota Pulau Lombok di kaki Gunung Rinjani, berhias Islamic Center berkubah warna-warni megah, tenun ikat Sukarara, mutiara air laut, dan Ayam Taliwang pedas.',
    cultureBadges: ['Islamic Center Lombok', 'Tenun Sasak', 'Ayam Taliwang', 'Tari Gandrung Sasak', 'Peresean'],
    cultureAnimType: 'bali',
    accentColor: '#059669',
    about: {
      history: 'Pernah menjadi pusat kekuasaan Kerajaan Mataram Sasak dan terhubung erat dengan Dinasti Karangasem Bali. Nama Mataram diambil dari bahasa Sanskerta "Mata" (ibu) lambang kesuburan tanah bumi Sasak.',
      geography: 'Terletak di dataran pesisir barat Pulau Lombok menghadap Selat Lombok ke arah Gunung Agung Bali, dan berjarak dekat dari puncak megah Gunung Rinjani.',
      cultureCommunity: 'Suku Sasak yang religius dan menjunjung tinggi tradisi Islam Waktu Lima, hidup berdampingan secara harmonis dengan komunitas Bali Sasak dalam ikatan persaudaraan.',
      uniqueness: 'Masjid Hubbul Wathan Islamic Center dengan menara 99 meter lambang Asmaul Husna, pertarungan ksatria tongkat rotan Peresean, dan mutiara emas laut selatan.'
    },
    culture: {
      traditionalAttire: {
        name: 'Pegon Sasak & Lambung',
        description: 'Baju Pegon hitam beludru berlilit sabuk Leang dan Sapuk di kepala bagi pria Sasak, serta baju Lambung hitam tanpa lengan berlilit selendang songket Subahnale.'
      },
      traditionalWeapon: {
        name: 'Penyongket Rotan & Keris Sasak',
        description: 'Tongkat rotan Penjalin lentur bersanding perisai kulit sapi Ende dalam tradisi bela diri ksatria Peresean, serta keris Sasak bergagang kayu timaha.'
      },
      traditionalDance: {
        name: 'Tari Gandrung Sasak & Rudat',
        description: 'Tarian pergaulan Gandrung beriringan gamelan Redep bersahut-sahutan, serta Tari Rudat yang berakar pada shalawat pencak silat Arab-Melayu.'
      },
      signatureFood: {
        name: 'Ayam Taliwang & Plecing Kangkung',
        description: 'Ayam kampung muda dibakar berlumur sambal cabai rawit merah pedas, terasi bakar Lombok yang harum gurih, disajikan bersama kangkung air segar bertabur kacang tanah goreng.'
      },
      traditionalHouse: {
        name: 'Bale Tani & Bale Lumbung Sasak',
        description: 'Rumah panggung beratap jerami melengkung seperti lumbung beras dengan lantai tanah liat yang dirawat mengkilap menggunakan kotoran kerbau kering penolak nyamuk.'
      },
      artsAndMusic: {
        name: 'Gendang Beleq',
        description: 'Atraksi musik perkusi dua drum raksasa yang digantung di pundak para ksatria yang menari enerjik membakar semangat juang di medan perang.'
      }
    },
    destinations: [
      {
        name: 'Islamic Center Hubbul Wathan NTB',
        category: 'Landmark Kemegahan Religi Arsitektur',
        description: 'Masjid megah berornamen Sasak dengan kubah bercahaya lampu LED warna-warni di malam hari dan menara 99 meter yang menyajikan panorama 360 derajat kota Mataram.',
        image: 'https://images.unsplash.com/photo-1590076215667-875d4ef2d7ee?auto=format&fit=crop&w=1200&q=80'
      },
      {
        name: 'Taman Mayura & Bale Kambang',
        category: 'Situs Bersejarah Abad ke-18',
        description: 'Taman kerajaan peninggalan 1744 dengan kolam air teratai yang mengelilingi Bale Kambang pengadilan raja di bawah naungan pohon manggis rindang.',
        image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80'
      },
      {
        name: 'Pantai Senggigi & Pura Batu Bolong',
        category: 'Garis Pantai Sunset & Pura Karang',
        description: 'Teluk berpasir landai dengan pura Hindu di atas batu karang berlubang yang menjorok ke laut, menyajikan siluet matahari terbenam di balik Gunung Agung.',
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80'
      }
    ]
  },
  {
    id: 'kupang',
    name: 'Kupang',
    province: 'Nusa Tenggara Timur',
    region: 'Bali dan Nusa Tenggara',
    regionId: 'bali-nusa-tenggara',
    nickname: 'Kota Kasih',
    taglineEn: 'The Melodic Haven of Timor Island',
    coordinates: '10.1772° S, 123.6070° E',
    heroImage: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=2560&q=85',
    fallbackHero: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2560&q=85',
    shortDescription: 'Pintu gerbang eksotis Kepulauan Flobamora di Pulau Timor, rumah bagi petikan dawai magis alat musik Sasando daun lontar dan kelezatan Daging Se’i aroma kayu kosambi.',
    cultureBadges: ['Alat Musik Sasando', 'Kain Tenun Ikat NTT', 'Daging Se’i', 'Tari Caci', 'Topi Ti’i Langga'],
    cultureAnimType: 'bali',
    accentColor: '#ea580c',
    about: {
      history: 'Bermula dari pos perdagangan kayu cendana wangi yang diperebutkan bangsa Portugis dan VOC Belanda pada abad ke-17 di Teluk Kupang. Menjadi pusat administratif Pulau Timor dan kepulauan Sunda Kecil.',
      geography: 'Terletak di pesisir barat daya Pulau Timor mengelilingi Teluk Kupang yang tenang dengan panorama tebing karang kapur dan pantai-pantai eksotis menghadap Laut Sawu.',
      cultureCommunity: 'Peleburan suku Timor (Dawan), Rote, Sabu, Flores, dan Alor. Memiliki semboyan KASIH (Kupang Aman, Sehat, Indah, dan Harmonis) dengan tradisi toleransi antarumat beragama yang menjadi teladan bangsa.',
      uniqueness: 'Alat musik petik Sasando berdinding daun lontar dari Pulau Rote, topi anyaman unik Ti’i Langga berantena antena mirip topi koboi Meksiko, dan daging asap tradisional Se’i.'
    },
    culture: {
      traditionalAttire: {
        name: 'Tenun Ikat Rote & Topi Ti’i Langga',
        description: 'Kain tenun ikat bernuansa biru indigo dan merah tanah alam bermotif geometri hewan laut, disempurnakan topi anyaman daun lontar Ti’i Langga bercula khas.'
      },
      traditionalWeapon: {
        name: 'Sundu & Parang Taum',
        description: 'Senjata tikam Sundu melengkung bertuah gagang tanduk kerbau serta parang Taum pemotong kayu cendana dan pembuka kelapa hutan Timor.'
      },
      traditionalDance: {
        name: 'Tari Likurai & Tari Kebalai',
        description: 'Tarian sukacita kaum wanita menabuh gendang kecil di bawah ketiak mengiringi ksatria pulang dari medan laga, serta tari massal Kebalai bergandengan tangan melingkar.'
      },
      signatureFood: {
        name: 'Se’i Daging Sapi & Jagung Bose',
        description: 'Daging sapi pilihan yang diasap perlahan di atas bara kayu kosambi yang ditutup daun kosambi wangi, disajikan bersama sambal lu’at pedas asam jeruk nipis dan bubur jagung bose pulen.'
      },
      traditionalHouse: {
        name: 'Ume Kbubu & Rumah Lontar',
        description: 'Rumah bulat tradisional beratap ilalang bundar menyentuh tanah tanpa jendela sebagai perlindungan dari hembusan angin malam dan lumbung pangan.'
      },
      artsAndMusic: {
        name: 'Sasando Gong & Sasando Elektrik',
        description: 'Instrumen berdawai kawat yang dilingkupi wadah resonansi daun pohon lontar kipas karya maestro Arnoldus Janssen yang menghasilkan denting melodi surgawi.'
      }
    },
    destinations: [
      {
        name: 'Pantai Lasiana & Taman Pohon Lontar',
        category: 'Pantai Pesisir Karang Tropis',
        description: 'Pantai berpasir putih landai yang dinaungi ribuan pohon lontar dan pohon kelapa menjulang, tempat bersantai menikmati kelapa muda saat senja memerah di Teluk Kupang.',
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80'
      },
      {
        name: 'Gua Kristal Bolok',
        category: 'Kolam Alami Air Jernih Bawah Tanah',
        description: 'Kolam tersembunyi di dalam gua karst alami dengan air payau biru sebening kristal kaca yang berpendar memukau tersorot berkas sinar matahari siang.',
        image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80'
      },
      {
        name: 'Pantai Oetune',
        category: 'Gurun Pasir Pesisir Eksotis',
        description: 'Gundukan pasir gurun bergelombang halus mirip padang pasir Sahara di Afrika yang berbatasan langsung dengan ombak biru Laut Timor.',
        image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80'
      }
    ]
  },

  // ================= KALIMANTAN =================
  {
    id: 'pontianak',
    name: 'Pontianak',
    province: 'Kalimantan Barat',
    region: 'Kalimantan',
    regionId: 'kalimantan',
    nickname: 'Kota Khatulistiwa',
    taglineEn: 'The Equator City of the Mighty Kapuas',
    coordinates: '0.0000° N, 109.3333° E',
    heroImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=2560&q=85',
    fallbackHero: 'https://images.unsplash.com/photo-1578469550956-0e16b69c6a3d?auto=format&fit=crop&w=2560&q=85',
    shortDescription: 'Kota satu-satunya di dunia yang tepat dilintasi garis Khatulistiwa, titik bertemunya Sungai Kapuas terpanjang di Indonesia dengan kemegahan Istana Kadriah.',
    cultureBadges: ['Tugu Khatulistiwa', 'Sungai Kapuas', 'Kain Corak Insang', 'Sotong Pangkong', 'Tari Dayak Melayu'],
    cultureAnimType: 'kalimantan',
    accentColor: '#06b6d4',
    about: {
      history: 'Didirikan oleh Sultan Syarif Abdurrahman Alkadrie pada tanggal 23 Oktober 1771 di pertemuan Sungai Kapuas dan Sungai Landak. Membangun Istana Kadriah dan Masjid Jami sebagai pusat Kesultanan Pontianak.',
      geography: 'Tepat berada di garis lintang nol derajat bumi (khatulistiwa) di delta Sungai Kapuas, sungai terpanjang di Indonesia (1.143 km) yang bermuara ke Laut Natuna.',
      cultureCommunity: 'Peleburan harmonis tiga etnis besar yang disingkat "TIDAYU" (Tionghoa, Dayak, Melayu). Perayaan Cap Go Meh dengan atraksi ratusan naga naga dan parade Tatung kebal senjata tajam yang mendunia.',
      uniqueness: 'Fenomena Hari Kulminasi Matahari di Tugu Khatulistiwa ketika bayangan benda hilang tanpa bekas tepat di tengah hari, serta waterfront terpanjang Sungai Kapuas.'
    },
    culture: {
      traditionalAttire: {
        name: 'Tenun Corak Insang & King Baba Dayak',
        description: 'Kain tenun songket motif insang ikan belida khas kesultanan Melayu Pontianak, bersanding dengan rompi kulit kayu Kapuo King Baba suku Dayak berhias taring macan dahan.'
      },
      traditionalWeapon: {
        name: 'Mandau Dayak & Keris Alkadrie',
        description: 'Parang pusaka Mandau bertatahkan kuningan dengan hulu burung Enggang bersarung kayu dihiasi bulu burung ruai, serta keris berluk Melayu pesisir.'
      },
      traditionalDance: {
        name: 'Tari Monong & Tari Jepin Lembut',
        description: 'Tarian penyembuhan magis dukun Dayak pengusir wabah penyakit, berpadu dengan langkah gemulai Tari Jepin Melayu beriringan rebana marwas.'
      },
      signatureFood: {
        name: 'Bubur Pedas & Pisang Goreng Srikaya',
        description: 'Bubur beras sangrai tumbuk dimasak bersama 30 jenis sayuran rempah hutan dan daun kesum gurih, dinikmati bersama manisnya pisang kipas saus selai srikaya telur bebek legendaris.'
      },
      traditionalHouse: {
        name: 'Rumah Radakng (Betang Dayak)',
        description: 'Rumah panggung kayu ulin raksasa sepanjang 138 meter yang mampu menampung ratusan jiwa keluarga besar Dayak, lambang kebersamaan tertinggi.'
      },
      artsAndMusic: {
        name: 'Alat Musik Sape’ Dayak',
        description: 'Gitar kayu petik berukir motif Batang Garing khas suku pedalaman Dayak yang melantunkan nada-nada ritmis nan damai menyejukkan kalbu.'
      }
    },
    destinations: [
      {
        name: 'Tugu Khatulistiwa (Equator Monument)',
        category: 'Ikon Geografis Garis Nol Derajat',
        description: 'Monumen bersejarah yang menandai titik nol ekuator bumi tempat terjadinya fenomena bayangan tanpa bayangan saat titik kulminasi musim semi dan gugur.',
        image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80'
      },
      {
        name: 'Keraton Istana Kadriah Kesultanan Pontianak',
        category: 'Warisan Istana Kesultanan Melayu',
        description: 'Istana kayu belian (ulin) megah berwarna kuning keemasan peninggalan tahun 1771 yang menyimpan meriam kuno Prancis dan singgasana sultan.',
        image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80'
      },
      {
        name: 'Waterfront City Sungai Kapuas',
        category: 'Tepian Sungai Terpanjang Indonesia',
        description: 'Promenade tepi sungai terpanjang tempat bersantai menikmati hilir mudik kapal tongkang kayu dan pesona matahari terbenam di atas jembatan Kapuas.',
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80'
      }
    ]
  },
  {
    id: 'banjarmasin',
    name: 'Banjarmasin',
    province: 'Kalimantan Selatan',
    region: 'Kalimantan',
    regionId: 'kalimantan',
    nickname: 'Kota Seribu Sungai',
    taglineEn: 'The Floating River Paradise of South Borneo',
    coordinates: '3.3167° S, 114.5900° E',
    heroImage: 'https://images.unsplash.com/photo-1578469550956-0e16b69c6a3d?auto=format&fit=crop&w=2560&q=85',
    fallbackHero: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=2560&q=85',
    shortDescription: 'Kota Seribu Sungai di delta Sungai Barito dan Martapura, legendaris dengan pasar terapung perahu jukung, kain Sasirangan jelujur mistis, dan Soto Banjar.',
    cultureBadges: ['Pasar Terapung', 'Kain Sasirangan', 'Soto Banjar', 'Sungai Barito', 'Kesenian Madihin'],
    cultureAnimType: 'kalimantan',
    accentColor: '#eab308',
    about: {
      history: 'Pusat Kesultanan Banjar yang didirikan oleh Pangeran Samudera (Sultan Suriansyah) pada 24 September 1526 setelah memeluk Islam dengan bantuan Kesultanan Demak. Kota ini dibangun di atas jaringan ratusan kanal sungai.',
      geography: 'Berada di delta dataran aluvial rawa pasang surut di pertemuan Sungai Barito dan Martapura, berada di bawah permukaan laut saat pasang sehingga bertumpu pada arsitektur panggung.',
      cultureCommunity: 'Masyarakat suku Banjar yang ulung dalam berniaga air, taat beragama, ramah, dan piawai dalam seni tutur pantun humoris Madihin.',
      uniqueness: 'Pasar Terapung Lok Baintan dan Muara Kuin tempat bertransaksinya perahu-perahu kayu klotok dan jukung sejak fajar dengan koin barter kearifan lokal.'
    },
    culture: {
      traditionalAttire: {
        name: 'Kain Sasirangan & Bagajah Gamuling Baular Lulut',
        description: 'Kain tenun rintang celup Sasirangan bermotif gigi haruan dan naga balimbur penangkal bala penyakit, dipadukan busana pengantin bangsawan Banjar bertabur melati.'
      },
      traditionalWeapon: {
        name: 'Parang Bungkul & Sungga',
        description: 'Parang pendek Bungkul berlekuk tebal pembelah kayu ulin dan jebakan runcing Sungga yang ditanam pejuang Banjar menghalau tentara kolonial.'
      },
      traditionalDance: {
        name: 'Tari Baksa Kembang & Tari Radap Rahayu',
        description: 'Tarian putri keraton membawa untaian bogam bunga melati mawar harum menyambut tetamu agung sebagai wujud doa keberkahan dan ketenteraman.'
      },
      signatureFood: {
        name: 'Soto Banjar Asli & Ketupat Kandangan',
        description: 'Soto ayam kampung berkuah bening gurih susu dan telur bebek dengan aroma pekat rempah kapulaga, kayu manis, cengkeh, perkedel singkong, dan sate Banjar manis.'
      },
      traditionalHouse: {
        name: 'Rumah Bubungan Tinggi Banjar',
        description: 'Rumah panggung kayu ulin tahan air beratap bubungan curam 45 derajat menyerupai piramida bersayap anjung kembar tempat tahta sultan.'
      },
      artsAndMusic: {
        name: 'Seni Tutur Madihin & Musik Panting',
        description: 'Seni sastra lisan berpantun spontan jenaka yang dilantunkan seniman Madihin sembari memukul gendang terbang rebana kecil berkaki satu.'
      }
    },
    destinations: [
      {
        name: 'Pasar Terapung Lok Baintan (Sungai Martapura)',
        category: 'Pasar Terapung Tradisional Dunia',
        description: 'Ratusan pedagang wanita mengenakan caping purun tanggui menjual sayur, buah rambutan, dan kue tradisional di atas perahu jukung kayu di kala fajar menyingsing.',
        image: 'https://images.unsplash.com/photo-1578469550956-0e16b69c6a3d?auto=format&fit=crop&w=1200&q=80'
      },
      {
        name: 'Menara Pandang Siring Sungai Martapura',
        category: 'Ikon Pariwisata Tepian Air',
        description: 'Menara empat lantai di tepi sungai berhadapan dengan patung maskot bekantan perunggu raksasa yang menyemburkan air mirip Merlion Singapura.',
        image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80'
      },
      {
        name: 'Pusat Penggosokan Intan Martapura',
        category: 'Sentra Permata Berlian Terbesar',
        description: 'Sentra kerajinan batu mulia intan berlian alami Kalimantan yang digosok secara presisi tradisional oleh tangan-tangan ahli berpengalaman.',
        image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80'
      }
    ]
  },
  {
    id: 'samarinda',
    name: 'Samarinda',
    province: 'Kalimantan Timur',
    region: 'Kalimantan',
    regionId: 'kalimantan',
    nickname: 'Kota Tepian',
    taglineEn: 'The Historic Riverfront of East Kalimantan',
    coordinates: '0.5022° S, 117.1536° E',
    heroImage: 'https://images.unsplash.com/photo-1590076215667-875d4ef2d7ee?auto=format&fit=crop&w=2560&q=85',
    fallbackHero: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2560&q=85',
    shortDescription: 'Ibu kota Kalimantan Timur di kelokan megah Sungai Mahakam, terkenal dengan Sarung Samarinda tenun alat gedokan, pesut air tawar langka, dan Masjid Islamic Center.',
    cultureBadges: ['Sarung Samarinda', 'Sungai Mahakam', 'Masjid Baitul Muttaqien', 'Pesut Mahakam', 'Dayak Kenyah'],
    cultureAnimType: 'kalimantan',
    accentColor: '#10b981',
    about: {
      history: 'Bermula dari pemukiman rombongan orang Bugis Wajo pimpinan La Mohang Daeng Mangkona pada tahun 1668 yang diberi tanah oleh Sultan Kutai Kartanegara di tepi Sungai Mahakam. Nama Samarinda berasal dari posisi rumah panggung rakit yang "sama rendah".',
      geography: 'Membentang di kedua sisi Sungai Mahakam yang berliku lebar sebelum bermuara di delta Selat Makassar, dikelilingi perbukitan hijau tropis.',
      cultureCommunity: 'Akulturasi erat suku Kutai, Dayak pedalaman, dan Bugis perantau. Dikenal dengan keramahan masyarakat tepian sungai dan kerajinan tenun sarung benang sutra.',
      uniqueness: 'Masjid Islamic Center Samarinda berlantai tujuh dengan tujuh menara yang menjadi salah satu masjid termegah di Asia Tenggara, serta habitat mamalia air lumba-lumba Pesut Mahakam.'
    },
    culture: {
      traditionalAttire: {
        name: 'Sarung Tenun Samarinda & Busana Ta’a Dayak',
        description: 'Sarung tenun sutra motif kotak Belobang dan Kamantis alat tenun bukan mesin (ATBM), bersanding busana manik-manik Ta’a Dayak Kenyah bermahkota bulu Enggang.'
      },
      traditionalWeapon: {
        name: 'Mandau Ilang & Gayang',
        description: 'Mandau bertatahkan permata mata burung dengan sarung kayu berhias anyaman rotan simpai merah serta pisau kecil penyerut Langgei.'
      },
      traditionalDance: {
        name: 'Tari Kancet Papatai & Tari Burung Enggang',
        description: 'Tarian perang akrobatik ksatria Dayak bersenjata mandau dan telawang perisai kayu, bersanding gemulai penari wanita menirukan keanggunan burung Enggang suci.'
      },
      signatureFood: {
        name: 'Nasi Bekepor & Gence Ruan',
        description: 'Nasi gurih masak kuali daun salam dan rempah peninggalan Kerajaan Kutai, disajikan bersama ikan gabus bakar siram saus sambal gence goreng pedas manis.'
      },
      traditionalHouse: {
        name: 'Lamin Dayak Kenyah (Pampang)',
        description: 'Rumah panggung kayu ulin panjang berukir sulur naga kalung dan patung Blontang penjaga di Desa Budaya Pampang.'
      },
      artsAndMusic: {
        name: 'Gamelan Kutai Sukma & Sape’',
        description: 'Kolaborasi musik tradisional keraton Kutai berpadu petikan sape kayu meranti yang mengalun menembus sunyinya rimba Mahakam.'
      }
    },
    destinations: [
      {
        name: 'Masjid Islamic Center Baitul Muttaqien',
        category: 'Ikon Kemegahan Religi Tepi Mahakam',
        description: 'Masjid agung berarsitektur megah Timur Tengah dan Eropa dengan menara utama setinggi 99 meter yang menjulang di tepi perairan Sungai Mahakam.',
        image: 'https://images.unsplash.com/photo-1590076215667-875d4ef2d7ee?auto=format&fit=crop&w=1200&q=80'
      },
      {
        name: 'Desa Budaya Dayak Pampang',
        category: 'Desa Konservasi Adat Dayak Kenyah',
        description: 'Pusat kebudayaan suku Dayak Kenyah tempat menyaksikan wanita bertelinga panjang bertindik anting kuningan berat dan atraksi tarian perang di rumah adat Lamin.',
        image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80'
      },
      {
        name: 'Pelayaran Susur Sungai Mahakam',
        category: 'Wisata Pesiar Sungai Senja',
        description: 'Menyusuri perairan Mahakam dengan kapal pesiar wisata dua lantai melintasi jembatan Mahakam bercahaya lampu temaram di kala senja.',
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80'
      }
    ]
  },
  {
    id: 'balikpapan',
    name: 'Balikpapan',
    province: 'Kalimantan Timur',
    region: 'Kalimantan',
    regionId: 'kalimantan',
    nickname: 'Kota Minyak / Banua Patra',
    taglineEn: 'The Pristine Coastal Gateway to Nusantara',
    coordinates: '1.2379° S, 116.8289° E',
    heroImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2560&q=85',
    fallbackHero: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=2560&q=85',
    shortDescription: 'Kota pesisir modern terbersih dan teratur di Indonesia, gerbang utama menuju Ibu Kota Nusantara (IKN), tempat suaka beruang madu dan pesona pantai Selat Makassar.',
    cultureBadges: ['Beruang Madu', 'Hutan Lindung Sungai Wain', 'Pantai Kemala', 'Kepiting Dandito', 'IKN Gateway'],
    cultureAnimType: 'kalimantan',
    accentColor: '#0284c7',
    about: {
      history: 'Bermula dari penemuan sumur minyak Mathilda oleh insinyur JH Menten pada 10 Februari 1897. Balikpapan berkembang pesat menjadi kota industri pengilangan minyak terdepan di Indonesia.',
      geography: 'Terletak di pesisir timur Kalimantan berhadapan langsung dengan Selat Makassar, memiliki kontur perbukitan bergelombang yang tertata hijau asri (85% berbukit).',
      cultureCommunity: 'Kota multikultural modern yang tertib dan ramah lingkungan, dihuni suku Paser, Banjar, Bugis, Jawa, dan Dayak. Kerap meraih penghargaan Adipura Kencana sebagai kota terbersih.',
      uniqueness: 'Pusat konservasi Beruang Madu (maskot resmi kota) di KWPLH KM 28, hutan kanopi jembatan gantung Bukit Bangkirai, dan kuliner kepiting saus lada hitam legendaris.'
    },
    culture: {
      traditionalAttire: {
        name: 'Busana Adat Paser & Baju Kustin',
        description: 'Baju adat suku Paser pesisir berhias manik cangkang kerang dan bordir benang emas, dipadu baju Kustin kebesaran bangsawan kesultanan Kutai.'
      },
      traditionalWeapon: {
        name: 'Sumpit Dayak (Kelepang) & Mandau',
        description: 'Pipa tiup bambu bulat panjang Kelepang bermata tombak dengan anak sumpit damak beracun getah pohon ipuh yang sunyi mematikan bagi buruan rimba.'
      },
      traditionalDance: {
        name: 'Tari Ronggeng Paser & Tari Jepen',
        description: 'Tarian riang pergaulan muda-mudi suku Paser berirama giring-giring bambu dan suling gambus pesisir Selat Makassar.'
      },
      signatureFood: {
        name: 'Kepiting Lada Hitam Dandito & Mantau Balikpapan',
        description: 'Kepiting bakau segar berukuran jumbo dimasak berlumur saus lada hitam kental pedas manis, disantap bersama roti mantau lembut goreng keemasan.'
      },
      traditionalHouse: {
        name: 'Rumah Adat Paser (Kuta Karau)',
        description: 'Rumah panggung kayu beratap sirap ulin dengan ukiran flora burung enggang yang tahan menghadapi kelembapan udara laut pesisir.'
      },
      artsAndMusic: {
        name: 'Gambus Selat Makassar',
        description: 'Alunan petikan dawai gambus petik yang menyatu dengan tiupan angin laut pesisir pantai Kemala mengiringi pantun persahabatan.'
      }
    },
    destinations: [
      {
        name: 'Kawasan Wisata Pendidikan Lingkungan Hidup (KWPLH)',
        category: 'Suaka Konservasi Beruang Madu',
        description: 'Pusat suaka alami beruang madu terbesar di dunia yang menyajikan jalan titian kayu di tengah hutan primer lindung untuk mengamati perilaku satwa langka.',
        image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80'
      },
      {
        name: 'Canopy Bridge Bukit Bangkirai',
        category: 'Jembatan Gantung Tajuk Pohon Tropis',
        description: 'Jembatan jaring tali gantung sepanjang 64 meter yang membentang di antara puncak pohon Bangkirai raksasa pada ketinggian 30 meter di atas tanah.',
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80'
      },
      {
        name: 'Pantai Kemala & Pantai Melawai',
        category: 'Pesona Senja Pesisir Modern',
        description: 'Garis pantai berpasir landai dengan cafe-cafe tepi pantai tempat menikmati sunset sambil memandang kilauan lampu kapal tanker raksasa di laut lepas.',
        image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80'
      }
    ]
  },

  // ================= SULAWESI =================
  {
    id: 'makassar',
    name: 'Makassar',
    province: 'Sulawesi Selatan',
    region: 'Sulawesi',
    regionId: 'sulawesi',
    nickname: 'Kota Daeng / Ujung Pandang',
    taglineEn: 'The Maritime Hub of the Brave Pinisi Builders',
    coordinates: '5.1477° S, 119.4327° E',
    heroImage: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=2560&q=85',
    fallbackHero: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2560&q=85',
    shortDescription: 'Ibu kota maritim Pulau Sulawesi, tanah pelaut ulung perahu layar Pinisi yang mengarungi lima samudra, benteng Fort Rotterdam, dan semangkuk Coto Makassar gurih.',
    cultureBadges: ['Perahu Pinisi', 'Baju Bodo', 'Coto Makassar', 'Fort Rotterdam', 'Pantai Losari'],
    cultureAnimType: 'sulawesi',
    accentColor: '#f97316',
    about: {
      history: 'Pusat Kesultanan Gowa-Tallo yang masyhur pada abad ke-16 di bawah kepemimpinan Sultan Hasanuddin "Ayam Jantan dari Timur". Armada laut Bugis-Makassar terkenal sebagai penguasa samudra penjelajah benua Australia hingga Afrika.',
      geography: 'Terletak di pesisir barat daya Semenanjung Sulawesi Selatan menghadap ke Selat Makassar, menjadi pintu gerbang logistik dan transit utama Kawasan Timur Indonesia.',
      cultureCommunity: 'Masyarakat Bugis, Makassar, Toraja, dan Mandar yang memegang teguh falsafah "Siri’ na Pacce" (kehormatan, harga diri, dan empati solidaritas kemanusiaan tertinggi).',
      uniqueness: 'Mahakarya pembuatan perahu layar tradisional Pinisi yang diakui UNESCO, sunset merah tembaga di Pantai Losari, dan benteng penyu Fort Rotterdam.'
    },
    culture: {
      traditionalAttire: {
        name: 'Baju Bodo & Jas Tutu’ Patonro',
        description: 'Baju Bodo kain kasa sutra tertua di dunia berwarna merah ungu jingga berselendang cura’ sabbe, berpadu jas Tutu’ hitam kancing emas dan peci Patonro.'
      },
      traditionalWeapon: {
        name: 'Badik Makassar (Gecong) & Kawali',
        description: 'Bilah senjata tikam Badik berpamor pamor pamelen yang diselipkan di pinggang kiri lambang kehormatan dan pelindung keluarga.'
      },
      traditionalDance: {
        name: 'Tari Pakarena & Tari Paduppa',
        description: 'Tarian kipas sutra berputar lambat lembut penuh kesabaran wanita bangsawan Bugis-Makassar diiringi dentuman genderang Gandrang yang menggelegar cepat.'
      },
      signatureFood: {
        name: 'Coto Makassar & Konro Bakar',
        description: 'Sup jeroan dan daging sapi empuk berkuah kacang tanah sangrai giling gurih rempah pala serai dimasak dalam kuali tanah liat, disantap bersama ketupat daun pandan dan iga bakar Konro berbumbu kluwek.'
      },
      traditionalHouse: {
        name: 'Balla Lompoa & Rumah Panggung Saoraja',
        description: 'Istana kayu ulin raksasa bertingkat dengan tangga depan bermayap kembar dan atap timpalaja bersusun lima tingkatan derajat kebangsawanan.'
      },
      artsAndMusic: {
        name: 'Gendang Gandrang & Pui-Pui',
        description: 'Genderang Gandrang bertalu-talu berpadu tiupan terompet Pui-Pui yang meliuk bersemangat mengiringi ritual sakral kelautan.'
      }
    },
    destinations: [
      {
        name: 'Benteng Fort Rotterdam (Benteng Ujung Pandang)',
        category: 'Benteng Bersejarah Bentuk Penyu',
        description: 'Benteng batu padas peninggalan Kerajaan Gowa 1545 yang menyerupai penyu merayap ke laut, menyimpan naskah epos I La Galigo terpanjang di dunia.',
        image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80'
      },
      {
        name: 'Pantai Losari & Masjid Terapung Amirul Mukminin',
        category: 'Ikon Senja Pesisir Selat Makassar',
        description: 'Anjungan tepi laut tempat berkumpulnya warga menikmati indahnya matahari terbenam sembari menyantap pisang epe bakar saus gula merah durian.',
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80'
      },
      {
        name: 'Taman Nasional Bantimurung & Karst Rammang-Rammang',
        category: 'Geopark Karst Dunia & Lembah Kupu-Kupu',
        description: 'Gugusan tebing karst menara batu kapur tertinggi kedua di dunia dengan sungai tenang berlukiskan perahu jukung dan gua prasejarah cap tangan purba.',
        image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80'
      }
    ]
  },
  {
    id: 'manado',
    name: 'Manado',
    province: 'Sulawesi Utara',
    region: 'Sulawesi',
    regionId: 'sulawesi',
    nickname: 'Kota Tinutuan / Kota Tinondok',
    taglineEn: 'The Underwater Eden of North Sulawesi',
    coordinates: '1.4748° N, 124.8428° E',
    heroImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=2560&q=85',
    fallbackHero: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2560&q=85',
    shortDescription: 'Kota di bibir teluk tropis yang menghadap ke surga terumbu karang laut dunia Taman Nasional Bunaken, terkenal dengan keramahan "Torang Samua Basudara" dan Bubur Manado.',
    cultureBadges: ['Taman Nasional Bunaken', 'Tinutuan', 'Alat Musik Kolintang', 'Tari Maengket', 'Klappertaart'],
    cultureAnimType: 'sulawesi',
    accentColor: '#0ea5e9',
    about: {
      history: 'Tercatat dalam dokumen penjelajah Portugis dan Spanyol sejak abad ke-16. Berdiri resmi pada 10 Juli 1623, Manado menjadi pusat perdagangan kopra dan rempah di utara Sulawesi dengan perpaduan budaya Minahasa dan Eropa.',
      geography: 'Dikelilingi kawasan perbukitan hijau dan gunung berapi aktif Lokon-Mahawu, menghadap langsung ke Teluk Manado dengan pulau vulkanik Manado Tua yang menjulang simetris di tengah laut.',
      cultureCommunity: 'Suku Minahasa yang ramah, menjunjung tinggi toleransi kerukunan umat beragama melalui semboyan "Torang Samua Basudara" dan filosofi Sam Ratulangi "Si Tou Timou Tumou Tou" (manusia baru bermakna jika memanusiakan orang lain).',
      uniqueness: 'Dinding tebing karang laut vertikal Bunaken dengan keanekaragaman biota laut tertinggi dunia, Patung Yesus Memberkati tertinggi kedua di Asia, dan denting merdu Kolintang kayu cempaka.'
    },
    culture: {
      traditionalAttire: {
        name: 'Baju Karai & Tonaas Wangko Minahasa',
        description: 'Baju hitam berhias sulaman rumbai merah benang emas bertopi Porong burung Manguni (burung hantu suci) lambang kearifan para tetua adat Minahasa.'
      },
      traditionalWeapon: {
        name: 'Santi & Pedang Bara Sangihe',
        description: 'Pedang perang bermata lurus Santi dengan sarung kayu ukiran kepala naga pelindung ksatria Minahasa pada masa perang perlawanan.'
      },
      traditionalDance: {
        name: 'Tari Kabasaran & Tari Maengket',
        description: 'Tarian ksatria perang Kabasaran berpakaian merah garang membelalakkan mata sembari mengacungkan pedang dan tamis, berpadu Tari Maengket ucapan syukur panen raya.'
      },
      signatureFood: {
        name: 'Bubur Tinutuan & Cakalang Fufu',
        description: 'Bubur jagung kuning labu kuning kangkung bayam daun kemangi wangi dinikmati bersama ikan asin goreng renyah dan sambal dabu-dabu iris pedas segar, serta ikan cakalang asap merah.'
      },
      traditionalHouse: {
        name: 'Rumah Panggung Woloan',
        description: 'Rumah kayu panggung knock-down bongkar pasang dari kayu cempaka dan aliwowos buatan perajin desa Woloan yang diekspor ke berbagai belahan dunia.'
      },
      artsAndMusic: {
        name: 'Alat Musik Kolintang Kayu & Musik Bambu',
        description: 'Ansambel perkusi bilah kayu cempaka bertangga nada diatonis karya maestro Minahasa yang menghasilkan alunan musik ceria berkelas orkestra simfoni.'
      }
    },
    destinations: [
      {
        name: 'Taman Nasional Bunaken',
        category: 'Ikon Surga Bawah Laut Dunia',
        description: 'Dinding terumbu karang vertikal spektakuler berkedalaman ratusan meter yang dihuni ribuan spesies ikan terumbu karang warna-warni dan penyu sisik raksasa.',
        image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80'
      },
      {
        name: 'Danau Linow Tomohon',
        category: 'Danau Hidrotermal Tiga Warna',
        description: 'Danau vulkanik unik di dataran tinggi Tomohon yang dapat berubah warna dari hijau toska, biru tua, hingga cokelat akibat pantulan gas belerang alami.',
        image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80'
      },
      {
        name: 'Jembatan Soekarno & Kawasan Boulevard',
        category: 'Landmark Arsitektur Maritim',
        description: 'Jembatan kabel pancang megah sepanjang 1.127 meter yang melintasi muara pelabuhan dengan latar siluet megah Gunung Manado Tua di tengah laut.',
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80'
      }
    ]
  },
  {
    id: 'palu',
    name: 'Palu',
    province: 'Sulawesi Tengah',
    region: 'Sulawesi',
    regionId: 'sulawesi',
    nickname: 'Kota Teluk Lima Dimensi',
    taglineEn: 'The Five-Dimensional Haven of Central Sulawesi',
    coordinates: '0.9000° S, 119.8707° E',
    heroImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2560&q=85',
    fallbackHero: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=2560&q=85',
    shortDescription: 'Kota berpanorama lima dimensi di ujung teluk sempit yang dikelilingi lembah pegunungan, rumah bagi suku Kaili, kain tenun Donggala, dan gurihnya Kaledo.',
    cultureBadges: ['Tenun Donggala', 'Kaledo', 'Souraja', 'Tari Dero', 'Guma Kaili'],
    cultureAnimType: 'sulawesi',
    accentColor: '#059669',
    about: {
      history: 'Bermula dari persekutuan empat kampung adat suku Kaili yang tergabung dalam Patanggota. Kota Palu berkembang di muara Sungai Palu yang bermuara ke Teluk Palu yang dalam.',
      geography: 'Memiliki bentang alam unik yang dijuluki "Kota Lima Dimensi" karena mencakup lembah, lautan teluk, sungai yang membelah kota, pegunungan hijau, dan telaga.',
      cultureCommunity: 'Suku Kaili yang memegang adat "Nosarara Nosabatutu" (bersaudara dan bersatu). Terkenal dengan ketangguhan rakyatnya bangkit kembali pasca bencana alam.',
      uniqueness: 'Sop Kaledo (Kaki Lembu Donggala) sumsum tulang sapi berbumbu asam jawa mentah yang dimakan menggunakan sedotan, dan tenun sutra Donggala halus.'
    },
    culture: {
      traditionalAttire: {
        name: 'Baju Nggembe & Baju Koje',
        description: 'Baju longgar tanpa lengan Nggembe berbahan serat kain tenun bersulam payet emas berpadu sarung Donggala bermotif kombinasi bunga teratai.'
      },
      traditionalWeapon: {
        name: 'Guma Kaili & Pasatimpo',
        description: 'Pedang panjang pusaka Guma bergagang kayu hitam bertatahkan perak yang melambangkan keberanian ksatria penjaga tanah Tadulako.'
      },
      traditionalDance: {
        name: 'Tari Pontanu & Tari Dero',
        description: 'Tarian gerak menenun kain sutra Pontanu yang lemah gemulai, bersanding tarian massal Dero bergandengan tangan melingkar ungkapan persaudaraan sejati.'
      },
      signatureFood: {
        name: 'Kaledo & Uta Kelo',
        description: 'Sup tulang kaki sapi berlemak gurih asam pedas asam jawa mentah dinikmati menyedot sumsum gurihnya bersama singkong kukus, serta sayur daun kelor kuah santan santai.'
      },
      traditionalHouse: {
        name: 'Souraja (Banua Mbaso)',
        description: 'Rumah panggung kayu raja Kaili beratap piramida bertingkat tiga yang ditopang puluhan pilar kayu bulat tanpa paku tahan goncangan gempa bumi.'
      },
      artsAndMusic: {
        name: 'Musik Kakula & Lalove',
        description: 'Ansambel gong kecil kuningan Kakula yang dimainkan wanita adat dipadu tiupan seruling bambu panjang Lalove pemanggil sukma damai.'
      }
    },
    destinations: [
      {
        name: 'Kawasan Teluk Palu & Jembatan Ponulele Baru',
        category: 'Pesona Lanskap Teluk & Senja Pegunungan',
        description: 'Garis pantai teluk tempat berkumpulnya warga menikmati kuliner pisang gepe dan pemandangan pegunungan Gawalise yang menjulang kokoh.',
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80'
      },
      {
        name: 'Pusat Laut Donggala (Pusentasi)',
        category: 'Sumur Laut Alami Raksasa',
        description: 'Sumur gua karang raksasa alami sedalam 7 meter berdiameter 10 meter berisi air laut biru bening yang terhubung ke laut lepas lewat terowongan bawah tanah.',
        image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80'
      },
      {
        name: 'Lembah Megalitikum Napu & Besoa',
        category: 'Situs Arca Batu Megalitikum Tertua',
        description: 'Situs purbakala berjarak dari Palu yang menyimpan ratusan patung megalitikum misterius berusia ribuan tahun di tengah padang sabana hijau.',
        image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80'
      }
    ]
  },
  {
    id: 'kendari',
    name: 'Kendari',
    province: 'Sulawesi Tenggara',
    region: 'Sulawesi',
    regionId: 'sulawesi',
    nickname: 'Kota Lulo',
    taglineEn: 'The Silver Haven of Southeast Sulawesi',
    coordinates: '3.9985° S, 122.5126° E',
    heroImage: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=2560&q=85',
    fallbackHero: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2560&q=85',
    shortDescription: 'Kota di pesisir Teluk Kendari yang tenang, tanah peradaban suku Tolaki dengan tarian persaudaraan Molulo, kerajinan perak filigri kendari yang rumit, dan lezatnya Sinonggi.',
    cultureBadges: ['Tari Molulo', 'Sinonggi Sagu', 'Jembatan Teluk Kendari', 'Kerajinan Perak', 'Kalo Sara'],
    cultureAnimType: 'sulawesi',
    accentColor: '#6366f1',
    about: {
      history: 'Dibuka oleh pelaut Belanda Jacques Nicolas Vosmaer pada tahun 1831 sebagai pusat perdagangan di pesisir timur jazirah tenggara Sulawesi. Berkembang dari perkampungan adat suku Tolaki.',
      geography: 'Mengitari perairan Teluk Kendari yang menyerupai kantong alami terlindung dari gelombang laut ganas Laut Banda.',
      cultureCommunity: 'Suku Tolaki yang berpegang pada filosofi suci "Kalo Sara" (lingkaran rotan simbol hukum adat perdamaian, persatuan, dan kehormatan). Menghargai kebersamaan dalam tradisi tari Lulo.',
      uniqueness: 'Jembatan Teluk Kendari sepanjang 1,34 km yang menghubungkan dua sisi teluk, kerajinan anyaman benang perak filigri halus legendaris, dan makanan khas Sinonggi sagu.'
    },
    culture: {
      traditionalAttire: {
        name: 'Babu Nggawi & Paburata Tolaki',
        description: 'Baju atasan sutra merah jingga Babu Nggawi berlengan pendek dihiasi manik emas bersarung tenun Tolaki bermotif sulur pakis paku.'
      },
      traditionalWeapon: {
        name: 'Taawu & Tolo-Tolo',
        description: 'Pedang panjang Taawu pusaka ksatria Tamalaki bertatahkan perak dengan ujung mekar serta perisai kayu penangkis serangan musuh.'
      },
      traditionalDance: {
        name: 'Tari Molulo (Lulo) & Mondotambe',
        description: 'Tarian persahabatan massal tangan bertaut jari saling bergandengan membentuk lingkaran raksasa mengikuti irama tabuhan gong bertempo naik.'
      },
      signatureFood: {
        name: 'Sinonggi & Kasoami',
        description: 'Olahan sari pati sagu kenyal yang dipilin menggunakan sumpit bambu o-sange dicelupkan ke dalam kuah bening ikan kakap palumara rempah kunyit asam segar.'
      },
      traditionalHouse: {
        name: 'Laika Mbu’u (Rumah Adat Tolaki)',
        description: 'Rumah panggung kayu beratap ijuk rumbia tinggi dengan hiasan tanduk kerbau di pucuk bubungan lambang kemakmuran dan kekeluargaan.'
      },
      artsAndMusic: {
        name: 'Gong Tawa-Tawa & Ore-Ore Nggola',
        description: 'Sepasang gong tembaga Tawa-Tawa bersahut-sahutan mengiringi tarian Lulo bersama petikan dawai bambu Ore-Ore yang syahdu.'
      }
    },
    destinations: [
      {
        name: 'Jembatan Teluk Kendari',
        category: 'Ikon Megastruktur Pesisir',
        description: 'Jembatan kabel pancang megah sepanjang 1.348 meter yang melintasi Teluk Kendari, menyajikan pemandangan spektakuler perahu nelayan saat matahari terbenam.',
        image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80'
      },
      {
        name: 'Pulau Labengki (Raja Ampat-nya Sulawesi)',
        category: 'Gugusan Pulau Karang Bahari Tersembunyi',
        description: 'Kepulauan teluk karang karst dengan laguna air asin berbentuk hati (Teluk Cinta) dan habitat kima raksasa (giant clam) air laut toska.',
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80'
      },
      {
        name: 'Masjid Al-Alam (Masjid Terapung Kendari)',
        category: 'Arsitektur Religi Tengah Laut',
        description: 'Masjid berkubah biru megah yang dibangun di atas pulau reklamasi di tengah Teluk Kendari dengan menara berbentuk mirip hotel Burj Al Arab Dubai.',
        image: 'https://images.unsplash.com/photo-1590076215667-875d4ef2d7ee?auto=format&fit=crop&w=1200&q=80'
      }
    ]
  },
  {
    id: 'gorontalo',
    name: 'Gorontalo',
    province: 'Gorontalo',
    region: 'Sulawesi',
    regionId: 'sulawesi',
    nickname: 'Kota Serambi Madinah',
    taglineEn: 'The Gentle Gem of Tomini Bay',
    coordinates: '0.5435° N, 123.0568° E',
    heroImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2560&q=85',
    fallbackHero: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=2560&q=85',
    shortDescription: 'Kota bersejarah di pesisir Teluk Tomini, berjuluk Serambi Madinah dengan warisan benteng kolosal Otanaha, sulaman Karawo yang rumit, dan wisata Hiu Paus ramah.',
    cultureBadges: ['Sulaman Karawo', 'Benteng Otanaha', 'Binte Biluhuta', 'Hiu Paus Botubarani', 'Tari Dana-Dana'],
    cultureAnimType: 'sulawesi',
    accentColor: '#14b8a6',
    about: {
      history: 'Salah satu kota peradaban Islam tertua di semenanjung utara Sulawesi, terkenal dengan perserikatan lima kerajaan persaudaraan "U Duluwo Limo Lo Pohalaa". Mendeklarasikan kemerdekaan lebih awal pada 23 Januari 1942 di bawah pimpinan pahlawan nasional Nani Wartabone.',
      geography: 'Diapit oleh perairan Teluk Tomini yang tenang di selatan dan Laut Sulawesi di utara, serta dialiri Sungai Bone dan Bolango.',
      cultureCommunity: 'Masyarakat Gorontalo memegang teguh semboyan "Adati hula-hulaa to Saraa, Saraa hula-hulaa to Kuru’ani" (Adat bersendi syara’, syara’ bersendi Al-Qur’an).',
      uniqueness: 'Interaksi langsung menyelam bersama kawanan Hiu Paus (Whaleshark) liar di perairan tenang Botubarani, dan kain sulaman benang cabut Karawo yang membutuhkan ketelitian berminggu-minggu.'
    },
    culture: {
      traditionalAttire: {
        name: 'Bili’u & Paluwala Gorontalo',
        description: 'Baju kebesaran pengantin wanita Bili’u warna hijau ungu bersulam emas dengan delapan hiasan mahkota Tuhi-Tuhi melambangkan delapan sifat kebajikan wanita.'
      },
      traditionalWeapon: {
        name: 'Wamilo & Sabele',
        description: 'Parang pusaka Wamilo berbilah melengkung ujung runcing bersarung kayu kuning yang diselipkan di balik sabuk kebesaran para ksatria Linula.'
      },
      traditionalDance: {
        name: 'Tari Dana-Dana & Tari Saronde',
        description: 'Tarian gembira lincah pergaulan muda-mudi Dana-Dana berirama gambus Arab-Melayu, serta Tari Saronde dengan selendang putih saat malam pertunangan.'
      },
      signatureFood: {
        name: 'Binte Biluhuta & Ayam Iloni',
        description: 'Sup jagung manis pipil berpadu suwiran daging ikan cakalang asap, parutan kelapa muda, daun kemangi, dan perasan jeruk nipis pedas segar, serta ayam bakar iloni kuah santan rempah.'
      },
      traditionalHouse: {
        name: 'Dulohupa (Yiladia Dulohupa)',
        description: 'Rumah panggung kayu beratap pelana bertingkat dua dengan pilar-pilar penyangga bulat tempat para tetua menggelar musyawarah adat mufakat.'
      },
      artsAndMusic: {
        name: 'Musik Polopalo & Gambusi',
        description: 'Instrumen idiofon bambu Polopalo yang dipukulkan ke lutut menghasilkan bunyi berdetak ritmis memikat pengiring tembang syair pantun.'
      }
    },
    destinations: [
      {
        name: 'Benteng Otanaha',
        category: 'Benteng Bersejarah Abad ke-16',
        description: 'Tiga benteng batu kapur peninggalan Raja Ilato 1522 di atas puncak bukit yang direkatkan menggunakan putih telur burung Maleo, memandang Danau Limboto yang luas.',
        image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80'
      },
      {
        name: 'Pantai Botubarani (Wisata Hiu Paus)',
        category: 'Konservasi & Interaksi Hiu Paus Liar',
        description: 'Hanya berjarak beberapa meter dari bibir pantai, wisatawan dapat menyaksikan dan berenang snorkeling bersama kawanan raksasa jinak Hiu Paus di perairan Teluk Tomini.',
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80'
      },
      {
        name: 'Taman Laut Olele',
        category: 'Surga Snorkeling Koral Unik Salvador Dali',
        description: 'Perairan tenang berair sebening kaca kristal dengan formasi spons karang langka berbentuk mirip lukisan surealis pelukis Salvador Dali.',
        image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80'
      }
    ]
  },

  // ================= MALUKU =================
  {
    id: 'ambon',
    name: 'Ambon',
    province: 'Maluku',
    region: 'Maluku',
    regionId: 'maluku',
    nickname: 'Ambon Manise',
    taglineEn: 'The Melodious City of Music in the Spice Islands',
    coordinates: '3.6954° S, 128.1814° E',
    heroImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2560&q=85',
    fallbackHero: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=2560&q=85',
    shortDescription: 'Kota Manise yang diakui UNESCO sebagai Kota Musik Dunia, pusat sejarah jalur rempah cengkeh dan pala, dihiasi Teluk Ambon nan molek dan Jembatan Merah Putih.',
    cultureBadges: ['UNESCO City of Music', 'Pela Gandong', 'Kain Cele', 'Jembatan Merah Putih', 'Tari Cakalele'],
    cultureAnimType: 'maluku',
    accentColor: '#ef4444',
    about: {
      history: 'Dibangun di sekitar Benteng Victoria peninggalan Portugis pada tahun 1575 yang kemudian direbut oleh VOC Belanda pada 1605. Ambon menjadi episentrum perebutan monopoli rempah-rempah cengkeh dunia yang berharga setara emas murni.',
      geography: 'Terletak di Pulau Ambon yang berbentuk mirip dua semenanjung (Leitimor dan Leihitu) yang dipisahkan oleh lekukan Teluk Ambon yang dalam dan tenang.',
      cultureCommunity: 'Terkenal dengan persaudaraan sejati lintas agama "Pela Gandong" dan "Lawamena Haulala" yang mengikat desa-desa Muslim dan Kristen dalam satu ikatan janji sumpah leluhur.',
      uniqueness: 'UNESCO City of Music dengan bakat bernyanyi vokal merdu alami masyarakatnya, Jembatan Merah Putih kabel pancang terpanjang di Indonesia Timur, dan perahu belang tradisional.'
    },
    culture: {
      traditionalAttire: {
        name: 'Baju Cele & Kebaya Dansa',
        description: 'Baju Cele merah kotak-kotak kecil berselendang Lenso putih di pundak berpadu sarung tenun ikat, serta setelan jas Baniang hitam untuk pria Maluku.'
      },
      traditionalWeapon: {
        name: 'Parang Salawaku & Kalawai',
        description: 'Parang panjang baja bersanding tameng kayu ramping Salawaku berhias kerang mutiara peninggalan pahlawan nasional Thomas Matulessy (Kapitan Pattimura).'
      },
      traditionalDance: {
        name: 'Tari Cakalele & Tari Katreji',
        description: 'Tarian perang berkobar Cakalele dengan penari mengacungkan parang dan berteriak gagah diiringi tabuhan tifa, berpadu Tari pergaulan Katreji bergaya dansa Eropa.'
      },
      signatureFood: {
        name: 'Papeda Ikan Kuah Kuning & Kohu-Kohu',
        description: 'Bubur sagu bening kenyal disiram sup ikan cakalang kuah kuning kunyit daun kemangi yang asam gurih segar, serta urap sayur kohu-kohu ikan tongkol suwir.'
      },
      traditionalHouse: {
        name: 'Baileo Maluku',
        description: 'Balai pertemuan adat panggung tanpa dinding tempat musyawarah pemangku adat Saniri Negeri dan penyimpanan pusaka leluhur.'
      },
      artsAndMusic: {
        name: 'Tifa Maluku & Totobuang',
        description: 'Tabuhan perkusi silinder kayu Tifa berpadu jajaran gong kecil kuningan Totobuang dan tiupan terompet kulit kerang laut Tahuri yang menggetarkan kepulauan.'
      }
    },
    destinations: [
      {
        name: 'Jembatan Merah Putih Teluk Ambon',
        category: 'Ikon Megastruktur Indonesia Timur',
        description: 'Jembatan kabel pancang sepanjang 1.140 meter yang membentang anggun di atas perairan Teluk Ambon, menyajikan panorama laut dan perbukitan kota.',
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80'
      },
      {
        name: 'Pantai Liang (Pantai Hunimua)',
        category: 'Pantai Terbaik Berair Toska Kristal',
        description: 'Pernah dinobatkan sebagai pantai terindah di Indonesia oleh UNDP, dengan air laut gradasi toska bening memukau dan dermaga kayu panjang yang estetik.',
        image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80'
      },
      {
        name: 'Benteng Amsterdam & Benteng Victoria',
        category: 'Benteng Kolonial Jalur Rempah',
        description: 'Benteng pertahanan abad ke-17 di Hila tempat ilmuwan Rumphius menyusun buku botani rempah Amboinsche Kruidboek yang termasyhur.',
        image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80'
      }
    ]
  },
  {
    id: 'ternate',
    name: 'Ternate',
    province: 'Maluku Utara',
    region: 'Maluku',
    regionId: 'maluku',
    nickname: 'Kota Rempah Mahkota Gamalama',
    taglineEn: 'The Volcanic Kingdom of the Clove Empire',
    coordinates: '0.7893° N, 127.3610° E',
    heroImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=2560&q=85',
    fallbackHero: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2560&q=85',
    shortDescription: 'Pulau kerucut vulkanik Gunung Gamalama di Laut Maluku, bekas pusat Kesultanan Ternate penguasa 72 pulau yang pernah memonopoli pohon cengkeh dunia.',
    cultureBadges: ['Gunung Gamalama', 'Kedaton Kesultanan Ternate', 'Benteng Tolukko', 'Danau Tolire', 'Cengkeh Afo'],
    cultureAnimType: 'maluku',
    accentColor: '#d97706',
    about: {
      history: 'Salah satu kerajaan Islam tertua dan terkuat di Nusantara yang didirikan oleh Baab Mashur Malamo pada tahun 1257. Mencapai puncak kejayaan di bawah Sultan Baabullah yang berhasil mengusir penjajah Portugis pada tahun 1575.',
      geography: 'Pulau vulkanik bulat sempurna yang didominasi oleh kerucut stratovolcano Gunung Gamalama (1.715 mdpl) yang menjulang langsung dari bibir perairan laut dalam.',
      cultureCommunity: 'Masyarakat menjunjung tinggi tata krama adat Kesultanan Ternate. Menghormati gunung berapi Gamalama sebagai sosok yang hidup dan menjaga kelestarian pohon cengkeh tertua di dunia.',
      uniqueness: 'Danau Tolire Besar mistis di kaki gunung dengan legenda buaya putih raksasa yang tak pernah bisa dilempar batu ke dasarnya, serta benteng-benteng batu padas peninggalan Portugis dan Spanyol.'
    },
    culture: {
      traditionalAttire: {
        name: 'Baju Koja & Manteren Lamo',
        description: 'Jubah kebesaran beludru merah berbordir benang emas bangsawan Ternate dengan penutup kepala Tuale serta baju kurung kain songket sutra.'
      },
      traditionalWeapon: {
        name: 'Parang Ternate & Tombak Doa',
        description: 'Bilah pedang lengkung tempaan pande besi kesultanan yang dihiasi rajah doa perlindungan armada laut Kora-Kora.'
      },
      traditionalDance: {
        name: 'Tari Soya-Soya & Tari Salai Jin',
        description: 'Tarian perang pembebasan heroik Soya-Soya yang dibawakan puluhan pria membawa perisai dan daun palem kelapa penjemput pahlawan perang.'
      },
      signatureFood: {
        name: 'Gohu Ikan & Popeda Kuah Asang',
        description: 'Sashimi khas Ternate dari potongan ikan cakalang/tuna mentah segar yang disiram minyak kelapa panas mendidih, perasan jeruk cui, cabai rawit, dan taburan kenari panggang gurih.'
      },
      traditionalHouse: {
        name: 'Kedaton Kesultanan Ternate',
        description: 'Istana megah di atas bukit berarsitektur oktagonal yang dibangun pada 1806 oleh Sultan Muhammad Ali, menyimpan mahkota berambut ajaib yang terus tumbuh.'
      },
      artsAndMusic: {
        name: 'Musik Bambu Hitada & Tifa Saragi',
        description: 'Hentakan tabung bambu Hitada ke lantai tanah berpadu ritmis gendang saragi mengiringi nyanyian puji-pujian sejarah kesultanan.'
      }
    },
    destinations: [
      {
        name: 'Gunung Gamalama & Cengkeh Afo',
        category: 'Ikon Gunung Api Jalur Rempah Dunia',
        description: 'Puncak stratovolcano aktif yang diselimuti kabut sejuk dan perkebunan cengkeh Afo purba berusia ratusan tahun yang menjadi cikal bakal rempah dunia.',
        image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80'
      },
      {
        name: 'Benteng Tolukko & Benteng Kalamata',
        category: 'Benteng Batu Karang Kolonial Abad ke-16',
        description: 'Benteng batu padas rancangan Portugis 1540 di atas tanjung karang tinggi dengan sudut pemandangan memukau ke arah Pulau Tidore dan laut lepas.',
        image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80'
      },
      {
        name: 'Danau Tolire Besar & Danau Ngade',
        category: 'Danau Vulkanik Eksotis Kaki Gamalama',
        description: 'Danau kawah hijau tua bertebing curam dengan pemandangan magis yang berbatasan langsung dengan birunya laut dan pulau tetangga Tidore.',
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80'
      }
    ]
  },

  // ================= PAPUA =================
  {
    id: 'jayapura',
    name: 'Jayapura',
    province: 'Papua',
    region: 'Papua',
    regionId: 'papua',
    nickname: 'Kota Port Numbay / Mutiara Hitam',
    taglineEn: 'The Sunrise Gateway of the Great Eastern Frontier',
    coordinates: '2.5337° S, 140.7181° E',
    heroImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=2560&q=85',
    fallbackHero: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2560&q=85',
    shortDescription: 'Ibu kota Provinsi Papua di tepi Samudra Pasifik, permata timur berlatar Danau Sentani yang magis dengan lukisan kulit kayu, Jembatan Youtefa merah, dan Burung Cenderawasih.',
    cultureBadges: ['Cenderawasih', 'Danau Sentani', 'Jembatan Youtefa', 'Noken Papua', 'Tifa Papua'],
    cultureAnimType: 'papua',
    accentColor: '#e11d48',
    about: {
      history: 'Didirikan oleh kapten Belanda F.J.P. Sachse pada 7 Maret 1910 dengan nama Hollandia. Pernah menjadi markas besar Jenderal Douglas MacArthur dalam Perang Pasifik Perang Dunia II sebelum bersatu kembali dalam bingkai Republik Indonesia.',
      geography: 'Berada di teluk berbukit terjal di tepi utara pulau Papua menghadap langsung ke Samudra Pasifik yang luas, berdampingan dengan bentang danau vulkanik Danau Sentani seluas 9.360 hektar.',
      cultureCommunity: 'Masyarakat suku asli Port Numbay dan Sentani yang menghormati kepemimpinan adat Ondofolo. Menjunjung tinggi tas anyaman serat kulit kayu Noken yang diakui UNESCO sebagai warisan kemanusiaan.',
      uniqueness: 'Jembatan Youtefa bercat merah pelengkung baja di atas Teluk Youtefa, lukisan tradisional kulit kayu pohon Khombouw di Danau Sentani, dan habitat alami Burung Cenderawasih burung surga.'
    },
    culture: {
      traditionalAttire: {
        name: 'Koteka, Rok Rumbai & Mahkota Cenderawasih',
        description: 'Busana rok rumbai daun sagu kering berkombinasi manik-manik biji hutan dan mahkota bulu kasuari atau bulu cenderawasih imitasi kebesaran para kepala suku.'
      },
      traditionalWeapon: {
        name: 'Busur Panah Bambu & Tombak Kayu Besi',
        description: 'Busur kayu nibung berkawat serat rotan dengan mata anak panah bambu berukir taring tulang kangguru pohon untuk berburu di belantara rimba.'
      },
      traditionalDance: {
        name: 'Tari Yospan & Tari Perang Papua',
        description: 'Tarian persahabatan Yospan berirama petikan ukulele dan bas kentrung yang mengajak semua orang melompat gembira, serta tari perang ksatria berhias coretan kapur putih.'
      },
      signatureFood: {
        name: 'Papeda Ikan Gabus Sentani & Ikan Bakar Manokwari',
        description: 'Papeda kenyal lembut yang diputar menggunakan gata-gata dinikmati bersama sup ikan gabus danau Sentani kuah kuning pedas cabai rawit merah tumbuk.'
      },
      traditionalHouse: {
        name: 'Kariwari & Honai',
        description: 'Rumah adat limas kerucut bertingkat dua suku Tobati-Enggros di atas air Teluk Youtefa tempat inisiasi pemuda menjadi ksatria pelindung sukunya.'
      },
      artsAndMusic: {
        name: 'Tifa Perkusi & Nyanyian Wor',
        description: 'Tabuhan instrumen Tifa kayu bertutup kulit biawak (soasoa) yang direkatkan darah dengan getaran resonansi magis memanggil kekuatan leluhur.'
      }
    },
    destinations: [
      {
        name: 'Danau Sentani & Desa Wisata Asei',
        category: 'Danau Keramat Lukisan Kulit Kayu',
        description: 'Danau luas berhias 21 pulau kecil di tengahnya dengan latar pegunungan Cycloop hijau, sentra kerajinan lukis kulit kayu Khombouw suku Sentani.',
        image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80'
      },
      {
        name: 'Jembatan Youtefa (Jembatan Merah)',
        category: 'Ikon Megastruktur Samudra Pasifik',
        description: 'Jembatan pelengkung baja merah menyala sepanjang 732 meter yang membentang di atas Teluk Youtefa menghubungkan kawasan kota dengan perbatasan Skouw.',
        image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80'
      },
      {
        name: 'Puncak Jayapura City & Pantai Base-G',
        category: 'Panorama Kota & Garis Pantai Pasifik',
        description: 'Titik pandang puncak bukit memandang panorama kota Jayapura di malam hari, dan pantai berpasir putih tempat pendaratan armada sekutu pimpinan MacArthur.',
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80'
      }
    ]
  },
  {
    id: 'sorong',
    name: 'Sorong',
    province: 'Papua Barat Daya',
    region: 'Papua',
    regionId: 'papua',
    nickname: 'Kota Minyak Port of Raja Ampat',
    taglineEn: 'The Epic Portal to the Coral Kingdom of Raja Ampat',
    coordinates: '0.8762° S, 131.2558° E',
    heroImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=2560&q=85',
    fallbackHero: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2560&q=85',
    shortDescription: 'Kota pelabuhan di Semenanjung Kepala Burung Papua, gerbang utama menuju kepulauan surga karang dunia Raja Ampat, kaya akan minyak bumi dan budaya suku Malamoi.',
    cultureBadges: ['Raja Ampat Gateway', 'Suku Moi', 'Kain Rumput Sorong', 'Ikan Bungkus Daun Talas', 'Pianemo Karst'],
    cultureAnimType: 'papua',
    accentColor: '#0284c7',
    about: {
      history: 'Berasal dari kata "Soren" dalam bahasa Biak Numfor yang berarti lautan yang bergelombang. Berkembang menjadi kota tambang minyak bumi tertua di tanah Papua sejak masa Nederlandsche Nieuw Guinea Petroleum Maatschappij (NNGPM) 1935 di Pulau Doom.',
      geography: 'Terletak di ujung barat Semenanjung Kepala Burung (Vogelkop) Papua, berbatasan langsung dengan Selat Dampier yang kaya arus nutrisi dan kepulauan Raja Ampat.',
      cultureCommunity: 'Tanah adat suku Moi yang hidup berdampingan dengan suku perantau Biak, Serui, Jawa, dan Maluku. Memiliki kearifan hutan adat dalam menjaga kelestarian pohon damar dan kayu besi.',
      uniqueness: 'Titik tolak kapal pinisi dan speedboat menuju pulau karang Pianemo dan Wayag Raja Ampat, serta Pulau Doom dengan becak tradisionalnya yang unik.'
    },
    culture: {
      traditionalAttire: {
        name: 'Busana Adat Suku Moi & Kalung Gigi Buaya',
        description: 'Kain tenun rumput rawa dipadu penutup dada serat kayu melinjo dan kalung taring babi hutan atau gigi buaya simbol keberanian ksatria laut.'
      },
      traditionalWeapon: {
        name: 'Parang Moi & Tombak Ikan Tiga Mata',
        description: 'Tombak kayu nibung berujung tiga mata tembaga penikam ikan karang di terumbu karang laut lepas tanpa merusak karang.'
      },
      traditionalDance: {
        name: 'Tari Magasa & Tari Balulu',
        description: 'Tarian sukacita suku Moi bergandengan tangan membentuk barisan gelombang air laut diiringi nyanyian pantun rasa syukur atas hasil tangkapan laut.'
      },
      signatureFood: {
        name: 'Ikan Bungkus Daun Talas & Keripik Keladi',
        description: 'Ikan kakap laut berbumbu daun salam, serai, cabai rawit yang dibungkus rapat dalam daun talas lalu dibakar perlahan di atas bara arang kayu besi harum.'
      },
      traditionalHouse: {
        name: 'Rumah Kaki Seribu (Mod Aki Aksa)',
        description: 'Rumah panggung kayu beratap ilalang dengan ratusan tiang pancang rapat penopang lantai yang kokoh dari terjangan angin kencang laut Pasifik.'
      },
      artsAndMusic: {
        name: 'Musik Suling Tambur & Tifa Kalawat',
        description: 'Parade puluhan peniup suling bambu diiringi dentuman drum tambur besar yang menghentak menggetarkan jalanan dalam perayaan adat besar.'
      }
    },
    destinations: [
      {
        name: 'Kepulauan Raja Ampat (Akses Utama dari Sorong)',
        category: 'Pusat Segitiga Terumbu Karang Dunia',
        description: 'Pusat keanekaragaman hayati laut terkaya di planet bumi dengan gugusan pulau karang jamur Pianemo dan Wayag yang mengapung di atas air toska bening.',
        image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80'
      },
      {
        name: 'Pulau Doom (Kota Tua Bersejarah)',
        category: 'Warisan Kota Kolonial Pertama Papua',
        description: 'Pulau kecil di depan pelabuhan Sorong tempat berdirinya gedung-gedung bersejarah peninggalan Belanda yang bebas dari polusi kendaraan bermotor.',
        image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80'
      },
      {
        name: 'Taman Wisata Alam Hutan Mangrove Klawalu',
        category: 'Ekowisata Hutan Bakau Terluas',
        description: 'Titian jembatan kayu warna-warni yang membelah rimbunnya hutan mangrove asri dengan menara pandang burung pemantau satwa eksotis.',
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80'
      }
    ]
  },
  {
    id: 'merauke',
    name: 'Merauke',
    province: 'Papua Selatan',
    region: 'Papua',
    regionId: 'papua',
    nickname: 'Kota Rusa / Ujung Timur Nusantara',
    taglineEn: 'The Sunrise Frontier from Sabang to Merauke',
    coordinates: '8.4991° S, 140.4011° E',
    heroImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2560&q=85',
    fallbackHero: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=2560&q=85',
    shortDescription: 'Kota paling timur di wilayah kedaulatan Indonesia, benteng batas negara di tepi Laut Arafura dengan padang sabana luas berpopulasi rusa dan rumah semut raksasa Musamus.',
    cultureBadges: ['Titik Nol Merauke', 'Musamus Rumah Semut', 'Suku Marind-Anim', 'Taman Nasional Wasur', 'Sate Rusa'],
    cultureAnimType: 'papua',
    accentColor: '#f59e0b',
    about: {
      history: 'Didirikan oleh pemerintah kolonial Belanda pada 12 Februari 1902 sebagai pos militer untuk mencegah perselisihan antar suku Marind-Anim dengan pemburu dari seberang perbatasan Sungai Fly. Terkenal dalam lagu kebangsaan "Dari Sabang Sampai Merauke".',
      geography: 'Dataran rendah aluvial terluas di Papua yang dialiri Sungai Maro yang lebar bermuara ke Laut Arafura, didominasi oleh padang rumput sabana dan rawa basah.',
      cultureCommunity: 'Suku asli Marind-Anim yang kaya akan tradisi seni ukir kayu dan spiritualitas totemik alam. Hidup rukun berdampingan dalam keberagaman suku nusantara di tapal batas timur.',
      uniqueness: 'Monumen Kapsul Waktu tempat disimpannya impian anak-anak Indonesia untuk tahun 2085, rumah semut tanah raksasa Musamus setinggi lima meter, dan kawanan kangguru pohon serta rusa liar di Taman Nasional Wasur.'
    },
    culture: {
      traditionalAttire: {
        name: 'Busana Adat Marind-Anim & Dema Totem',
        description: 'Hiasan kepala rumbai bulu burung kasuari bertatahkan taring babi hutan, anyaman serat kulit kayu dan lukisan tubuh motif totem leluhur klan.'
      },
      traditionalWeapon: {
        name: 'Panah Gaba-Gaba & Tombak Marind',
        description: 'Busur panjang bambu berbilah anak panah kayu besi berukir simbol klan untuk berburu rusa di padang sabana terbuka.'
      },
      traditionalDance: {
        name: 'Tari Gatsi Marind & Tari Pangkur Sagu',
        description: 'Tarian sakral suku Marind-Anim dengan hentakan kaki serempak ke tanah beralas debu sabana diiringi lagu doa pujian kesuburan bumi dan tifa.'
      },
      signatureFood: {
        name: 'Sate Rusa Merauke & Sagu Sep',
        description: 'Daging rusa padang rumput segar bertekstur empuk rendah lemak yang dibakar bumbu kacang manis pedas, serta olahan sagu bakar kelapa gurih Sagu Sep.'
      },
      traditionalHouse: {
        name: 'Gotad & Jew (Rumah Adat Bujang Marind)',
        description: 'Rumah panggung kayu panjang beratap jerami tebal tempat tinggal para pemuda adat untuk ditempa menjadi ksatria dan mempelajari hukum adat suku.'
      },
      artsAndMusic: {
        name: 'Tifa Kandara & Kidung Dema',
        description: 'Gendang Tifa panjang berpinggang ramping Kandara yang bergaung rendah menggetarkan kalbu di tengah heningnya padang sabana Wasur.'
      }
    },
    destinations: [
      {
        name: 'Taman Nasional Wasur (Serengeti-nya Papua)',
        category: 'Padang Sabana & Suaka Margasatwa Terluas',
        description: 'Kawasan konservasi lahan basah dan padang rumput luas tempat hidupnya ribuan rusa liar, walabi (kangguru kecil), burung migran Australia, dan gundukan sarang semut Musamus setinggi 5 meter.',
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80'
      },
      {
        name: 'Monumen Kapsul Waktu Impian Indonesia 2085',
        category: 'Monumen Arsitektur Futuristik',
        description: 'Monumen megah berdesain mirip markas The Avengers yang menyimpan 7 mimpi anak bangsa Indonesia yang akan dibuka pada tahun 2085 mendatang.',
        image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80'
      },
      {
        name: 'Pos Lintas Batas Negara (PLBN) Sota',
        category: 'Gerbang Batas Negara Indonesia - Papua Nugini',
        description: 'Kompleks perbatasan modern yang megah dengan taman persahabatan, tugu titik nol timur Indonesia, dan tugu batas perbatasan bersejarah MM 11.2.',
        image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80'
      }
    ]
  }
];

// Helper functions for easy searching and filtering
export const getCityById = (id) => CITIES.find((city) => city.id === id);

export const getCitiesByRegion = (regionId) => {
  if (!regionId || regionId === 'all') return CITIES;
  return CITIES.filter((city) => city.regionId === regionId);
};

export const getFeaturedCities = () => {
  // Curated 6 highlight cities for homepage showcase
  return ['ubud', 'yogyakarta', 'bandung', 'jakarta', 'jayapura', 'padang']
    .map(id => getCityById(id))
    .filter(Boolean);
};

