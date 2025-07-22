import React from "react";
import { Colors } from "../constants/Color";
import { StatusBar } from "expo-status-bar";
import { Stack, Redirect } from "expo-router";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { auth } from "../FirebaseConfig";
import {
  ActivityIndicator,
  View,
  StyleSheet,
  useColorScheme,
} from "react-native";

const _layout = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;
  const [user, setUser] = useState(null);
  const [isAuthReady, setIsAuthReady] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
      setIsAuthReady(true);
    });
    return () => unsubscribe();
  }, []);

  // Show a loading indicator while Firebase is checking auth state
  if (!isAuthReady) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: theme.navBackground },
        headerTintColor: theme.title,
      }}
    >
      {user ? (
        <Stack.Screen name="(dashboard)" options={{ headerShown: false }} />
      ) : (
        <Stack.Screen
          name="(authentication)"
          options={{ headerShown: false }}
        />
      )}

      <Stack.Screen
        name="index"
        options={{ title: "Home", headerShown: false }}
      />
      <Stack.Screen
        name="about"
        options={{ title: "About", headerShown: false }}
      />
    </Stack>
  );
};

export default _layout;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    flexDirection: "column",
  },
});
