import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Task = props => {
  return (
    <View key={props.title} style={styles.listElement}>
      <Text>{props.title}</Text> 
    </View>
  )}

const styles = StyleSheet.create({
  listElement: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: 'grey',
    borderColor: 'black',
    borderWidth: 1
  }
})

export default Task
