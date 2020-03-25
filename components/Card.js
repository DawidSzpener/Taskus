import React from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import Colors from '../constants/Colors'

const Card = props => {

  const styles = StyleSheet.create({
    card: {
      backgroundColor: props.color,
      width: 300,
      maxWidth: '80%',
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: 'black',
      shadowOffset: { width:0 , height: 2 },
      shadowRadius: 6,
      shadowOpacity: 0.26,
      elevation: 8,
      margin: 10,
      padding: 10,  
      borderRadius: 10
    }
  })

  return (
  <TouchableOpacity onPress={props.press}>
    <View style={styles.card}>{props.children}</View>
  </TouchableOpacity>
  )
}

export default Card