import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const Task = props => {
  return (
    <TouchableOpacity onPress={props.onDelete.bind(this, props.id)}>
      <View id={props.title} style={styles.listElement}>
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
  }
})

export default Task
