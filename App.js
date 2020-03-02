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

  return (
    <View style={styles.container}>
      <TaskInput onAddTask={addTaskHandler}/>
      <FlatList 
        keyExtractor={(item, index) => item.id}
        data={taskList}
        renderItem={itemData => (
        <Task title={itemData.item.value}/>
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
