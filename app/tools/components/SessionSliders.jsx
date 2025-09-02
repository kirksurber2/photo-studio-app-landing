import styles from '../photography-business-goal-calculator/BusinessGoalCalculator.module.css';


export default function SessionSliders({ sessionTypes, onUpdate }) {
    return (
      <div className="sliders-section">
        <h2>Adjust Average Sale Per Session</h2>
        {sessionTypes.map(session => (
          <div key={session.id} className="slider-row">
            <label>{'Average Sale Amount'}: ${session.avgSale}</label>
            <input
              type="range"
              min="0"
              max="10000"
              value={session.avgSale}
              onChange={(e) => onUpdate(session.id, { avgSale: Number(e.target.value) })}
            />
          </div>
        ))}
      </div>
    );
  }