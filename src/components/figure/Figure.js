import figure from "./figure.json"
import Text from "../text/Text";
import React from "react";

const Figure = props => {
    const colors = figure.colors
    const heightTop = 20;
    return (
        <>
            <defs>
                <linearGradient id={`Gradient${props.index}`}  x1="0" x2="1" y1="0" y2="1">
                    <stop offset="0%" stopColor={colors[props.index % colors.length].gradient1}/>
                    {/*<stop offset="50%" stopColor={colors[props.index % colors.length].gradient2}/>*/}
                    <stop offset="100%" stopColor={colors[props.index % colors.length].gradient2}/>
                </linearGradient>

                <linearGradient id={`Gradient2${props.index}`}  x1="0" x2="1" y1="0" y2="1">
                    <stop offset="0%" stopColor={colors[props.index % colors.length].gradient1}/>
                    <stop offset="50%" stopColor={colors[props.index % colors.length].gradient2}/>
                    <stop offset="100%" stopColor={colors[props.index % colors.length].gradient2}/>
                </linearGradient>

                <g id={`figure${props.index}`} >
                    <rect x='0' y={heightTop} width="50" height={+props.height} stroke="black" strokeWidth="1" fill={`url(#Gradient2${props.index})`}/>
                    <polyline
                        fill={`url(#Gradient${props.index})`}
                        points={`0 ${heightTop} 10 0 60 0 50 ${heightTop} 0 ${heightTop}`}
                        stroke="black" strokeWidth="1"/>
                    <polyline
                        fill={colors[props.index % colors.length].gradient2}
                        points={`50 ${heightTop} 60 0 60 ${+props.height} 50 ${+props.height + 20} 50 ${heightTop}`}
                        stroke="black" strokeWidth="1"/>
                </g>
            </defs>
            <use xlinkHref={`#figure${props.index}`} x={+props.x} y={+props.heightSVG - heightTop - 15 - +props.height}/>
            <Text x={+props.x + 2} y={+props.heightSVG - 17}>{props.height}</Text>
            <Text x={+props.x} y={+props.heightSVG - 1}>{props.title}</Text>
        </>
    )
}

export default Figure