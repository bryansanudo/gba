import React from "react";
import styles from "@/style";

const Section = ({ children, title, subtitle }) => {
  return (
    <>
      <div
        className={`dark:bg-accent ${styles.paddingX}   ${styles.flexCenter}`}
      >
        <div className={`${styles.boxWidth}  `}>
          <div className="md:absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />
          <div className="md:absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

          {/* gradient start */}
          <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full pink__gradient" />
          <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
          {/* gradient end */}
          {/*  <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" /> */}

          <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />

          <div className="w-full flex justify-between items-center flex-col sm:mb-16 mb-6 mt-20 ">
            <h2 className={`${styles.heading2} text-primary mr-4`}>{title}</h2>
            <div className="w-full md:mt-0 mt-6">
              <p
                className={`${styles.paragraph} text-left max-w-[600px] text-black dark:text-white mb-2`}
              >
                {subtitle}
              </p>
            </div>
          </div>

          {children}
        </div>
      </div>
    </>
  );
};

export default Section;
