import styles from '../photography-business-goal-calculator/BusinessGoalCalculator.module.css';

export default function GoalResults({ incomeGoal, sessionTypes }) {
  const totalAvgSale = sessionTypes.reduce((sum, session) => sum + (session.avgSale || 0), 0);
  const totalSessions = totalAvgSale > 0 ? Math.ceil(incomeGoal / totalAvgSale) : 0;

  const sessionsPerMonth = Math.ceil(totalSessions / 11); // accounting for 1 month off
  const sessionsPerWeek = Math.ceil(totalSessions / 46); // accounting for no-shows, vacations, etc.
  const incomePerDay = incomeGoal / 230;

  return (
    <div className={styles.resultsSection}>
      <h2>Results</h2>
      
      <p>Total Sessions Needed per Year: <strong>{totalSessions}</strong></p>
      <p>Sessions per Month: <strong>{sessionsPerMonth}</strong></p>
      <p>Sessions per Week: <strong>{sessionsPerWeek}</strong></p>
      <p>Daily Income Goal (230 working days): <strong>${incomePerDay.toFixed(2)}</strong></p>
    </div>
  );
}