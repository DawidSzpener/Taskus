import React, { useState } from 'react'
import { View, Button, StyleSheet, TextInput } from 'react-native'


const TaskInput = props => {
  const [enteredTask, setEnteredTask] = useState('')

  function taskInputHandler(enteredText) {
    setEnteredTask(enteredText)
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder='Set Task'
        style={styles.textInput}
        onChangeText={taskInputHandler}
        value={enteredTask}/>
      <Button title="ADD" onPress={props.onAddTask.bind(this, enteredTask)}/>
    </View>
)}

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row'
  },
  textInput: {
    borderWidth: 1,
    padding: 10,
    margin: 5
  }
})

export default TaskInput
