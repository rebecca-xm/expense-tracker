import { useState } from "react";
import styles from "./AddExpense.module.scss";

const AddExpense = ({ onUserExpense }) => {
  // multiple states
  const [userTitle, setUserTitle] = useState("");
  const [userAmount, setUserAmount] = useState("");
  const [userDate, setUserDate] = useState("");

  // one state
  //   const [userInput, setUserInput] = useState({
  //     userTitle: "",
  //     userAmount: "",
  //     userDate: "",
  //   });

  const handleTitleChange = (e) => {
    // multiple states
    setUserTitle(e.target.value);

    // one state
    // setUserInput({
    //   ...userInput,
    //   userTitle: e.target.value,
    // });

    // to make sure react returns the latest state snapshot
    // setUserInput((prevState) => {
    //   return { ...prevState, userTitle: e.target.value };
    // });
  };

  const handleAmount = (e) => {
    setUserAmount(e.target.value);
  };

  const handleDate = (e) => {
    setUserDate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const userExpense = {
      title: userTitle,
      amount: userAmount,
      date: new Date(userDate),
    };

    onUserExpense(userExpense);
    setUserTitle('');
    setUserAmount('');
    setUserDate('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.addExpense__controls}>
        <div className={styles.addExpense__control}>
          <label htmlFor="title">Title</label>
          <input
            name="title"
            type="text"
            value={userTitle}
            onChange={handleTitleChange}
          />
        </div>
        <div className={styles.addExpense__control}>
          <label htmlFor="amount">Amount</label>
          <input
            name="amount"
            type="number"
            min="0.01"
            step="0.01"
            value={userAmount}
            onChange={handleAmount}
          />
        </div>
        <div className={styles.addExpense__control}>
          <label htmlFor="date">Date</label>
          <input
            name="date"
            type="date"
            min="2022-01-01"
            max="2024-12-31"
            value={userDate}
            onChange={handleDate}
          />
        </div>
      </div>
      <div className={styles.addExpense__actions}>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default AddExpense;
