import React from "react";
import { StyleSheet, View, Text, TextInput, Button } from "react-native";
import Colors from '../constants/colors';

const NameInput = props => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Enter Name" />
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button title="Reset" color={Colors.yellow} />
        </View>
        <View style={styles.button}>
          <Button title="Enter" color={Colors.aqua} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '40%'
  },
  button: {
    width: "45%"
  }
});

export default NameInput;
