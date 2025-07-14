import { StyleSheet, Text } from "react-native";
import React from "react";
import ThemedView from "../../components/ThemedView";
import ThemedText from "../../components/ThemedText";
import Spacer from "../../components/Spacer";
import ThemedButton from "../../components/ThemedButton";
import { Link } from "expo-router";
import { useColorScheme } from "react-native";
import { Colors } from "../../constants/Color";
import { TextInput } from "react-native";
import { push, ref, set } from "firebase/database";
import { realTimeDatabase } from "../../FirebaseConfig";
import { auth } from "../../FirebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import LoginUsername from "./loginUsername";

const Login = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;
  //const [text, onChangeText] = React.useState("Username or Email");
  return (
    <>
      <ThemedView style={styles.container}>
        <ThemedText style={[styles.topTitle, { color: theme.title }]}>
          Login
        </ThemedText>
        <Spacer height={150} />
        <ThemedText title={true} style={styles.title}>
          Login to open your dashboard
        </ThemedText>

        <Spacer height={20} />
        <LoginUsername />
        <Spacer height={10} />

        <Spacer height={20} />
        <ThemedText>Don't have an account?</ThemedText>
        <Link href="/signupScreen">
          <ThemedText style={[styles.link, { color: theme.text }]}>
            Create new account
          </ThemedText>
        </Link>
        <Spacer height={50} />
        <Link href="/">
          <ThemedButton>
            <Text style={{ color: "#f2f2f2" }}>back to home page</Text>
          </ThemedButton>
        </Link>
      </ThemedView>
    </>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    justifyContent: "center",
    alignItems: "center",
  },
  link: {
    textDecorationLine: "underline",
    fontSize: 15,
  },
  topTitle: {
    justifyContent: "center",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
