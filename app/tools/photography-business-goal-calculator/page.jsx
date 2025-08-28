'use client'
import React, { useState, useEffect } from 'react';
import { Plus, Trash2, Target, TrendingUp, DollarSign, Camera } from 'lucide-react';
import styles from './BusinessGoalCalculator.module.css';

export default function BusinessGoalCalculator() {
  const [incomeGoal, setIncomeGoal] = useState(100000);
  const [sessionTypes, setSessionTypes] = useState([]);

  // Load from localStorage on mount
  useEffect(() => {
    const savedIncomeGoal = localStorage.getItem('businessGoalIncomeGoal');
    const savedSessionTypes = localStorage.getItem('businessGoalSessionTypes');
    
    if (savedIncomeGoal) {
      setIncomeGoal(Number(savedIncomeGoal));
    }
    if (savedSessionTypes) {
      setSessionTypes(JSON.parse(savedSessionTypes));
    }
  }, []);

  // Save to localStorage whenever data changes
  useEffect(() => {
    localStorage.setItem('businessGoalIncomeGoal', incomeGoal.toString());
  }, [incomeGoal]);

  useEffect(() => {
    localStorage.setItem('businessGoalSessionTypes', JSON.stringify(sessionTypes));
  }, [sessionTypes]);

  // Add new session type
  const addSessionType = () => {
    const newSession = {
      id: Date.now(),
      name: '',
      avgSale: 500,
      sessionsPerYear: 50
    };
    setSessionTypes([...sessionTypes, newSession]);
  };

  // Update session type
  const updateSessionType = (id, field, value) => {
    setSessionTypes(prev =>
      prev.map(session =>
        session.id === id ? { ...session, [field]: value } : session
      )
    );
  };

  // Remove session type
  const removeSessionType = (id) => {
    setSessionTypes(prev => prev.filter(session => session.id !== id));
  };

  // Calculate total estimated income
  const calculateTotalIncome = () => {
    return sessionTypes.reduce((total, session) => {
      return total + (session.avgSale * session.sessionsPerYear);
    }, 0);
  };

  // Get goal status and color
  const getGoalStatus = () => {
    const totalIncome = calculateTotalIncome();
    const percentage = (totalIncome / incomeGoal) * 100;
    
    if (percentage >= 100) {
      return { status: 'goal-met', color: 'green', message: 'Goal Achieved! 🎉', percentage };
    } else if (percentage >= 75) {
      return { status: 'close-to-goal', color: 'yellow', message: 'Close to Goal! 💪', percentage };
    } else {
      return { status: 'below-goal', color: 'red', message: 'Below Goal 📈', percentage };
    }
  };

  // Reset all data
  const resetAllData = () => {
    setIncomeGoal(100000);
    setSessionTypes([]);
    localStorage.removeItem('businessGoalIncomeGoal');
    localStorage.removeItem('businessGoalSessionTypes');
  };

  const totalIncome = calculateTotalIncome();
  const goalStatus = getGoalStatus();

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerIcon}>
          <Target size={48} />
        </div>
        <h1 className={styles.title}>Photography Business Goal Calculator</h1>
        <p className={styles.subtitle}>Plan your sessions and track your income goals</p>
      </div>

      {/* Income Goal Section */}
      <div className={styles.goalSection}>
        <div className={styles.sectionHeader}>
          <DollarSign className={styles.sectionIcon} />
          <h2 className={styles.sectionTitle}>Annual Income Goal</h2>
        </div>
        
        <div className={styles.goalInput}>
          <label className={styles.label}>Target Annual Income</label>
          <div className={styles.inputWrapper}>
            <span className={styles.dollarSign}>$</span>
            <input
              type="number"
              value={incomeGoal}
              onChange={(e) => setIncomeGoal(Number(e.target.value) || 0)}
              className={styles.goalInputField}
              placeholder="100000"
              step="1000"
            />
          </div>
        </div>
      </div>

      {/* Session Types Section */}
      <div className={styles.sessionSection}>
        <div className={styles.sectionHeader}>
          <Camera className={styles.sectionIcon} />
          <h2 className={styles.sectionTitle}>Session Types & Planning</h2>
          <button onClick={addSessionType} className={styles.addButton}>
            <Plus size={16} />
            Add Session Type
          </button>
        </div>

        {sessionTypes.length === 0 ? (
          <div className={styles.emptyState}>
            <Camera size={48} className={styles.emptyIcon} />
            <p className={styles.emptyText}>No session types added yet</p>
            <p className={styles.emptySubtext}>Click "Add Session Type" to get started</p>
          </div>
        ) : (
          <div className={styles.sessionsList}>
            {sessionTypes.map((session) => (
              <div key={session.id} className={styles.sessionCard}>
                <div className={styles.sessionHeader}>
                  <input
                    type="text"
                    value={session.name}
                    onChange={(e) => updateSessionType(session.id, 'name', e.target.value)}
                    placeholder="Session Type Name (e.g., Wedding, Portrait, Family)"
                    className={styles.sessionNameInput}
                  />
                  <button
                    onClick={() => removeSessionType(session.id)}
                    className={styles.deleteButton}
                  >
                    <Trash2 size={16} />
                  </button>
                </div>

                <div className={styles.slidersGrid}>
                  {/* Average Sale Slider */}
                  <div className={styles.sliderGroup}>
                    <label className={styles.sliderLabel}>
                      Average Sale Amount
                      <span className={styles.sliderValue}>${session.avgSale.toLocaleString()}</span>
                    </label>
                    <input
                      type="range"
                      min="100"
                      max="5000"
                      step="50"
                      value={session.avgSale}
                      onChange={(e) => updateSessionType(session.id, 'avgSale', Number(e.target.value))}
                      className={styles.slider}
                    />
                    <div className={styles.sliderRange}>
                      <span>$100</span>
                      <span>$5,000</span>
                    </div>
                  </div>

                  {/* Sessions Per Year Slider */}
                  <div className={styles.sliderGroup}>
                    <label className={styles.sliderLabel}>
                      Sessions Per Year
                      <span className={styles.sliderValue}>{session.sessionsPerYear}</span>
                    </label>
                    <input
                      type="range"
                      min="1"
                      max="200"
                      step="1"
                      value={session.sessionsPerYear}
                      onChange={(e) => updateSessionType(session.id, 'sessionsPerYear', Number(e.target.value))}
                      className={styles.slider}
                    />
                    <div className={styles.sliderRange}>
                      <span>1</span>
                      <span>200</span>
                    </div>
                  </div>
                </div>

                {/* Session Income Preview */}
                <div className={styles.sessionIncome}>
                  <span className={styles.incomeLabel}>Estimated Annual Income:</span>
                  <span className={styles.incomeValue}>
                    ${(session.avgSale * session.sessionsPerYear).toLocaleString()}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Results Section */}
      <div className={styles.resultsSection}>
        <div className={styles.sectionHeader}>
          <TrendingUp className={styles.sectionIcon} />
          <h2 className={styles.sectionTitle}>Goal Analysis</h2>
        </div>

        <div className={styles.resultsGrid}>
          <div className={styles.resultCard}>
            <div className={styles.resultLabel}>Total Estimated Income</div>
            <div className={styles.resultValue}>${totalIncome.toLocaleString()}</div>
          </div>

          <div className={styles.resultCard}>
            <div className={styles.resultLabel}>Income Goal</div>
            <div className={styles.resultValue}>${incomeGoal.toLocaleString()}</div>
          </div>

          <div className={styles.resultCard}>
            <div className={styles.resultLabel}>Goal Progress</div>
            <div className={styles.resultValue}>{goalStatus.percentage.toFixed(1)}%</div>
          </div>
        </div>

        {/* Goal Status */}
        <div className={`${styles.goalStatus} ${styles[goalStatus.status]}`}>
          <div className={styles.statusHeader}>
            <span className={styles.statusMessage}>{goalStatus.message}</span>
            <span className={styles.statusPercentage}>{goalStatus.percentage.toFixed(1)}%</span>
          </div>
          
          <div className={styles.progressBar}>
            <div 
              className={styles.progressFill}
              style={{ width: `${Math.min(goalStatus.percentage, 100)}%` }}
            />
          </div>

          <div className={styles.statusDetails}>
            {goalStatus.percentage >= 100 ? (
              <p>Congratulations! You're on track to exceed your income goal by ${(totalIncome - incomeGoal).toLocaleString()}!</p>
            ) : goalStatus.percentage >= 75 ? (
              <p>You're close! You need ${(incomeGoal - totalIncome).toLocaleString()} more to reach your goal.</p>
            ) : (
              <p>You need ${(incomeGoal - totalIncome).toLocaleString()} more to reach your goal. Consider adding more sessions or increasing your average sale amount.</p>
            )}
          </div>
        </div>
      </div>

      {/* Reset Button */}
      <div className={styles.actions}>
        <button onClick={resetAllData} className={styles.resetButton}>
          Reset All Data
        </button>
      </div>
    </div>
  );
}