import React from "react";
import { Route, Routes } from "react-router-dom";
import Transformacion from "@/components/services/Transformacion";
import Marketing from "@/components/services/Marketing";
import Staffing from "@/components/services/Staffing";
import Consultoria from "@/components/services/Consultoria";

const RouterServices = ({ darkMode }) => {
  return (
    <>
      <Routes>
        <Route
          path="consultoria"
          element={<Consultoria darkMode={darkMode} />}
        />
        <Route path="marketing" element={<Marketing darkMode={darkMode} />} />
        <Route path="staffing" element={<Staffing darkMode={darkMode} />} />
        <Route
          path="transformacion"
          element={<Transformacion darkMode={darkMode} />}
        />
      </Routes>
    </>
  );
};

export default RouterServices;
