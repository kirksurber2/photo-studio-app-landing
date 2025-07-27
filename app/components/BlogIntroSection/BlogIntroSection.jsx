export default function BlogIntroSection(props) {
    return (
      <div className="intro">
        <h3>{props.title}</h3>
        <p>{props.intro}</p>
        <p>{props.point1}</p>
        <p>{props.point2}</p>
        <p>{props.point3}</p>
        <p>{props.point4}</p>
        <p>{props.point5}</p>
      </div>
    );
  }
  