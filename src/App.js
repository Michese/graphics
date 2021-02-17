import React from "react"
import styles from "./App.module.scss"
import Text from "./components/text/Text";
import Polyline from "./components/polyline/Polyline";
import Line from "./components/line/Line";
import Figure from "./components/figure/Figure"
import config from "./components/config.json"

function App() {

    const height = config.height,
        width = config.width,
        y_axis = config.y_axis,
        x_axis = config.x_axis;
    const figures = [70, 100, 140, 50]
    const dottedLines = []
    for(let count = 370; count > 0; count -= 100) {
        dottedLines.push(count)
    }

    return (
        <div className={styles.app}>
            <div className={styles.hidden}>
                <div className={styles.menu}></div>
            </div>
            <svg className={styles.svg} viewBox={`0 0 ${width} ${height}`}>

                {
                    dottedLines.map((line, index) => (
                        <Line key={`line${index}`} points={[{x: 10, y: line}, {x: width, y: line}]} isDotted={true} stroke={'#999'} width={0.5}/>
                    ))
                }


                {
                    figures.map((figure, index) => (
                        <Figure key={index} x={20 + 80 * index} height={figure} index={index}/>
                    ))
                }

                <Polyline points={x_axis} width={2}/>
                <Polyline points={y_axis} width={2}/>

                <Text x={40} y={375}>100</Text>
                <Text x={20} y={485}>Фигура</Text>
            </svg>
        </div>
    );
}

export default App;
