import styles from './referFriend.module.css'
import Image from 'next/image'
import logo from '../../assets/images/images/logoBlack-250.png'
import ReferralForm from '../../components/Forms/ReferralForm'
export default function ReferPage() {

    return (
        <div>
            <Image src={logo} width={350} style={{marginTop: '20px'}}/>
            <div className={styles.hero}>
                
                    <h1>Refer a Friend Program</h1>
                    <h2>Get a Month FREE!</h2>
                <ReferralForm />                
            </div>
            <div className={styles.belowTheFold}>
                <h4>Refer a friend to sign-up on our waitlist and you can get one MONTH FREE!</h4>
                <h4>Refer a friend who signs up at any time with a monthly or annual subscription and get an additional month FREE for each subscribing referral!</h4>
            </div>
        </div>
    )
}