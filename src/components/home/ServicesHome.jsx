import { feedback } from "@/constants";
import styles from "@/style";

import text from "@/assets/text.jpg";

import shield from "@/assets/Discount.svg";

const cards = [
  {
    id: 1,
    img: shield,
    title: "Smart Data",
    subtitle:
      "¿Quieres aumentar el conocimiento de tu target y mejorar el Customer Journey Map para cada uno de los segmentos? ¿Deseas aumentar la contactabilidad y la tasa de respuesta de tus campañas?",
  },
  {
    id: 2,
    img: shield,
    title: "Smart Contact",
    subtitle:
      "Te permite, entre otras cosas: Optimizar el presupuesto de comunicación ( SMS, Whatsapp, IVR, Email, RRSS, entre otros), implementar Marketing Automation, automatizar acciones repetitivas y aprovechar el poder de los bots.",
  },
  {
    id: 3,
    img: shield,
    title: "Smart Center",
    subtitle:
      "Descubre el poder del conocimiento en tiempo real para gerentes de marketing. Con Smart Center de GBA Smart Marketing®, tendrás acceso a información crucial simultáneamente.",
  },
  {
    id: 4,
    img: shield,
    title: "Smart Geo",
    subtitle:
      "¡Descubre el poder de Smart Geo por GBA Smart Marketing®! Nuestro servicio revolucionario te permite enfocar tus esfuerzos de marketing en las zonas más receptivas a tus campañas, maximizando tus resultados.",
  },
  {
    id: 5,
    img: shield,
    title: "Smart Analytics",
    subtitle:
      "¿Quieres llevar tu estrategia de marketing al siguiente nivel? Con Smart Analytics por GBA Smart Marketing®, podrás optimizar tus esfuerzos de comunicación, identificar los segmentos de mayor valor y obtener insights de clientes para nutrir tu información de marketing.",
  },
  {
    id: 6,
    img: shield,
    title: "Save of time and money",
    subtitle:
      "We help you save time and money with a service that avoids errors that can cause delays and even denial of visas.",
  },
];

const ServicesHome = () => (
  <section
    id="clients"
    className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}
  >
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full pink__gradient bottom-40" />

    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h2 className={styles.heading2}>Advantages</h2>
      {/* <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} text-left max-w-[450px]`}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab esse
          suscipit ipsum laudantium cupiditate voluptatibus
        </p>
      </div> */}
    </div>

    <div className="flex flex-wrap sm:justify-start justify-center w-full  relative z-[1]">
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1  w-full gap-6 ">
        {cards.map(({ id, img, title, subtitle }) => (
          <div
            key={id}
            className=" flex flex-col  items-start justify-center  md:gap-6 bg-gba-gradient rounded-[20px] box-shadow p-8 "
          >
            <div
              className={`w-[64px] h-[64px] mask mask-hexagon ${styles.flexCenter} bg-dimBlue`}
            >
              <img
                src={img}
                alt="star"
                className="w-[50%] h-[50%] object-contain"
              />
            </div>

            <div className=" p-6 sm:px-3 sm:py-0">
              <p className="mb-2 font-poppins font-semibold text-[20px] leading-[32px] text-white">
                {title}
              </p>
              <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">
                {subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesHome;
