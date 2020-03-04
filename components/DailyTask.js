import React from 'react'
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native'

const DailyTask = () => {
  
  return (
    <TouchableOpacity onPress={props.onDelete.bind(this, props.id)}>
      <View id={props.title} style={styles.listElement}>
        <Text style={styles.text}>{props.title}</Text> 
      </View>
    </TouchableOpacity>
  )}

  const styles = StyleSheet.create({
    listElement: {
      padding: 8
    },
    text: {
      fontSize: 20,
      color: Colors.accent
    }
  })

export default DailyTask
