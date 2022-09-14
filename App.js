import {SafeAreaView, StyleSheet, Text, View} from 'react-native'
import React, {useEffect, useState} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Header from './src/components/Header'
import List from './src/components/List'
import TaskInput from './src/components/TaskInput'

const App = () => {
  const [tasks, setTasks] = useState([
    // {id: 0, text: 'Lorem ipsum dolor sit amet.', completed: true},
  ])

  const storeData = async value => {
    const stringifiedState = JSON.stringify(value)
    try {
      console.log('saving state on the phone...')
      await AsyncStorage.setItem('localTasks', stringifiedState)
    } catch (e) {
      // saving error
    }
  }

  // const getData = async () => {
  //   try {
  //     const value = await AsyncStorage.getItem('localTasks')
  //     if (value !== null) {
  //       // value previously stored
  //       return value
  //     }
  //   } catch (e) {
  //     // error reading value
  //   }
  // }

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('localTasks')
      if (jsonValue !== null) {
        console.log('fonksiyondan geliyorum', JSON.parse(jsonValue))
        return JSON.parse(jsonValue)
      }
    } catch (e) {
      // error reading value
    }
  }
  useEffect(() => {
    if (tasks.length === 0) {
      //get tasks from local storage
      getData()
        .then(res => {
          console.log('useEFFECTTEN', res)
          setTasks(res)
        })
        .catch(err => {
          console.log('ERRRORR')
        })
    } else {
      storeData(tasks)
    }
  }, [tasks])

  function addTask(text) {
    const taskObj = {
      id: tasks.length,
      text,
      completed: false,
    }
    setTasks(oldTasks => {
      return [...oldTasks, taskObj]
    })
  }
  function toggleCompleted(id) {
    setTasks(oldList => {
      const newList = [...oldList]
      const task = newList.find(item => item.id === id)
      task.completed = !task.completed
      return newList
    })
  }
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <List toggle={toggleCompleted} tasks={tasks} />
      <TaskInput addTask={addTask} />
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#141419',
    flex: 1,
  },
})
