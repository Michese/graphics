const Line = props => {
    return (
        <>
            <line x1={props.points[0].x} y1={props.points[0].y} x2={props.points[1].x} y2={props.points[1].y}
                  strokeDasharray={props.isDotted? "10 5": null} strokeWidth={props.width} stroke={props.stroke}/>
        </>
    )
}

export default Line