const Reducer = (state, action) => {
    switch (action.type) {
        case "remove":
            return {...state, figures:removeAction([...state.figures], action.id)}
        case "change":
            return {...state, figures: changeAction([...state.figures], action.id, action.inputType, action.inputValue)}
        case "add":
            return {...state, figures: addAction([...state.figures], action.title, action.height)}
        case "changeHeight":
            return {...state, ...changeAxisAction(state.width, action.height, state.x_axis, state.y_axis)}
        case "changeWidth":
            return {...state, width: action.width, ...changeAxisAction(state.width, state.height,[...state.x_axis], [...state.y_axis])}
        default: return state
    }
}

const changeAction = (figures, id, type, value) => {
    figures[id][type] = value
    return figures
}

const removeAction = (figures, id) => {
    figures.splice(id, 1)
    return figures
}

const addAction = (figures, title, height) => {
    figures.push({title, height})
    return figures
}

const changeAxisAction = (width, height, x_axis, y_axis) => {

    x_axis = [
        {
            "x":10,
            "y":+height - 15
        },
        {
            "x":+width - 10,
            "y":+height - 15
        },
        {
            "x":+width - 20,
            "y":+height - 20
        },
        {
            "x":+width - 10,
            "y":+height - 15
        },
        {
            "x":+width - 20,
            "y":+height - 10
        },
        {
            "x":+width - 10,
            "y":+height - 15
        },
        {
            "x":10,
            "y":+height - 15
        }
    ]

    y_axis = [
        {
            "x":5,
            "y":20
        },
        {
            "x":10,
            "y":10
        },
        {
            "x":15,
            "y":20
        },
        {
            "x":10,
            "y":10
        },
        {
            "x":10,
            "y":+height - 15
        },
        {
            "x":10,
            "y":10
        },
        {
            "x":5,
            "y":20
        }
    ]

    return {x_axis, y_axis, height}
}

export default Reducer