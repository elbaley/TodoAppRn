import {StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import Swipeable from 'react-native-gesture-handler/Swipeable'

const Task = ({task, toggle, deleteTask}) => {
  const RightSwipeActions = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          width: 55,
          height: 24,
          paddingHorizontal: 5,
        }}>
        <TouchableOpacity
          onPress={() => {
            deleteTask(task.id)
          }}>
          <Icon size={22} color={'white'} name="trash" />
        </TouchableOpacity>
      </View>
    )
  }
  return (
    <Swipeable overshootRight={false} renderRightActions={RightSwipeActions}>
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
    </Swipeable>
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
