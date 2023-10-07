import { StatusBar } from 'expo-status-bar'
import { useState } from 'react'
import { Button, FlatList, StyleSheet, Text, View } from 'react-native'
import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput'

export default function App () {
  const [goals, setGoals] = useState([])
  const [isOpenModel, setIsOpenModel] = useState(false)
  function addGoalHandler (enteredGoal) {
    setGoals(currentGoals => [
      ...currentGoals,
      { id: Math.random(), text: enteredGoal }
    ])
  }
  return (
    <>
      <StatusBar style='light' />
      <View style={styles.container}>
        <View style={{ flexDirection: 'column' }}>
          <Button
            title='Add New Goal'
            color={'#a065ec'}
            onPress={() => setIsOpenModel(!isOpenModel)}
          />
          <View>
            <FlatList
              data={goals}
              renderItem={item => <GoalItem text={item.item.text} />}
              keyExtractor={item => item.id}
              alwaysBounceVertical={false}
            />
          </View>
          <GoalInput isOpenModel={isOpenModel} setIsOpenModel={setIsOpenModel} onAddGoal={addGoalHandler} />
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e085a',
    paddingTop: 50,
    paddingHorizontal: 16
  }
})
