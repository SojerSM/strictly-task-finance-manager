import { useEffect, useState } from "react";

import styles from "./TaskCalendarDaysList.module.css";

import TaskCalendarDayItem from "./TaskCalendarDayItem";

const TaskCalendarDaysList = function (props) {
  const [days, setDays] = useState([]);

  useEffect(() => {
    const daysArr = new Array(props.date.daysInMonth).fill({});

    const filledDaysArr = daysArr.map((day, index) => {
      return {
        dayID: index + 1,
        date: new Date(props.date.year, props.date.month, index + 1),
      };
    });

    setDays(filledDaysArr);
  }, [props.date]);

  console.log(days);

  return (
    <div className={styles["days-list"]}>
      <TaskCalendarDayItem />
    </div>
  );
};

export default TaskCalendarDaysList;