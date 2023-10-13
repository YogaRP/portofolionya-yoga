import { Accordion, Card, Flowbite, Tabs } from "flowbite-react";
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const customTheme = {
  base: "flex flex-col gap-2",
  tablist: {
    base: "flex text-center",
    styles: {
      pills: "flex-wrap font-medium text-sm text-blue-500 dark:text-gray-400 ",
    },
    tabitem: {
      base: "flex items-center justify-center mt-2 mr-2 w-28 px-4 py-2 rounded-t-lg text-sm font-medium first:ml-0 disabled:cursor-not-allowed disabled:text-gray-400 disabled:dark:text-gray-500 focus:ring-4 focus:ring-cyan-300 focus:outline-none",
      styles: {
        pills: {
          base: "",
          active: {
            on: "rounded-full bg-blue-600 text-white",
            off: "rounded-full hover:text-white hover:bg-blue-700 border border-blue-300",
          },
        },
      },
      icon: "mr-2 h-5 w-5",
    },
  },
  tabitemcontainer: {
    base: "",
    styles: {
      default: "",
      underline: "",
      pills: "",
      fullWidth: "",
    },
  },
  tabpanel: "py-3",
};

function App() {
  return (
    <>
      <Header />
      <Flowbite theme={{ theme: customTheme }}>
        <main>
          {/* Hero Section */}
          <section className="bg-white dark:bg-gray-900" id="hero">
            <div className=" max-w-screen-xl px-4 py-8 mx-auto md:flex xl:gap-0 lg:py-16 ">
              <div className="block sm:hidden lg:mt-0 float-right">
                <img
                  className="rounded-full mb-4"
                  src="/src/assets/Yoga_Rizky_Foto.png"
                  alt="mockup"
                />
              </div>
              <div className="mr-auto place-self-center ">
                <p className="font-bold">Selamat datang di portofolio saya</p>
                <h1 className="max-w-2xl mb-4 text-3xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
                  Halo, Saya
                  <br /> <span className="text-blue-600">Yoga Rizky Putra</span>
                  <br />
                  Frontend Web Developer
                </h1>
                <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                  Walaupun saat ini fokus pada Frontend, tapi saya tertarik juga
                  pada sisi Backend dan mungkin akan menjadi Fullstack Web
                  Developer kedepannya
                </p>
                <HashLink
                  smooth
                  to={"/#sosmed"}
                  className="bg-blue-500 inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
                >
                  Hubungi Saya
                  <svg
                    className="w-5 h-5 ml-2 -mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </HashLink>
                {/* <Link
                  href="#"
                  className="mt-2 sm:mt-0 inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-blue-600 border border-blue-600 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                >
                  Download CV saya
                </Link> */}
              </div>
              <div className="hidden lg:mt-0 sm:flex float-right">
                <img
                  className="rounded-s-full"
                  src="/src/assets/Yoga_Rizky_Foto.png"
                  alt="mockup"
                />
              </div>
            </div>
          </section>
          {/* End Hero Section  */}
          {/* About me */}
          <section id="about">
            <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
              <div className="hidden lg:mt-0 lg:col-span-5 lg:flex lg:mr-6">
                <img
                  className="rounded-r-full h-fit"
                  src="/src/assets/Yoga.jpg"
                  alt="mockup"
                />
              </div>
              <div className="mr-auto place-self-center lg:col-span-6">
                <p className="font-bold">Tentang Saya</p>
                <h1 className="max-w-2xl mb-4 text-3xl font-bold tracking-tight leading-none md:text-3xl xl:text-4xl dark:text-white">
                  <span className="text-blue-600">
                    Yoga Rizky Putra || Web Developer
                  </span>
                </h1>
                <p className="max-w-2xl mb-6 font-light text-gray-900 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                  Halo, Saya Yoga Rizky Putra seorang Web Developer yang
                  berfokus pada bagian Frontend, tetapi saya juga tertarik untuk
                  mempelajari backend dan menjadi Fullstack kedepannya
                </p>
                <Tabs.Group
                  theme={customTheme}
                  aria-label="Pills"
                  style="pills"
                >
                  <Tabs.Item active title="Kemampuan">
                    <div className="mb-1 text-base font-medium dark:text-white">
                      Laravel
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
                      <div
                        className="bg-blue-600 h-2.5 rounded-full dark:bg-blue-500"
                        style={{ width: "85%" }}
                      />
                    </div>
                    <div className="mb-1 text-base font-medium dark:text-white">
                      ReactJS
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
                      <div
                        className="bg-blue-600 h-2.5 rounded-full dark:bg-blue-500"
                        style={{ width: "80%" }}
                      />
                    </div>
                    <div className="mb-1 text-base font-medium dark:text-white">
                      NextJS
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
                      <div
                        className="bg-blue-600 h-2.5 rounded-full dark:bg-blue-500"
                        style={{ width: "65%" }}
                      />
                    </div>
                    <div className="mb-1 text-base font-medium dark:text-white">
                      VueJS
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
                      <div
                        className="bg-blue-600 h-2.5 rounded-full dark:bg-blue-500"
                        style={{ width: "55%" }}
                      />
                    </div>
                    <div className="mb-1 text-base font-medium dark:text-white">
                      NuxtJS
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
                      <div
                        className="bg-blue-600 h-2.5 rounded-full dark:bg-blue-500"
                        style={{ width: "45%" }}
                      />
                    </div>
                    <div className="mb-1 text-base font-medium dark:text-white">
                      AdonisJS
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
                      <div
                        className="bg-blue-600 h-2.5 rounded-full dark:bg-blue-500"
                        style={{ width: "35%" }}
                      />
                    </div>
                  </Tabs.Item>
                  <Tabs.Item title="Projek">
                    <Accordion collapseAll>
                      <Accordion.Panel>
                        <Accordion.Title>
                          Sistem Informasi Pengelolaan Barang Milik Negara (SIP
                          BMN) Kemenristek BRIN Codeigniter 3
                        </Accordion.Title>
                        <Accordion.Content>
                          <p className="mb-2 text-gray-500 dark:text-gray-400">
                            Sistem untuk melakukan pengelolaan barang milik
                            negara di kemenristek BRIN dan saya berposisi
                            sebagai Pengembang pada sisi Frontend Website
                          </p>
                          <p className="mb-2 text-gray-500 dark:text-gray-400">
                            Sistem dibangun dengan Codeigniter 3 serta
                            menggunakan bootstrap
                          </p>
                          <h3 className="font-semibold">
                            Link Projek: Tidak tersedia karena web sudah tidak
                            aktif
                          </h3>
                        </Accordion.Content>
                      </Accordion.Panel>
                      <Accordion.Panel>
                        <Accordion.Title>
                          Web Pengelolaan Event IT Expo 2021 Laravel
                        </Accordion.Title>
                        <Accordion.Content>
                          <p className="mb-2 text-justify text-gray-500 dark:text-gray-400">
                            Web Pengelolaan Event IT Expo UNJ dan saya berposisi
                            sebagai pengembang pada sisi Frontend
                          </p>
                          <p className="mb-2 text-gray-500 dark:text-gray-400">
                            Sistem dibangun dengan menggunakan Laravel dan juga
                            Bootstrap
                          </p>
                          <h3 className="font-semibold">
                            Link Projek: Tidak tersedia karena web sudah tidak
                            aktif
                          </h3>
                        </Accordion.Content>
                      </Accordion.Panel>
                      <Accordion.Panel>
                        <Accordion.Title>
                          Projek Pribadi: Website Lowongan Pekerjaan Menggunakan
                          Reactjs
                        </Accordion.Title>
                        <Accordion.Content>
                          <p className="mb-2 text-justify text-gray-500 dark:text-gray-400">
                            Website ini merupakan tugas akhir dari pelatihan
                            reactjs di sanbercode <br /> Website ini sudah
                            mendukung fitur login, register, CRUD lowongan
                            pekerjaan untuk yang sudah login, serta search dan
                            filter untuk mencari pekerjaan yang sesuai keinginan
                            Website ini masih sangat jauh dari kata baik secara
                            tampilan karena tugas akhir ini berfokus pada
                            fungsionalitas aplikasi.
                          </p>
                          <p className="mb-2 text-gray-500 dark:text-gray-400">
                            Website dibangun menggunakan Reactjs dan Tailwind
                            CSS.
                          </p>
                          <h3 className="font-semibold">
                            Link Projek:
                            <Link
                              to={"https://yang-penting-usaha.netlify.app/"}
                              className="ml-2 font-medium text-blue-600 dark:text-blue-500 hover:underline"
                            >
                              https://yang-penting-usaha.netlify.app/
                            </Link>
                          </h3>
                        </Accordion.Content>
                      </Accordion.Panel>
                      <Accordion.Panel>
                        <Accordion.Title>
                          Projek Pribadi: Website E-Commerce Menggunakan Next JS
                        </Accordion.Title>
                        <Accordion.Content>
                          <p className="mb-2 text-justify text-gray-500 dark:text-gray-400">
                            Website ini merupakan tugas akhir dari pelatihan
                            Next Js di kelas sanbercode <br /> Untuk role
                            customer website ini sudah mendukung fitur login dan
                            register customer, fitur search untuk mencari barang
                            yang diinginkan, fitur checkout, transaksi selesai
                            serta mengirim email kepada customer yang sudah
                            login. Untuk role admin website ini sudah mendukung
                            fitur login admin, CRUD untuk data kategori, CRUD
                            untuk data produk, menampilkan keseluruhan data
                            checkout dan transaksi di tabel, serta total data
                            pada dashboard Website ini mungkin masih memiliki
                            kekurangan secara tampilan karena tugas akhir ini
                            berfokus pada fungsionalitas aplikasi.
                          </p>
                          <p className="mb-2 text-gray-500 dark:text-gray-400">
                            Website dibangun menggunakan Next Js dan Tailwind
                            CSS.
                          </p>
                          <h3 className="font-semibold">
                            Link Projek:
                            <Link
                              to={
                                "https://sanbercode-nextjs-batch-39-yogarizky51.vercel.app/"
                              }
                              className="ml-2 font-medium text-blue-600 dark:text-blue-500 hover:underline"
                            >
                              https://sanbercode-nextjs-batch-39-yogarizky51.vercel.app/
                            </Link>
                          </h3>
                        </Accordion.Content>
                      </Accordion.Panel>
                      <Accordion.Panel>
                        <Accordion.Title>
                          Projek Tugas Kelompok: Website Penjualan Tiket -
                          Tickety Dengan Framework Laravel
                        </Accordion.Title>
                        <Accordion.Content>
                          <p className="mb-2 text-justify text-gray-500 dark:text-gray-400">
                            Secara Garis besar Project ini untuk penjualan tiket
                            sebuah event seperti webinar, workshop, konser, dll.
                            Pada milestone kali ini pembeli/pelanggan dapat
                            melihat acara hingga detail acara beserta tiket yang
                            tersedia, akan tetapi saat ingin membeli tiket
                            diperlukan login(Untuk ruang lingkup pengerjaan
                            project ini user hanya dapat melakukan pembelian 1
                            jenis tiket dalam sekali transaksi). Fungsi Register
                            akan membuat pembeli/pelanggan memiliki role "user".
                          </p>
                          <p className="mb-2 text-gray-500 dark:text-gray-400">
                            Posisi saya pada projek ini adalah sebagai Fullstack
                            Web Developer dengan bahasa PHP dan framework
                            Laravel
                          </p>
                          <h3 className="font-semibold">
                            Link Projek: Link website mati karena hosting tidak
                            diperpanjang
                          </h3>
                        </Accordion.Content>
                      </Accordion.Panel>
                      <Accordion.Panel>
                        <Accordion.Title>
                          Projek Pribadi: Luxspace with ReactJS & Tailwind CSS
                        </Accordion.Title>
                        <Accordion.Content>
                          <p className="mb-2 text-justify text-gray-500 dark:text-gray-400">
                            Projek ini merupakan projek hasil pelatihan Reactjs
                            dan Tailwind CSS pada salah satu kelas di
                            buildwithangga <br /> <br /> Web yang dibuat adalah
                            web penjualan furnitur dengan menggunakan mock-up
                            API dari postman sebagai sumber data <br /> <br />
                            Web yang dibuat memiliki halaman yang cukup lengkap
                            dari halaman utama, detail barang, halaman keranjang
                            belanja, halaman pembayaran sukses dan halaman error
                            jika halaman yang dicari tidak ditemukan <br />
                            <br />
                            Beberapa bagian dari halaman pada projek ini sudah
                            dibuat responsif, dan mohon maaf sebagian lagi belum
                            berhasil dibuat responsif karena adanya kendala baik
                            dari sisi projek ataupun luar projek.
                          </p>
                          <h3 className="font-semibold">
                            Link Projek:{" "}
                            <Link
                              className="ml-2 font-medium text-blue-600 dark:text-blue-500 hover:underline"
                              to={"https://luxspace-yoga-reactjs.netlify.app/"}
                            >
                              https://luxspace-yoga-reactjs.netlify.app/
                            </Link>
                          </h3>
                        </Accordion.Content>
                      </Accordion.Panel>
                    </Accordion>
                  </Tabs.Item>
                  <Tabs.Item title="Pendidikan">
                    <Accordion collapseAll>
                      <Accordion.Panel>
                        <Accordion.Title>Pendidikan Formal</Accordion.Title>
                        <Accordion.Content>
                          <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
                            <li>Universitas Negeri Jakarta (2018 - 2023)</li>
                          </ul>
                        </Accordion.Content>
                      </Accordion.Panel>
                      <Accordion.Panel>
                        <Accordion.Title>Pendidikan Non Formal</Accordion.Title>
                        <Accordion.Content>
                          <ol className="space-y-4 text-gray-500 list-decimal list-inside dark:text-gray-400">
                            <li>
                              Sanbercode
                              <ul className="pl-5 mt-2 space-y-1 list-disc list-inside">
                                <li>
                                  Reach Title "Mastered" on React Js Web
                                  Frontend (Oktober 2022) -
                                  <Link
                                    className="ml-2 font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                    to={
                                      "https://sanbercode.com/sertifikat/generate/901de2f5-2b9b-42fe-93f8-f3d1f4be8cd5"
                                    }
                                  >
                                    Link Sertifikat
                                  </Link>
                                </li>
                                <li>
                                  Reach Title "Mastered" on Next JS (November
                                  2022) -
                                  <Link
                                    className="ml-2 font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                    to={
                                      "https://sanbercode.com/sertifikat/generate/6b43cca7-3eba-45f2-95d5-17fa86a27885"
                                    }
                                  >
                                    Link Sertifikat
                                  </Link>
                                </li>
                                <li>
                                  Reach Title "Mastered" on Laravel Web
                                  Development (Desember 2022) -
                                  <Link
                                    className="ml-2 font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                    to={
                                      "https://sanbercode.com/sertifikat/generate/3f4efb0d-78bd-4208-b88f-edcefc967023"
                                    }
                                  >
                                    Link Sertifikat
                                  </Link>
                                </li>
                                <li>
                                  Reach Title "Mastered" on UI/UX Web Design
                                  (Maret 2023) -
                                  <Link
                                    className="ml-2 font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                    to={
                                      "https://sanbercode.com/sertifikat/generate/b841ef45-eb94-4632-8ace-88c98fd44a67"
                                    }
                                  >
                                    Link Sertifikat
                                  </Link>
                                </li>
                                <li>
                                  NodeJS Backend Development with Adonis (Mei
                                  2023) -
                                  <Link
                                    className="ml-2 font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                    to={
                                      "https://sanbercode.com/sertifikat/generate/7a1fcf63-663b-4278-a9b3-c3f9e90f511e"
                                    }
                                  >
                                    Link Sertifikat
                                  </Link>
                                </li>
                                <li>
                                  Vue JS Web Frontend Development (Juli 2023) -
                                  <Link
                                    className="ml-2 font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                    to={
                                      "https://sanbercode.com/sertifikat/generate/07734b80-375b-404a-8142-d85acec77f94"
                                    }
                                  >
                                    Link Sertifikat
                                  </Link>
                                </li>
                              </ul>
                            </li>
                            <li>
                              Progate
                              <ul className="pl-5 mt-2 space-y-1 list-disc list-inside">
                                <li>
                                  Certificate of Completion Frontend Developer
                                  Course (November 2022) -
                                  <Link
                                    className="ml-2 font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                    to={
                                      "https://progate.com/path_certificate/53ae74farln3nz"
                                    }
                                  >
                                    Link Sertifikat
                                  </Link>
                                </li>
                                <li>
                                  Certificate of Completion Path Pengembangan
                                  Web (Node.js) (Juni 2020) -
                                  <Link
                                    className="ml-2 font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                    to={
                                      "https://progate.com/path_certificate/469adf23qbbams"
                                    }
                                  >
                                    Link Sertifikat
                                  </Link>
                                </li>
                                <li>
                                  Sertifikat Penyelesaian Kursus React
                                  (September 2022) -
                                  <Link
                                    className="ml-2 font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                    to={
                                      "https://progate.com/course_certificate/a9c2ace0ri03cd"
                                    }
                                  >
                                    Link Sertifikat
                                  </Link>
                                </li>
                                <li>
                                  Sertifikat Penyelesaian Kursus Javascript (Mei
                                  2020) -
                                  <Link
                                    className="ml-2 font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                    to={
                                      "https://progate.com/course_certificate/20e2c851qfnpg4"
                                    }
                                  >
                                    Link Sertifikat
                                  </Link>
                                </li>
                              </ul>
                            </li>
                            <li>
                              Codepolitan
                              <ul className="pl-5 mt-2 space-y-1 list-disc list-inside">
                                <li>
                                  Sertifikat Kelas Belajar ReactJS (September
                                  2023) -
                                  <Link
                                    className="ml-2 font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                    to={"https://codepolitan.com/c/TRNTIMY"}
                                  >
                                    Link Sertifikat
                                  </Link>
                                </li>
                              </ul>
                            </li>
                            <li>
                              BuildWithAngga
                              <ul className="pl-5 mt-2 space-y-1 list-disc list-inside">
                                <li>
                                  Mastering Web Development with React &
                                  Tailwind CSS (Juni 2023) -
                                  <Link
                                    className="ml-2 font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                    to={
                                      "https://class.buildwithangga.com/certificate/master-class-react-js-dan-tailwind-css-website-development"
                                    }
                                  >
                                    Link Sertifikat
                                  </Link>
                                </li>
                                <li>
                                  Full-Stack Laravel React JS: Build Streaming
                                  Website Like Netflix (September 2023) -
                                  <Link
                                    className="ml-2 font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                    to={
                                      "https://class.buildwithangga.com/certificate/full-stack-laravel-react-js-build-streaming-website-like-netflix"
                                    }
                                  >
                                    Link Sertifikat
                                  </Link>
                                </li>
                              </ul>
                            </li>
                            <li>
                              ITBox
                              <ul className="pl-5 mt-2 space-y-1 list-disc list-inside">
                                <li>
                                  ITBox Belajar Menjadi Full Stack JavaScript
                                  Web Developer Tingkat Pemula Certificate (Mei
                                  2023) -
                                  <Link
                                    className="ml-2 font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                    to={
                                      "https://itbox.id/certificate-verifier/132FF657D-1331DC21F-33094BD/"
                                    }
                                  >
                                    Link Sertifikat
                                  </Link>
                                </li>
                              </ul>
                            </li>
                            <li>
                              Dicoding
                              <ul className="pl-5 mt-2 space-y-1 list-disc list-inside">
                                <li>
                                  Belajar Membuat Front-End Web untuk Pemula
                                  (Agustus 2022) -
                                  <Link
                                    className="ml-2 font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                    to={
                                      "https://www.dicoding.com/certificates/JLX1GYV5GZ72"
                                    }
                                  >
                                    Link Sertifikat
                                  </Link>
                                </li>
                                <li>
                                  Belajar Dasar Pemrograman Web (Juli 2022) -
                                  <Link
                                    className="ml-2 font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                    to={
                                      "https://www.dicoding.com/certificates/NVP7K5LMVZR0"
                                    }
                                  >
                                    Link Sertifikat
                                  </Link>
                                </li>
                              </ul>
                            </li>
                          </ol>
                        </Accordion.Content>
                      </Accordion.Panel>
                    </Accordion>
                  </Tabs.Item>
                  <Tabs.Item title="Pengalaman">
                    <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                      Pengalaman Kerja Saya
                    </h2>
                    <div className="max-w-xs p-3 mt-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                      <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                        Frontend Web Developer
                      </h5>
                      <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
                        Kementerian Riset dan Teknologi BRIN
                      </p>
                      <p className="inline-flex items-center text-blue-600">
                        Februari 2021 - Mei 2021
                      </p>
                    </div>
                  </Tabs.Item>
                </Tabs.Group>
              </div>
            </div>
          </section>
          {/* End About me */}
          {/* Projek Saya */}
          <section id="portofolio">
            <h1 className="text-blue-600 text-center font-bold text-2xl">
              PROJEK SAYA
            </h1>
            <h1 className="text-black text-center font-bold text-xl md:text-4xl mt-5 capitalize">
              Berikut adalah beberapa screenshot tampilan projek <br /> yang
              pernah saya kerjakan
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5 mx-4 md:mx-auto max-w-6xl">
              <Card
                imgAlt="VueJS Tugas Akhir Sanbercode"
                imgSrc="/src/assets/vuejs-sanber.png"
              >
                <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <p>Tugas Akhir Vue JS Sanbercode</p>
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  Projek Sederhana dengan implementasi CRUD, autentikasi, dan
                  autorisasi pada Vue JS
                </p>
                <p>
                  Link Projek -
                  <Link
                    className="ml-2 font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    to={"https://sanbercode-vuejs-yoga.netlify.app/"}
                  >
                    https://sanbercode-vuejs-yoga.netlify.app/
                  </Link>
                </p>
              </Card>
              <Card
                imgAlt="Laravel Halaman Home Skripsi"
                imgSrc="/src/assets/halaman-home-skripsi.png"
              >
                <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <p>
                    Sistem Tanda Tangan (SiTaTang) Digital QR Code (Projek Akhir
                    Skripsi)
                  </p>
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  Projek akhir skripsi saya yang menghasilkan tanda tangan
                  digital berbentuk QR Code. Projek ini saya kerjakan fullstack
                  dengan menggunakan Laravel
                </p>
                <p>
                  Link Projek tidak ada karena projek tidak sampai tahap deploy
                </p>
              </Card>
              <Card
                imgAlt="Tugas Akhir BWA Luxspace"
                imgSrc="/src/assets/luxspace-yoga-reactjs.png"
              >
                <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <p>Tugas Akhir Luxspace BWA</p>
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  Projek ini merupakan projek hasil pelatihan Reactjs dan
                  Tailwind CSS pada salah satu kelas di buildwithangga
                </p>
                <p>
                  Link Projek -
                  <Link
                    className="ml-2 font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    to={"https://luxspace-yoga-reactjs.netlify.app/"}
                  >
                    https://luxspace-yoga-reactjs.netlify.app/
                  </Link>
                </p>
              </Card>
              <Card
                imgAlt="NextJS Tugas Akhir Sanbercode"
                imgSrc="/src/assets/yang-penting-usaha.png"
              >
                <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <p>Tugas Akhir ReactJS Sanbercode - Website Lowongan Kerja</p>
                </h5>
                <p className="font-normal text-gray-700  dark:text-gray-400">
                  Website ini merupakan tugas akhir dari pelatihan reactjs di
                  sanbercode <br /> Website dibangun menggunakan Reactjs dan
                  Tailwind CSS.
                </p>
                <p>
                  Link Projek -
                  <Link
                    className="ml-2 font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    to={"https://yang-penting-usaha.netlify.app/"}
                  >
                    https://yang-penting-usaha.netlify.app/
                  </Link>
                </p>
              </Card>
              <Card
                imgAlt="NextJS Tugas Akhir Sanbercode"
                imgSrc="/src/assets/sanbercode-nextjs-batch-39.png"
              >
                <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <p>Tugas Akhir NextJS Sanbercode - Website E-Commerce</p>
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  Website ini merupakan tugas akhir dari pelatihan Next Js di
                  kelas sanbercode
                </p>
                <p>
                  Link Projek -
                  <Link
                    className="ml-2 font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    to={"https://sanbercode-nextjs-batch-39.vercel.app/"}
                  >
                    https://sanbercode-nextjs-batch-39.vercel.app/
                  </Link>
                </p>
              </Card>
            </div>
          </section>
          {/* End Projek Saya */}
          {/* Sosmed Saya */}
          <section id="sosmed">
            <h1 className="text-blue-600 text-center font-bold text-2xl mt-16">
              SOSIAL MEDIA SAYA
            </h1>
            <h1 className="text-black text-center font-bold text-xl md:text-4xl mt-5 capitalize">
              Yuk Kenal Lebih Dekat Dengan Saya
            </h1>
            <div className="flex justify-around mt-10">
              <div className="flex flex-col  items-center pb-10 mt-5">
                <img
                  className="w-24 h-24 mb-3 "
                  src="/src/assets/linkedin.png"
                  alt="Linkedin"
                />
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                  Linkedin
                </h5>
                <Link
                  className="ml-2 font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  to={"www.linkedin.com/in/yoga-rizky-p-1a900613b"}
                  target="_blank"
                >
                  Yoga Rizky Putra
                </Link>
              </div>
              <div className="flex flex-col items-center pb-10 mt-5">
                <img
                  className="w-24 h-24 mb-3 "
                  src="/src/assets/instagram.png"
                  alt="Instagram"
                />
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                  Instagram
                </h5>
                <Link
                  className="ml-2 font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  to={
                    "https://instagram.com/yogarizkyputra?igshid=MzMyNGUyNmU2YQ=="
                  }
                  target="_blank"
                >
                  Yoga Rizky Putra
                </Link>
              </div>
            </div>
          </section>
          {/* End Sosmed Saya */}
        </main>
      </Flowbite>
      <Footer />
    </>
  );
}

export default App;
