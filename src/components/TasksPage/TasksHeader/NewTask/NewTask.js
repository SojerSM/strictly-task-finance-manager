import { useContext, useState } from "react";

import styles from "./NewTask.module.css";

import TaskContext from "../../../../store/taskContext/task-context";

import TextInput from "../../../UI/Inputs/TextInput";
import DateInput from "../../../UI/Inputs/DateInput";
import TaskSelector from "./TaskSelector";
import Button from "../../../UI/Buttons/Button";
import NewTaskError from "./NewTaskError";
import TaskPriorityButton from "./TaskPriorityButton";

const NewTask = function (props) {
  const task = useContext(TaskContext);

  const [taskContent, setTaskContent] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [taskOption, setTaskOption] = useState("work");
  const [isImportant, setIsImportant] = useState(false);
  const [formError, setFormError] = useState({
    status: false,
    description: "",
  });

  const formConfirmHandler = (event) => {
    event.preventDefault();

    if (taskContent.trim().length === 0 || taskDate === "") {
      setFormError({
        status: true,
        description: "Enter correct description and date.",
      });
      clearFormValues();
      return;
    }
    setFormError({ status: false });
    clearFormValues();

    console.log(task, taskContent, taskDate, taskOption, isImportant);
  };

  const clearFormValues = () => {
    setTaskContent("");
    setTaskDate("");
    setTaskOption("work");
    setIsImportant(false);
  };

  const textChangeHandler = (text) => {
    setTaskContent(text);
  };

  const dateChangeHandler = (date) => {
    setTaskDate(date);
  };

  const selectHandler = (option) => {
    setTaskOption(option);
  };

  const priorityInputHandler = (priority) => {
    setIsImportant(priority);
  };

  return (
    <form className={styles["form"]} onSubmit={formConfirmHandler}>
      <h4>Create new Task</h4>
      <TextInput
        className={styles["input"]}
        input={{
          placeholder: "Describe it...",
          maxLength: 60,
        }}
        onChange={textChangeHandler}
        value={taskContent}
      />
      <div className={styles["categories"]}>
        <DateInput
          className={styles["date-input"]}
          input={{
            min: "2020-01-01",
            max: "2029-12-31",
          }}
          onChange={dateChangeHandler}
          value={taskDate}
        />
        <div className={styles["select-wrapper"]}>
          <p>Category</p>
          <TaskSelector onChange={selectHandler} value={taskOption} />
        </div>
        <TaskPriorityButton
          isImportant={isImportant}
          onClick={priorityInputHandler}
        />
      </div>
      <span />
      <Button className={styles["submit-btn"]} onClick={formConfirmHandler}>
        Submit
      </Button>
      {formError.status && <NewTaskError formError={formError} />}
    </form>
  );
};

export default NewTask;