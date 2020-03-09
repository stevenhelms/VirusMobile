import React from "react";
import { StyleSheet, View, Text } from "react-native";

const barHeight = 100;

const TabBar = props => {
  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <View style={styles.itemBox}>
          <Text>Home</Text>
        </View>
        <View style={styles.itemBox}>
          <Text>Virus</Text>
        </View>
        <View style={styles.itemBox}>
          <Text>Settings</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: barHeight,
    width: "100%",
    backgroundColor: "#009ddc"
  },
  itemContainer: {
    flexDirection: "row",
    width: "100%"
  },
  itemBox: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: barHeight,
    borderWidth: 1,
    borderColor: '#003767'
  }
});

export default TabBar;
