import { TouchableOpacity, Text } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux/es/exports'
import { num } from './redux/CalculatorAction'
export default function BtnLong({bgColor,textCol,digit}) {
  
  const dispatch = useDispatch()
  
  const handleNum = (btn) => {
    dispatch(num(btn))
  }
  return (
    <TouchableOpacity onPress={()=>handleNum(digit)} style={{padding:6,elevation:2,}} >
            <Text style = {{ backgroundColor : bgColor,paddingLeft:20,fontSize:36,height:75 , width: 160,alignItems:'flex-start',textAlignVertical:'center',  borderRadius :100, color : textCol }} > {digit} </Text>
        </TouchableOpacity>
  )
}