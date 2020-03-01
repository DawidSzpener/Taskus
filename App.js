import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView } from 'react-native';
import Task from './components/Task';

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
      <ScrollView>
        {taskList.map(task => (
          <Task title={task}/>
        ))}
      </ScrollView>
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
});
