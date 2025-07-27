import styles from './HeroSection.module.css'



export default function HeroSection1(title, description, imageUrl,  ) {

    return(
        <div className='heroSection' style={{backgroundImage: `url(${imageUrl})`}}>
            <div style={{textAlign: 'center'}}>
                <h1>{title}</h1>
                <p>{description}</p>
            </div>

        </div>
    )
}