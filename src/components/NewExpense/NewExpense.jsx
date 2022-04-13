import AddExpense from "./AddExpense";
import styles from "./NewExpense.module.scss";

const NewExpense = ({ onNewExpense }) => {
  const handleUserExpense = (userExpenseData) => {
    const userExpense = {
      ...userExpenseData,
      id: Math.random().toString(),
    };
    console.log(userExpense);
    onNewExpense(userExpense);
  };

  return (
    <div className={styles.newExpense}>
      <AddExpense onUserExpense={handleUserExpense} />
    </div>
  );
};

export default NewExpense;
