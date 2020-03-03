import React from 'react'
import {  StyleSheet, Text, View } from 'react-native'

const Header = props => {
  return (
  <View style={styles.headerContainer}>
    <Text>{props.title}</Text>
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
    backgroundColor: 'yellow'
  }
})

export default Header