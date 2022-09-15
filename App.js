import {SafeAreaView, StyleSheet, Text, View} from 'react-native'
import React, {useEffect, useState} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Header from './src/components/Header'
import List from './src/components/List'
import TaskInput from './src/components/TaskInput'
import uuid from 'react-native-uuid'

const App = () => {
  const [tasks, setTasks] = useState([])
  // tasks info
  const completedTaskCount = tasks.filter(
    task => task.completed === true,
  ).length
  const incompleteTaskCount = tasks.length - completedTaskCount
  //AsyncStorage
  const storeData = async value => {
    const stringifiedState = JSON.stringify(value)
    try {
      await AsyncStorage.setItem('localTasks', stringifiedState)
    } catch (e) {
      console.log(e)
    }
  }

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('localTasks')
      if (jsonValue !== null) {
        return JSON.parse(jsonValue)
      }
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    //get state from storage
    getData()
      .then(res => {
        //if there is nothing on local storage abort
        if (!res) return
        console.log('here is local storage', res)
        setTasks(res)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])
  useEffect(() => {
    //save state to storage
    if (tasks.length !== 0) {
      storeData(tasks)
    }
  }, [tasks])

  // Add/Delete/Toggle Task
  function addTask(text) {
    const taskObj = {
      id: uuid.v4(),
      text,
      completed: false,
    }
    setTasks(oldTasks => {
      return [...oldTasks, taskObj]
    })
  }
  function deleteTask(id) {
    setTasks(oldTasks => {
      const newTasks = oldTasks.filter(task => task.id !== id)
      return newTasks
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
      <Header
        completedTaskCount={completedTaskCount}
        incompleteTaskCount={incompleteTaskCount}
      />
      <List toggle={toggleCompleted} deleteTask={deleteTask} tasks={tasks} />
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
