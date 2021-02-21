import React, {useEffect, useReducer} from "react"
import styles from "./App.module.scss"
import Text from "./components/text/Text";
import Polyline from "./components/polyline/Polyline";
import Line from "./components/line/Line";
import Figure from "./components/figure/Figure"
import Menu from "./components/menu/Menu";
import config from "./components/config.json"
import Reducer from "./Reducer";

function App() {

    const [state, dispatch] = useReducer(Reducer, {
        height: config.height,
        width: config.width,
        y_axis: config.y_axis,
        x_axis: config.x_axis,
        figures: []
    })

    useEffect(() => {
        const maxWidthFigure = state.figures.length * 80;

        const maxHeightFigure = state.figures.reduce((total, figure) => {
            return (total > +figure.height)? total: +figure.height
        }, 0)

        if (maxWidthFigure > (maxHeightFigure + 10) * 2) {
            dispatch({type: "changeWidth", width: maxWidthFigure + 200})
        } else if (maxHeightFigure + 50 < 120 && state.height > 120 ) {
            dispatch({type: "changeHeight", height: 120})
        } else if(maxHeightFigure + 50 > 120 && maxHeightFigure + 50 > state.height) {
            dispatch({type: "changeHeight", height: maxHeightFigure + 60})
        } else if (maxHeightFigure + 50 > 120 && maxHeightFigure + 70 < state.height) {
            dispatch({type: "changeHeight", height: maxHeightFigure + 60})
        }

    }, [state.figures])

    useEffect(() => {
        if(!(state.height >= state.width * 2 - 1 && state.height <= state.width * 2 + 1)) {
            dispatch({type: "changeWidth", width: +state.height * 2})
        }
    }, [state.height])

    useEffect(() => {

        if(!(state.height >= state.width * 2 - 1 && state.height <= state.width * 2 + 1)) {
            dispatch({type: "changeHeight", height: +state.width / 2})
        }

    }, [state.width])

    const onChange = event => dispatch({
        type: 'change',
        id: event.target.parentElement.id,
        inputType: event.target.name,
        inputValue: event.target.value
    })
    // const remove = event => dispatch({type: 'remove', id: event.target.id})
    const onRemove = event => dispatch({type: 'remove', id: event.target.parentElement.id})

    const onAdd = event => dispatch({
        type: 'add',
        title: event.target.parentElement.querySelector('input[name="title"]').value,
        height: event.target.parentElement.querySelector('input[name="height"]').value
    })


    const dottedLines = []
    const marginLeft = 10;
    const marginBottom = 15;
    for (let count = state.height - 100 - marginBottom; count > 20; count -= 100) {
        dottedLines.push(count)
    }

    return (
        <div className={styles.app}>
            <Menu figures={state.figures} onRemove={onRemove} onChange={onChange} onAdd={onAdd}/>
            <div id={"svg"}>
                <svg viewBox={`0 0 ${state.width} ${state.height}`} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">

                    {
                        dottedLines.map((line, index) => (
                            <>
                                <Text x={+state.width - 60} y={line - 5}>{(index + 1) * 100}</Text>
                                <Line points={[{x: marginLeft, y: line}, {x: state.width - marginLeft, y: line}]}
                                      isDotted={true} stroke={'#999'} width={0.5}/>
                            </>
                        ))
                    }

                    {
                        state.figures.map((figure, index) => (
                            <Figure key={index} x={20 + 80 * index} height={figure.height} title={figure.title}
                                    heightSVG={state.height} index={index}/>
                        ))
                    }

                    <Polyline points={state.x_axis} width={2}/>
                    <Polyline points={state.y_axis} width={2}/>

                </svg>
            </div>
        </div>
    );
}

export default App;
