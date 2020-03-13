import React from "react";
import { StyleSheet, View, Text, TouchableHighlight } from "react-native";
import Colors from "../constants/colors";

const TabBarItem = props => {
  let tabHeight = props.height;

  return (
    <TouchableHighlight onPress={props.onPress.bind(this,props.dest)} style={styles.itemContainer}>
      <View style={styles.itemBox}>
        <Text style={styles.itemText}>Home</Text>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
    itemContainer: {
        flex: 1,
        height: 60,
    },
  itemBox: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    height: 60,
    borderColor: Colors.gray,
    padding: 10
  },
  itemText: {
    color: Colors.gray,
    textAlign: "center",
    fontSize: 18,
    fontFamily: "oxanium"
  }
});

export default TabBarItem;
