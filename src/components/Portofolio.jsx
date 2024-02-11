import { Card, Tabs } from "flowbite-react";
import { Link } from "react-router-dom";
import { listPortofolio } from "../data/data";
import { useTranslation } from "react-i18next";

const Portofolio = () => {
  const customTheme = {
    base: "flex flex-col gap-2",
    tablist: {
      base: "flex text-center",
      styles: {
        pills: "flex-wrap font-medium text-sm text-white dark:text-gray-400 ",
      },
      tabitem: {
        base: "flex items-center justify-center mt-2 mr-2 px-4 py-2 rounded-t-lg text-sm font-medium first:ml-0 disabled:cursor-not-allowed disabled:text-gray-400 disabled:dark:text-gray-500 focus:ring-4 focus:ring-cyan-300 focus:outline-none",
        styles: {
          pills: {
            base: "",
            active: {
              on: "rounded-full bg-white text-blue-600",
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
  const { t } = useTranslation();
  return (
    <section
      id="portofolio"
      className="bg-blue-600 border-b-4 border-blue-500 py-4"
    >
      <h1 className="text-white text-center font-bold text-2xl">
        {t("portofolio.subtitle")}
      </h1>
      <h1 className="text-white text-center font-bold text-xl md:text-3xl mt-5 capitalize">
        {t("portofolio.title")}
      </h1>
      <Tabs.Group
        theme={customTheme}
        aria-label="Pills"
        style="pills"
        className="flex justify-center mt-2"
      >
        <Tabs.Item active title="Bahasa Indonesia">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2 mx-4 md:mx-auto max-w-6xl">
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
                      Link Projek - Link Projek Tidak Tersedia Karena Hosting
                      Sudah Tidak Aktif
                    </p>
                  )}
                </Card>
              );
            })}
          </div>
        </Tabs.Item>
        <Tabs.Item title="English">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2 mx-4 md:mx-auto max-w-6xl">
            {listPortofolio.map((item, index) => {
              return (
                <Card key={item.id} imgAlt={item.imgAlt} imgSrc={item.imgSrc}>
                  <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    <p>{item.titleEng}</p>
                  </h5>
                  <p className="whitespace-pre-line font-normal text-gray-700 dark:text-gray-400">
                    {item.descEng}
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
                      Project Link: Project link is not available because the
                      hosting is already expired
                    </p>
                  )}
                </Card>
              );
            })}
          </div>
        </Tabs.Item>
      </Tabs.Group>
    </section>
  );
};

export default Portofolio;
