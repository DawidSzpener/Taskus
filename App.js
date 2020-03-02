import React, { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import Task from './components/Task';
import TaskInput from './components/TaskInput'

export default function App() {
  const [taskList, setTaskList] = useState([])

  const addTaskHandler = taskTitle => {
    setTaskList(taskList => [
      ...taskList,
       { id: Math.random().toString(), value: taskTitle}])
  }

  const deleteTaskHandler = goalId => {
    setTaskList(taskList => {
     return taskList.filter((goal) => goal.id !== goalId)
    })
  }

  return (
    <View style={styles.container}>
      <TaskInput onAddTask={addTaskHandler}/>
      <FlatList 
        keyExtractor={(item, index) => item.id}
        data={taskList}
        renderItem={itemData => (
        <Task id={itemData.item.id} title={itemData.item.value} onDelete={deleteTaskHandler}/>
      )}/>
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
