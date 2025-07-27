import styles from '../training.module.css'
import Link from 'next/link'


export default function LinkCard({url, imageUrl, title, description, mainPoints}){
    return(
        <Link href={`${url}`} className={styles.training-card}>
            <div className="card-image" style={{ backgroundImage: `url(${imageUrl})` }} />
            <div>
                <h3>{title}</h3>
                <ul>
                    {mainPoints.map((point) => (
                        <li>{point}</li>
                    ))}
                </ul>
            </div>
        </Link>
    )
}