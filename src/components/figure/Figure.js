import figure from "./figure.json"

const Figure = props => {
    const colors = figure.colors
    return (
        <>
            <defs>
                <linearGradient id={`Gradient${props.index}`}  x1="0" x2="1" y1="0" y2="1">
                    <stop offset="0%" stopColor={colors[props.index % colors.length].gradient1}/>
                    <stop offset="50%" stopColor={colors[props.index % colors.length].gradient2}/>
                    <stop offset="100%" stopColor={colors[props.index % colors.length].gradient3}/>
                </linearGradient>

                <g id={`figure${props.index}`} fill={`url(#Gradient${props.index})`}>
                    <rect x='0' y='20' width="50" height={props.height} stroke="black" strokeWidth="1"/>
                    <polyline
                        points={`0 20 10 0 60 0 50 20 0 20`}
                        stroke="black" strokeWidth="1"/>
                    <polyline
                        points={`50 20 60 0 60 ${props.height} 50 ${props.height + 20} 50 20`}
                        stroke="black" strokeWidth="1"/>
                </g>
            </defs>
            <use xlinkHref={`#figure${props.index}`} x={props.x} y={450 - props.height}/>
        </>
    )
}

export default Figure