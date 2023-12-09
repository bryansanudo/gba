import React, { useState } from "react";
import ServicesSection from "@/components/common/ServicesSection";
import Servicio1 from "@/components/services/consultoria/Servicio1";
import Servicio2 from "@/components/services/consultoria/Servicio2";
import Servicio3 from "@/components/services/consultoria/Servicio3";
import styles from "@/style";
import { GoDot } from "react-icons/go";
const Consultoria = ({ darkMode }) => {
  const [x, setX] = useState(0);
  const listaItems = [
    { text: "Plan de Mercadeo", component: <Servicio1 darkMode={darkMode} /> },
    {
      text: "Analitica & Mercadeo",
      component: <Servicio2 darkMode={darkMode} />,
    },
    {
      text: "Plan de Marketing Outbound",
      component: <Servicio3 darkMode={darkMode} />,
    },
    {
      text: "Plan de Marketing Inbound",
      component: <Servicio1 darkMode={darkMode} />,
    },
    {
      text: "Estudios de Mercado & Geomercadeo",
      component: <Servicio2 darkMode={darkMode} />,
    },
    {
      text: "Plan de ventas",
      component: <Servicio3 darkMode={darkMode} />,
    },
    {
      text: "Marketing basado en cuentas",
      component: <Servicio1 darkMode={darkMode} />,
    },
    {
      text: "Análisis de venta cruzada y al alza",
      component: <Servicio2 darkMode={darkMode} />,
    },
    {
      text: "Expansión y nuevos mercados",
      component: <Servicio3 darkMode={darkMode} />,
    },
    {
      text: "Automatización de marketing",
      component: <Servicio2 darkMode={darkMode} />,
    },
    {
      text: "Reglamento General de Protección de Datos (GDPR)",
      component: <Servicio3 darkMode={darkMode} />,
    },
  ];
  return (
    <ServicesSection
      title="Consultoria"
      subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit exercitationem unde quibusdam dolorum hic illo numquam, harum nobis minus. Blanditiis asperiores libero nihil praesentium provident optio consequuntur quod, repudiandae dolorum!"
    >
      <div className="grid grid-cols-10 gap-2">
        <div className={` border py-2 col-span-2 flex flex-col gap-2   `}>
          {listaItems.map((item, index) => (
            <div
              onClick={() => setX(index)}
              className={` ${
                x === index ? "border-b-2 border-secondary" : ""
              }  cursor-pointer  flex items-center justify-start    `}
              key={index}
            >
              <div className={`flex gap-2  `}>
                <div>
                  <GoDot className="text-2xl" />
                </div>
                <p className={styles.title}>{item.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-white col-span-8 border">
          {listaItems[x].component}
        </div>
      </div>
    </ServicesSection>
  );
};

export default Consultoria;
