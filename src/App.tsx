import React from "react";
import Sidebar from "./Sidbar";
import { useDarkMode } from "./hooks/useDarkMode";

function App() {
  const [darkMode, setDarkMode] = useDarkMode();
  const handleMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div className="flex">
      <Sidebar />

      <div>
        <button
          onClick={handleMode}
          className="cursor-pointer bg-purple-700 text-white p-2 rounded-md border-purple-900 border ml-16 hover:bg-purple-500"
        >
          toggle dark mode
        </button>
      </div>
    </div>
  );
}

export default App;
