import { features } from "@/constants";
import styles, { layout } from "@/style";
import Section from "@/components/common/Section";

const FeatureCard = ({ icon, title, content, index, darkMode }) => (
  <div
    className={`flex flex-row items-center  p-6 rounded-[20px] ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    }  ${darkMode ? "bg-black-gradient-2" : "bg-gba-gradient"} `}
  >
    <div
      className={`w-[64px] h-[64px] mask mask-hexagon ${styles.flexCenter} bg-dimBlue`}
    >
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-white text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Business = ({ darkMode }) => (
  <section id="features" className="flex flex-col md:flex-row justify-start ">
    <div className={`${layout.sectionInfo} items-start`}>
      <h2 className={`${styles.heading2} dark:text-white text-black`}>
        You focus on your practice, we'll
        <br className="sm:block hidden" />
        manage the finances.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5 dark:text-white`}>
        Our team of skilled attorneys provides comprehensive legal consultation
        and services. We specialize in areas such as contract law, intellectual
        property, and litigation. Let us guide you through the complexities of
        the legal landscape.
      </p>

      <p>button</p>
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard
          darkMode={darkMode}
          key={feature.id}
          {...feature}
          index={index}
        />
      ))}
    </div>
  </section>
);

export default Business;
