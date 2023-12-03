import Hero from "@/components/home/Hero";
import styles from "@/style";
import Stats from "@/components/home/Stats";
import Business from "@/components/home/Business";

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
        </div>
      </div>
    </>
  );
};

export default Home;
