import { Fragment, useState } from "react";

import * as icons from "../../../assets/icons";
import styles from "./TasksSummary.module.css";

import Button from "../../UI/Buttons/Button";
import ExitButton from "../../UI/Buttons/ExitButton";
import Modal from "../../UI/Modal";
import SummaryButton from "./SummaryButton";
import NewTask from "./NewTask/NewTask";

const TasksSummary = function (props) {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const toggleFormHandler = (event) => {
    event.preventDefault();
    setIsFormOpen(!isFormOpen);
  };

  return (
    <Fragment>
      {isFormOpen && (
        <Modal onClose={toggleFormHandler} className={styles["modal"]}>
          <ExitButton onClose={toggleFormHandler} />
          <NewTask />
        </Modal>
      )}
      <div className={styles["header"]}>
        <h3 className={styles["title"]}>Your Tasks</h3>
        <Button className={styles["add-button"]} onClick={toggleFormHandler}>
          <svg className={styles["svg-icon"]} viewBox="0 0 20 20">
            {icons.addNewIcon}
          </svg>
          Add
        </Button>
      </div>
      <div className={styles["summary"]}>
        <SummaryButton title={"All"} />
        <SummaryButton title={"Important"} />
        <SummaryButton title={"Uncategorized"} />
        <SummaryButton title={"Upcoming"} />
      </div>
    </Fragment>
  );
};

export default TasksSummary;
