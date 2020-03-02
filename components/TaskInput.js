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
          <View style={styles.button}>
            <Button title="CANCEL" color='red' onPress={cancelTaskAddingHandler}/>
          </View>
          <View style={styles.button}>
            <Button title="ADD" color='green' onPress={addTaskHandler}/>
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
    height: 40,
    width: '80%',
    flexDirection: 'row',
    borderWidth: 1,
    padding: 5,
    margin: 5
  },
  buttonContainer: {
    height: 100,
    width: '80%',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 5,
    margin: 5
  },
  button: {
    width: '80%',
    flex: 1,
    margin: 5
  }
})

export default TaskInput
