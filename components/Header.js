import React from 'react'
import {  StyleSheet, Text, View, Button } from 'react-native'
import Colors from '../constants/Colors'

const Header = props => {

  const onAddingTask = () => {
    props.onAdd()
  }

  const onAddingDailyTask = () => {
    props.onDailyAdd()
  }

  return (
  <View style={styles.headerContainer}>
    <Button title="New Daily" color={Colors.accept} onPress={onAddingDailyTask}/>
    <Text style={styles.text}>{props.title}</Text>
    <Button title="New Task" color={Colors.accept} onPress={onAddingTask}/>
  </View>
  )
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    width: '100%',
    height: 110,
    paddingTop: 36,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.primary
  },
  text: {
    color: Colors.accent,
    fontSize: 30,
    fontWeight: 'bold',
    letterSpacing: 4,
    textTransform: 'uppercase',
    fontFamily: ''
  }
})

export default Header
