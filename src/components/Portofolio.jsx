import { Card } from "flowbite-react";
import Vuejs from "../assets/vuejs-sanber.png";
import YPU from "../assets/yang-penting-usaha.png";
import Skripsi from "../assets/halaman-home-skripsi.png";
import NextJS from "../assets/sanbercode-nextjs-batch-39.png";
import LuxSpace from "../assets/luxspace-yoga-reactjs.png";
import { Link } from "react-router-dom";

const Portofolio = () => {
  return (
    <section
      id="portofolio"
      className="bg-blue-600 border-b-4 border-blue-500 py-4"
    >
      <h1 className="text-white text-center font-bold text-2xl">PROJEK SAYA</h1>
      <h1 className="text-white text-center font-bold text-xl md:text-4xl mt-5 capitalize">
        Berikut adalah beberapa screenshot tampilan projek <br /> yang pernah
        saya kerjakan
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5 mx-4 md:mx-auto max-w-6xl">
        <Card imgAlt="VueJS Tugas Akhir Sanbercode" imgSrc={Vuejs}>
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
              target="_blank"
            >
              https://sanbercode-vuejs-yoga.netlify.app/
            </Link>
          </p>
        </Card>
        <Card imgAlt="Laravel Halaman Home Skripsi" imgSrc={Skripsi}>
          <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            <p>
              Sistem Tanda Tangan (SiTaTang) Digital QR Code (Projek Akhir
              Skripsi)
            </p>
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Projek akhir skripsi saya yang menghasilkan tanda tangan digital
            berbentuk QR Code. Projek ini saya kerjakan fullstack dengan
            menggunakan Laravel
          </p>
          <p>Link Projek tidak ada karena projek tidak sampai tahap deploy</p>
        </Card>
        <Card imgAlt="Tugas Akhir BWA Luxspace" imgSrc={LuxSpace}>
          <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            <p>Tugas Akhir Luxspace BWA</p>
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Projek ini merupakan projek hasil pelatihan Reactjs dan Tailwind CSS
            pada salah satu kelas di buildwithangga
          </p>
          <p>
            Link Projek -
            <Link
              className="ml-2 font-medium text-blue-600 dark:text-blue-500 hover:underline"
              to={"https://luxspace-yoga-reactjs.netlify.app/"}
              target="_blank"
            >
              https://luxspace-yoga-reactjs.netlify.app/
            </Link>
          </p>
        </Card>
        <Card imgAlt="NextJS Tugas Akhir Sanbercode" imgSrc={YPU}>
          <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            <p>Tugas Akhir ReactJS Sanbercode - Website Lowongan Kerja</p>
          </h5>
          <p className="font-normal text-gray-700  dark:text-gray-400">
            Website ini merupakan tugas akhir dari pelatihan reactjs di
            sanbercode <br /> Website dibangun menggunakan Reactjs dan Tailwind
            CSS.
          </p>
          <p>
            Link Projek -
            <Link
              className="ml-2 font-medium text-blue-600 dark:text-blue-500 hover:underline"
              to={"https://yang-penting-usaha.netlify.app/"}
              target="_blank"
            >
              https://yang-penting-usaha.netlify.app/
            </Link>
          </p>
        </Card>
        <Card imgAlt="NextJS Tugas Akhir Sanbercode" imgSrc={NextJS}>
          <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            <p>Tugas Akhir NextJS Sanbercode - Website E-Commerce</p>
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Website ini merupakan tugas akhir dari pelatihan Next Js di kelas
            sanbercode
          </p>
          <p>
            Link Projek -
            <Link
              className="ml-2 font-medium text-blue-600 dark:text-blue-500 hover:underline"
              to={"https://sanbercode-nextjs-batch-39.vercel.app/"}
              target="_blank"
            >
              https://sanbercode-nextjs-batch-39.vercel.app/
            </Link>
          </p>
        </Card>
      </div>
    </section>
  );
};

export default Portofolio;
