import { createStore } from "redux";
import CalulatorReducer from "./CalculatorReducer";

//pass the reducer into the createStore
const Store = createStore(CalulatorReducer);

export default Store