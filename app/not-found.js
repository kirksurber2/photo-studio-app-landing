import Link from 'next/link';
import styles from './notFoundPage.module.css'
import { IoCameraReverseSharp } from "react-icons/io5";

export default function NotFoundPage() {

    return (
        <div className={styles.container}>
            <div className={styles.infoBox}>
                <IoCameraReverseSharp size={50}/>
                <h1>404 Page not found</h1>
                <h4>Your camera can't focus on the client here</h4>
                <p>Check that you typed the address correctly, go back to your previous page or go...</p>
                <Link href={'/'}>
                    <button>Home</button>
                </Link>

            </div>
        </div>
    )
}