import { StyleSheet, Text, View, FlatList, StatusBar } from "react-native";
import React from "react";
import ThemedView from "../../components/ThemedView";
import ThemedText from "../../components/ThemedText";
import ThemedButton from "../../components/ThemedButton";
import { Link } from "expo-router";
import Spacer from "../../components/Spacer";

const Settings = () => {
  return (
    <ThemedView style={styles.container} safe={true}>
      <ThemedText title={true} style={styles.heading}>
        User Settings like drawers one for profile and account changes otheres
        for selecting the theme and log out
      </ThemedText>
      <Spacer height={50} />

      <Link href="/" style={styles.btn}>
        <ThemedButton style={styles.btn}>
          <Text>Back to Home Page</Text>
        </ThemedButton>
      </Link>
    </ThemedView>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1,
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  btn: {
    justifyContent: "center",
    textAlign: "center",
  },
  item: {
    backgroundColor: "#373737",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
});
