import React, { useState } from 'react'
import { View, Button, StyleSheet, TextInput, Modal } from 'react-native'


const TaskInput = props => {
  const [enteredTask, setEnteredTask] = useState('')

  function taskInputHandler(enteredText) {
    setEnteredTask(enteredText)
  }

  const addTaskHandler = () => {
    props.onAddTask(enteredTask)
    setEnteredTask('')
  }

  const cancelTaskAddingHandler = () => {
    props.onCancel()
    setEnteredTask('')
  }

  return (
    <Modal animationType='slide' visible={props.visible}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder='Set Task'
          style={styles.textInput}
          onChangeText={taskInputHandler}
          value={enteredTask}/>
        <View style={styles.buttonContainer}>
          <Button title="CANCEL" color='red' onPress={cancelTaskAddingHandler}/>
          <View style={styles.button}>
            <Button title="ADD" onPress={addTaskHandler}/>
          </View>
        </View>
      </View>
    </Modal>
)}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInput: {
    borderWidth: 1,
    padding: 5,
    margin: 5
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 5,
    margin: 5
  },
  button: {
    margin: 10
  }
})

export default TaskInput
