const Polyline = props => {
    const points = props.points.map(point => point.x + ' ' + point.y).join(' ')

    return (
        <>
            <polyline points={points} stroke="black" strokeWidth={props.width}/>
        </>
        )
}

export default Polyline