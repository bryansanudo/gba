import { useState } from "react";
import Navbar from "@/components/Navbar";
import Home from "@/components/home/Home";
import styles from "@/style";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode && "dark"}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <div className="dark:bg-accent w-full overflow-hidden">
        <Home darkMode={darkMode} />
      </div>
    </div>
  );
}

export default App;
