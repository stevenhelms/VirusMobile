import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Colors from '../constants/colors';

const barHeight = 60;

const TabBar = props => {
  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <View style={styles.itemBox}>
          <Text style={styles.itemText}>Home</Text>
        </View>
        <View style={styles.itemBox}>
          <Text style={styles.itemText}>Virus Carriers</Text>
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
    backgroundColor: Colors.aqua,
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
    borderColor: Colors.gray,
    padding: 10
  },
  itemText: {
    color: Colors.gray,
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 18,
    fontFamily: 'raleway',
  }
});

export default TabBar;
