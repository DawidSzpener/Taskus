import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const DailyTask = () => {
  
  return (
    <View id={props.title} style={styles.listElement}>
      <Text style={styles.text}>{props.title}</Text> 
    </View>
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
