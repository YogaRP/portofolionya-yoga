import LogoLaravel from "../assets/laravel-svgrepo-com.svg";
import LogoAdonis from "../assets/adonis-js-svgrepo-com.svg";
import LogoVue from "../assets/vue-vuejs-javascript-js-framework-svgrepo-com.svg";
import LogoReact from "../assets/reactjs-svgrepo-com.svg";
import LogoNext from "../assets/nextjs-fill-svgrepo-com.svg";
import LogoNuxt from "../assets/nuxt-svgrepo-com.svg";
import LogoNest from "../assets/nestjs-svgrepo-com.svg";
import Vuejs from "../assets/vuejs-sanber.png";
import YPU from "../assets/yang-penting-usaha.png";
import Skripsi from "../assets/halaman-home-skripsi.png";
import NextJS from "../assets/sanbercode-nextjs-batch-39.png";
import LuxSpace from "../assets/luxspace-yoga-reactjs.png";
import Moonton from "../assets/dashboard-moonton.png";
import BWAJobHunt from "../assets/bwa-job-hunt.png";
import BWADashJobHunt from "../assets/bwa-dashboard-post-a-job.png";

//Kemampuan di About
export const kemampuanPieChart = [
  {
    name: "NextJS",
    value: 900,
    color: "#000000",
  },
  {
    name: "Laravel",
    value: 800,
    color: "#ff4c41",
  },
  {
    name: "ReactJS",
    value: 750,
    color: "#32e0ff",
  },
  {
    name: "NestJS",
    value: 500,
    color: "#ea2845",
  },
  {
    name: "VueJS",
    value: 550,
    color: "#4dba87",
  },
  {
    name: "NuxtJS",
    value: 400,
    color: "#00c58e",
  },
  {
    name: "AdonisJS",
    value: 300,
    color: "#353839",
  },
];

//Kemampuan di About untuk Progress Bar
export const kemampuanProgressBar = [
  {
    id: 1,
    title: "NextJS",
    logo: LogoNext,
    width: "90%",
  },
  {
    id: 2,
    title: "Laravel",
    logo: LogoLaravel,
    width: "80%",
  },
  {
    id: 3,
    title: "ReactJS",
    logo: LogoReact,
    width: "75%",
  },
  {
    id: 4,
    title: "NestJS",
    logo: LogoNest,
    width: "50%",
  },
  {
    id: 5,
    title: "VueJS",
    logo: LogoVue,
    width: "55%",
  },
  {
    id: 6,
    title: "NuxtJS",
    logo: LogoNuxt,
    width: "40%",
  },
  {
    id: 7,
    title: "AdonisJS",
    logo: LogoAdonis,
    width: "30%",
  },
];

