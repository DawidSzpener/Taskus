import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const Task = props => {
  const highlightOnPress = () => {
    console.log('should colour background green')
  }
  return (
    <TouchableOpacity onPress={highlightOnPress}>
      <View key={props.title} style={styles.listElement}>
        <Text>{props.title}</Text> 
      </View>
    </TouchableOpacity>
  )}

const styles = StyleSheet.create({
  listElement: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: 'grey',
    borderColor: 'black',
    borderWidth: 1
  },
  completedListElement: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: 'green',
    borderColor: 'black',
    borderWidth: 1
  }

})

export default Task
