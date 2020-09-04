/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import React,{useState} from 'react';
import {
View,
Text,
Button
} from 'react-native'

function UseStateHook(){
    const [count, setCount]= useState(1)
    // eslint-disable-next-line prettier/prettier
    return(
        <View>
            <Button title="-State" onPress={()=> setCount(count-1)}></Button>
            <Text style={{fontSize: 20}}>{count}</Text>
            <Button title="+state" onPress={()=> setCount(count+1)}></Button>
        </View>
    )
}

export default UseStateHook;