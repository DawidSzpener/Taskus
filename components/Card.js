import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import Colors from '../constants/Colors'

const Card = props => {
  return (
  <View style={styles.card}>{props.children}</View>
  )
}

const styles = StyleSheet.create({
  card: {
    width: 300,
    maxWidth: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'black',
    shadowOffset: { width:0 , height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 8,
    backgroundColor: Colors.primary,
    margin: 10,
    padding: 10,
    borderRadius: 10
  }
})

export default Card