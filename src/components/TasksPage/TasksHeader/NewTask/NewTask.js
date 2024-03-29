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
  const taskCtx = useContext(TaskContext);

  const [taskContent, setTaskContent] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [taskOption, setTaskOption] = useState("others");
  const [isImportant, setIsImportant] = useState(false);
  const [formError, setFormError] = useState({
    status: false,
    description: "",
  });

  const optionalsColor =
    props.theme === "dark"
      ? "var(--dark__font-light-smoked)"
      : "var(--light__font-dark-smoked)";

  const bcgCategories = `var(--${props.theme}__gray-medium-dark)`;

  const formConfirmHandler = (event) => {
    event.preventDefault();

    if (taskContent.trim().length === 0) {
      setFormError({
        status: true,
        description: "Enter correct description (not empty).",
      });
      clearFormValues();
      return;
    }

    const newTask = {
      key: Math.random().toString(),
      content: taskContent,
      date: taskDate && new Date(taskDate),
      option: taskOption,
      priority: isImportant,
    };

    taskCtx.addTask(newTask);

    setFormError({ status: false });
    clearFormValues();
  };

  const clearFormValues = () => {
    setTaskContent("");
    setTaskDate("");
    setTaskOption("others");
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
    <form
      className={styles["form"]}
      onSubmit={formConfirmHandler}
      style={{ color: props.fontColor }}
    >
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
      <p className={styles["optional"]} style={{ color: optionalsColor }}>
        Specify it (optional)
      </p>
      <div
        className={styles["categories"]}
        style={{ backgroundColor: bcgCategories }}
      >
        <DateInput
          className={styles["date-input"]}
          input={{
            min: "2019-01-01",
            max: "2029-12-31",
          }}
          onChange={dateChangeHandler}
          value={taskDate}
        />
        <div className={styles["select-wrapper"]}>
          <p>Category</p>
          <TaskSelector
            onChange={selectHandler}
            value={taskOption}
            theme={props.theme}
          />
        </div>
        <TaskPriorityButton
          isImportant={isImportant}
          onClick={priorityInputHandler}
          theme={props.theme}
        />
      </div>
      <Button className={styles["submit-btn"]} onClick={formConfirmHandler}>
        Submit
      </Button>
      {formError.status && (
        <NewTaskError formError={formError} theme={props.theme} />
      )}
    </form>
  );
};

export default NewTask;
