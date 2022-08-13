import { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
export default function App() {
  const [enteredGoalText, setEnterdGoalText] = useState("");
  function goalInputHandler(enteredtext) {
    setEnterdGoalText(enteredtext);
  }
  function addGoalHandler() {
    console.log(enteredGoalText);
  }
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your Course Goal!"
          onChangeText={goalInputHandler}
        />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        <Text>List of Goals.....</Text>
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
    borderBottomColor: "black",
  },
  textInput: {
    borderWidth: 2,
    borderColor: "black",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
  goalsContainer: {
    flex: 3,
  },
});
