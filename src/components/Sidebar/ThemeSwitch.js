import React, { useEffect, useState } from "react";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const ThemeSwitch = () => {
  const [darkMode, setDarkMode] = useState(true);

  const theme = {
    "primary-color": darkMode ? "#212d40" : "#f6f6f6",
    "secondary-color": darkMode ? "#11151c" : "#e1e1e1",
    "font-color": darkMode ? "#e5e5e5" : "#2e2e2e",
  };

  useEffect(() => {
    Object.entries(theme).map(([key, value]) =>
      document.documentElement.style.setProperty(`--theme-${key}`, value)
    ); // eslint-disable-next-line
  }, [darkMode]);

  return (
    <div
      className="sidebar__changer"
      onClick={() => setDarkMode((prevVal) => !prevVal)}
    >
      <LightModeIcon className="sidebar__icon" />
      <div className="sidebar__changer-background">
        <div
          className={`sidebar__changer-circle ${darkMode ? "active" : ""}`}
        ></div>
      </div>
      <DarkModeIcon className="sidebar__icon" />
    </div>
  );
};

export default ThemeSwitch;
