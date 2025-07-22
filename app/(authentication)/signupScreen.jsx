import { useState } from "react";
import {
  TextInput,
  Button,
  StyleSheet,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../FirebaseConfig";
import ThemedView from "../../components/ThemedView";
import { Link, router } from "expo-router";

import ThemedLogo from "../../components/ThemedLogo";
import ThemedText from "../../components/ThemedText";
import Spacer from "../../components/Spacer";
import { Colors } from "../../constants/Color";
import { useColorScheme } from "react-native";

function SignUpScreen() {
  // Assuming you use React Navigation
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  const handleSignUp = async () => {
    if (email.trim() === "" || password.trim() === "") {
      Alert.alert("Error", "Please enter both email and password.");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log("Account created!");
      Alert.alert("Success", "Account created! Welcome!");
      router.replace("/(authentication)/loginScreen");
    } catch (error) {
      console.error("Sign-up error:", error.code, error.message);
      let errorMessage = "Failed to create account. Please try again.";
      if (error.code === "auth/email-already-in-use") {
        errorMessage = "This email is already in use.";
      } else if (error.code === "auth/invalid-email") {
        errorMessage = "Invalid email address.";
      } else if (error.code === "auth/weak-password") {
        errorMessage = "Password should be at least 6 characters.";
      }
      Alert.alert("Sign-up Failed", errorMessage);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ThemedView
        style={[styles.container, { backgroundColor: theme.background }]}
      >
        <ThemedLogo />

        <Spacer height={20} />

        <ThemedText style={[styles.title, { color: theme.title }]}>
          Create Account
        </ThemedText>
        <TextInput
          style={[
            styles.input,
            { borderColor: theme.border, color: theme.text },
          ]}
          placeholder="Email"
          placeholderTextColor={theme.placeholder}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          style={[
            styles.input,
            { borderColor: theme.border, color: theme.text },
          ]}
          placeholder="Password"
          placeholderTextColor={theme.placeholder}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <Button title="Sign Up" onPress={handleSignUp} />
        <Spacer height={15} />
        <Link href="/(authentication)/loginScreen">
          <ThemedText
            style={[styles.link, { color: theme.text }]}
            children="Already have an account? Login"
          />
        </Link>
        <Link href="../about" style={styles.AboutLink}>
          <ThemedText>Learn more about eMustashfa?</ThemedText>
        </Link>
        <Spacer height={220} />
      </ThemedView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
    width: "80%",
    fontSize: 16,
  },
  link: {
    fontWeight: "bold",
    textDecorationLine: "underline",
    fontSize: 15,
  },
  AboutLink: {
    fontWeight: "bold",
    textDecorationLine: "underline",
    fontSize: 12,
    marginTop: 25,
  },
});
export default SignUpScreen;
