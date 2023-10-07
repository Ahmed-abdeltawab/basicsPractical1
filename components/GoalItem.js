import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const GoalItem = props => {
  return (
    <View style={styles.goalItemContainer}>
      <Text>{props.title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  goalItemContainer: {
    mb: 10,
    p: 10,
    backgroundColor: '#5e0acc'
  }
})
export default GoalItem
