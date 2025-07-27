
export default function BlogIntroSection ({title, intro, point1, point2, point3, point4, point5}){

    return(
        <div className="intro">
            <h3>{title}</h3>
            <p>{intro}</p>
            <br/>
            <br/>
            <p>{point1}</p>
            <br/>
            <br/>
            <p>{point2}</p>
            <br/>
            <br/>
            <p>{point3}</p>
            <br/>
            <br/>
            <p>{point4}</p>
            <br/>
            <br/>
            <p>{point5}</p>
            <br/>
            <br/>
        </div>
    )
}