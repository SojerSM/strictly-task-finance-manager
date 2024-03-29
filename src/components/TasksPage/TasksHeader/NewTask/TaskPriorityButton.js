import styles from "./TaskPriorityButton.module.css";

import * as icons from "../../../../assets/icons";

const TaskPriorityButton = function (props) {
  const changePriorityHandler = (event) => {
    event.preventDefault();
    props.onClick(!props.isImportant);
  };

  const activeIconClass =
    props.theme === "dark" ? "svg-icon-active-dark" : "svg-icon-active-light";

  return (
    <div className={styles["important-btn"]}>
      <label htmlFor={"important"}>Important</label>
      <button id={"important"} type={"button"} onClick={changePriorityHandler}>
        <svg
          className={
            !props.isImportant ? styles["svg-icon"] : styles[activeIconClass]
          }
          viewBox="0 0 20 20"
        >
          {icons.importantIcon}
        </svg>
      </button>
    </div>
  );
};

export default TaskPriorityButton;
