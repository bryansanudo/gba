import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import { MdNightsStay, MdWbSunny } from "react-icons/md";

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isMenuShown, setIsMenuShown] = useState(false);
  const links = [
    {
      id: 1,
      link: "Inicio",
    },
    {
      id: 2,
      link: "Acerca De",
    },
    {
      id: 3,
      link: "Servicios",
    },
    {
      id: 4,
      link: "Casos De Éxito",
    },
    {
      id: 5,
      link: "Blog",
    },
    {
      id: 5,
      link: "Contacto",
    },
  ];

  return (
    <>
      <div className="fixed w-full h-16 dark:text-white z-20  ">
        <div className="flex justify-start md:justify-end md:gap-5 items-center max-w-screen-xl mx-auto px-8 h-full">
          <div className="mr-auto hidden md:flex">logo</div>
          <div className="hidden lg:flex items-center">
            <ul className="flex gap-6 ">
              {links.map(({ id, link }) => (
                <li
                  key={id}
                  className="capitalize duration-300 hover:text-primary hover:scale-110 cursor-pointer"
                >
                  {link}
                </li>
              ))}
            </ul>
          </div>

          <div
            onClick={() => setIsMenuShown(!isMenuShown)}
            className="block lg:hidden cursor-pointer mr-4"
          >
            {isMenuShown ? <FaTimes size={30} /> : <FaBars size={30} />}
          </div>

          <div className="flex items-center flex-row justify-center gap-2 ">
            <div className="bg-gray-300 h-6 mr-2 w-[1px] hidden md:flex"></div>
            <div onClick={() => setDarkMode(!darkMode)}>
              {darkMode ? (
                <MdWbSunny className="text-2xl cursor-pointer hover:text-primary duration-300" />
              ) : (
                <MdNightsStay className="text-2xl cursor-pointer hover:text-primary duration-300" />
              )}
            </div>
            <a href="https://bryan95-portfolio.vercel.app/">
              <span className="hover:text-primary duration-300">ENG</span>
            </a>
            <a href="https://bryan95-portfolio-esp.vercel.app/">
              <span className="hover:text-primary duration-300">ESP</span>
            </a>
          </div>
          <div className="ml-auto md:hidden flex">logo</div>
        </div>
      </div>

      <div
        className={`fixed w-full  text-white z-10 left-0 h-fit py-12 lg:hidden flex justify-center text-center text-2xl duration-500 ${
          isMenuShown
            ? "top-16 rounded-b-2xl bg-gray-900 opacity-95"
            : "top-[-100%]"
        }`}
      >
        <ul>
          {links.map(({ id, link }) => (
            <li
              onClick={() => setIsMenuShown(!isMenuShown)}
              key={id}
              className="p-4 uppercase cursor-pointer duration-300 hover:text-thPrimary"
            >
              {link}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
