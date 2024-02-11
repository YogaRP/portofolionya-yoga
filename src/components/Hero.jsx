import { HashLink } from "react-router-hash-link";
import Yogapng from "../assets/Yoga_Rizky_Foto.png";
import { Link } from "react-router-dom";
import CVYoga from "../assets/CV_Yoga_Rizky_Putra.pdf";
import { useState } from "react";
import { ReactTyped } from "react-typed";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();
  return (
    <>
      <section
        className="bg-white dark:bg-gray-900 border-b-4 border-blue-500"
        id="hero"
      >
        <div className="max-w-screen-xl px-4 py-8 mx-auto md:flex xl:gap-0 lg:py-16 ">
          <div className="block sm:hidden lg:mt-0 float-right">
            <img className="rounded-full mb-4" src={Yogapng} alt="mockup" />
          </div>
          <div className="mr-auto place-self-center text-center sm:text-left ">
            <p className="font-bold">{t("hero.welcome")}</p>
            <h1 className="max-w-2xl mb-4 text-3xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              {t("hero.title1")}
              <br />{" "}
              <span className="text-blue-600">
                <ReactTyped
                  strings={[t("hero.typing1"), t("hero.typing2")]}
                  typeSpeed={100}
                  loop
                  backSpeed={20}
                  showCursor={true}
                />
              </span>
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              {t("hero.desc")}
            </p>
            <HashLink
              smooth
              to={"/#sosmed"}
              className="bg-blue-500 inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            >
              {t("hero.callMe")}
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
            <Link
              to={CVYoga}
              download={"CV Yoga Rizky Putra"}
              target="_blank"
              className="mt-2 sm:mt-0 inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-blue-600 border border-blue-600 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              {t("hero.cv")}
            </Link>
          </div>
          <div className="hidden lg:mt-0 sm:flex float-right">
            <img className="rounded-s-full" src={Yogapng} alt="mockup" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
