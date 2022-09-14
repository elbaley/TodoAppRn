import {StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'

const Task = ({task, toggle}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          toggle(task.id)
        }}
        style={styles.checkbox}>
        {task.completed && (
          <Icon
            style={styles.completed}
            color={'gray'}
            size={20}
            name="checkmark-sharp"
          />
        )}
      </TouchableOpacity>
      <Text style={[styles.task, task.completed && styles.taskCompleted]}>
        {task.text}
      </Text>
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
  taskCompleted: {
    textDecorationColor: 'white',
    textDecorationLine: 'line-through',
  },
})
