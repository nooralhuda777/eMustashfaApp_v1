import { useState } from "react";
import {
  TextInput,
  Button,
  StyleSheet,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../FirebaseConfig";

import ThemedView from "../../components/ThemedView";
import { Link, router } from "expo-router";
import ThemedLogo from "../../components/ThemedLogo";
import ThemedText from "../../components/ThemedText";
import Spacer from "../../components/Spacer";
import { Colors } from "../../constants/Color";
import { useColorScheme } from "react-native";

function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  const handleLogin = async () => {
    if (email.trim() === "" || password.trim() === "") {
      Alert.alert("Error", "Please enter both email and password.");
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("Logged in!");
      Alert.alert("Success", "Logged in!");
      router.replace("/(dashboard)/profile");
    } catch (error) {
      console.error("Login error:", error.code, error.message);
      let errorMessage = "Failed to log in. Please check your credentials.";
      if (
        error.code === "auth/user-not-found" ||
        error.code === "auth/wrong-password"
      ) {
        errorMessage = "Invalid email or password.";
      } else if (error.code === "auth/invalid-email") {
        errorMessage = "Invalid email address.";
      }
      Alert.alert("Login Failed", errorMessage);
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
          Login to your account
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
        <Button title="Login" onPress={handleLogin} />
        <Spacer height={15} />
        <Link href="/(authentication)/signupScreen">
          <ThemedText
            style={[styles.link, { color: theme.text }]}
            children="Don't have an account? Sign Up"
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
    fontSize: 20,
    fontWeight: "bold",
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

export default LoginScreen;
