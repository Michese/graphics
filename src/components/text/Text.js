
const Text = props => {
    return (
        <>
            <text  x={props.x} y={props.y}>
                {props.children}
            </text>
        </>
    )
}

export default Text