import styles from "@/style";
import { discount, robot } from "@/assets";
import GetStarted from "./GetStarted";
import test from "@/assets/test.png";
import test2 from "@/assets/test2.png";
import test3 from "@/assets/test3.png";
import test4 from "@/assets/test4.png";
import test5 from "@/assets/test5.png";

const Hero = ({ darkMode }) => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY} mt-20 `}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div
          className={`flex flex-row items-center py-[6px] px-4  ${
            darkMode ? "bg-black-gradient-2" : "bg-gba-gradient"
          } rounded-[10px] mb-2`}
        >
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`font-normal  text-[18px] leading-[30.8px] ml-2`}>
            <span className="text-white ">
              Immigration Law Office in the US
            </span>
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] dark:text-white text-black ss:leading-[100.8px] leading-[75px]">
            A Successful
            <br className="sm:block hidden" />{" "}
            <span className="text-gradient"> Future starts here</span>{" "}
          </h1>
          {/* <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div> */}
        </div>

        {/*  <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          With Expertise
        </h1> */}
        <p className={`${styles.paragraph}  text-black max-w-[470px] mt-5`}>
          Your opportunity for success in the United States is closer than you
          imagine.
        </p>
      </div>

      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <img
          src={test}
          alt="billing"
          className="w-[100%] h-[100%] object-contain relative z-[5]"
        />

        {/* gradient start */}

        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full blue__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />

        {/* gradient end */}
      </div>

      {/*  <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div> */}
    </section>
  );
};

export default Hero;
