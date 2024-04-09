import Link from "next/link";
import styles from './thankYou.module.css'

export default function ThankYouPage() {

    return(
        <div className="container">
            <h1>Thank YOU!</h1>
            <h4>We will be in touch shortly</h4>
            <div className="pageBoxes">
                <Link href={'/blog'}>
                    <div className={styles.box}>Blog</div>
                </Link>
                <Link href={'/features'}>
                    <div className={styles.box}>Features
                    
                    </div>
                </Link>
                <Link href={'/'}>
                    <div className={styles.box}>Home</div>
                </Link>
            </div>
        </div>
    )
}