import { Accordion, Flowbite, Tabs } from "flowbite-react";

import { Link } from "react-router-dom";

import Yogajpg from "../assets/yoga.jpg";

import LogoLaravel from "../assets/laravel-svgrepo-com.svg";
import LogoAdonis from "../assets/adonis-js-svgrepo-com.svg";
import LogoVue from "../assets/vue-vuejs-javascript-js-framework-svgrepo-com.svg";
import LogoReact from "../assets/reactjs-svgrepo-com.svg";
import LogoNext from "../assets/nextjs-fill-svgrepo-com.svg";
import LogoNuxt from "../assets/nuxt-svgrepo-com.svg";

const About = () => {
  const customTheme = {
    base: "flex flex-col gap-2",
    tablist: {
      base: "flex text-center",
      styles: {
        pills:
          "flex-wrap font-medium text-sm text-blue-500 dark:text-gray-400 ",
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
  return (
    <Flowbite theme={{ theme: customTheme }}>
      <section id="about" className="border-b-4 border-blue-500 ">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex lg:mr-6">
            <img className="rounded-r-full h-fit" src={Yogajpg} alt="mockup" />
          </div>
          <div className="mr-auto place-self-center text-center sm:text-left lg:col-span-6">
            <p className="font-bold">Tentang Saya</p>
            <h1 className="max-w-2xl mb-4 text-3xl font-bold tracking-tight leading-none md:text-3xl xl:text-4xl dark:text-white">
              <span className="text-blue-600">
                Yoga Rizky Putra || Web Developer
              </span>
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-900 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              Halo, Saya Yoga Rizky Putra seorang Web Developer yang berfokus
              pada bagian Frontend, tetapi saya juga tertarik untuk mempelajari
              backend dan menjadi Fullstack kedepannya
            </p>
            <Tabs.Group theme={customTheme} aria-label="Pills" style="pills">
              <Tabs.Item active title="Kemampuan">
                <div className="mb-1 text-base font-medium dark:text-white flex items-center">
                  Laravel
                  <img
                    className="w-6 h-6 ml-2"
                    src={LogoLaravel}
                    alt="Laravel"
                  />
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full dark:bg-blue-500"
                    style={{ width: "85%" }}
                  />
                </div>
                <div className="mb-1 text-base font-medium dark:text-white flex items-center">
                  ReactJS
                  <img className="w-8 h-8 ml-1" src={LogoReact} alt="Reactjs" />
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full dark:bg-blue-500"
                    style={{ width: "80%" }}
                  />
                </div>
                <div className="mb-1 text-base font-medium dark:text-white flex items-center">
                  NextJS
                  <img className="w-6 h-6 ml-1" src={LogoNext} alt="Nextjs" />
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full dark:bg-blue-500"
                    style={{ width: "65%" }}
                  />
                </div>
                <div className="mb-1 text-base font-medium dark:text-white flex items-center">
                  VueJS
                  <img className="w-8 h-8" src={LogoVue} alt="Vuejs" />
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full dark:bg-blue-500"
                    style={{ width: "55%" }}
                  />
                </div>
                <div className="mb-1 text-base font-medium dark:text-white flex items-center">
                  NuxtJS
                  <img className="w-8 h-8" src={LogoNuxt} alt="Nuxtjs" />
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full dark:bg-blue-500"
                    style={{ width: "45%" }}
                  />
                </div>
                <div className="mb-1 text-base font-medium dark:text-white flex items-center">
                  AdonisJS
                  <img
                    className="w-6 h-6 ml-1"
                    src={LogoAdonis}
                    alt="Adonisjs"
                  />
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
                      Sistem Informasi Pengelolaan Barang Milik Negara (SIP BMN)
                      Kemenristek BRIN Codeigniter 3
                    </Accordion.Title>
                    <Accordion.Content>
                      <p className="mb-2 text-gray-500 dark:text-gray-400">
                        Sistem untuk melakukan pengelolaan barang milik negara
                        di kemenristek BRIN dan saya berposisi sebagai
                        Pengembang pada sisi Frontend Website
                      </p>
                      <p className="mb-2 text-gray-500 dark:text-gray-400">
                        Sistem dibangun dengan Codeigniter 3 serta menggunakan
                        bootstrap
                      </p>
                      <h3 className="font-semibold">
                        Link Projek: Tidak tersedia karena web sudah tidak aktif
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
                        Link Projek: Tidak tersedia karena web sudah tidak aktif
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
                        Website ini merupakan tugas akhir dari pelatihan reactjs
                        di sanbercode <br /> Website ini sudah mendukung fitur
                        login, register, CRUD lowongan pekerjaan untuk yang
                        sudah login, serta search dan filter untuk mencari
                        pekerjaan yang sesuai keinginan Website ini masih sangat
                        jauh dari kata baik secara tampilan karena tugas akhir
                        ini berfokus pada fungsionalitas aplikasi.
                      </p>
                      <p className="mb-2 text-gray-500 dark:text-gray-400">
                        Website dibangun menggunakan Reactjs dan Tailwind CSS.
                      </p>
                      <h3 className="font-semibold">
                        Link Projek:
                        <Link
                          target="_blank"
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
                        Website ini merupakan tugas akhir dari pelatihan Next Js
                        di kelas sanbercode <br /> Untuk role customer website
                        ini sudah mendukung fitur login dan register customer,
                        fitur search untuk mencari barang yang diinginkan, fitur
                        checkout, transaksi selesai serta mengirim email kepada
                        customer yang sudah login. Untuk role admin website ini
                        sudah mendukung fitur login admin, CRUD untuk data
                        kategori, CRUD untuk data produk, menampilkan
                        keseluruhan data checkout dan transaksi di tabel, serta
                        total data pada dashboard Website ini mungkin masih
                        memiliki kekurangan secara tampilan karena tugas akhir
                        ini berfokus pada fungsionalitas aplikasi.
                      </p>
                      <p className="mb-2 text-gray-500 dark:text-gray-400">
                        Website dibangun menggunakan Next Js dan Tailwind CSS.
                      </p>
                      <h3 className="font-semibold">
                        Link Projek:
                        <Link
                          target="_blank"
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
                      Projek Tugas Kelompok: Website Penjualan Tiket - Tickety
                      Dengan Framework Laravel
                    </Accordion.Title>
                    <Accordion.Content>
                      <p className="mb-2 text-justify text-gray-500 dark:text-gray-400">
                        Secara Garis besar Project ini untuk penjualan tiket
                        sebuah event seperti webinar, workshop, konser, dll.
                        Pada milestone kali ini pembeli/pelanggan dapat melihat
                        acara hingga detail acara beserta tiket yang tersedia,
                        akan tetapi saat ingin membeli tiket diperlukan
                        login(Untuk ruang lingkup pengerjaan project ini user
                        hanya dapat melakukan pembelian 1 jenis tiket dalam
                        sekali transaksi). Fungsi Register akan membuat
                        pembeli/pelanggan memiliki role "user".
                      </p>
                      <p className="mb-2 text-gray-500 dark:text-gray-400">
                        Posisi saya pada projek ini adalah sebagai Fullstack Web
                        Developer dengan bahasa PHP dan framework Laravel
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
                        Projek ini merupakan projek hasil pelatihan Reactjs dan
                        Tailwind CSS pada salah satu kelas di buildwithangga{" "}
                        <br /> <br /> Web yang dibuat adalah web penjualan
                        furnitur dengan menggunakan mock-up API dari postman
                        sebagai sumber data <br /> <br />
                        Web yang dibuat memiliki halaman yang cukup lengkap dari
                        halaman utama, detail barang, halaman keranjang belanja,
                        halaman pembayaran sukses dan halaman error jika halaman
                        yang dicari tidak ditemukan <br />
                        <br />
                        Beberapa bagian dari halaman pada projek ini sudah
                        dibuat responsif, dan mohon maaf sebagian lagi belum
                        berhasil dibuat responsif karena adanya kendala baik
                        dari sisi projek ataupun luar projek.
                      </p>
                      <h3 className="font-semibold">
                        Link Projek:
                        <Link
                          target="_blank"
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
                              Reach Title "Mastered" on React Js Web Frontend
                              (Oktober 2022) -
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
                              Reach Title "Mastered" on Next JS (November 2022)
                              -
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
                              Reach Title "Mastered" on Laravel Web Development
                              (Desember 2022) -
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
                              Reach Title "Mastered" on UI/UX Web Design (Maret
                              2023) -
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
                              NodeJS Backend Development with Adonis (Mei 2023)
                              -
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
                              Certificate of Completion Path Pengembangan Web
                              (Node.js) (Juni 2020) -
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
                              Sertifikat Penyelesaian Kursus React (September
                              2022) -
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
                              Sertifikat Kelas Belajar ReactJS (September 2023)
                              -
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
                              Mastering Web Development with React & Tailwind
                              CSS (Juni 2023) -
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
                              ITBox Belajar Menjadi Full Stack JavaScript Web
                              Developer Tingkat Pemula Certificate (Mei 2023) -
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
    </Flowbite>
  );
};

export default About;
