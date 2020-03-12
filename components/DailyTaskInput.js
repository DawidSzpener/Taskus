import React, { useState } from 'react'
import { View, Button, StyleSheet, TextInput, Modal } from 'react-native'
import Colors from '../constants/Colors'

const DailyTaskInput = props => {
  const [enteredDailyTask, setEnteredDailyTask] = useState('')

  function dailyTaskInputHandler(enteredText) {
    setEnteredDailyTask(enteredText)
  }

  const addDailyTaskHandler = () => {
    props.onAddDailyTask(enteredDailyTask)

    const data = {
      text: enteredDailyTask
    }

    axios.post("http://localhost:5000/dailys/add", data)
    .then(res => console.log(res.data))
    .catch(err => console.log(err))

    setEnteredDailyTask('')
  }

  const cancelDailyTaskAddingHandler = () => {
    props.onCancel()
    setEnteredDailyTask('')
  }

  return (
    <Modal animationType='slide' visible={props.visible}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder='Set Daily Task'
          style={styles.textInput}
          onChangeText={dailyTaskInputHandler}
          value={enteredDailyTask}/>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="CANCEL" color={Colors.cancel} onPress={cancelDailyTaskAddingHandler}/>
          </View>
          <View style={styles.button}>
            <Button title="ADD" color={Colors.accept} onPress={addDailyTaskHandler}/>
          </View>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInput: {
    height: 40,
    width: '80%',
    flexDirection: 'row',
    borderWidth: 1,
    padding: 5,
    margin: 5
  },
  buttonContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 5,
    margin: 5
  },
  button: {
    width: '80%',
    flex: 1,
    margin: 5
  }
})

export default DailyTaskInput
