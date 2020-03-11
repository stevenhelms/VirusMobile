import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";

const LickHere = props => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/tongue.png")}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
      <Text styles={styles.text}>Place tongue here to receive virus.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 3,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10
  },
  imageContainer: {
    width: 250,
    height: 250
  },
  image: {
    width: "100%",
    height: "100%"
  },
  text: {
    textAlign: "center",
    color: '#5f6c11',
    fontSize: 18,
  }
});

export default LickHere;
