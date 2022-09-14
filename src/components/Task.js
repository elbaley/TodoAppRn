import {StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import React from 'react'

const Task = ({task}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.checkbox} />
      <Text style={styles.task}>{task.text}</Text>
    </View>
  )
}

export default Task

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  checkbox: {
    backgroundColor: '#292B35',
    height: 24,
    width: 24,
    marginRight: 16,
    borderColor: '#0E0E11',
    borderWidth: 2,
    borderRadius: 6,
  },
  task: {
    color: '#DADADA',
    fontFamily: 'Inter',
    fontWeight: '500',
    fontSize: 14,
  },
})
