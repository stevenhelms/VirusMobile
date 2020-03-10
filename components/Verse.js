import React from "react";
import { StyleSheet, View, Text } from "react-native";

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
    color: "#003767",
    fontSize: 12,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default Verse;
