import React, { useState, Component } from 'react';
import { StyleSheet, View, FlatList, Button, Text, Animated, Dimensions, } from 'react-native';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom'
import Task from './components/Task';
import DailyTask from './components/Task';
import TaskInput from './components/TaskInput'
import Header from './components/Header'
import Card from './components/Card'
import Colors from './constants/Colors'
import { SwipeListView } from 'react-native-swipe-list-view';
import axios from 'axios'

export default function App() {
  const [taskList, setTaskList] = useState([])
  const [dailyTaskList, setDailyTaskList] = useState([])
  const [isAddMode, setIsAddMode] = useState(false)

  // axios.get('http://localhost:5000/tasks/')
  // .then(response => {
  //   setTaskList(response.data)
  // })

  // axios.get('http://localhost:5000/dailys/')
  // .then(response => {
  //   setDailyTaskList(response.data)
  // })

  const addTaskHandler = taskTitle => {
    if(taskTitle.length === 0) {
      return
    }

    setTaskList(taskList => [
      ...taskList,
       { key: Math.random().toString(), value: taskTitle}])
    setIsAddMode(false)
  }

  const addDailyTaskHandler = dailyTaskTitle => {
    console.log(dailyTaskList)
    if(dailyTaskTitle.length === 0) {
      return
    }
    setDailyTaskList(dailyTaskList => [
      ...dailyTaskList,
       { key: Math.random().toString(), value: dailyTaskTitle}])
    setIsAddMode(false)
  }
  
  const cancelAddingTaskHandler = () => {
    setIsAddMode(false)
  }

  const applyAddingTaskHandler = () => {
    setIsAddMode(true)
  }

  const renderHiddenItem = () => (
    <View>
    </View>
  );

  const onSwipeDailyTaskChange = swipeData => {
    
    const { key, value } = swipeData;
    const newData = [...dailyTaskList];
    const prevIndex = dailyTaskList.findIndex(item => item.key === key);
    setTimeout(() => {
      setDailyTaskList(newData)
    }, 300)
    newData.splice(prevIndex, 1)
  };

  const onSwipeTaskChange = swipeData => {
    const { key, value } = swipeData;
    const newData = [...taskList];
    const prevIndex = taskList.findIndex(item => item.key === key);
    setTimeout(() => {
      setTaskList(newData)
    }, 300)
    newData.splice(prevIndex, 1);
  };

  return (
    <View style={styles.container}>
      <Header title="Tasker" onAdd={applyAddingTaskHandler}/>
      <View style={styles.button}>
      </View>
        <View style={styles.flastListContainer}>
          <View style={styles.taskContainer}>
            <Text style={styles.text}>Daily</Text>
            <SwipeListView
              disableRightSwipe
              data={dailyTaskList}
              renderItem={itemData => (
                <View style={styles.cardContainer}>
                  <Card>
                    <DailyTask
                      id={itemData.item.key}
                      title={itemData.item.value}/>
                  </Card>
                </View> 
              )}
              rightOpenValue={-Dimensions.get('window').width}
              onSwipeValueChange={onSwipeDailyTaskChange}
              renderHiddenItem={renderHiddenItem}/>
          </View>
          <View style={styles.taskContainer}>
            <Text style={styles.text}>Tasks</Text>
            <SwipeListView
              disableLeftSwipe
              data={taskList}
              renderItem={itemData => (
                <View style={styles.cardContainer}>
                  <Card>
                    <Task
                      id={itemData.item.key}
                      title={itemData.item.value}/>
                  </Card>
                </View>
              )}
              onSwipeValueChange={onSwipeTaskChange}
              rightOpenValue={-Dimensions.get('window').width}
              renderHiddenItem={renderHiddenItem}/>
          </View>
        </View>
        <TaskInput
        onCancel={cancelAddingTaskHandler}
        visible={isAddMode}
        onAddTask={addTaskHandler}
        onAddDailyTask={addDailyTaskHandler}/>
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
  },
  flastListContainer: {
    alignItems: 'center',
    justifyContent: "center",
    flex: 1,
    flexDirection: 'row'
  },
  taskContainer: {
    alignItems: 'center',
    justifyContent: "center",
    flex: 1,
  },
  text: {
    color: Colors.accent,
    fontSize: 30,
    fontWeight: 'bold',
    letterSpacing: 4,
    textTransform: 'uppercase',
    fontFamily: ''
  }
});
