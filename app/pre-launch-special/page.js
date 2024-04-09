
import styles from './preLaunchSpecial.module.css'
import logo from '../../assets/images/images/logoBlack-250.png'
import { FaCheck } from "react-icons/fa6";
import Link from 'next/link'
import Image from 'next/image'


export default function PreLaunchSpecialPage() {
    



    return(
        <div className={styles.display}>
            <div className={styles.offer}>
            <Image src={logo} width={250}/>
                <h1>Interested in a deal?</h1>
                <div className={styles.offerSub}>
                    <h4>Pre-Purchase a Year Subscription Now and Save!</h4>
                    <h3>1 Year subscription for <strong>$99</strong> (regularly $228)</h3>
                    <div className={styles.buttonArea}>
                        <Link href={'/share'}>
                            <button>No Thank You</button>
                        </Link>
                        <Link href={'https://buy.stripe.com/14k9Bg8BN6hz8cUbIK'}>
                            <button>Hell Yeah!</button>
                        </Link>
                    </div>
                </div>
                    
            </div>
            <div className={styles.features}>
                <ul>
                    <li><FaCheck color='green' size={15} style={{paddingRight: '10px'}}/>Session Management</li>
                    <li><FaCheck color='green' size={15} style={{paddingRight: '10px'}}/>Client Management</li>
                    <li><FaCheck color='green' size={15} style={{paddingRight: '10px'}}/>SMS Reminders to Clients</li>
                    <li><FaCheck color='green' size={15} style={{paddingRight: '10px'}}/>Custom Workflows per Session</li>
                    <li><FaCheck color='green' size={15} style={{paddingRight: '10px'}}/>Phone App (Offline and Online)</li>
                    <li><FaCheck color='green' size={15} style={{paddingRight: '10px'}}/>Google Calendar Integration</li>
                    <li><FaCheck color='green' size={15} style={{paddingRight: '10px'}}/>Model Release Forms for Signature</li>
                    <li><FaCheck color='green' size={15} style={{paddingRight: '10px'}}/>Little Johnny's B-Day notifications</li>
                    
                </ul>
            </div>
            <div className={styles.features}>
                <h2>Coming Fall 24'</h2>
                <ul>
                    <li><FaCheck color='green' size={15} style={{paddingRight: '10px'}}/>Invoicing</li>
                    <li><FaCheck color='green' size={15} style={{paddingRight: '10px'}}/>Online Galleries and Sales Tools</li>
                    <li><FaCheck color='green' size={15} style={{paddingRight: '10px'}}/>Cloud Backup</li>
                    <li><FaCheck color='green' size={15} style={{paddingRight: '10px'}}/>Online Scheduling</li>
                    <li><FaCheck color='green' size={15} style={{paddingRight: '10px'}}/>Personalized Business Numbers</li>
                    <li><FaCheck color='green' size={15} style={{paddingRight: '10px'}}/>VM Drops</li>
                    <li><FaCheck color='green' size={15} style={{paddingRight: '10px'}}/>Client Scoring</li>
                    <li><FaCheck color='green' size={15} style={{paddingRight: '10px'}}/>Milestone Alerts</li>
                    <li><FaCheck color='green' size={15} style={{paddingRight: '10px'}}/>Contracts</li>
                    <li><FaCheck color='green' size={15} style={{paddingRight: '10px'}}/>Pro Version</li>
                    <li><FaCheck color='green' size={15} style={{paddingRight: '10px'}}/>Client Scoring</li>
                    <li></li>
                </ul>
            </div>

        </div>
    )
}