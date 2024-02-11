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
        {/* <button
          type="button"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Get started
        </button> */}
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <HashLink smooth to="/#home">
          <Navbar.Link>
            <p>{t("navbar.home")}</p>
          </Navbar.Link>
        </HashLink>
        <HashLink smooth to="/#about">
          <Navbar.Link>{t("navbar.about")}</Navbar.Link>
        </HashLink>
        <HashLink smooth to="/#portofolio">
          <Navbar.Link>{t("navbar.project")}</Navbar.Link>
        </HashLink>
        <HashLink smooth to="/#sosmed">
          <Navbar.Link>{t("navbar.sosmed")}</Navbar.Link>
        </HashLink>
      </Navbar.Collapse>
    </Navbar>
  );
}
