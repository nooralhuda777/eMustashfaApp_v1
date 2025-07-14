import { StyleSheet, TextInput } from "react-native";
import Spacer from "../../components/Spacer";
import ThemedView from "../../components/ThemedView";
import ThemedText from "../../components/ThemedText";
import ThemedButton from "../../components/ThemedButton";
import React, { useState } from "react";

const Chat = () => {
  return (
    <ThemedView style={styles.container}>
      <TextInput style={styles.input} />
      <ThemedButton style={styles.button}>
        <ThemedText>Send</ThemedText>
      </ThemedButton>
    </ThemedView>
  );
};

export default Chat;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1,
    alignItems: "center",
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    backgroundColor: "#4CAF50",
    padding: 10,
    borderRadius: 5,
  },
  response: {
    fontSize: 16,
    color: "#666",
  },
});
