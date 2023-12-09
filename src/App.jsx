import { useState } from "react";
import Navbar from "@/components/Navbar";
import Home from "@/components/home/Home";
import styles from "@/style";
import { Routes, Route } from "react-router-dom";

import Transformacion from "@/components/services/Transformacion";
import Marketing from "@/components/services/Marketing";
import Staffing from "@/components/services/Staffing";
import Consultoria from "@/components/services/Consultoria";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import RouterServices from "@/components/services/RouterServices";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode && "dark"}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <div className="dark:bg-accent w-full overflow-hidden">
        <Routes>
          <Route path="/" element={<Home darkMode={darkMode} />} />
          <Route
            path="/services/*"
            element={<RouterServices darkMode={darkMode} />}
          />
          {/* <Route path="/blog/*" element={<Services darkMode={darkMode} />} /> */}
          {/* <Route path="/" element={<Home darkMode={darkMode} />} />
          <Route path="/contacto" element={<Contact darkMode={darkMode} />} />

          <Route
            path="servicios/consultoria"
            element={<Consultoria darkMode={darkMode} />}
          />
          <Route
            path="servicios/marketing"
            element={<Marketing darkMode={darkMode} />}
          />
          <Route
            path="servicios/staffing"
            element={<Staffing darkMode={darkMode} />}
          />
          <Route
            path="servicios/transformacion"
            element={<Transformacion darkMode={darkMode} />}
          /> */}
        </Routes>

        <div
          className={`dark:bg-accent   ${styles.paddingX} ${styles.flexCenter}`}
        >
          <div className={`${styles.boxWidth}`}>
            <Footer darkMode={darkMode} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
