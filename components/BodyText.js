import React from "react";
import { StyleSheet, Text } from "react-native";

import Colors from '../constants/colors';

const BodyText = props => (
  <Text style={{ ...styles.body, ...props.style }}>{props.children}</Text>
);

const styles = StyleSheet.create({
  body: {
    fontFamily: "raleway",
    color: Colors.green,
  }
});

export default BodyText;
