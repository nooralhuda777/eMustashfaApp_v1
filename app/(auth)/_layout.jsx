import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
export default function AuthLayout() {
  return (
    <>
      <StatusBar style="auto" />
      <Stack
        screenOptions={{
          headerShown: true,
          animation: "fade",
          headerTitle: "Authentication",
        }}
      />
      <Stack.Screen
        name="/login"
        options={{ headerShown: false, headerTitle: "Login" }}
      />
      <Stack.Screen
        name="/register"
        options={{ headerShown: false, headerTitle: "Register" }}
      />
    </>
  );
}
