import styles from "./AddExpense.module.scss";

const AddExpense = () => {
  return (
    <form action="">
      <div className={styles.addExpense__controls}>
        <div className={styles.addExpense__control}>
          <label htmlFor="title">Title</label>
          <input name="title" type="text" />
        </div>
        <div className={styles.addExpense__control}>
          <label htmlFor="amount">Amount</label>
          <input name="amount" type="number" min="0.01" step="0.01" />
        </div>
        <div className={styles.addExpense__control}>
          <label htmlFor="date">Date</label>
          <input name="date" type="date" min="2022-01-01" max="2024-12-31" />
        </div>
      </div>
      <div className={styles.addExpense__actions}>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default AddExpense;
