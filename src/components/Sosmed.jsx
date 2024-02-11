import { Link } from "react-router-dom";
import Linkedin from "../assets/linkedin.png";
import Instagram from "../assets/instagram.png";
import gmail from "../assets/gmail.png";
import { useTranslation } from "react-i18next";
const Sosmed = () => {
  const { t } = useTranslation();
  return (
    <section id="sosmed">
      <h1 className="text-blue-600 text-center font-bold text-2xl mt-16">
        {t("sosmed.sosmed")}
      </h1>
      <h1 className="text-black text-center font-bold text-xl md:text-4xl mt-5 capitalize">
        {t("sosmed.title")}
      </h1>
      <div className="flex flex-col md:flex-row justify-around mt-10">
        <div className="flex flex-col items-center pb-10 mt-5">
          <img className="w-24 h-24 mb-3 " src={Linkedin} alt="Linkedin" />
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            Linkedin
          </h5>
          <Link
            className="ml-2 font-medium text-blue-600 dark:text-blue-500 hover:underline"
            to={"https://linkedin.com/in/yogarizkyputra"}
            target="_blank"
          >
            Yoga Rizky Putra
          </Link>
        </div>
        <div className="flex flex-col items-center pb-10 mt-5">
          <img className="w-24 h-24 mb-3 " src={Instagram} alt="Instagram" />
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            Instagram
          </h5>
          <div className="flex flex-col text-center">
            <Link
              className="ml-2 font-medium text-blue-600 dark:text-blue-500 hover:underline"
              to={
                "https://instagram.com/yogarizkyputra?igshid=MzMyNGUyNmU2YQ=="
              }
              target="_blank"
            >
              Yoga Rizky Putra
            </Link>
            <Link
              className="ml-2 font-medium text-blue-600 dark:text-blue-500 hover:underline"
              to={
                "https://www.instagram.com/yoga_rizky_putra?igsh=bWNiNG10dTI4Ynhw"
              }
              target="_blank"
            >
              Portofolionya Yoga
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center pb-10 mt-5">
          <img className="w-24 h-24 mb-3 " src={gmail} alt="Gmail" />
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            Email
          </h5>
          <Link
            className="ml-2 font-medium text-blue-600 dark:text-blue-500 hover:underline"
            to={"mailto:yogarizky51@gmail.com"}
            target="_blank"
          >
            yogarizky51@gmail.com
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Sosmed;
