import LogoLaravel from "../assets/laravel-svgrepo-com.svg";
import LogoAdonis from "../assets/adonis-js-svgrepo-com.svg";
import LogoVue from "../assets/vue-vuejs-javascript-js-framework-svgrepo-com.svg";
import LogoReact from "../assets/reactjs-svgrepo-com.svg";
import LogoNext from "../assets/nextjs-fill-svgrepo-com.svg";
import LogoNuxt from "../assets/nuxt-svgrepo-com.svg";
import LogoNest from "../assets/nestjs-svgrepo-com.svg";
import LogoExpress from "../assets/express-svgrepo-com.svg";
import Vuejs from "../assets/vuejs-sanber.png";
import YPU from "../assets/yang-penting-usaha.png";
import Skripsi from "../assets/halaman-home-skripsi.png";
import NextJS from "../assets/sanbercode-nextjs-batch-39.png";
import LuxSpace from "../assets/luxspace-yoga-reactjs.png";
import Moonton from "../assets/dashboard-moonton.png";
import BWAJobHunt from "../assets/bwa-job-hunt.png";
import BWADashJobHunt from "../assets/bwa-dashboard-post-a-job.png";
import Brainwave from "../assets/brainwave-jsm.png";
import Iphone15 from "../assets/iphone15-jsm.png";
import AuthJs from "../assets/authjs-cwa.png";
import Evently from "../assets/evently-jsm.png";
import Anime from "../assets/anime-deaafrizal.png";
import Threads from "../assets/threads-asap.png";

