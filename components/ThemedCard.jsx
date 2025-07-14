import { View, StyleSheet, useColorScheme } from "react-native";
import { Colors } from "../constants/Color";
import React from "react";

const ThemedCard = (style, ...props) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;
  return (
    <View
      style={[{ backgroundColor: theme.uiBackground }, style.card]}
      {...props}
    />
  );
};

export default ThemedCard;

const styles = StyleSheet.create({
  card: {
    borderRadius: 5,
    padding: 20,
  },
});
