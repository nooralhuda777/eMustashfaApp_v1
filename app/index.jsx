import { StyleSheet, ScrollView, useColorScheme } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native";
import { Link } from "expo-router";
import { Colors } from "../constants/Color";
//Themed Components
import ThemedView from "../components/ThemedView";
import ThemedLogo from "../components/ThemedLogo";
import ThemedText from "../components/ThemedText";
import Spacer from "../components/Spacer";

const Home = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  return (
    <ThemedView
      style={[styles.container, { backgroundColor: theme.background }]}
    >
      <ThemedLogo />
      <Spacer height={10} />

      <Spacer height={25} />

      <Link href="/profile" style={styles.link}>
        <ThemedText style={styles.link}>Dashboard</ThemedText>
      </Link>
      <Link href="/loginScreen" style={styles.link}>
        <ThemedText style={styles.link}>Login to your account</ThemedText>
      </Link>
    </ThemedView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    height: "100%",
    justifyContent: "center",
  },

  link: {
    fontWeight: "bold",
    textDecorationLine: "underline",
    fontSize: 15,
  },
});
