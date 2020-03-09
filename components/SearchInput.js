import React from "react";
import { StyleSheet, View, Text, TextInput, Button } from "react-native";

const SearchInput = props => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} />
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button title="Reset" color="red" />
        </View>
        <View style={styles.button}>
          <Button title="Search" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  input: {
    borderColor: "black",
    borderWidth: 1,
    width: "80%",
    padding: 10,
    marginBottom: 20
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%'
  },
  button: {
    width: "40%"
  }
});

export default SearchInput;
