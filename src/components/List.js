import {StyleSheet, Text, View, FlatList} from 'react-native'
import React from 'react'
import Task from './Task'

const List = ({tasks, toggle, deleteTask}) => {
  function renderTask({item}) {
    return <Task toggle={toggle} task={item} deleteTask={deleteTask} />
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>⭐️ Tasks</Text>
      <FlatList data={tasks} renderItem={renderTask} />
    </View>
  )
}

export default List

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    flex: 1,
  },
  title: {
    color: '#EBEBEB',
    fontFamily: 'Inter',
    fontSize: 18,
    fontWeight: '700',
    paddingBottom: 16,
  },
})
