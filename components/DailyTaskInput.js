import React, { useState } from 'react'
import { View, Button, StyleSheet, TextInput, Modal } from 'react-native'
import Colors from '../constants/Colors'

const DailyTaskInput = props => {
  return (
    <Modal animationType='slide'>
      <View>
        <TextInput
        placeholder="Set Task"/>
      </View>
    </Modal>
  )
}

export default DailyTaskInput
