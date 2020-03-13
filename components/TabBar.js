import React from "react";
import { StyleSheet, View, Text } from "react-native";

import Colors from '../constants/colors';
import TabBarItem from '../components/TabBarItem';

const barHeight = 60;

const TabBar = props => {
  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        {/* DRY: Make items into component */}
        <TabBarItem height={barHeight} onPress={props.onPress} dest='carrier'>Home</TabBarItem>
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

export default TabBar;
