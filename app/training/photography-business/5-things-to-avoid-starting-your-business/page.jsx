import Link from 'next/link'
import styles from '../../training.module.css'
import BlogIntroSection from '@/app/components/BlogIntroSection/BlogIntroSection'


export default function FiveThingsToAvoid() {

    return(
        <main>
            <div className={styles.hero}>
                <h1>5 Things to Avoid Starting Your Photography Business</h1>
                <p>A Lessons Learned Tip</p>
            </div>
            <BlogIntroSection 
                title="Every Photographers Mistakes"
                intro="Lessons Learned from Photographers Everywhere" 
                point1="Exposure" 
                point2="Chambers and BNI * (these must be done correctly)" 
                point3="New Gear" 
                point4="Pricing" 
                point5="Knowing Which Tasks Make You Money"
            />
            <div>
                <h2>"It will be great Exposure"</h2>
                <p>A <strong><u>HUGE mistake</u></strong> to take this</p>
                <p>This is one of the most common items businesses, your local Chamber, and BNI Groups love to throw around to photographers.</p>
                <p>Instead: here are several options for you to use</p>
                <div>
                    <h3>Alternate Option 1: Exchange Value</h3>
                    <p>Grab your pricing sheet (if you don't have one, do not pass go, go directly to <Link>pricing</Link>) to figure the value of their ask</p>
                    <div>
                        <p style={{textAlign: 'center', width: '50%'}}><i>If and only if you believe in what they are doing and you find value in it, you can do this for free however there is a better option, exchange value for their offer</i></p>
                    </div>
                    <p>
                        If you believe this will be great event/location for future clients or for marketing, exchange value for the equal price of your services for the price of their marketing. 
                    </p>
                    <p>Usually, there will be 3-6 different levels of sponsorship at events these businesses are conducting.</p>
                    <p>Your ask should be to have equal sponsorship at the level of service based on your a-la-cart pricing or hourly rate.</p>
                    <p>For example, my photography business charges $400/hr for a single photographer to do events or weddings.  If they want 4 hours of coverage, you need to be in their $1600 level of sponsorship.  If you need to bump the value up, also add equipment rental to the line items or set a minimum charge</p>
                    <p>In some cases, this may not even hit a level of sponsorship and may be considered "in-kind" donations.  Personally, I don't want to be in their "in-kind" level at all.  I want my value to be noted.</p>
                    <p>I would recommend that you have an online gallery, the ability for people at these events to scan a qr code (table banner) or have a link for the gallery.  They should also be able to sign in with their email so you can collect the information to use later.</p>
                </div>
                <div>
                    <h3>Alternate Option 2: Quid Pro Quo for Services</h3>
                    <p></p>
                    <div>
                        <p style={{textAlign: 'center', width: '50%'}}><i>If and only if you believe in what they are doing and you find value in it, you can do this for free however there is a better option, exchange value for their offer</i></p>
                    </div>
                    <p>
                        Get an account value of their product for you to use.  If their business is pizza, get $1600 worth of pizzas or food on your account.  If it's a chiropractic office, get that amount in services or adjustments.  You get the picture
                    </p>
                </div>
            </div>
            
        </main>
    )
}