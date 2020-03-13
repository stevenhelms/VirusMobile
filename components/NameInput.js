import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput, Button } from "react-native";
import Colors from "../constants/colors";

const NameInput = props => {
  const [newName, setNewName] = useState("");

  const nameInputHandler = enteredText => {
    setNewName(enteredText);
  };

  const addNameHandler = () => {
    props.addCarrier(newName);
    console.log('addNameHandler: '+ newName);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter Name"
        value={newName}
        onChangeText={nameInputHandler}
      />
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button title="Reset" color={Colors.yellow} />
        </View>
        <View style={styles.button}>
          <Button
            title="Enter"
            color={Colors.aqua}
            onPress={addNameHandler}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20
  },
  input: {
    borderColor: "black",
    borderWidth: 1,
    width: "50%",
    padding: 10,
    marginRight: 5
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "40%"
  },
  button: {
    width: "45%"
  }
});

export default NameInput;
