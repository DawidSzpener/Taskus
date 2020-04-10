import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Colors from '../constants/Colors'

const Task = props => {
  return (
    <View id={props.title} style={styles.listElement}>
      <Text style={styles.text}>{props.title}</Text> 
    </View>
  )}

const styles = StyleSheet.create({
  listElement: {
    alignContent: 'center',
    padding: 8
  },
  text: {
    fontSize: 20,
    color: Colors.accent
  }
})

export default Task
