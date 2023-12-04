import { feedback } from "@/constants";
import styles from "@/style";

import text from "@/assets/text.jpg";

import Section from "@/components/common/Section";

import shield from "@/assets/Discount.svg";
import { BiMailSend } from "react-icons/bi";

const cards = [
  {
    id: 1,
    img: shield,
    title: "Miami US",
    subtitle:
      "Miami Beach Florida, 33139-Miami Beach 1000 5th Suite 200, Miami 33101",
  },
  {
    id: 2,
    img: shield,
    title: "Ciudad de Panamá, Panamá",
    subtitle: "Torre Global Bank Calle 50 Piso 32",
  },
  {
    id: 3,
    img: shield,
    title: "Bogotá, Colombia",
    subtitle: "Calle 90 #12 - 28 Piso2",
  },
  {
    id: 4,
    img: shield,
    title: "Quito, Ecuador",
    subtitle: "Andalucia #24 -118 Galicia El Girón",
  },
  {
    id: 5,
    img: shield,
    title: "Lima, Perú",
    subtitle: "Avenida Jorge Basadre 607",
  },
  {
    id: 6,
    img: shield,
    title: "Email",
    subtitle: "marketing@gbalatam.com",
  },
];

const Contact = ({ darkMode }) => (
  <section id="clients" className={` ${styles.flexCenter} mb-40 `}>
    <div className="flex md:flex-row flex-col gap-12">
      <form className=" w-full">
        <div
          className={`flex border  ${
            darkMode
              ? "shadow-sm shadow-white border-white bg-black-gradient-2"
              : "shadow-lg shadow-secondary border-secondary"
          } rounded-[20px]  flex-col md:gap-8 gap-4 md:p-10 p-6  w-full h-full mb-4 `}
        >
          <div className="flex flex-col md:flex-row items-center  justify-center gap-4">
            <div className="flex flex-col w-full">
              <label
                className={` font-semibold dark:text-white  text-[16px] leading-[23.4px] ml-2 `}
              >
                Name
              </label>
              <input
                type="text"
                required
                name="Name"
                autoComplete="off"
                className={` h-10 rounded-[10px] ${
                  darkMode
                    ? "shadow-sm shadow-white border-white "
                    : " border-secondary  "
                }   bg-dimWhite border outline-none text-black font-normal text-[16px] leading-[24px]  w-full pl-4 mt-2`}
              />
            </div>
            <div className="flex flex-col w-full">
              <label
                className={` font-semibold dark:text-white  text-[16px] leading-[23.4px] ml-2 `}
              >
                Last name
              </label>
              <input
                type="text"
                required
                name="Last Name"
                autoComplete="off"
                className={` h-10 rounded-[10px] ${
                  darkMode
                    ? "shadow-sm shadow-white border-white "
                    : " border-secondary  "
                }   bg-dimWhite border outline-none text-black font-normal text-[16px] leading-[24px]  w-full pl-4 mt-2`}
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center  justify-center gap-4">
            <div className="flex flex-col w-full">
              <label
                className={` font-semibold dark:text-white  text-[16px] leading-[23.4px] ml-2 `}
              >
                Email
              </label>
              <input
                type="text"
                required
                name="Name"
                autoComplete="off"
                className={` h-10 rounded-[10px] ${
                  darkMode
                    ? "shadow-sm shadow-white border-white "
                    : " border-secondary  "
                }   bg-dimWhite border outline-none text-black font-normal text-[16px] leading-[24px]  w-full pl-4 mt-2`}
              />
            </div>
            <div className="flex flex-col w-full">
              <label
                className={` font-semibold dark:text-white  text-[16px] leading-[23.4px] ml-2 `}
              >
                Phone
              </label>
              <input
                type="text"
                required
                name="Last Name"
                autoComplete="off"
                className={` h-10 rounded-[10px] ${
                  darkMode
                    ? "shadow-sm shadow-white border-white "
                    : " border-secondary  "
                }   bg-dimWhite border outline-none text-black font-normal text-[16px] leading-[24px]  w-full pl-4 mt-2`}
              />
            </div>
          </div>

          <div className="flex flex-col w-full">
            <label
              className={` font-semibold dark:text-white  text-[16px] leading-[23.4px] ml-2 `}
            >
              Message
            </label>
            <textarea
              name="Questions"
              rows="4"
              required
              autoComplete="off"
              className={`  rounded-[10px] ${
                darkMode
                  ? "shadow-sm shadow-white border-white "
                  : " border-secondary  "
              }   bg-dimWhite border outline-none text-black font-normal text-[16px] leading-[24px]  w-full pl-4 py-2 mt-2`}
            />
          </div>

          <button
            className={`btn btn-primary font-semibold dark:text-white  text-[16px] leading-[23.4px] ml-2 `}
          >
            Submit
          </button>
        </div>
      </form>

      <div className="grid md:grid-cols-2 grid-cols-1   rounded-[20px]   md:gap-10 gap-4   w-full  ">
        {cards.map(({ id, img, title, subtitle }) => (
          <div
            className={`flex flex-col border  px-4 rounded-[20px] items-center justify-center text-center ${
              darkMode
                ? "shadow-sm shadow-white border-white "
                : "shadow-lg shadow-secondary border-secondary"
            } `}
          >
            <div
              className={`w-[40px] h-[40px] mb-1 mask mask-hexagon ${styles.flexCenter} bg-dimBlue`}
            >
              <img src={img} className="w-[40px]" alt="" />
            </div>
            <p className={`${styles.title}`}>{title}</p>

            <div className={`${styles.subtitle}`}>{subtitle}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Contact;
