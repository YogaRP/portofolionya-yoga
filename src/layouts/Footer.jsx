import React from "react";

const Footer = () => {
  const TahunSekarang = new Date().getFullYear();
  return (
    <>
      <footer className="bg-blue-600 rounded-lg shadow dark:bg-gray-900 m-4">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="text-sm text-white sm:text-center dark:text-gray-400 flex flex-col justify-center items-center">
            <p>Yoga Rizky Putra</p>
            <p>{TahunSekarang}</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
