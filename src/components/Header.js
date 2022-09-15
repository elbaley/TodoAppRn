import {StyleSheet, Text, View, Image, Dimensions} from 'react-native'
import React from 'react'

const Header = ({completedTaskCount, incompleteTaskCount}) => {
  const isoString = new Date().toISOString()
  const date = new Date(isoString)
  const formattedDate = new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }).format(date)
  return (
    <>
      <View style={styles.container}>
        <View style={styles.inner_container}>
          <Text style={styles.date}>{formattedDate}</Text>
          <Image
            style={styles.avatar}
            source={{
              uri: 'https://avatars.githubusercontent.com/u/46905324?s=400&u=3b55bc7a2ea52c75e28dba472b836161ca9126e3&v=4',
            }}
          />
        </View>
        <Text style={styles.info}>
          {incompleteTaskCount} incomplete, {completedTaskCount} completed
        </Text>

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
  inner_container: {
    flexDirection: 'row',
  },
  date: {
    color: 'white',
    fontSize: 30,
    fontFamily: 'Inter',
    fontWeight: '700',
    flex: 1,
  },
  info: {
    marginTop: 6,
    color: '#575767',
    fontSize: 14,
    fontFamily: 'Inter',
    fontWeight: '600',
  },
  divider: {
    marginVertical: 16,
    height: 2,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: 5,
  },
  avatar: {
    height: 48,
    width: 48,
    borderRadius: 48 / 2,
  },
})
