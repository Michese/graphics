import styles from "./Line.module.scss";

const Line = props => {
    return (
        <>
            <line x1={props.points[0].x} y1={props.points[0].y} x2={props.points[1].x} y2={props.points[1].y}
                  className={props.isDotted? [styles.dotted].join(' '): null} strokeWidth={props.width} stroke={props.stroke}/>
        </>
    )
}

export default Line