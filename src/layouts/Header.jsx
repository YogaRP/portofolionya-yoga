"use client";

import { Button, Navbar } from "flowbite-react";
import { HashLink } from "react-router-hash-link";
import SwitchTranslation from "../components/atoms/SwitchTranslation.jsx";
import { useTranslation } from "react-i18next";
import useLang from "../hooks/useLang.js";

export default function Header() {
  const { t } = useTranslation();
  return (
    <Navbar rounded>
      <Navbar.Brand>
        <span className="self-center whitespace-nowrap text-xl font-bold dark:text-white">
          Yoga Rizky Putra
        </span>
      </Navbar.Brand>
      <div className="flex justify-center items-center gap-2 md:order-2">
        <HashLink smooth to={"/#sosmed"}>
          <Button className="hidden lg:block bg-blue-500 rounded-full">
            {t("navbar.contact")}
          </Button>
        </HashLink>
        <SwitchTranslation />
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <HashLink
          smooth
          to="/#home"
          className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
        >
          <p>{t("navbar.home")}</p>
        </HashLink>
        <HashLink
          smooth
          to="/#about"
          className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
        >
          {t("navbar.about")}
        </HashLink>
        <HashLink
          smooth
          to="/#portofolio"
          className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
        >
          {t("navbar.project")}
        </HashLink>
        <HashLink
          smooth
          to="/#sosmed"
          className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
        >
          {t("navbar.sosmed")}
        </HashLink>
      </Navbar.Collapse>
    </Navbar>
  );
}
