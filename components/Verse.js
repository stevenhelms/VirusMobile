import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Colors from '../constants/colors';

const Verse = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.verse}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    padding: 10
  },
  text: {
    color: Colors.green,
    fontSize: 18,
    textAlign: 'center',
  }
});

export default Verse;
