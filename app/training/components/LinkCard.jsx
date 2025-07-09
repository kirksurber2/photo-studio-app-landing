import styles from '../training.module.css'
import Link from 'next/link'


export default function LinkCard({url, imageUrl, title, description, mainPoints}){
    return(
        <Link href={`${url}`} className={styles.training-card}>
            <div className="card-image" style={{ backgroundImage: `url(${imageUrl})` }} />
            <div className="card-info">
                <h3>{title}</h3>
                <div className={styles.mainPointsArea}>
                    <h6>Main Points</h6>
                    <ul>
                        {mainPoints.map((point) =>(
                                <li>{point}</li>
                        ))}
                    </ul>
                </div>
                <p>{description}</p>
            </div>
        </Link>
    )
}