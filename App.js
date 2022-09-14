import {SafeAreaView, StyleSheet, Text, View} from 'react-native'
import React from 'react'
import Header from './src/components/Header'

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View>
        <Text>App</Text>
      </View>
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
