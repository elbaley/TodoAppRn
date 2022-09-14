import {StyleSheet, Text, View, FlatList} from 'react-native'
import React, {useState} from 'react'
import Task from './Task'

const List = ({tasks}) => {
  function renderTask({item}) {
    return <Task task={item} />
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tasks</Text>
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
