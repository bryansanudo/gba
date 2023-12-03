import Hero from "@/components/home/Hero";
import styles from "@/style";
import Stats from "@/components/home/Stats";
import Business from "@/components/home/Business";
import Billing from "@/components/home/Billing";
import CardDeal from "@/components/home/CardDeal";

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
        </div>
      </div>
    </>
  );
};

export default Home;
