import { useContext } from "react";

import styles from "./ThemeButton.module.css";
import * as icons from "../../../assets/icons";

import ThemeContext from "../../../store/themeContext/theme-context";

const ThemeButton = function (props) {
  const { toggleTheme } = useContext(ThemeContext);

  const toggleThemeHandler = (event) => {
    event.preventDefault();
    toggleTheme();
  };

  return (
    <button className={styles["button"]} onClick={toggleThemeHandler}>
      <svg className={styles["svg-icon"]} viewBox="0 0 20 20">
        {icons.themeIcon}
      </svg>
    </button>
  );
};

export default ThemeButton;
