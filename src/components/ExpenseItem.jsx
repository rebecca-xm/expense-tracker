import ExpenseDate from "./ExpenseDate";
import styles from "./ExpenseItem.module.scss";

const ExpenseItem = ({ title, amount, date }) => {
  return (
    <div className={styles.expenseItem}>
      <ExpenseDate date={date} />
      <div className={styles.expenseItem__description}>
        <h2>{title}</h2>
        <div className={styles.expenseItem__price}>€ {amount}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
