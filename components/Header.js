import React from 'react'
import {  StyleSheet, Text, View, Button } from 'react-native'
import Colors from '../constants/Colors'

const Header = props => {

  const onAddingTask = () => {
    props.onAdd()
  }

  return (
  <View  style={styles.headerContainer}>
    <Text style={styles.text}>{props.title}</Text>
    <View style={styles.button}>
      <Button title="New Task" color={Colors.accept} onPress={onAddingTask}/>
    </View>
  </View>
  )
}

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    height: 140,
    paddingTop: 46,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.primary
  },
    button: {
      marginBottom: 10
    },
  text: {
    color: Colors.accent,
    fontSize: 50,
    fontWeight: 'bold',
    letterSpacing: 4,
    textTransform: 'uppercase',
    fontFamily: ''
  }
})

export default Header
