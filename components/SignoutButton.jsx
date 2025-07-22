import { signOut } from "firebase/auth";
import { Alert, Button } from "react-native";
import { auth } from "../FirebaseConfig";
import { router } from "expo-router";

function SignOutButton() {
  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log("User logged out");
      router.replace("/(authentication)/loginScreen");
    } catch (error) {
      console.error("Logout error:", error);
      Alert.alert("Error", "Failed to log out.");
    }
  };

  return <Button title="Sign Out" onPress={handleLogout} />;
}
export default SignOutButton;
