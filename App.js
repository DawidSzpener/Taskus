import React, { useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import Task from './components/Task';
import TaskInput from './components/TaskInput'

export default function App() {
  const [taskList, setTaskList] = useState([])

  function addTaskHandler(TaskTitle) {
    setTaskList([...taskList, TaskTitle])
  }

  return (
    <View style={styles.container}>
      <TaskInput onAddTask={addTaskHandler}/>
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
});
