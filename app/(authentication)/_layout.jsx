import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useColorScheme } from "react-native";
import { Colors } from "../../constants/Color";
import { Stack } from "expo-router";

const AuthenticationLayout = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: theme.navBackground },
        headerTintColor: theme.title,
      }}
    >
      <Stack.Screen name="(authentication)" options={{ headerShown: false }} />
      <Stack.Screen name="/loginScreen" options={{ headerShown: false }} />
      <Stack.Screen name="/signupScreen" options={{ headerShown: false }} />
    </Stack>
  );
};

export default AuthenticationLayout;

const styles = StyleSheet.create({});
