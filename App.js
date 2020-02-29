import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [enteredTask, setEnteredTask] = useState('')
  const [taskList, setTaskList] = useState([])


  function taskInputHandler(enteredText) {
    setEnteredTask(enteredText)
  }

  function addTaskHandler() {
    setTaskList([...taskList, enteredTask])
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder='Set Task'
          style={styles.textInput}
          onChangeText={taskInputHandler}
          value={enteredTask}/>
        <Button title="ADD" onPress={addTaskHandler}/>
      </View>
      <View>
        {taskList.map((task) => <Text>{task}</Text> )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    borderWidth: 1,
    padding: 10,
    margin: 5
  },
  inputContainer: {
    alignItems: 'center',
    flexDirection: 'row'
  }
});
