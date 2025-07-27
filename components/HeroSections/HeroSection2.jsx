import styles from './HeroSection.module.css'



export default function HeroSection1(title, description, imageUrl,  ) {

    return(
        <div className={styles.heroSection} style={{backgroundImage: `url(${imageUrl})`}}>
            <div className={styles.leftSide}>
                <div className={styles.box}>
                    <h1>{title}</h1>
                    <p>{description}</p>
                </div>
            </div>
            <div className={styles.rightSide}>

            </div>

        </div>
    )
}