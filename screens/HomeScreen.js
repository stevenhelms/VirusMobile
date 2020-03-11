import React, { useState } from "react";
import { StyleSheet, View, Text, Button } from "react-native";

import Header from "../components/Header";
import NameInput from "../components/NameInput";
import TabBar from "../components/TabBar";
import LickHere from "../components/LickHere";
import Verse from "../components/Verse";

const HomeScreen = props => {
  return (
    <View style={styles.screen}>
      <Verse verse="Freely ye have received, freely give. Matthew 10:8b KJV" />
      <NameInput />
      <LickHere />
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
export default HomeScreen;
