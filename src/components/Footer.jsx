import React from "react";
import Section from "@/components/common/Section";
import styles from "@/style";
import logo from "@/assets/logo-gba.png";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

const Footer = ({ darkMode }) => {
  return (
    <footer className="footer justify-between  border-t p-6 mb-28 ">
      <aside className="flex flex-col items-center justify-center">
        <div>
          <img src={logo} alt="" />
        </div>
        <div className="flex items-center justify-center gap-2">
          <div
            className={`w-[64px] h-[64px] mask mask-hexagon-2 ${styles.flexCenter} hover:bg-primary duration-700 cursor-pointer bg-dimBlue`}
          >
            <FaFacebookF className="dark:text-white text-2xl" />
          </div>
          <div
            className={`w-[64px] h-[64px] mask mask-hexagon-2 ${styles.flexCenter} hover:bg-primary duration-700 cursor-pointer bg-dimBlue`}
          >
            <FaLinkedinIn className="dark:text-white text-2xl" />
          </div>
        </div>
      </aside>
      <nav>
        <header className={`${styles.title}`}>Services</header>
        <a className={`${styles.subtitle} hover:font-medium cursor-pointer`}>
          Branding
        </a>
        <a className={`${styles.subtitle} hover:font-medium cursor-pointer`}>
          Design
        </a>
        <a className={`${styles.subtitle} hover:font-medium cursor-pointer`}>
          Marketing
        </a>
        <a className={`${styles.subtitle} hover:font-medium cursor-pointer`}>
          Advertisement
        </a>
      </nav>
      <nav>
        <header className={`${styles.title}`}>Company</header>
        <a className={`${styles.subtitle} hover:font-medium cursor-pointer`}>
          About us
        </a>
        <a className={`${styles.subtitle} hover:font-medium cursor-pointer`}>
          Contact
        </a>
        <a className={`${styles.subtitle} hover:font-medium cursor-pointer`}>
          Jobs
        </a>
        <a className={`${styles.subtitle} hover:font-medium cursor-pointer`}>
          Press kit
        </a>
      </nav>
      <nav>
        <header className={`${styles.title}`}>Legal</header>
        <a className={`${styles.subtitle} hover:font-medium cursor-pointer`}>
          Terms of use
        </a>
        <a className={`${styles.subtitle} hover:font-medium cursor-pointer`}>
          Privacy policy
        </a>
        <a className={`${styles.subtitle} hover:font-medium cursor-pointer`}>
          Cookie policy
        </a>
      </nav>
    </footer>
  );
};

export default Footer;