//Projek di About
export const projek = [
  {
    id: 1,
    title:
      "Sistem Informasi Pengelolaan Barang Milik Negara (SIP BMN) Kemenristek BRIN Codeigniter 3",
    desc: "Sistem untuk melakukan pengelolaan barang milik negara di kemenristek BRIN dan saya berposisi sebagai Pengembang pada sisi Frontend Website \n Sistem dibangun dengan Codeigniter 3 serta menggunakan bootstrap",
    link: undefined,
  },
  {
    id: 2,
    title: "Web Pengelolaan Event IT Expo 2021 Laravel",
    desc: "Web Pengelolaan Event IT Expo UNJ dan saya berposisi sebagai pengembang pada sisi Frontend \n Sistem dibangun dengan menggunakan Laravel dan juga Bootstrap",
    link: undefined,
  },
  {
    id: 3,
    title: "Projek Pribadi: Website Lowongan Pekerjaan Menggunakan Reactjs",
    desc: `Website ini merupakan tugas akhir dari pelatihan reactjs di sanbercode \n Website ini sudah mendukung fitur login, register, CRUD lowongan pekerjaan untuk yang sudah login, serta search dan filter untuk mencari pekerjaan yang sesuai keinginan Website ini masih sangat jauh dari kata baik secara tampilan karena tugas akhir ini berfokus pada fungsionalitas aplikasi \n Website dibangun menggunakan Reactjs dan Tailwind CSS.`,
    link: "https://yang-penting-usaha.netlify.app/",
  },
  {
    id: 4,
    title: "Projek Pribadi: Website E-Commerce Menggunakan Next JS",
    desc: `Website ini merupakan tugas akhir dari pelatihan Next Js di kelas sanbercode \n Untuk role customer website ini sudah mendukung fitur login dan register customer, fitur search untuk mencari barang yang diinginkan, fitur checkout, transaksi selesai serta mengirim email kepada customer yang sudah login. Untuk role admin website ini sudah mendukung fitur login admin, CRUD untuk data kategori, CRUD untuk data produk, menampilkan keseluruhan data checkout dan transaksi di tabel, serta total data pada dashboard Website ini mungkin masih memiliki kekurangan secara tampilan karena tugas akhir ini berfokus pada fungsionalitas aplikasi. \n Website dibangun menggunakan Next Js dan Tailwind CSS.`,
    link: "https://sanbercode-nextjs-batch-39-yogarizky51.vercel.app/",
  },
  {
    id: 5,
    title:
      "Projek Tugas Kelompok: Website Penjualan Tiket - Tickety Dengan Framework Laravel",
    desc: `Secara Garis besar Project ini untuk penjualan tiket sebuah event seperti webinar, workshop, konser, dll. Pada milestone kali ini pembeli/pelanggan dapat melihat acara hingga detail acara beserta tiket yang tersedia, akan tetapi saat ingin membeli tiket diperlukan login(Untuk ruang lingkup pengerjaan project ini user hanya dapat melakukan pembelian 1 jenis tiket dalam sekali transaksi). Fungsi Register akan membuat pembeli/pelanggan memiliki role "user". \n Posisi saya pada projek ini adalah   Fullstack Web Developer dengan bahasa PHP dan framework Laravel`,
    link: undefined,
  },
  {
    id: 6,
    title: "Projek Pribadi: Luxspace with ReactJS & Tailwind CSS",
    desc: `Projek ini merupakan projek hasil pelatihan Reactjs dan Tailwind CSS pada salah satu kelas di buildwithangga\n  Web yang dibuat adalah web penjualan
    furnitur dengan menggunakan mock-up API dari postman sebagai sumber data \n 
    Web yang dibuat memiliki halaman yang cukup lengkap dari halaman utama, detail barang, halaman keranjang belanja,halaman pembayaran sukses dan halaman error jika halaman yang dicari tidak ditemukan \n
    Beberapa bagian dari halaman pada projek ini sudah dibuat responsif, dan mohon maaf sebagian lagi belum berhasil dibuat responsif karena adanya kendala baik dari sisi projek ataupun luar projek.`,
    link: "https://luxspace-yoga-reactjs.netlify.app/",
  },
  {
    id: 7,
    title: "Sistem Tanda Tangan Digital QR (SiTaTang)",
    desc: `Projek ini merupakan projek skripsi saya yaitu membuat tanda tangan digital berbentuk QR Code dengan menggunakan Laravel 8 secara Fullstack. Projek ini dibuat untuk mencegah penggunaan tanda tangan berbentuk tulisan yang digitalkan karena sangat mudah untuk disalah gunakan oleh pihak yang tidak bertanggung jawab.\n
    Ketika QR Code di scan akan mengeluarkan data secara lengkap dari pihak yang menyetujui permintaan tanda tangan.\n
    Web yang dibuat sudah responsif dan sudah berfungsi sesuai dengan keinginan stakeholder yaitu koordinator program studi dan beberapa dosen.`,
    link: undefined,
  },
  {
    id: 8,
    title: "Projek Pribadi: BWA Job Hunt",
    desc: `Projek ini merupakan hasil dari salah satu kelas Fullstack Next JS pada BuildWithAngga

    Website ini merupakan website lowongan kerja yang bisa dipakai dari dua sisi, yaitu orang yang mencari lowongan pekerjaan atau company yang membuat lowongan pekerjaan
    
    Website ini sudah memilki fitur autentikasi dan otorisasi. Website ini memiliki fitur filter ketika melakukan pencarian pekerjaan agar dapat menemukan pekerjaan yang sesuai.
    
    Website ini masih belum responsif dan beberapa fitur masih dalam tahap pembuatan.`,
    link: "https://bwa-job-hunt-340zg407l-yogarizky51.vercel.app/",
  },
  {
    id: 9,
    title: "Projek Pribadi: BWA Dashboard Job Hunt",
    desc: `Projek ini merupakan hasil dari salah satu kelas Fullstack Next JS pada BuildWithAngga

    Website ini merupakan dashboard dari web BWA Job Hunt
    
    Website ini sudah memilki fitur autentikasi dan otorisasi. Website ini juga sudah memilki fungsi CRUD untuk membuat Company, dan juga CRUD untuk membuat lowongan kerja dari Company yang telah dibuat sebelumnya.
    
    Website ini masih belum responsif dan beberapa fitur masih belum selesai dibuat.`,
    link: "https://bwa-dashboard-job-hunt-qa70yxcor-yogarizky51.vercel.app/",
  },
];

