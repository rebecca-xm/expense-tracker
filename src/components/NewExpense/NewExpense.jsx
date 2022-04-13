import AddExpense from "./AddExpense";
import styles from "./NewExpense.module.scss";

const NewExpense = () => {
  return (
    <div className={styles.newExpense}>
      <AddExpense />
    </div>
  );
};

export default NewExpense;
