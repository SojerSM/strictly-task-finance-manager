import { Fragment, useState, useContext } from "react";

import styles from "./FundsHeader.module.css";

import ThemeContext from "../../../store/themeContext/theme-context";

import AddButton from "../../UI/Buttons/AddButton";
import Modal from "../../UI/Modal";
import ExitButton from "../../UI/Buttons/ExitButton";
import Highlight from "../../UI/Highlight";

import AddFundsForm from "./AddFundsForm/AddFundsForm";
import FundsCalendar from "./FundsCalendar.js/FundsCalendar";
import GeneralFundData from "./GeneralFundData/GeneralFundData";
import MonthlyAverage from "./MonthlyAverage/MonthlyAverage";

const FundsHeader = function () {
  const { defaultFontColor } = useContext(ThemeContext);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const toggleFormHandler = (event) => {
    event.preventDefault();
    setIsFormOpen(!isFormOpen);
  };

  return (
    <Fragment>
      {isFormOpen && (
        <Modal onClose={toggleFormHandler} className={styles["form-modal"]}>
          <ExitButton onClose={toggleFormHandler} />
          <AddFundsForm />
        </Modal>
      )}
      <div className={styles["header"]} style={{ color: defaultFontColor }}>
        <div className={styles["add-section"]}>
          <h3 className={styles["title"]}>
            Your <Highlight>Funds</Highlight>
          </h3>
          <AddButton onClick={toggleFormHandler} />
        </div>
        <div className={styles["overviews"]}>
          <FundsCalendar />
          <MonthlyAverage />
          <GeneralFundData />
        </div>
      </div>
    </Fragment>
  );
};

export default FundsHeader;
