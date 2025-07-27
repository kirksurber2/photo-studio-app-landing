import Link from 'next/link'
import styles from '../../training.module.css'
import HeroSection1 from '../../../../components/HeroSections/HeroSection1'
import BlogIntroSection from '@/components/BlogIntroSection/BlogIntroSection'
import SubscriptionCTA from '@/components/SubscriptionCTA/SubscriptionCTA'
import TrainingSection from '../../components/TrainingSection'

export default function PhotographyBusinessByTheNumbers() {


    return(
        <main>
            <HeroSection1 
                title="Photography Business: By the Numbers"
                description="Create any level of success.  Here are the numbers to do it"
                imageUrl=""
            />
            <BlogIntroSection 
                title="Creating and Building Your Photography Business" 
                intro="No successful business just launches and automatically is a hit.  There is a plan with objectives to hit and also plenty of time you'll pivot from bumps along the way" 
                point1="Daily Sales Goals" 
                point2="Pricing" 
                point3="Average Sales" 
                point4="Task Breakdown: pricing your tasks, understand your focus" 
                point5="Hire | Outsource | Do it Yourself?"
            />
            <TrainingSection 
                videoUrl="" 
                title="" 
                description="" 
                reverse= {false}
            />

            <div>
                <h2>Task Breakdown: Prioritize your tasks and understand your focus</h2>
                <p>Let's start by figuring the value of each task your business will need to operate</p>
                <p>We'll break these down into some of our basic functions </p>
                <ul>
                    <li>Photography Sessions</li>
                    <li>Editing</li>
                    <li>Sales</li>
                    <li>Marketing</li>
                    <li>Website: Updating/Creating</li>
                    <li>Calling Leads</li>
                </ul>
                <div className={styles.infoSection}>
                    <h3>Photo Sessions</h3>
                    <h4>Calculated Profit/Loss: <strong style={{color: 'green'}}>$1000/client</strong></h4>
                    <p>By far the easiest function to figure for your business.  If you aren't photographing someone, you aren't making money.</p>
                    <p>This is where your session price and average sale are going to come into play.  If you know them, you are ahead of the game and probably understand how much you are making</p>
                    <p>If you are just starting out, you should be striving to make $1000 per client on average. If you've been in business, you should be striving for 4-5k sales depending on your business model</p>
                    <p>Don't worry if you aren't there yet, You'll have $0 sales and some clients you'll have $2k sales.  It's all about the average</p>
                    <p>If you know your numbers, you can adjust them and figure your own calculated profit for your own tasks.  If it is $299, then use that</p>
                </div>
            </div>
            <SubscriptionCTA />
        </main>
    )
}