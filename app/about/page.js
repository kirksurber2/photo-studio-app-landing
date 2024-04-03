import Navbar from '../../components/Navbars/Navbar'
import Image from 'next/image'
import Link from 'next/link'
import styles from  '../../assets/styles/about.module.css'
import PaperPlane from '../../assets/images/svg/PaperPlane.svg'
import kirkSurberHeadshot from '../../assets/images/images/KSheadshot.jpg'
import { MdTimelapse } from "react-icons/md";
import { FaLayerGroup } from "react-icons/fa";
import { BsLightningChargeFill } from "react-icons/bs";


export const metadata = {
    title: 'Photo Studio App',
    keywords: 'Photo Studio App, About Page',
    description: 'Photo Studio App is a Client Management tool or CRM for photographers to navigate the business of photography without the need for multiple costs just for tools you should have in 1 application'
}

export default function About () {

   
    return (
        <div className={styles.body}>
            <Navbar/>
            <div className={styles.hero}>
                <h1>Why Choose Photo Studio App?</h1>
                <p>Your time needs to be spent marketing or shooting, not playing with apps.</p> 
                <br/>
                <Link href="/Pricing">
                    <button>Let's get started</button>
                </Link>
                <div className={styles.box}>
                    <div className={styles.featureSection}>
                        
                        <MdTimelapse size={30} className={styles.iconImage}/>
                        
                        <h5>Save Time</h5>
                        <p>As photographers, time is money, info you need now.</p>
                    </div>
                    <div className={styles.featureSection}>
                        <FaLayerGroup className={styles.iconImage} size={30}/>
                        <h5>Keep it together</h5>
                        <p>Building out so you don't need 17 apps in your suite</p>
                    </div>
                    <div className={styles.featureSection}>
                        <BsLightningChargeFill className={styles.iconImage}  size={30}/>
                        <h5>Find it fast</h5>
                        <p>Sessions, IPS or edits should be on top, why dig through a mix?</p>
                    </div>
                </div>
                <div className={styles.whoWeAre}>
                    <p className={styles.whoWeAreTitle}>We're Photographers Too!</p>
                    <div className={styles.team}>
                        <div className={styles.teamPhoto}>
                            <Image></Image>
                            <h4>We're currently building our Team!</h4>
                        </div>
                        <div className={styles.teamDescription}>
                            <p>As a photographer myself, some of the biggest issues I had was having to dig into my client management (CRM) to find my next session coming up.  </p>
                            <br/>
                            <p>Having shot weddings, headshots, seniors and families, keeping track of everything was vital and couldn't find it easily.  We all have a million items to accomplish.  Dealing with an app shouldn't be difficult. </p>
                        </div>
                    </div>
                </div>
                <div className={styles.missionArea}>
                    <div className={styles.mission}>
                        <p className={styles.whoWeAreTitle}>Mission</p>
                        
                        <div className={styles.missionDescription}>
                            <p>Make an app for photographers who run sessions, sales, and need time to market their business, not worry about what widget to use.</p>
                            <br/>
                            <p><strong>Simple, easy to use, intuitive</strong></p>
                        </div>
                    </div>
                    <div className={styles.mission}>
                        <p className={styles.whoWeAreTitle}>Goals</p>
                        
                        <div className={styles.missionDescription}>
                            <p>Our mission is to make an app for photographers who run sessions, sales, and need time to market their business, not worry about what widget to use.</p>
                            <br/>
                            <p><strong>Simple, easy to use, intuitive</strong></p>
                        </div>
                    </div>
                    <div className={styles.mission}>
                        <p className={styles.whoWeAreTitle}>Education</p>
                        
                        <div className={styles.missionDescription}>
                            <p>The Veteran in me is a trainer at heart so expect to have educational videos, conferences and meetups along the way.  From shooting to running ad campaigns, it's coming. </p>
                            <br/>
                            <p><strong>Never stop learning</strong></p>
                        </div>
                    </div>
                </div>
                <div className={styles.ownerArea}>
                    <p className={styles.whoWeAreTitle}>Veteran Owned, Dog Lover, Dad</p>
                    <div className={styles.owner}>
                        <div className={styles.ownerPhoto}>
                            <Image alt='Owner Photo' src={kirkSurberHeadshot}></Image>
                        </div>
                        <div className={styles.ownerDescription}>
                            <p>I have built this app to help me with my own photography business.  I got tired of using applications to run my business.  CRM's or Client Management tools were a pain and often so generalized I needed something for photographers.  So Photo Studio App was born. </p>
                            
                            
                        </div>
                    </div>
                </div>
                    
            </div>
        </div>
    )
}

