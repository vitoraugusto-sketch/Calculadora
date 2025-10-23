import React, {useState} from 'react'
import {View, StyleSheet} from 'react-native'
import Display from './components/Display'
import Botao from './components/Botao'

export default function App(){

    const [value, setValue] = useState('')

    const handlePress = (label) =>{
        if(label === 'C'){
            setValue('')
        } else if(label === '='){
            try{
                setValue(eval(value).toString())
            } catch {
                setValue('Erro')
            }
        } else{
            setValue(value + label)
        }
    }
    
    const buttons = [
        ['7', '8', '9', '/'],
        ['4', '5', '6', '*'],
        ['1', '2', '3', '-'],
        ['0', '.', '=', '+'],
        ['C']
    ]
    
    return(
        <View style={styles.container}>
      <Display value={value || '0'} />
      {buttons.map((row, i) => (
        <View key={i} style={styles.row}>
          {row.map((label) => (
            <Botao key={label} label={label} onClick={handlePress} />
          ))}
        </View>
      ))}
    </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : 'center',
        backgroundColor : '#000',
        padding : 10,
    },
    row : {
        flexDirection : 'row',
        justifyContent : 'space-around',
    },
})