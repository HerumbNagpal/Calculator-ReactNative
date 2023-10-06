import { TouchableOpacity, Text } from 'react-native'
import { useDispatch } from 'react-redux';
import { add, allClear, calculate, divide, multiply, num, percent, signChange, subtract } from './redux/CalculatorAction';

export default function Btn({ bgColor, digit, textCol }) {
    const dispatch = useDispatch();

    // const handleBtn = (btn) =>{
    //     console.warn("pressed", btn);
    // }
    const handleBtn = (btn) => {
        if (btn === "AC") {
            dispatch(allClear())
        } else if (btn === '+/-') {
            console.log(btn);
            dispatch(signChange())
        } else if (btn === "%") {
            dispatch(percent())
        } else if (btn === "+") {
            dispatch(add())
        } else if (btn === "-") {
            dispatch(subtract())
        } else if (btn === "÷") {
            dispatch(divide())
        }  else if (btn === "×") {
            dispatch(multiply())
        } else if(btn === "="){
            dispatch(calculate())
        }else{
            dispatch(num(btn))
        }
    }

    return (
        <TouchableOpacity onPress={() => handleBtn(digit)} style={{ padding: 6, elevation: 2 }} >
            <Text style={{ backgroundColor: bgColor, fontSize: 36, textAlign: 'center', textAlignVertical: 'center', height: 75, width: 75, borderRadius: 100, color: textCol }} > {digit} </Text>
        </TouchableOpacity>
    )
}