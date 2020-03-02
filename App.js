import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import Task from './components/Task';
import TaskInput from './components/TaskInput'

export default function App() {
  const [taskList, setTaskList] = useState([])
  const [isAddMode, setIsAddMode] = useState(false)

  const addTaskHandler = taskTitle => {
    if(taskTitle.length === 0) {
      return
    }
    setTaskList(taskList => [
      ...taskList,
       { id: Math.random().toString(), value: taskTitle}])
    setIsAddMode(false)
  }

  const deleteTaskHandler = goalId => {
    setTaskList(taskList => {
     return taskList.filter((goal) => goal.id !== goalId)
    })
  }

  const cancelAddingTaskHandler = () => {
    setIsAddMode(false)
  }

  return (
    <View style={styles.container}>
      <Button title="Add new task" onPress={ () => setIsAddMode(true)}/>
      <TaskInput
        onCancel={cancelAddingTaskHandler}
        visible={isAddMode}
        onAddTask={addTaskHandler}/>
      <FlatList 
        keyExtractor={(item, index) => item.id}
        data={taskList}
        renderItem={itemData => (
        <Task
          id={itemData.item.id}
          title={itemData.item.value}
          onDelete={deleteTaskHandler}/>
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
