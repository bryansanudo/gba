import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import styles from "@/style";
import Section from "@/components/common/Section";
import { MdNightsStay, MdWbSunny } from "react-icons/md";
import logo from "@/assets/logo-gba.png";
import { Link } from "react-router-dom";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isMenuShown, setIsMenuShown] = useState(false);

  const links = [
    {
      id: 1,
      name: "Inicio",
      link: "/",
    },
    {
      id: 2,
      name: "Acerca De",
      link: "/acerca",
    },
  ];
  const services = [
    {
      id: 1,
      name: "Consultoría",
      link: "/servicios/consultoria",
    },
    {
      id: 2,
      name: "Marketing As a Service",
      link: "/servicios/marketing",
    },
    {
      id: 3,
      name: "Staffing",
      link: "/servicios/staffing",
    },
    {
      id: 4,
      name: "Transformación",
      link: "/servicios/transformacion",
    },
  ];
  const links2 = [
    {
      id: 4,
      name: "Casos De Éxito",
      link: "/",
    },
    {
      id: 5,
      name: "Blog",
      link: "/",
    },
    {
      id: 6,
      name: "Contacto",
      link: "/contacto",
    },
  ];

  return (
    <div
      className={` ${styles.paddingX} nav fixed w-full z-40   ${styles.flexCenter}`}
    >
      <div className={`${styles.boxWidth}   `}>
        <div className="w-full  h-20 dark:text-white ">
          <div className="flex justify-start md:justify-end md:gap-5 items-center  mx-auto  h-full">
            <div className="mr-auto mt-2 hidden md:flex">
              <img src={logo} className="w-36" alt="" />
            </div>
            <div className="hidden lg:flex items-center">
              <ul className="flex items-center justify-center gap-6 ">
                {/* home, about */}
                {links.map(({ id, link, name }) => (
                  <li
                    key={id}
                    className="py-6  capitalize duration-300 hover:text-primary hover:scale- cursor-pointer"
                  >
                    <Link to={link}>{name}</Link>
                  </li>
                ))}
                {/* services */}
                <li>
                  <div className="dropdown dropdown-bottom dropdown-hover">
                    <div
                      tabIndex={0}
                      className={`text-[18px] flex items-center   capitalize duration-300  hover:font-semibold  cursor-pointer `}
                    >
                      <p>Servicios</p>
                      <div className="cursor-pointer">
                        <div className="flex items-center gap-2">
                          <IoMdArrowDropdown />
                        </div>
                      </div>
                    </div>
                    <ul className="dropdown-content  z-[1]   shadow bg-base-100 dark:bg-accent w-52">
                      {services.map(({ id, link, name }) => (
                        <Link key={id} to={link}>
                          <li className={`w-full duration-300 `}>
                            <p className="px-4 text-[14px]">{name}</p>
                          </li>
                        </Link>
                      ))}
                    </ul>
                  </div>
                </li>
                {/* contact + */}
                {links2.map(({ id, link, name }) => (
                  <li
                    key={id}
                    className="py-6  capitalize duration-300 hover:text-primary hover:scale- cursor-pointer"
                  >
                    <Link to={link}>{name}</Link>
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
              <div className="bg-gray-300 h-6 mx-2 w-[1px] hidden md:flex"></div>
              <div>Smart Center</div>
            </div>
            <div className="ml-auto md:hidden flex">
              <img src={logo} className="w-36" alt="" />
            </div>
          </div>
        </div>

        <div
          className={`fixed w-full  text-white z-10 left-0 h-fit py-12 lg:hidden flex justify-center text-center text-2xl duration-500 ${
            isMenuShown
              ? "top-16 rounded-b-2xl bg-gray-900 opacity-95"
              : "top-[-600px]"
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
      </div>
    </div>
  );
};

export default Navbar;
