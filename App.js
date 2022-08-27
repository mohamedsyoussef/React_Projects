import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
} from "react-native";
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
        <ScrollView>
          {courseGoals.map((goal) => (
            <View key={goal} style={styles.goalitem}>
              <Text style={styles.Goaltext}>{goal}</Text>
            </View>
          ))}
        </ScrollView>
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
    borderBottomWidth: 1,
    borderBottomColor: "black",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "grey",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
  goalsContainer: {
    flex: 3,
  },
  goalitem: {
    margin: 10,
    padding: 8,
    borderRadius: 10,
    backgroundColor: "#5f9ea0",
  },
  Goaltext: {
    color: "white",
  },
});
