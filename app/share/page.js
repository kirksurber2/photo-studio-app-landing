

import styles from './share.module.css'
import logo from '../../assets/images/images/logoBlack-250.png'
import Image from 'next/image'
import Link from 'next/link'

//ICONS *****************************
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";



export default function SharePage() {


    return(
        <div className={styles.main}>
                <Image  src={logo}/>

            <div className={styles.display}>
                <h1>Thank you!</h1>
                <div className={styles.photogs}>
                    <p>There are</p>
                    <h1>2000</h1>
                    <h2 style={{margin: '10px'}}>Photographers</h2>
                    <p>in line...</p>
                </div>
                <div className={styles.share}>
                    <h2>Share and Get</h2>
                    <h2>BUMPED UP!</h2>
                </div>
                <div className='description'>
                    <h3> Like, Follow and Share Photo Studio App on IG & Tik Tok(@photo_studio_app). </h3>
                    <p> Each Like, Follow and Share will move you up on the launch date! We'll be testing and releasing our app out to our customers to make sure we have a solid start!</p>

                </div>
                    <Link href='/refer-a-friend'>Want a Free Month?</Link>
                <div className='shareButtons'></div>
            </div>
        </div>
    )
}