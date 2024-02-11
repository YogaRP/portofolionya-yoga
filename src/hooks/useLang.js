import { useEffect, useState } from "react";

import { useTranslation } from "react-i18next";

const useLang = () => {
  const [lang, setLang] = useState("en");
  const { i18n } = useTranslation();

  const changeLang = (lang) => {
    setLang(lang);
    localStorage.setItem("lang", lang);
  };

  useEffect(() => {
    const lang = localStorage.getItem("lang");

    i18n.changeLanguage(lang);
    setLang(lang ?? "en");
  }, [lang]);

  return {
    lang,
    changeLang,
  };
};

export default useLang;
