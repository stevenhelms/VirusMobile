import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo";

import HomeScreen from "./screens/HomeScreen";
import CarriersScreen from "./screens/CarriersScreen";
import SettingsScreen from "./screens/SettingsScreen";

import Header from "./components/Header";
import TabBar from "./components/TabBar";

import DemoData from "./constants/demo-data";

const fetchFonts = () => {
  return Font.loadAsync({
    raleway: require("./assets/Raleway-Bold.ttf"),
    "oxanium-bold": require("./assets/Oxanium-Bold.ttf"),
    oxanium: require("./assets/Oxanium-Regular.ttf")
  });
};

export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false);
  const [screenState, setScreenState] = useState("home");
  const [carriers, setCarriers] = useState(DemoData.virusCarriers);

  const switchScreen = screen => {
    setScreenState(screen);
    console.log("switchScreen: " + screen);
  };

  const setVirusCarriers = carrierName => {
    let newCarrier = { id: carriers.length + 1, name: carrierName };
    console.log(newCarrier);
    setCarriers(pastCarriers => [...pastCarriers, newCarrier]);
    console.log(carriers);
  };

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={err => console.log(err)}
      />
    );
  }

  let content = <HomeScreen addVirusCarrier={setVirusCarriers} />;
  if (screenState == "carrier") {
    content = <CarriersScreen virusCarriers={carriers} />;
  } else if (screenState == "settings") {
    content = <SettingsScreen />;
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.screen}>
        <Header title="Virus Giver" />
        {content}
        <TabBar onPress={switchScreen} />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
