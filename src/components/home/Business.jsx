import { features } from "@/constants";
import styles, { layout } from "@/style";
import Section from "@/components/common/Section";
import discount from "@/assets/Discount.svg";
import { GoDot } from "react-icons/go";

const Business = ({ darkMode }) => {
  const services = [
    {
      id: 1,
      name: "Consultoría",
      consultorias: [
        { id: 11, title: "Plan de Mercadeo", link: "" },
        { id: 12, title: "Analitica & Mercadeo", link: "" },
        { id: 13, title: "Plan de Marketing Outbound", link: "" },
        { id: 14, title: "Plan de Marketing Inbound", link: "" },
        { id: 15, title: "Estudios de Mercado & Geomercadeo", link: "" },
        { id: 16, title: "Plan de ventas", link: "" },
        { id: 17, title: "Marketing basado en cuentas", link: "" },
        { id: 18, title: "Análisis de venta cruzada y al alza", link: "" },
        { id: 19, title: "Expansión y nuevos mercados", link: "" },
        { id: 20, title: "Automatización de marketing", link: "" },
        {
          id: 21,
          title: "Reglamento General de Protección de Datos (GDPR)",
          link: "",
        },
      ],
    },
    {
      id: 2,
      name: "Marketing As a Service",
      consultorias: [
        { id: 101, title: "Multicanalidad como servicio", link: "" },
        { id: 102, title: "Datos y análisis como servicio", link: "" },
        { id: 103, title: "ABM como Servicio", link: "" },
        { id: 104, title: "Outbound como Servicio", link: "" },
        { id: 105, title: "Inbound como Servicio", link: "" },
        { id: 106, title: "Geomercadeo como Servicio", link: "" },
        { id: 107, title: "Validación de identidad como Servicio", link: "" },
        { id: 108, title: "Campañas como Servicio", link: "" },
        { id: 109, title: "Ahorro como Servicio", link: "" },
        { id: 110, title: "GDPR como Servicio", link: "" },
        {
          id: 111,
          title: "Dotación de personal de Marketing como Servicio",
          link: "",
        },
      ],
    },
    {
      id: 3,
      name: "Staffing",
      consultorias: [
        { id: 101, title: "TI (Tecnologias de Informacion)", link: "" },
        { id: 102, title: "Marketing", link: "" },
        { id: 103, title: "Data & Analitycs", link: "" },
        { id: 104, title: "Innovacion & transformacion", link: "" },
      ],
    },
    {
      id: 4,
      name: "Transformacíon",
      consultorias: [
        { id: 101, title: "Negocios Digitales", link: "" },
        { id: 102, title: "Inmersiones", link: "" },
        { id: 103, title: "Diseño y Validación", link: "" },
        { id: 104, title: "Transformación Ágil", link: "" },
        { id: 105, title: "Experiencia de usuario", link: "" },
        { id: 106, title: "Transformación Cultural / Digital", link: "" },
        { id: 107, title: "Innovacion abierta", link: "" },
      ],
    },
  ];

  return (
    <section id="features" className="flex flex-col md:flex-row justify-start ">
      <div className={`${layout.sectionInfo} items-start`}>
        <h2 className={`${styles.heading2} `}>
          You focus on your practice, we'll
          <br className="sm:block hidden" />
          manage the finances.
        </h2>
        <p className={`${styles.paragraph} `}>
          Our team of skilled attorneys provides comprehensive legal
          consultation and services. We specialize in areas such as contract
          law, intellectual property, and litigation. Let us guide you through
          the complexities of the legal landscape.
        </p>

        <p>button</p>
      </div>

      <div className={`${layout.sectionImg} flex-col`}>
        <div className="md:col-span-2 flex flex-col items-center justify-center w-full">
          {services.map(({ id, name, consultorias }) => (
            <div
              tabIndex={0}
              key={id}
              className="collapse collapse-arrow bg-gba-gradient my-4 rounded-box w-full"
            >
              <div className="collapse-title flex items-center gap-4 ">
                <div>logo</div>
                <div
                  className={`${styles.sectionText} font-poppins font-semibold text-[20px] leading-[32px] text-white `}
                >
                  {name}
                </div>
              </div>
              <div
                className={`${styles.sectionText} collapse-content font-poppins font-normal text-[16px] leading-[24px] text-dimWhite mr-10`}
              >
                {consultorias && consultorias.length > 0 && (
                  <ul>
                    {consultorias.map(({ id: consultoriaId, title }) => (
                      <li key={consultoriaId}>
                        <div className="flex gap-2">
                          <div>
                            <GoDot className="text-2xl" />
                          </div>
                          <p className="text-red-500">{title}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Business;
