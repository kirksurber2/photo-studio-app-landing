import styles from '../training.module.css'
import Link from 'next/link'


export default function LinkCard(url, title, description){
    return(
        <Link href="/training/photo-studio-app" className="training-card">
            <div className="card-image" style={{ backgroundImage: `${url}` }} />
            <div className="card-info">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </Link>
    )
}