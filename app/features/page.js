
import Navbar from "../components/Navbars/Navbar";
import styles from  './features.module.css'

export default function Features () {

    return (

        <div className={styles.body}>
          <Navbar/>
            <div className={styles.titleArea}>
                <p style={{textAlign: 'center', fontSize: 30, fontWeight: 600}}>Make Your Life Easier</p>
                <h4 style={{textAlign: 'center'}}>Session and Workflow Tracking at Your Fingertips</h4>
                <h1 style={{fontSize: 32, fontWeight: 700}}>Features</h1>
                
            </div>
            <div className={styles.featureArea}>
                <div className={styles.featureSection}>
                 <h2 className={styles.featureSectionHeader}>Invoicing</h2>
                 <p style={{textAlign: 'center', padding: 5}}>Integrate with Stripe for your <strong>invoicing and payments</strong></p>
                </div>
                <div className={styles.featureSection}>
                  <h2  className={styles.featureSectionHeader}>Session Scheduling</h2>
                  <p style={{textAlign: 'center', padding: 5}}>Schedule a client right from your phone</p>
                </div>
                <div className={styles.featureSection}>
                 <h2  className={styles.featureSectionHeader}>Workflows</h2>
                  <p style={{textAlign: 'center', padding: 5}}><strong>Customize your workflows</strong>  Select a default or create your own</p>
                </div>
                <div className={styles.featureSection}>
                  <h2  className={styles.featureSectionHeader}>SMS Reminders</h2>
                  <p style={{textAlign: 'center', padding: 5}}>Keeping clients up to date.  <strong>Set it and forget it</strong>.</p>
                </div>
                <div className={styles.featureSection}>
                  <h2  className={styles.featureSectionHeader}>Calendar Alerts</h2>
                  <p style={{textAlign: 'center', padding: 5}}>Get notified for your workflows.  <strong>Never forget again</strong></p>
                </div>
                <div className={styles.featureSection}>
                 <h2  className={styles.featureSectionHeader}>Family Info</h2>
                  <p style={{textAlign: 'center', padding: 5}}>Easily add quick notes to check little Johnny's age on your shoot.</p>
                </div>
                <div className={styles.featureSection}>
                 <h2  className={styles.featureSectionHeader}>Model Release</h2>
                  <p style={{textAlign: 'center', padding: 5}}>Have models and clients sign on the spot</p>
                </div>
            </div>
        </div>

    )
}

