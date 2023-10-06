import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import Btn from './Btn';
import BtnLong from './BtnLong';
import { useSelector, useDispatch } from 'react-redux';
import { del } from './redux/CalculatorAction';

export default function Calulator() {
    const resWidth = Dimensions.get("window").width;

    const result = useSelector(state => state.result)

    console.log(result)

    const dispatch = useDispatch();

    const handleSwipe = () => {
        dispatch(del())
    }



    return (
        <View style={styles.container} >
            <View onTouchEnd={handleSwipe} style={{ height: 100 }} >
                <Text style={{ textAlign: 'right', color: "white", fontSize: 48 }} >
                    {result}
                </Text>
            </View>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }} >

                <Btn bgColor='#d4d4d2' textCol='#1c1c1c' digit="AC" />
                <Btn bgColor='#d4d4d2' textCol='#1c1c1c' digit="+/-" />
                <Btn bgColor='#d4d4d2' textCol='#1c1c1c' digit="%" />
                <Btn bgColor='#ff9500' textCol='white' digit="÷" />


                <Btn bgColor='#505050' textCol='white' digit="7" />
                <Btn bgColor='#505050' textCol='white' digit="8" />
                <Btn bgColor='#505050' textCol='white' digit="9" />
                <Btn bgColor='#ff9500' textCol='white' digit="×" />

                <Btn bgColor='#505050' textCol='white' digit="4" />
                <Btn bgColor='#505050' textCol='white' digit="5" />
                <Btn bgColor='#505050' textCol='white' digit="6" />
                <Btn bgColor='#ff9500' textCol='white' digit="-" />

                <Btn bgColor='#505050' textCol='white' digit="1" />
                <Btn bgColor='#505050' textCol='white' digit="2" />
                <Btn bgColor='#505050' textCol='white' digit="3" />
                <Btn bgColor='#ff9500' textCol='white' digit="+" />


                <BtnLong bgColor='#505050' textCol='white' digit="0" />
                <Btn bgColor='#505050' textCol='white' digit="." />
                <Btn bgColor='#ff9500' textCol='white' digit="=" />

            </View>

        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-end',
        backgroundColor: '#1c1c1c',
        padding: 20,
        height: '100%'
    }
})