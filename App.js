import { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setcourseGoals] = useState([])
  function addGoalHandler(enteredGoalText) {
      setcourseGoals((currentCourseGoal) => [...currentCourseGoal, enteredGoalText])
  }

  function deleteGoalHandler(id) {
    setcourseGoals((currentCourseGoal) => {
      return currentCourseGoal.filter((goal) => goal.id != id)
    })
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal = {addGoalHandler} />
      <View style={styles.goalsContainer}>
        <FlatList
        keyExtractor={(item, index) => {
          return item.id
        }}
          data={courseGoals}
          renderItem={(itemData) => {
            return (
            <GoalItem text = {itemData.item.text}
            id={itemData.item.id}
             onDeleteItem={deleteGoalHandler}/>
            )
          }}
        />
      </View>
    </View>

    // <View style={{ borderWidth: 1, borderColor: 'red', padding: 50, flexDirection: 'row', width: '80%', height: 300, justifyContent: 'space-around', alignItems: 'center' }}>

    //   <View
    //     style={{
    //       flex:1,
    //       backgroundColor: 'red',
    //       justifyContent: 'center',
    //       alignItems: 'center'
    //     }}>
    //     <Text>1</Text>
    //   </View>

    //   <View
    //     style={{
    //       flex:2,
    //       backgroundColor: 'blue',
    //       justifyContent: 'center',
    //       alignItems: 'center'
    //     }}>
    //     <Text>2</Text>
    //   </View>

    //   <View
    //     style={{
    //       flex:3,
    //       backgroundColor: 'green',
    //       justifyContent: 'center',
    //       alignItems: 'center'
    //     }}>
    //     <Text>3</Text>
    //   </View>

    // </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 50
  },
  goalsContainer: {
    flex: 5
  }
});
