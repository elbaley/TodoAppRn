import {StyleSheet, Text, View} from 'react-native'
import React from 'react'
import Task from './Task'

const List = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tasks</Text>
      <Task />
      <Task />
      <Task />
      <Task />
    </View>
  )
}

export default List

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
  title: {
    color: '#EBEBEB',
    fontFamily: 'Inter',
    fontSize: 18,
    fontWeight: '700',
    paddingBottom: 16,
  },
})
