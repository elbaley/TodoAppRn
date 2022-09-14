import {
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native'
import React, {useState} from 'react'
import Icon from 'react-native-vector-icons/Ionicons'

const TaskInput = ({addTask}) => {
  const [task, setTask] = useState('')
  function handleTaskChange(text) {
    setTask(text)
  }
  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={10}
      behavior="padding"
      style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={handleTaskChange}
          style={styles.input}
          value={task}
          placeholder="Add task"
        />
        <View style={styles.addButton}>
          <TouchableOpacity
            onPress={() => {
              addTask(task)
              setTask('')
            }}>
            <Icon size={32} color={'#1294F2'} name="add-circle-outline" />
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  )
}

export default TaskInput

const styles = StyleSheet.create({
  container: {
    marginBottom: 30,
  },
  inputContainer: {
    backgroundColor: '#2B2B30',
    height: 50,
    marginHorizontal: 16,
    paddingLeft: 8,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
  },
  input: {
    color: '#FFFFFF80',
    fontSize: 14,
    flex: 1,
  },
  addButton: {
    marginRight: 8,
    height: 32,
    width: 32,
  },
})
