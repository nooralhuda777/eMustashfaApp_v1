import { SafeAreaView, View, useColorScheme } from "react-native";
import { Colors } from "../constants/Color";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StatusBar } from "react-native";

const ThemedView = ({ style, safe = false, ...props }) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  if (!safe)
    return (
      <View style={[{ backgroundColor: theme.background }, style]} {...props} />
    );
  const insets = useSafeAreaInsets();
  return (
    <>
      <StatusBar style="auto" />
      <View
        style={[
          {
            backgroundColor: theme.background,
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
          },
          style,
        ]}
        {...props}
      />
    </>
  );
};

export default ThemedView;
