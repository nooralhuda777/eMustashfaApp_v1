import { Pressable, StyleSheet } from "react-native";
import { Colors } from "../constants/Color";
import React from "react";

const ThemedButton = ({ style, ...props }) => {
  return (
    <Pressable
      style={(pressed) => [styles.btn, pressed && styles.pressed, style]}
      {...props}
    />
  );
};

export default ThemedButton;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: Colors.primary,
    padding: 7,
    borderRadius: 3,
    justifyContent: "center",
    textAlign: "center",
    height: "auto",
    width: "auto",
  },
  presseed: { opacity: 0.7 },
});
