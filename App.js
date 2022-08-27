import { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
export default function App() {
  const [enteredGoalText, setenterdGoalText] = useState("");
  const [courseGoals, setcourseGoals] = useState([]);
  function goalInputHandler(enteredtext) {
    setenterdGoalText(enteredtext);
  }
  function addGoalHandler() {
    setcourseGoals((CurrentCoutseGoals) => [
      ...CurrentCoutseGoals,
      enteredGoalText,
    ]);
  }
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          value={enteredGoalText}
          style={styles.textInput}
          placeholder="Please Enter Your Course Goals!"
          onChangeText={goalInputHandler}
        />
        <Button title="Add_Goal" onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        {courseGoals.map((goal) => (
          <Text key={goal}>{goal}</Text>
        ))}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    flex: 1,
    paddingHorizontal: 20,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 2,
    borderBottomColor: "orange",
  },
  textInput: {
    borderWidth: 2,
    borderColor: "grey",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
  goalsContainer: {
    flex: 3,
  },
});
