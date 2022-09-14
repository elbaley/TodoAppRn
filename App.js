import {SafeAreaView, StyleSheet, Text, View} from 'react-native'
import React, {useState} from 'react'
import Header from './src/components/Header'
import List from './src/components/List'
import TaskInput from './src/components/TaskInput'

const App = () => {
  const [tasks, setTasks] = useState([
    {id: 0, text: 'Lorem ipsum dolor sit amet.', completed: true},
  ])
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
