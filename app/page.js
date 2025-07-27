import Link from 'next/link'
import Head from 'next/head'
import Navbar from './components/Navbars/Navbar'
import styles from './globals.css'
import Image from 'next/image'
import PreLaunchForm from '@/app/components/Forms/PreLaunchForm'
import connectDB from '@/config/database'
import UnderConstructionModal from './components/Modal/UnderConstruction/UnderConstructionModal'
import calendarPhoto from '../assets/images/images/calendar.jpg'
import calendarOnPhone from '../assets/images/images/calendarOnPhone.jpg'
import computer from '../assets/images/images/computer.png'


export default function HomePage() {

    return (
        <div className={styles.container}>
            <UnderConstructionModal />
            <Navbar className={styles.navbar} />
            


            <div className={'body'}>
              <div className={'hero'}>
                <div className={'leftSide'}>
                  <h1>Schedule, Photograph, Collect, Plan</h1>
                  <p>Save time by simplifying your business</p>
                </div>
                <div className={'rightSide' }>
                  <Image src={calendarOnPhone} width={'auto'} height={300}alt='Phone with yearly calendar'/>
                </div> 
              </div>   
            
            <div className={'computerTextHolder'}>
                <div className={`computerText box`}>
                    <h4>Work Anywhere</h4>
                    <p >Keep important info handy - client info, session location, SMS, all in one spot</p>
                </div>
                <div className={`computerText box`}>
                    <h4>REMEMBER EVERYTHING</h4>
                    <p >Keep important info handy - client info, session location, SMS, all in one spot</p>
                </div>
                <div className={`computerText box`}>
                    <h4>TURN TO-DO INTO DONE</h4>
                    <p >Keep important info handy - client info, session location, SMS, all in one spot</p>
                </div>
                <div className={`computerText box`}>
                    <h4>FIND THINGS FAST</h4>
                    <p >Keep important info handy - client info, session location, SMS, all in one spot</p>
                </div>
            </div>
            
            <div className={'stayInformed'}>
                <h2>Stay informed on our PRE-LAUNCH!</h2>
                <PreLaunchForm />               
            </div>
            <div className={'features'}>
                <div className={'featuresHeader'}>
                    <h2>Make Taking Care of Your Clients Easier</h2>
                </div>
                <div className={'feature'}>
                    <h2 className={'featureName'}>Contact Forms</h2>
                    <p className={'featureDescription'}>Collecting Leads is the first service any program should have for a photographer or videographer.  Capture as many as you can</p>
                </div>
                <div className={'feature'}>
                    <h2 className={'featureName'}>Workflows</h2>
                    <p className={'featureDescription'}>As photographers ourselves, we have a million items on our plate, worrying about a workflow now isn't one of them</p>
                </div>
                <div className={'feature'}>
                    <h2 className={'featureName'}>Invoicing</h2>
                    <p className={'featureDescription'}>Ditch the exposure crap, get paid for the work you do and don't put them on your calendar until they have committed.  </p>
                </div>
                <div className={'feature'}>
                    <h2 className={'featureName'}>Messaging</h2>
                    <p className={'featureDescription'}>Trying to dig for numbers is a thing of the past, quickly send messages to your clients while you are out getting other tasks done.</p>
                </div>
                <div className={'feature'}>
                    <h2 className={'featureName'}>Management</h2>
                    <p className={'featureDescription'}>Finding "little Susie's Mom has never been easier not to mention seeing where they are at in the workflow to track what you need to get done for them.</p>
                </div>                  
            </div>
            <div className={'buyersJourney'}>
                <div className={'journeySteps'}>
                    <div className={'journeyStep box'}>
                        <h2>New Lead</h2>
                        <p className={'featureDescription'}>Boom!  A new lead just hit your website and loves what you do.  They're reaching out and now it's time to move them forward.</p>
                    </div>
                    <div className={'journeyStep box'}>
                        <h2>Schedule a Consultation</h2>
                        <p>Whether it's in person, phone, or video chat, get them on the books sooner rather than later. </p>
                    <div className={'motionItem'}>
                        Add image here
                    </div>
                </div>
                    <div className={'journeyStep box'}>
                        <h2>Send a "Soft" Product Info </h2>
                        <p >It's never too early to start embedding product ideas in your clients mind.  Get them thinking about prints and wall art right away</p>
                    </div>
                    <div className={'journeyStep box'}>
                        <h2>Quote/Invoice/Contract</h2>
                        <p>Get Paid!  This doesn't need to be a multiple step process, that's why we make it seemless for your client.</p>
                    </div>
                    <div className={'journeyStep box'}>
                        <h2>Schedule Session</h2>
                        <p>Easily schedule a clients session, plan their shoot location, automatically send out wardrobe ideas and best practicess.</p>
                    </div>
                    <div className={'journeyStep box'}>
                        <h2>Build Your Relationship</h2>
                        <p>Customer Service is more important than ever.  Use our pre-designed SMS notifications, emails and push notifications to remind your clients.  Do a quick review/adjustment before they go out.</p>
                    </div>
                    <div className={'journeyStep box'}>
                        <h2>After the Session</h2>
                        <p>Get that pricing sheet out after the session is completed.  Not to mention time frames and what to expect for coming up IPS/Sales session  </p>
                    </div>
                    <div className={'journeyStep box'}>
                        <h2>Sell/Nurture/Repeat</h2>
                        <p>Clients and leads are scored so you can send proper messages to the proper client based on their activity.
                        </p>
                    </div>
                </div>
            </div>
        </div>
            {/* <div className={styles.testDrive}>
                <p>Do a test drive like your client would.</p>
                <button>See a quick workflow</button>
            </div>
                <div className={styles.reviews}>
                    <h2>Reviews</h2>
                </div>
                <div className={styles.pricing}>
                    <div>
                        <p>Pricing 1</p>
                    </div>
                    <div>
                        <p>Pricing 2</p>
                    </div>
                    <div>
                        <p>Pricing 3</p>
                    </div>
                </div>
                <div className={styles.training}>
                    <h2>Want us to set it up for you?</h2>
                    <p>Your time is more valuable than trying to setup a new system.  Let us handle that for you.  We can do basic setup to get you started for $199 or a in-depth setup based on your specific needs. Contact us for a quote.</p>
                </div>
                <div className={styles.training}>
                    <h2>Want 1-on-1 Training?</h2>
                    <p>If you hate going through a system and want something more personal, We can hopp on a video conference and help you develop the skills you want.Starting at $299</p>
                </div> */}
                {/* <div className={styles.training}>
                                <h3>Step 1</h3>
                                <p>We customize the account for your needs, not a generalized business.</p>
                                <h3>Step 2</h3>
                                <p>Start Training</p>
                                <h3>Step 3</h3>
                                <p>Get follow up training (included 1hr) 1 week after to see where you are at and give you opportunity to ask any questions that you didn't think of now that you have used the system</p>
                                <button>Get Training Now</button>

                </div>     */}
                <PreLaunchForm/>
            </div>
                
                
          
        

    


        
    )
}