//Kemampuan di About
export const kemampuanPieChart = [
  {
    name: "NextJS",
    value: 900,
    color: "#000000",
  },
  {
    name: "ReactJS",
    value: 800,
    color: "#32e0ff",
  },
  {
    name: "Laravel",
    value: 750,
    color: "#ff4c41",
  },
  {
    name: "VueJS",
    value: 550,
    color: "#4dba87",
  },
  {
    name: "NestJS",
    value: 500,
    color: "#ea2845",
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
    title: "ReactJS",
    logo: LogoReact,
    width: "80%",
  },
  {
    id: 3,
    title: "Laravel",
    logo: LogoLaravel,
    width: "70%",
  },
  {
    id: 4,
    title: "VueJS",
    logo: LogoVue,
    width: "55%",
  },
  {
    id: 5,
    title: "NestJS",
    logo: LogoNest,
    width: "50%",
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
    titleEng:
      "State Property Management Information System (SIP BMN) Ministry of Research and Technology BRIN Codeigniter 3",
    descEng: `This is a system for managing state property at the Ministry of Research and Technology BRIN and my position is Developer on the Frontend Website side
    The system was built with Codeigniter 3 and uses bootstrap`,
    link: undefined,
  },
  {
    id: 2,
    title: "Web Pengelolaan Event IT Expo 2021 Laravel",
    desc: "Web Pengelolaan Event IT Expo UNJ dan saya berposisi sebagai pengembang pada sisi Frontend \n Sistem dibangun dengan menggunakan Laravel dan juga Bootstrap",
    titleEng: "IT Expo 2021 Event Management Web using Laravel",
    descEng: `UNJ IT Expo Event Management Web and I work as a developer on the Frontend side \n The system was built using Laravel and Bootstrap`,
    link: undefined,
  },
  {
    id: 3,
    title: "Projek Pribadi: Website Lowongan Pekerjaan Menggunakan Reactjs",
    desc: `Website ini merupakan tugas akhir dari pelatihan reactjs di sanbercode \n Website ini sudah mendukung fitur login, register, CRUD lowongan pekerjaan untuk yang sudah login, serta search dan filter untuk mencari pekerjaan yang sesuai keinginan Website ini masih sangat jauh dari kata baik secara tampilan karena tugas akhir ini berfokus pada fungsionalitas aplikasi \n Website dibangun menggunakan Reactjs dan Tailwind CSS.`,
    titleEng: "Personal Project: Job Vacancies Website Using Reactjs",
    descEng: `This website is the final project of ReactJS training in Sanbercode \n This website supports login, register, CRUD job vacancy features for those who have logged in, as well as search and filters to find jobs that suit your wishes. This website is still very far from being good in appearance because This final project focuses on application functionality \n The website was built using Reactjs and Tailwind CSS.`,
    link: "https://yang-penting-usaha.netlify.app/",
  },
  {
    id: 4,
    title: "Projek Pribadi: Website E-Commerce Menggunakan Next JS",
    desc: `Website ini merupakan tugas akhir dari pelatihan Next Js di kelas sanbercode \n Untuk role customer website ini sudah mendukung fitur login dan register customer, fitur search untuk mencari barang yang diinginkan, fitur checkout, transaksi selesai serta mengirim email kepada customer yang sudah login. Untuk role admin website ini sudah mendukung fitur login admin, CRUD untuk data kategori, CRUD untuk data produk, menampilkan keseluruhan data checkout dan transaksi di tabel, serta total data pada dashboard Website ini mungkin masih memiliki kekurangan secara tampilan karena tugas akhir ini berfokus pada fungsionalitas aplikasi. \n Website dibangun menggunakan Next Js dan Tailwind CSS.`,
    titleEng: "Personal Project: E-Commerce Website Using Next JS",
    descEng: `This website is the final project of ReactJS online bootcamp in Sanbercode \n This website supports login, register, CRUD job vacancy features for those who have logged in, as well as search and filters to find jobs that suit your wishes. This website is still very far from being good in appearance because This final project focuses on application functionality \n The website was built using Reactjs and Tailwind CSS.`,
    link: "https://sanbercode-nextjs-batch-39-yogarizky51.vercel.app/",
  },
  {
    id: 5,
    title:
      "Projek Tugas Kelompok: Website Penjualan Tiket - Tickety Dengan Framework Laravel",
    desc: `Secara Garis besar Project ini untuk penjualan tiket sebuah event seperti webinar, workshop, konser, dll. Pada milestone kali ini pembeli/pelanggan dapat melihat acara hingga detail acara beserta tiket yang tersedia, akan tetapi saat ingin membeli tiket diperlukan login(Untuk ruang lingkup pengerjaan project ini user hanya dapat melakukan pembelian 1 jenis tiket dalam sekali transaksi). Fungsi Register akan membuat pembeli/pelanggan memiliki role "user". \n Posisi saya pada projek ini adalah   Fullstack Web Developer dengan bahasa PHP dan framework Laravel`,
    titleEng:
      "Group Assignment Project: Ticket Sales Website - Tickety Using the Laravel Framework",
    descEng: `In general, this project is for selling tickets to events such as webinars, workshops, concerts, etc. At this milestone, buyers/customers can view the event up to the event details along with available tickets, however, when you want to buy tickets you need to log in (for the scope of work on this project, users can only purchase 1 type of ticket in one transaction). The Register function will make buyers/customers have the "user" role. \n My position on this project is Fullstack Web Developer with PHP language and Laravel framework`,
    link: undefined,
  },
  {
    id: 6,
    title: "Projek Pribadi: Luxspace with ReactJS & Tailwind CSS",
    desc: `Projek ini merupakan projek hasil pelatihan Reactjs dan Tailwind CSS pada salah satu kelas di buildwithangga\n  Web yang dibuat adalah web penjualan
    furnitur dengan menggunakan mock-up API dari postman sebagai sumber data \n 
    Web yang dibuat memiliki halaman yang cukup lengkap dari halaman utama, detail barang, halaman keranjang belanja,halaman pembayaran sukses dan halaman error jika halaman yang dicari tidak ditemukan \n
    Beberapa bagian dari halaman pada projek ini sudah dibuat responsif, dan mohon maaf sebagian lagi belum berhasil dibuat responsif karena adanya kendala baik dari sisi projek ataupun luar projek.`,
    titleEng: "Personal Project: Luxspace with ReactJS & Tailwind CSS",
    descEng: `This project is a project resulting from Reactjs and Tailwind CSS training in one of the classes at buildwithangga\n The website created is a sales website
    furniture using mock-up API from postman as data source \n
    The website created has quite complete pages from the main page, item details, shopping cart page, successful payment page and error page if the page you are looking for is not found \n
    Some parts of the pages in this project have been made responsive, and I'm sorry, some parts have not been made responsive due to obstacles both from the project side and outside the project.`,

    link: "https://luxspace-yoga-reactjs.netlify.app/",
  },
  {
    id: 7,
    title: "Sistem Tanda Tangan Digital QR (SiTaTang)",
    desc: `Projek ini merupakan projek skripsi saya yaitu membuat tanda tangan digital berbentuk QR Code dengan menggunakan Laravel 8 secara Fullstack. Projek ini dibuat untuk mencegah penggunaan tanda tangan berbentuk tulisan yang digitalkan karena sangat mudah untuk disalah gunakan oleh pihak yang tidak bertanggung jawab.\n
    Ketika QR Code di scan akan mengeluarkan data secara lengkap dari pihak yang menyetujui permintaan tanda tangan.\n
    Web yang dibuat sudah responsif dan sudah berfungsi sesuai dengan keinginan stakeholder yaitu koordinator program studi dan beberapa dosen.`,
    titleEng: "QR Digital Signature System (SiTaTang)",
    descEng: `This project is my thesis project, the purpose of this website is creating a digital signature in the form of a QR Code using Laravel 8 in Fullstack. This project was created to prevent the use of previous digital signatures in image form because they are very easy to be misused by irresponsible parties.\n
    When the QR Code is scanned, complete data will be released from someone who approved the signature request.\n
    The website created is responsive and all the working function is according to the wishes of stakeholders, which is the study program coordinator and several lecturers.`,
    link: undefined,
  },
  {
    id: 8,
    title: "Projek Pribadi: BWA Job Hunt",
    desc: `Projek ini merupakan hasil dari salah satu kelas Fullstack Next JS pada BuildWithAngga

    Website ini merupakan website lowongan kerja yang bisa dipakai dari dua sisi, yaitu orang yang mencari lowongan pekerjaan atau company yang membuat lowongan pekerjaan
    
    Website ini sudah memilki fitur autentikasi dan otorisasi. Website ini memiliki fitur filter ketika melakukan pencarian pekerjaan agar dapat menemukan pekerjaan yang sesuai.
    
    Website ini masih belum responsif dan beberapa fitur masih dalam tahap pembuatan.`,
    titleEng: "Personal Project: BWA Job Hunt",
    descEng: `This project is the result of one of the Fullstack Next JS classes on BuildWithAngga

    This website is a job vacancy website that can be used from two sides, one side id for people looking for job vacancies and the second side is for companies that want to create job vacancies
    
    This website already has authentication and authorization features. This website has a filter feature when searching for jobs so you can find suitable work.
    
    This website is still not responsive and several features are still under construction.`,
    link: "https://bwa-job-hunt-340zg407l-yogarizky51.vercel.app/",
  },
  {
    id: 9,
    title: "Projek Pribadi: BWA Dashboard Job Hunt",
    desc: `Projek ini merupakan hasil dari salah satu kelas Fullstack Next JS pada BuildWithAngga

    Website ini merupakan dashboard dari web BWA Job Hunt
    
    Website ini sudah memilki fitur autentikasi dan otorisasi. Website ini juga sudah memilki fungsi CRUD untuk membuat Company, dan juga CRUD untuk membuat lowongan kerja dari Company yang telah dibuat sebelumnya.
    
    Website ini masih belum responsif dan beberapa fitur masih belum selesai dibuat.`,
    titleEng: "Personal Project: BWA Dashboard Job Hunt",
    descEng: `This project is the result of one of the Fullstack Next JS classes on BuildWithAngga

    This website is the dashboard of the BWA Job Hunt website
    
    This website already has authentication and authorization features. This website also has a CRUD function to create a Company, and also CRUD to create job vacancies from previously created Companies.
    
    This website is still not responsive and several features have not yet been completed.`,
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
    titleEng: "Vue JS Sanbercode Final Project",
    descEng:
      "Simple Project with CRUD implementation, authentication and authorization in Vue JS",
    techStack: "VueJS",
    link: "https://sanbercode-vuejs-yoga.netlify.app/",
  },
  {
    id: 2,
    imgAlt: "Laravel Halaman Home Skripsi",
    imgSrc: Skripsi,
    title:
      "Sistem Tanda Tangan (SiTaTang) Digital QR Code (Projek Akhir Skripsi)",
    desc: "Projek akhir skripsi saya yang menghasilkan tanda tangan digital berbentuk QR Code.",
    titleEng:
      "Digital QR Code Signature System (SiTaTang) (Final Thesis Project)",
    descEng:
      "Final project of my thesis that produce a digital signature in the form of a QR Code.",
    techStack: "Laravel 8",
    link: undefined,
  },
  {
    id: 3,
    imgAlt: "Tugas Akhir BWA Luxspace",
    imgSrc: LuxSpace,
    title: "Tugas Akhir Luxspace BWA",
    desc: "Projek ini merupakan projek hasil pelatihan Reactjs dan Tailwind CSS pada salah satu kelas di buildwithangga",
    titleEng: "Luxspace BWA Final Project",
    descEng:
      "This project is a result from Reactjs and Tailwind CSS course online in one of the classes at buildwithangga",
    techStack: "ReactJS, TailwindCSS",
    link: "https://luxspace-yoga-reactjs.netlify.app/",
  },
  {
    id: 4,
    imgAlt: "Tugas Akhir ReactJS Sanbercode - Website Lowongan Kerja",
    imgSrc: YPU,
    title: "Tugas Akhir ReactJS Sanbercode - Website Lowongan Kerja",
    desc: "Website ini merupakan tugas akhir dari pelatihan reactjs di sanbercode",
    titleEng: "Final Project ReactJS Sanbercode - Job Vacancies Website",
    descEng:
      "This website is the final assignment of ReactJS training in Sanbercode.",
    techStack: "ReactJS",
    link: "https://yang-penting-usaha.netlify.app/",
  },
  {
    id: 5,
    imgAlt: "NextJS Tugas Akhir Sanbercode",
    imgSrc: NextJS,
    title: "Tugas Akhir NextJS Sanbercode - Website E-Commerce",
    desc: "Website ini merupakan tugas akhir dari pelatihan Next Js di kelas sanbercode",
    titleEng: "Final Project NextJS Sanbercode - E-Commerce Website",
    descEng:
      "This website is the final assignment of the Next Js training in the Sanbercode class",
    techStack: "NextJS",
    link: "https://sanbercode-nextjs-batch-39.vercel.app/",
  },
  {
    id: 6,
    imgAlt: "BWA Moonton Streaming Film",
    imgSrc: Moonton,
    title: "Moonton, Streaming Film BuildWithAngga ",
    desc: "Projek ini merupakan projek hasil pelatihan Laravel ReactJS dengan menggunakan inertia pada salah satu kelas di buildwithangga",
    titleEng: "Final Assignment Moonton Streaming Film BuildWithAngga ",
    descEng:
      "This project is a result from Laravel ReactJS training using inertia in one of the classes at buildwithangga",
    techStack: "Laravel, Inertia, ReactJS",
    link: undefined,
  },
  {
    id: 7,
    imgAlt: "BWA Job Hunt",
    imgSrc: BWAJobHunt,
    title: "Tugas Akhir BWA Job Hunt Halaman Utama atau Publik",
    desc: "Projek ini merupakan projek halaman utama atau publik dari web pencarian kerja hasil pelatihan NextJS di buildwithangga",
    titleEng: "BWA Job Hunt Final Project Main or Public Page",
    descEng:
      "This project is a project to create the main or public page of the job search website from NextJS training at buildwithangga",
    techStack: "NextJS",
    link: "https://bwa-job-hunt-nine.vercel.app/",
  },
  {
    id: 8,
    imgAlt: "BWA Dashboard Job Hunt",
    imgSrc: BWADashJobHunt,
    title:
      "Tugas Akhir BWA Job Hunt Dashboard Admin Posting Lowongan Pekerjaan",
    desc: "Projek ini membuat dashboard admin untuk posting lowongan pekerjaan dari web pencarian kerja hasil pelatihan NextJS di buildwithangga",
    titleEng:
      "Final Project BWA Job Hunt Admin Dashboard Page to Post Job Vacancies",
    descEng:
      "This project is an admin dashboard project for posting job vacancies from the job search website from NextJS training at buildwithangga",
    techStack: "NextJS",
    link: "https://bwa-dashboard-job-hunt-qa70yxcor-yogarizky51.vercel.app/",
  },
  {
    id: 9,
    imgAlt: "BrainWave",
    imgSrc: Brainwave,
    title: "Desain Web Modern UI/UX Brainwave Javascript Mastery",
    desc: "Projek ini merupakan projek latihan pembuatan desain web modern bernama Brainwave dari youtube Javascript Mastery",
    titleEng: "Modern UI/UX Web Design Brainwave Javascript Mastery",
    descEng:
      "This project is an exercise to make a modern web design called Brainwave from Javascript Mastery Yotube Channel",
    techStack: "ReactJS",
    link: "https://brainwave-jsm-yoga.netlify.app/",
  },
  {
    id: 10,
    imgAlt: "Iphone15",
    imgSrc: Iphone15,
    title: "Membuat Ulang Web Iphone 15 - Javascript Mastery",
    desc: "Projek ini merupakan projek membuat ulang website Iphone 15 dari youtube Javascript Mastery. \n\n (Efek 3 Dimensi hanya ada pada browser desktop)",
    titleEng: "Remaking Iphone 15 Website - Javascript Mastery",
    descEng:
      "This project is remaking Iphone 15 Website from Javascript Mastery Yotube Channel. \n\n (The 3D effect only available on desktop browser)",
    techStack: "Reactjs",
    link: "https://iphone15-yoga-jsm.netlify.app/",
  },
  {
    id: 11,
    imgAlt: "AuthJS",
    imgSrc: AuthJs,
    title: "Mempelajari AuthJS atau NextAuthJs 5 pada NextJS - CodeWithAntonio",
    desc: "Projek ini merupakan projek mendalami bagaimana NextAuthJs 5 atau AuthJs bekerja pada Next JS dari Youtube CodeWithAntonio",
    titleEng:
      "Learning about AuthJS or NextAuthJs 5 on NextJS - CodeWithAntonio",
    descEng:
      "This project is learning how NextAuthJs 5 or AuthJs work on NextJs from CodeWithAntonio Youtube Channel",
    techStack: "NextJS",
    link: "https://next14-authv5-auth-tutorial.vercel.app/",
  },
  {
    id: 12,
    imgAlt: "Evently",
    imgSrc: Evently,
    title: "Evently, Sebuah Aplikasi Web Manajemen Event - Javascript Mastery",
    desc: "Projek ini merupakan projek membuat web app manajemen event dari Youtube Javascript Mastery",
    titleEng: "Evently, Event Management Web App - Javascript Mastery",
    descEng:
      "This project is an event management web app from Javascript Mastery Youtube Channel",
    techStack: "NextJS, MongoDB",
    link: "https://evently-jsm-murex.vercel.app/",
  },
  {
    id: 13,
    imgAlt: "Anime",
    imgSrc: Anime,
    title: "Website List Anime Dengan Infinite Scroll - Dea Afrizal",
    desc: "Projek ini membuat website list anime dengan fitur infinite scroll dari Youtube Dea Afrizal",
    titleEng: "Anime List Website With Infinite Scroll - Dea Afrizal",
    descEng:
      "This project is an anime list website with infinite scroll feature from Dea Afrizal Youtube Channel",
    techStack: "NextJS",
    link: undefined,
  },
  {
    id: 14,
    imgAlt: "Threads",
    imgSrc: Threads,
    title: "Membuat Ulang Website Sosial Media Threads - As A Programmer",
    desc: "Projek ini membuat ulang website sosial media Threads dengan dilengkapi fitur pesan atau percakapan pribadi menggunakan socket.io dari Youtube As A Programmer",
    titleEng: "Remaking Threads Social Media Website - As A Programmer",
    descEng:
      "This project is remaking Threads social media with message or private conversation feature using socket.io from As A Programmer Youtube Channel",
    techStack: "MongoDB, ExpressJS, ReactJS",
    link: undefined,
  },
];
