import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo";

import HomeScreen from './screens/HomeScreen';
import Header from './components/Header';
import TabBar from "./components/TabBar";

const fetchFonts = () => {
  return Font.loadAsync({
    raleway: require("./assets/Raleway-Bold.ttf"),
    "oxanium-bold": require("./assets/Oxanium-Bold.ttf")
  });
};

export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={err => console.log(err)}
      />
    );
  }

  let content = <HomeScreen />

  return (
    <View style={styles.screen}>
      <Header title="Virus Giver" />
      {content}
      <TabBar />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});