import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function Botao({label, onClick}){
    return(
        <TouchableOpacity style = {styles.botao} onPress={() => onClick(label)}>
            <Text style = {styles.text}> {label} </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    botao : {
        backgroundColor : '#555',
        padding : 20,
        margin : 5,
        borderRadius : 6,
        flex : 1,
        alignItems : 'center',
    },
    text : {
        color : '#fff',
        fontSize : 26,
    }
})