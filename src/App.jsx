import { useState } from "react";
import Navbar from "@/components/Navbar";
import Home from "@/components/Home";
import styles from "@/style";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode && "dark"}>
      <div className="dark:bg-accent w-full overflow-hidden">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

        <Home />
      </div>
    </div>
  );
}

export default App;
