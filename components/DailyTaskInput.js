import React, { useState } from 'react'
import { View, Button, StyleSheet, TextInput, Modal } from 'react-native'
import Colors from '../constants/Colors'

const DailyTaskInput = props => {
  const [enteredDailyTask, setEnteredDailyTask] = useState('')

  function dailyTaskInputHandler(enteredText) {
    setEnteredDailyTask(enteredText)
  }

  const addDailyTaskHandler = () => {
    props.onAddDailyTask(enteredDailyTask)
    setEnteredDailyTask('')
  }

  const cancelDailyTaskAddingHandler = () => {
    props.onCancel()
    setEnteredDailyTask('')
  }

  return (
    <Modal animationType='slide' visible={props.visible}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder='Set Daily Task'
          style={styles.textInput}
          onChangeText={dailyTaskInputHandler}
          value={enteredDailyTask}/>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="CANCEL" color={Colors.cancel} onPress={cancelDailyTaskAddingHandler}/>
          </View>
          <View style={styles.button}>
            <Button title="ADD" color={Colors.accept} onPress={addDailyTaskHandler}/>
          </View>
        </View>
      </View>
    </Modal>
  )
}

export default DailyTaskInput
