import Link from 'next/link'
import styles from '../../training.module.css'
import BlogIntroSection from '../../../../components/BlogIntroSection/BlogIntroSection'

export default function SalesGoalsAndTheNumbersPage() {
    

    return(
        <main>
            <div className={styles.hero} style={{ backgroundImage: 'url()' }}>

                <h1>Photography Sales Goals</h1>
                <p>What you need to make daily</p>
            </div>
            <BlogIntroSection 
                title="What you need to make daily"
                intro="The simple way to establish what you need to do daily" 
                point1="Daily Sales Goal" 
                point2="Average Sale" 
                point3="Amount of Clients to meet Sales Goal" 
                point4="Pricing to Meet Your Daily Goal" 
                point5="Average Sale Goal"
            />
            <div>
                <h2>Daily Sales Goals</h2>
                <h3>~ 260 working days every year</h3>
                <h4>Remove 30 for any vacation, holidays, sick days, etc.</h4>
                <p>We'll use 230 working days for your business</p>
            </div>
            <div>
                <h4>Daily Sales by Goal</h4>
                <ul>
                    <li>$70k/year / 230 = $304.35 per day</li>
                    <li>$250k/year / 230 = $1086.96 per day</li>
                    <li>$1M/year / 230 = $4347.83 per day</li>
                </ul>
            </div>
            <div>
                <h2>Clients and the average sale</h2>
                <p>This is where your average sale comes into play.  </p>
            </div>

        </main>
    )
}