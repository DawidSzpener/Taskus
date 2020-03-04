import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Button, Text } from 'react-native';
import Task from './components/Task';
import DailyTask from './components/Task';
import TaskInput from './components/TaskInput'
import DailyTaskInput from './components/TaskInput'
import Header from './components/Header'
import Card from './components/Card'
import Colors from './constants/Colors'

export default function App() {
  const [taskList, setTaskList] = useState([])
  const [dailyTaskList, setDailyTaskList] = useState([])
  const [isAddMode, setIsAddMode] = useState(false)
  const [isDailyAddMode, setIsDailyAddMode] = useState(false)

  const addTaskHandler = taskTitle => {
    if(taskTitle.length === 0) {
      return
    }
    setTaskList(taskList => [
      ...taskList,
       { id: Math.random().toString(), value: taskTitle}])
    setIsAddMode(false)
  }

  const addDailyTaskHandler = dailyTaskTitle => {
    if(dailyTaskTitle.length === 0) {
      return
    }
    setDailyTaskList(dailyTaskList => [
      ...dailyTaskList,
       { id: Math.random().toString(), value: dailyTaskTitle}])
    setIsDailyAddMode(false)
  }

  const deleteTaskHandler = goalId => {
    setTaskList(taskList => {
     return taskList.filter((goal) => goal.id !== goalId)
    })
  }

  const deleteDailyTaskHandler = goalId => {
    setTaskList(dailyTaskList => {
     return dailyTaskList.filter((goal) => goal.id !== goalId)
    })
  }

  const cancelAddingTaskHandler = () => {
    setIsAddMode(false)
  }

  const cancelAddingDailyTaskHandler = () => {
    setIsDailyAddMode(false)
  }

  const applyAddingTaskHandler = () => {
    setIsAddMode(true)
  }

  const applyAddingDailyTaskHandler = () => {
    setIsDailyAddMode(true)
  }

  return (
    <View style={styles.container}>
      <Header title="Tasker" onAdd={applyAddingTaskHandler} onDailyAdd={applyAddingDailyTaskHandler}/>
      <View style={styles.button}>
      </View>
      <TaskInput
        onCancel={cancelAddingDailyTaskHandler}
        visible={isAddMode}
        onAddTask={addTaskHandler}/>
      <DailyTaskInput
        onCancel={cancelAddingTaskHandler}
        visible={isDailyAddMode}
        onAddTask={addDailyTaskHandler}/>
      <FlatList 
      keyExtractor={(item, index) => item.id}
      data={dailyTaskList}
      renderItem={itemData => (
        <View style={styles.cardContainer}>
          <Card>
            <DailyTask
              id={itemData.item.id}
              title={itemData.item.value}
              onDelete={deleteDailyTaskHandler}/>
          </Card>
        </View>
      )}/>
      <FlatList 
        keyExtractor={(item, index) => item.id}
        data={taskList}
        renderItem={itemData => (
          <View style={styles.cardContainer}>
            <Card>
              <Task
                id={itemData.item.id}
                title={itemData.item.value}
                onDelete={deleteTaskHandler}/>
            </Card>
          </View>
        )}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: "center",
    flex: 1,
    backgroundColor: '#fff'
  },
  button: {
    width: '80%',
    margin: 15
  },
  cardContainer: {
    alignItems: 'center',
    justifyContent: "center",
    flex: 1
  }
});
