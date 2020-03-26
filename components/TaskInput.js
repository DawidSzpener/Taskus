import React, { useState } from 'react'
import { View, Button, StyleSheet, TextInput, Modal } from 'react-native'
import Colors from '../constants/Colors'
import axios from 'axios'


const TaskInput = props => {
  const [enteredTask, setEnteredTask] = useState('')

  function taskInputHandler(enteredText) {
    setEnteredTask(enteredText)
  }

  const addTaskHandler = (e) => {
    e.preventDefault()
    props.onAddTask(enteredTask)

    const task = {
      text: enteredTask
    }

    axios.post("http://localhost:5000/tasks/add", task)
      .then(res => console.log(res.data))
      .catch(err => console.log(err))

    setEnteredTask('')
  }

  const addDailyTaskHandler = (e) => {
    e.preventDefault()
    props.onAddDailyTask(enteredTask)

    const daily = {
      text: enteredTask
    }

    axios.post("http://localhost:5000/dailys/add", daily)
    .then(res => console.log(res.data))
    .catch(err => console.log(err))

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
          ref={props.focus}
          placeholder='Set Task'
          style={styles.textInput}
          onChangeText={taskInputHandler}
          value={enteredTask}/>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="CANCEL" color={Colors.cancel} onPress={cancelTaskAddingHandler}/>
          </View>
          <View style={styles.button}>
            <Button title="ADD TASK" color={Colors.accept} onPress={addTaskHandler}/>
          </View>
          <View style={styles.button}>
            <Button title="ADD DAILY" color={Colors.accept} onPress={addDailyTaskHandler}/>
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
