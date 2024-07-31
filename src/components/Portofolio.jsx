import { Card, Pagination, Tabs } from "flowbite-react";
import { Link } from "react-router-dom";
import { listPortofolio } from "../data/data";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

const Portofolio = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [totalPages, setTotalPages] = useState(
    Math.ceil(listPortofolio.length / itemsPerPage)
  );
  const [dimensi, setDimensi] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setDimensi(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    if (dimensi < 640) {
      setItemsPerPage(1);
      setTotalPages(Math.ceil(listPortofolio.length / 1));
      setCurrentPage(1);
    } else if (dimensi >= 640 && dimensi < 1024) {
      setItemsPerPage(2);
      setTotalPages(Math.ceil(listPortofolio.length / 2));
      setCurrentPage(1);
    } else {
      setItemsPerPage(3);
      setTotalPages(Math.ceil(listPortofolio.length / 3));
      setCurrentPage(1);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [dimensi, totalPages]);

  // Tentukan item yang ditampilkan pada halaman saat ini
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = listPortofolio.slice(indexOfFirstItem, indexOfLastItem);

  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  const customTheme = {
    tabs: {
      base: "flex flex-col gap-2",
      tablist: {
        base: "flex text-center",
        styles: {
          pills: "flex-wrap font-medium text-sm text-white dark:text-gray-400 ",
        },
        tabitem: {
          base: "flex items-center justify-center mt-2 mr-2 px-4 py-2 rounded-t-lg text-sm font-medium first:ml-0 disabled:cursor-not-allowed disabled:text-gray-400 disabled:dark:text-gray-500 ",
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
    },
    pagination: {
      base: "",
      layout: {
        table: {
          base: "text-sm text-gray-700 dark:text-gray-400",
          span: "font-semibold text-gray-900 dark:text-white",
        },
      },
      pages: {
        base: "xs:mt-0 mt-2 inline-flex items-center  -space-x-px ",
        showIcon: "inline-flex",
        previous: {
          base: "ml-0 rounded-l-lg border border-gray-300 bg-white px-3 py-2 leading-tight text-gray-500 enabled:hover:bg-gray-100 enabled:hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 enabled:dark:hover:bg-gray-700 enabled:dark:hover:text-white",
          icon: "h-5 w-5",
        },
        next: {
          base: "rounded-r-lg border border-gray-300 bg-white px-3 py-2 leading-tight text-gray-500 enabled:hover:bg-gray-100 enabled:hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 enabled:dark:hover:bg-gray-700 enabled:dark:hover:text-white",
          icon: "h-5 w-5",
        },
        selector: {
          base: "w-12 border border-gray-300 bg-white py-2 leading-tight text-gray-500 enabled:hover:bg-gray-100 enabled:hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 enabled:dark:hover:bg-gray-700 enabled:dark:hover:text-white",
          active:
            "bg-blue-300 text-white hover:bg-cyan-100 hover:text-cyan-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white",
          disabled: "cursor-not-allowed opacity-50",
        },
      },
    },
  };
  const { t } = useTranslation();
  return (
    <section
      id="portofolio"
      className="bg-blue-600 border-b-4 border-blue-500 px-2 py-4 sm:p-4"
    >
      <h1 className="text-white text-center font-bold text-2xl ">
        {t("portofolio.subtitle")}
      </h1>
      <h1 className="text-white text-center font-bold text-xl md:text-3xl mt-5 capitalize">
        {t("portofolio.title")}
      </h1>
      <Tabs.Group
        theme={customTheme.tabs}
        aria-label="Pills"
        style="pills"
        className="flex justify-center mt-2"
      >
        <Tabs.Item active title="Bahasa Indonesia">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-2 mx-4 md:mx-auto max-w-6xl">
            {currentItems.map((item, index) => {
              return (
                <div
                  key={item.id}
                  className="max-w-sm p-2 h-[600px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-y-auto"
                >
                  <img
                    className="rounded-t-lg h-[200px]"
                    src={item.imgSrc}
                    alt={item.alt}
                  />
                  <div className="p-5 mt-3 flex flex-col gap-4">
                    <h5 className="text-md sm:text-lg md:text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                      <p>{item.title}</p>
                    </h5>
                    <p className="whitespace-pre-line font-normal text-sm sm:text-md md:text-lg text-gray-700 dark:text-gray-400">
                      {item.desc}
                    </p>
                    <p className="whitespace-pre-line font-normal text-sm sm:text-md md:text-lg text-gray-700 dark:text-gray-400">
                      Tech Stack - {item.techStack}
                    </p>
                    {item.link !== undefined ? (
                      <p className="whitespace-pre-line font-normal text-sm sm:text-md md:text-lg text-gray-700 dark:text-gray-400">
                        Link Projek - {""}
                        <Link
                          className=" font-medium text-blue-600 dark:text-blue-500 hover:underline"
                          to={item.link}
                          target="_blank"
                        >
                          {item.link}
                        </Link>
                      </p>
                    ) : (
                      <p className="whitespace-pre-line font-normal text-sm sm:text-md md:text-lg text-gray-700 dark:text-gray-400">
                        Link Projek -{" "}
                        <span className="text-red-500">
                          Link Projek Tidak Tersedia Karena Hosting Sudah Tidak
                          Aktif
                        </span>
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </Tabs.Item>
        <Tabs.Item title="English">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-2 mx-4 md:mx-auto max-w-6xl">
            {currentItems.map((item, index) => {
              return (
                <div
                  key={item.id}
                  className="max-w-sm p-2 h-[600px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
                >
                  <img
                    className="rounded-t-lg h-[200px]"
                    src={item.imgSrc}
                    alt={item.alt}
                  />
                  <div className="p-5 mt-3 flex flex-col gap-4">
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
                          className=" font-medium text-blue-600 dark:text-blue-500 hover:underline"
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
                  </div>
                </div>
              );
            })}
          </div>
        </Tabs.Item>
      </Tabs.Group>
      <div className="flex justify-center overflow-x-auto sm:justify-center ">
        <Pagination
          theme={customTheme.pagination}
          layout={itemsPerPage === 1 ? "navigation" : "pagination"}
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={onPageChange}
          previousLabel={t("pagination.previous")}
          nextLabel={t("pagination.next")}
          showIcons
        />
      </div>
    </section>
  );
};

export default Portofolio;
