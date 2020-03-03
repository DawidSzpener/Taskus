import React from 'react'
import {  StyleSheet, Text, View } from 'react-native'
import Colors from '../constants/Colors'

const Header = props => {
  return (
  <View style={styles.headerContainer}>
    <Text style={styles.text}>{props.title}</Text>
  </View>
  )
}

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    height: 80,
    paddingTop: 36,
    alignItems: 'center',
    justifyContent: 'center',
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