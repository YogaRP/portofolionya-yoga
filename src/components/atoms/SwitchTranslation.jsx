import { Dropdown } from "flowbite-react";
import React from "react";
import { CiGlobe } from "react-icons/ci";
import useLang from "../../hooks/useLang";
import { useTranslation } from "react-i18next";

const SwitchTranslation = () => {
  const { changeLang, lang } = useLang();
  const { t } = useTranslation();
  return (
    <Dropdown
      label=""
      renderTrigger={() => (
        <span>
          <CiGlobe className="w-6 h-6" />
        </span>
      )}
    >
      <Dropdown.Header>
        <span className="block text-sm font-medium">{t("select-lang")}</span>
      </Dropdown.Header>
      <Dropdown.Item
        onClick={() => changeLang("en")}
        className={lang === "en" ? "text-blue-700" : ""}
      >
        English
      </Dropdown.Item>
      <Dropdown.Item
        onClick={() => changeLang("id")}
        className={lang === "id" ? "text-blue-700" : ""}
      >
        Bahasa Indonesia
      </Dropdown.Item>
    </Dropdown>
  );
};

export default SwitchTranslation;
