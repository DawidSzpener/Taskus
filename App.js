import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, View, FlatList, Button, Text, Animated, Dimensions, } from 'react-native';
import Task from './components/Task';
import DailyTask from './components/Task';
import TaskInput from './components/TaskInput'
import Header from './components/Header'
import Card from './components/Card'
import Colors from './constants/Colors'
import { SwipeListView } from 'react-native-swipe-list-view';
import axios from 'axios'

const App = () =>  {
  const [taskList, setTaskList] = useState([])
  const [dailyTaskList, setDailyTaskList] = useState([])
  const [isAddMode, setIsAddMode] = useState(false)
  const [cardColor, setCardColor] = useState(Colors.primary)
  const modalInputRef = useRef(null)

  useEffect(() => {
    axios.get('http://localhost:5000/tasks/')
      .then(response => {
        const newTaskList = response.data.map(task => {
          return { key: Math.random().toString() ,value: task.text }
        })
        setTaskList(newTaskList)
        console.log(newTaskList)
      })
      .catch(err => {
        console.log(err)  
      })
  }, [])

  useEffect(() => {
    axios.get('http://localhost:5000/dailys/')
      .then(response => {
        const newDailysList = response.data.map(daily => {
          return { key: Math.random().toString(), value: daily.text}
        })
        setDailyTaskList(newDailysList)
        console.log(newDailysList)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  const addTaskHandler = taskTitle => {
    if(taskTitle.length === 0) {
      return
    }

    setTaskList(taskList => [
      ...taskList,
       { key: Math.random().toString(), value: taskTitle}])
    setIsAddMode(false)
    console.log(taskList)
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
    modalInputRef.current.focus()
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

  const changeColor = () => {
    setCardColor(Colors.greenCard)
  }

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
                  <Card press={changeColor} color={cardColor}>
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
                  <Card press={changeColor} color={cardColor}>
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
        focus={modalInputRef}
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

export default App
