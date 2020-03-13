import React, { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";

import BodyText from "../components/BodyText";
import Colors from "../constants/colors";

const renderListItem = itemData => (
  <View style={styles.listContainer}>
    <BodyText># {itemData.item.id}</BodyText>
    <BodyText>{itemData.item.name}</BodyText>
  </View>
);

const CarriersScreen = props => {
  return (
    <View style={styles.screen}>
      <BodyText>Virus Carriers</BodyText>
      <FlatList
        keyExtractor={item => item.id.toString()}
        data={props.virusCarriers}
        renderItem={renderListItem}
      ></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center"
  },
  listContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center"
  },
  listItem: {
    justifyContent: "space-between",
    padding: 10,
    color: Colors.aqua
  }
});

export default CarriersScreen;
