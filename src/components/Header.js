import {StyleSheet, Text, View} from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.date}>March 9, 2020</Text>
        <Text style={styles.info}>5 incomplete, 5 completed</Text>
        <View style={styles.divider}></View>
      </View>
    </>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    color: 'white',
    marginTop: 20,
    paddingHorizontal: 16,
  },
  date: {
    color: 'white',
    fontSize: 32,
    fontFamily: 'Inter',
    fontWeight: '700',
  },
  info: {
    marginTop: 6,
    color: '#575767',
    fontSize: 14,
    fontFamily: 'Inter',
    fontWeight: '600',
  },
  divider: {
    marginTop: 16,
    height: 2,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: 5,
  },
})
