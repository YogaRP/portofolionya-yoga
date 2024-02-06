import { Card } from "flowbite-react";
import { Link } from "react-router-dom";
import { listPortofolio } from "../data/data";

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
        {listPortofolio.map((item, index) => {
          return (
            <Card key={item.id} imgAlt={item.imgAlt} imgSrc={item.imgSrc}>
              <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                <p>{item.title}</p>
              </h5>
              <p className="whitespace-pre-line font-normal text-gray-700 dark:text-gray-400">
                {item.desc}
              </p>
              {item.link !== undefined ? (
                <p>
                  Link Projek -
                  <Link
                    className="ml-2 font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    to={item.link}
                    target="_blank"
                  >
                    {item.link}
                  </Link>
                </p>
              ) : (
                <p>
                  Link Projek - Link Projek Tidak Tersedia Karena Hosting Sudah
                  Tidak Aktif
                </p>
              )}
            </Card>
          );
        })}
      </div>
    </section>
  );
};

export default Portofolio;
