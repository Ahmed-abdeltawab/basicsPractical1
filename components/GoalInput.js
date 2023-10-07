import React, { useState } from 'react'
import {
  Button,
  Image,
  Modal,
  Pressable,
  StyleSheet,
  TextInput,
  View
} from 'react-native'

const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState('')
  return (
    <Modal visible={props.isOpenModel} animationType='slide'>
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require('../assets/images/goal.png')}
        />

        <TextInput
          style={styles.inputText}
          placeholder='Your Goal!'
          value={enteredGoal}
          onChangeText={() => {
            setEnteredGoal(enteredGoal)
          }}
        />

        <View style={styles.buttonsContainer}>
          <Button
            title='Cancel'
            onPress={() => {
              props.setIsOpenModel(false)
            }}
            color='#f31282'
          />
          <Button
            title='Add Goal'
            onPress={() => {
              props.onAddGoal(enteredGoal)
            }}
            color='#b180f0'
          />
        </View>
      </View>
    </Modal>
  )
}
const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: '#1e085a',
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 16
  },
  inputText: {
    borderColor: '#e4d0ff',
    backgroundColor: '#e4d0ff',
    paddingHorizontal: 10,
    paddingVertical: 5,
    width: '100%',
    borderRadius: 5,
    marginBottom: 10
  },
  image: {
    width: 100,
    height: 100,
    margin: 20
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10
  }
})
export default GoalInput
