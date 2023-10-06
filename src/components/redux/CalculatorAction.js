const { ALLCLEAR, SIGNCHANGE, PERCENT, NUM, CALCULATE, ADD, SUBTRACT, MULTIPLY, DIVIDE, DEL } = require("./ActionTpes")

const allClear = () => { return { type: ALLCLEAR } }

const del = () => { return { type: DEL } }

const signChange = () => { return { type: SIGNCHANGE } }

const percent = () => { return { type: PERCENT } }

const num = (digit) => { return { type: NUM, payload: digit } }

const calculate = () => { return { type: CALCULATE } }

const add = () => { return { type: ADD } }

const subtract = () => { return { type: SUBTRACT } }

const multiply = () => { return { type: MULTIPLY } }

const divide = () => { return { type: DIVIDE } }


export { allClear, del, signChange, percent, num, calculate, add, subtract, multiply, divide }