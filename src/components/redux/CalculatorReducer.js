import { ADD, ALLCLEAR, CALCULATE, DEL, DIVIDE, MULTIPLY, NUM, PERCENT, SIGNCHANGE, SUBTRACT } from "./ActionTpes";

const initialState = {
    result: "0"
}

const CalulatorReducer = (state = initialState, action) => {
    switch (action.type) {
        case ALLCLEAR: {
            console.log("CLEARED");
            return {
                ...initialState,
                result: "0"
            }
        }
        case DEL: {
            if (state.result.length < 1) {
                return{
                    result : ""
                }
            } else {

                const newExp = state.result.slice(0, state.result.length - 1);
                return {
                    ...initialState,
                    result: newExp
                }
            }
        }
        case SIGNCHANGE: return {
            ...initialState,
            result: String(Number(state.result) * -1)
        }

        case PERCENT: return {
            ...initialState,
            result: String(Number(state.result) * 0.01)
        }

        case NUM: {
            const lastChar = state.result.slice(-1);
            if ((lastChar == "0" && state.result.length == 1) || state.result === "Error") {
                return {
                    result: action.payload
                }
            }
            return {

                ...initialState,
                result: state.result + action.payload
            }
        }

        case ADD: {
            const lastChar = state.result.slice(-1);
            if (lastChar == "+" || lastChar == "-" || lastChar == "/" || lastChar == "*") {
                return {
                    result: state.result.slice(0, -1) + "+"
                }
            }
            return {
                ...initialState,
                result: state.result + "+"
            }
        }

        case SUBTRACT: {
            const lastChar = state.result.slice(-1);
            if (lastChar == "+" || lastChar == "-" || lastChar == "/" || lastChar == "*") {
                return {
                    result: state.result.slice(0, -1) + "-"
                }
            }
            return {

                ...initialState,
                result: state.result + "-"
            }
        }

        case DIVIDE: {
            const lastChar = state.result.slice(-1);
            if (lastChar == "+" || lastChar == "-" || lastChar == "/" || lastChar == "*") {
                return {
                    result: state.result.slice(0, -1) + "/"
                }
            }
            return {
                ...initialState,
                result: state.result + "/"
            }
        }

        case MULTIPLY: {
            const lastChar = state.result.slice(-1);
            if (lastChar == "+" || lastChar == "-" || lastChar == "/" || lastChar == "*") {
                return {
                    result: state.result.slice(0, -1) + "*"
                }
            }
            return {
                ...initialState,
                result: state.result + "*"
            }
        }

        case CALCULATE: {
            const lastChar = state.result.slice(-1);
            if (state.result.length == 0) {
                return "0"
            } else if (lastChar == "+" || lastChar == "-" || lastChar == "/" || lastChar == "*") {
                return { result: "Error" }
            } else {
                const x = eval(state.result)
                if (Number.isInteger(x)) {
                    return {
                        ...initialState,
                        result: String(x)
                    }
                }
                else {
                    let ans = parseFloat(x).toFixed(3)
                    return {
                        ...initialState,
                        result: String(ans)
                    }
                }

            }
        }

        default: return state
    }
}


export default CalulatorReducer;