//List Portofolio di Portofolio
export const listPortofolio = [
  {
    id: 1,
    imgAlt: "VueJS Tugas Akhir Sanbercode",
    imgSrc: Vuejs,
    title: "Tugas Akhir Vue JS Sanbercode",
    desc: "Projek Sederhana dengan implementasi CRUD, autentikasi, dan autorisasi pada Vue JS",
    link: "https://sanbercode-vuejs-yoga.netlify.app/",
  },
  {
    id: 2,
    imgAlt: "Laravel Halaman Home Skripsi",
    imgSrc: Skripsi,
    title:
      "Sistem Tanda Tangan (SiTaTang) Digital QR Code (Projek Akhir Skripsi)",
    desc: "Projek akhir skripsi saya yang menghasilkan tanda tangan digital berbentuk QR Code.\n Projek ini saya kerjakan fullstack dengan menggunakan Laravel",
    link: undefined,
  },
  {
    id: 3,
    imgAlt: "Tugas Akhir BWA Luxspace",
    imgSrc: LuxSpace,
    title: "Tugas Akhir Luxspace BWA",
    desc: "Projek ini merupakan projek hasil pelatihan Reactjs dan Tailwind CSS pada salah satu kelas di buildwithangga",
    link: "https://luxspace-yoga-reactjs.netlify.app/",
  },
  {
    id: 4,
    imgAlt: "Tugas Akhir ReactJS Sanbercode - Website Lowongan Kerja",
    imgSrc: YPU,
    title: "Tugas Akhir ReactJS Sanbercode - Website Lowongan Kerja",
    desc: "Website ini merupakan tugas akhir dari pelatihan reactjs di sanbercode. \n Website dibangun menggunakan Reactjs dan Tailwind CSS.",
    link: "https://yang-penting-usaha.netlify.app/",
  },
  {
    id: 5,
    imgAlt: "NextJS Tugas Akhir Sanbercode",
    imgSrc: NextJS,
    title: "Tugas Akhir NextJS Sanbercode - Website E-Commerce",
    desc: "Website ini merupakan tugas akhir dari pelatihan Next Js di kelas sanbercode",
    link: "https://sanbercode-nextjs-batch-39.vercel.app/",
  },
  {
    id: 6,
    imgAlt: "BWA Moonton Streaming Film",
    imgSrc: Moonton,
    title: "Tugas Akhir Moonton Streaming Film BuildWithAngga ",
    desc: "Projek ini merupakan projek hasil pelatihan Laravel ReactJS dengan menggunakan inertia pada salah satu kelas di buildwithangga",
    link: undefined,
  },
  {
    id: 7,
    imgAlt: "BWA Job Hunt",
    imgSrc: BWAJobHunt,
    title: "Tugas Akhir BWA Job Hunt Halaman Utama atau Publik BuildWithAngga ",
    desc: "Projek ini merupakan projek halaman utama atau publik dari web pencarian kerja hasil pelatihan NextJS di buildwithangga",
    link: "https://bwa-job-hunt-nine.vercel.app/",
  },
  {
    id: 8,
    imgAlt: "BWA Dashboard Job Hunt",
    imgSrc: BWADashJobHunt,
    title:
      "Tugas Akhir BWA Job Hunt Halaman Dashboard Admin Posting Lowongan Pekerjaan BuildWithAngga ",
    desc: "Projek ini merupakan projek dashboard admin untuk posting lowongan pekerjaan dari web pencarian kerja hasil pelatihan NextJS di buildwithangga",
    link: "https://bwa-dashboard-job-hunt-qa70yxcor-yogarizky51.vercel.app/",
  },
];
