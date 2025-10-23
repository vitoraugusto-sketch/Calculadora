import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

export default function Display({value}){

    return(

        <View style = {styles.display}>
            <Text style = {styles.displayText}> {value} </Text>
        </View>
    )
}

const styles = StyleSheet.create({

    display : {
        backgroundColor : '#222',
        padding : 28,
        borderRadius : 6,
        margin : 10,
        alignItems : 'flex-end',
    },
    displayText : {
        color : '#0f0',
        fontSize : 34,
    },
})