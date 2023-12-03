import React from "react";
import styles from "@/style";

const Section = ({ children, title, subtitle }) => {
  return (
    <>
      <div
        className={`dark:bg-accent mt-28  ${styles.paddingX} ${styles.flexCenter}`}
      >
        <div className={`${styles.boxWidth} `}>
          <div className="md:absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />
          <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full blue__gradient" />
          <div className="w-full flex justify-between items-center flex-col sm:mb-16 mb-6 relative z-[1]">
            <h2 className={`${styles.heading2} text-gradient mr-4`}>{title}</h2>
            <div className="w-full md:mt-0 mt-6">
              <p className={`${styles.paragraph} text-left max-w-[600px] mb-2`}>
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
