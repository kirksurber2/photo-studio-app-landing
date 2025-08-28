// /components/SessionTypeRow.jsx
import styles from '../photography-business-goal-calculator/BusinessGoalCalculator.module.css';

export default function SessionTypeRow({ session, onUpdate, onRemove, incomeGoal }) {
  const estimatedIncome = (session.avgSale || 0) * (session.quantity || 0);
  const percentageOfGoal = (incomeGoal > 0) ? (estimatedIncome / incomeGoal) * 100 : 0;

  const getGoalColor = () => {
    if (percentageOfGoal >= 100) return 'green';
    if (percentageOfGoal >= 75) return 'orange';
    return 'red';
  };

  return (
    <div className={styles.sessionTypeRow}>
      <input
        type="text"
        placeholder="Session Name"
        className={styles.inputField}
        value={session.name}
        onChange={(e) => onUpdate(session.id, { name: e.target.value })}
      />
      <div>
        <label>Average Sale: ${session.avgSale}</label>
        <input
          type="range"
          min="0"
          max="5000"
          value={session.avgSale}
          className={styles.rangeInput}
          onChange={(e) => onUpdate(session.id, { avgSale: Number(e.target.value) })}
        />
      </div>
      <div>
        <label>Session Quantity: {session.quantity || 0}</label>
        <input
          type="range"
          min="0"
          max="500"
          value={session.quantity || 0}
          className={styles.rangeInput}
          onChange={(e) => onUpdate(session.id, { quantity: Number(e.target.value) })}
        />
      </div>
      <div>
        <p>
          Estimated Income: <strong>${estimatedIncome.toFixed(2)}</strong>
        </p>
        <span style={{ color: getGoalColor() }}>
          {percentageOfGoal >= 100 ? 'Goal Met' : percentageOfGoal >= 75 ? 'Close to Goal' : 'Below Goal'}
        </span>
      </div>
      <button className={styles.button} onClick={() => onRemove(session.id)}>Remove</button>
    </div>
  );
}
