import {SafeAreaView, StyleSheet, Text, View} from 'react-native'
import React from 'react'
import Header from './src/components/Header'
import List from './src/components/List'
import TaskInput from './src/components/TaskInput'

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <List />
      <TaskInput />
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
