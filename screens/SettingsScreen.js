import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import BodyText from "../components/BodyText";

const SettingsScreen = props => {
  return (
    <View style={styles.screen}>
      <BodyText>There is no spoon.</BodyText>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center"
  }
});

export default SettingsScreen;
