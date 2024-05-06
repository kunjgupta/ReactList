import { TextInput, StyleSheet, Button, View } from "react-native"
import { useState } from "react"

function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState('')

    function goalInputHandler(enteredText) {
        setEnteredGoalText({ text: enteredText, id: Math.random() })
    }

    function addGoalHandler() {
        props.onAddGoal(enteredGoalText)
        setEnteredGoalText('')
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput style={styles.textInput}
                placeholder='Your course goal'
                value={enteredGoalText}
                onChangeText={goalInputHandler}>
            </TextInput>
            <Button title='Add Goal' onPress={addGoalHandler}></Button>
        </View>
    )
}


const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
        flex: 1
    
      },
      textInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '70%',
        marginRight: 8,
        padding: 8
      }
})

export default GoalInput