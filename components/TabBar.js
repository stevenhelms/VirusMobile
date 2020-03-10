import React from "react";
import { StyleSheet, View, Text } from "react-native";

const barHeight = 100;

const TabBar = props => {
  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <View style={styles.itemBox}>
          <Text style={styles.itemText}>Home</Text>
        </View>
        <View style={styles.itemBox}>
          <Text style={styles.itemText}>Get Virus</Text>
        </View>
        <View style={styles.itemBox}>
          <Text style={styles.itemText}>Settings</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: barHeight,
    width: "100%",
    backgroundColor: "#f9ca24"
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
    borderColor: '#999',
  },
  itemText: {
    color: '#003767',
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 18

  }
});

export default TabBar;
