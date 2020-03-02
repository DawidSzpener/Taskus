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
        <Button title="CANCEL" color='red' onPress={cancelTaskAddingHandler}/>
        <Button title="ADD" onPress={addTaskHandler}/>
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
    padding: 10,
    margin: 5
  }
})

export default TaskInput
