import Hero from "@/components/home/Hero";
import styles from "@/style";
import Stats from "@/components/home/Stats";
import Business from "@/components/home/Business";
import Billing from "@/components/home/Billing";
import CardDeal from "@/components/home/CardDeal";
import ServicesHome from "@/components/home/ServicesHome";
import Footer from "@/components/Footer";
import shield from "@/assets/Shield.svg";
import Clients from "@/components/home/Clients";
import { FaWhatsapp } from "react-icons/fa";

const Home = ({ darkMode }) => {
  return (
    <>
      <div className={`dark:bg-accent ${styles.flexStart} `}>
        <div className={`${styles.boxWidth}`}>
          <Hero darkMode={darkMode} />
        </div>
      </div>

      <div
        className={`dark:bg-accent ${styles.paddingX}   ${styles.flexCenter}`}
      >
        <div className={`${styles.boxWidth}  `}>
          <Stats />
          <Business darkMode={darkMode} />
          <Billing darkMode={darkMode} />
          <CardDeal darkMode={darkMode} />
          <ServicesHome darkMode={darkMode} />
          <Clients darkMode={darkMode} />
          <Footer darkMode={darkMode} />
        </div>
      </div>

      <div
        className={`fixed flex items-center justify-center hover:scale-110 duration-700 rounded-full w-14 h-14 bg-primary text-yellow-500 z-[100] right-6 bottom-6   ${
          darkMode ? "shadow-white shadow-lg" : "shadow-xl shadow-black"
        } `}
      >
        <a
          href="https://api.whatsapp.com/send?phone=51955081075&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Varela%202."
          className=""
          target="_blank"
        >
          <FaWhatsapp className="text-white text-3xl" />
        </a>
      </div>
    </>
  );
};

export default Home;
