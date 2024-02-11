import { Accordion, Flowbite, Tabs } from "flowbite-react";
import { Link } from "react-router-dom";
import Yogajpg from "../assets/yoga.jpg";
import { kemampuanProgressBar, projek } from "../data/data";
import { PieCharts } from "./organism/Pie-Chart";
import { useTranslation } from "react-i18next";

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
        base: "flex items-center justify-center mt-2 mr-2 px-4 py-2 rounded-t-lg text-sm font-medium first:ml-0 disabled:cursor-not-allowed disabled:text-gray-400 disabled:dark:text-gray-500 focus:ring-4 focus:ring-cyan-300 focus:outline-none",
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

  const { t } = useTranslation();

  return (
    <Flowbite theme={{ theme: customTheme }}>
      <section id="about" className="border-b-4 border-blue-500 ">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex lg:mr-6">
            <img className="rounded-r-full h-fit" src={Yogajpg} alt="mockup" />
          </div>
          <div className="mr-auto place-self-center text-center sm:text-left lg:col-span-6">
            <p className="font-bold">{t("about.about")}</p>
            <h1 className="max-w-2xl mb-4 text-3xl font-bold tracking-tight leading-none md:text-3xl xl:text-4xl dark:text-white">
              <span className="text-blue-600">
                Yoga Rizky Putra || Web Developer
              </span>
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-900 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              {t("about.desc")}
            </p>
            <Tabs.Group
              theme={customTheme}
              aria-label="Pills"
              style="pills"
              className="flex justify-center"
            >
              <Tabs.Item active title={t("about.skill")}>
                <Tabs.Group
                  theme={customTheme}
                  aria-label="Pills"
                  style="pills"
                  className="flex justify-center"
                >
                  <Tabs.Item active title="Progress Bar">
                    {kemampuanProgressBar.map((item, index) => {
                      return (
                        <div key={item.id}>
                          <div className="mb-1 text-base font-medium dark:text-white flex items-center">
                            {item.title}
                            <img
                              className="w-6 h-6 ml-2"
                              src={item.logo}
                              alt={item.title}
                            />
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
                            <div
                              className="bg-blue-600 h-2.5 rounded-full dark:bg-blue-500"
                              style={{ width: item.width }}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </Tabs.Item>
                  <Tabs.Item title="Pie Chart">
                    <div className="flex rounded-xl w-auto h-auto">
                      <PieCharts />
                    </div>
                  </Tabs.Item>
                </Tabs.Group>
              </Tabs.Item>
              <Tabs.Item title={t("about.project")}>
                <Tabs.Group
                  theme={customTheme}
                  aria-label="Pills"
                  style="pills"
                  className="flex justify-center"
                >
                  <Tabs.Item active title="Bahasa Indonesia">
                    <Accordion collapseAll>
                      {projek.map((item, index) => (
                        <Accordion.Panel key={item.id}>
                          <Accordion.Title>{item.title}</Accordion.Title>
                          <Accordion.Content>
                            <p className="whitespace-pre-line mb-2 text-justify text-gray-500 dark:text-gray-400">
                              {item.desc}
                            </p>
                            {item.link !== undefined ? (
                              <h3 className="font-semibold">
                                Link Projek:
                                <Link
                                  target="_blank"
                                  to={item.link}
                                  className="ml-2 font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                >
                                  {item.link}
                                </Link>
                              </h3>
                            ) : (
                              <>
                                <p>
                                  Link Projek: Tidak tersedia karena web sudah
                                  tidak aktif
                                </p>
                              </>
                            )}
                          </Accordion.Content>
                        </Accordion.Panel>
                      ))}
                    </Accordion>
                  </Tabs.Item>
                  <Tabs.Item title="English">
                    <Accordion collapseAll>
                      {projek.map((item, index) => (
                        <Accordion.Panel key={item.id}>
                          <Accordion.Title>{item.titleEng}</Accordion.Title>
                          <Accordion.Content>
                            <p className="whitespace-pre-line mb-2 text-justify text-gray-500 dark:text-gray-400">
                              {item.descEng}
                            </p>
                            {item.link !== undefined ? (
                              <h3 className="font-semibold">
                                Link Projek:
                                <Link
                                  target="_blank"
                                  to={item.link}
                                  className="ml-2 font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                >
                                  {item.link}
                                </Link>
                              </h3>
                            ) : (
                              <>
                                <p>
                                  Project Link: Project link is not available
                                  because the hosting is already expired
                                </p>
                              </>
                            )}
                          </Accordion.Content>
                        </Accordion.Panel>
                      ))}
                    </Accordion>
                  </Tabs.Item>
                </Tabs.Group>
              </Tabs.Item>
              <Tabs.Item title={t("about.education")}>
                <Accordion collapseAll>
                  <Accordion.Panel>
                    <Accordion.Title>{t("about.formal")}</Accordion.Title>
                    <Accordion.Content>
                      <ul className="text-justify max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
                        <li>
                          Universitas Negeri Jakarta (Jakarta State University)
                          (2018 - 2023)
                        </li>
                      </ul>
                    </Accordion.Content>
                  </Accordion.Panel>
                  <Accordion.Panel>
                    <Accordion.Title>{t("about.nonFormal")}</Accordion.Title>
                    <Accordion.Content>
                      <ol className="text-justify space-y-4 text-gray-500 list-decimal list-inside dark:text-gray-400">
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
                              Reach Title "Mastered" on Next JS 12 (November
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
                            <li>
                              Reach Title "Mastered" on Next JS 13 (Oktober
                              2023) -
                              <Link
                                className="ml-2 font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                to={
                                  "https://sanbercode.com/certificate/in/23587a4c-4b3b-41ac-8ae6-2d5caaf49f27"
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
                            <li>
                              Sertifikat Kelas Belajar Menguasai NestJS
                              (November 2023) -
                              <Link
                                className="ml-2 font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                to={"https://codepolitan.com/c/U5HBETM"}
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
                            <li>
                              Full-Stack JavaScript Next JS Developer: Build Job
                              Portal Website (November 2023) -
                              <Link
                                className="ml-2 font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                to={
                                  "https://class.buildwithangga.com/certificate/full-stack-javascript-next-js-developer-build-job-portal-website"
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
                        <li>
                          Mister Coding
                          <ul className="pl-5 mt-2 space-y-1 list-disc list-inside">
                            <li>
                              Menguasai Framework Nest JS dari awal sampai Mahir
                              (Desember 2023) -
                              <Link
                                className="ml-2 font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                to={
                                  "https://www.mistercoding.com/verify-certificate/MC-LBGW3AWOZD7N"
                                }
                              >
                                Link Sertifikat
                              </Link>
                            </li>
                            <li>
                              Mahir React JS & Next JS 13 App Directory + Strapi
                              Sampai Production (Oktober 2023) -
                              <Link
                                className="ml-2 font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                to={
                                  "https://www.mistercoding.com/verify-certificate/MC-JUBY8OT9EBYZ"
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
              <Tabs.Item title={t("about.experience")}>
                <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                  {t("about.workExp")}
                </h2>
                <div className="max-w-xs p-3 mt-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    Frontend Web Developer
                  </h5>
                  <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
                    Kementerian Riset dan Teknologi BRIN <br /> (Ministry of
                    Research and Technology BRIN)
                  </p>
                  <p className="inline-flex items-center text-blue-600">
                    Februari 2021 - Mei 2021 <br />
                    (February 2021 - May 2021)
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
