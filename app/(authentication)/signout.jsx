// In HomeScreen.js or any component where you want a logout button
import { signOut } from "firebase/auth";
import { auth } from "../../FirebaseConfig";
import ThemedButton from "../../components/ThemedButton";

function SignOut() {
  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log("User logged out");
      // The onAuthStateChanged listener will detect this and navigate away
    } catch (error) {
      console.error("Logout error:", error);
      Alert.alert("Error", "Failed to log out.");
    }
  };

  return (
    // ... in your JSX
    <ThemedButton title="Log Out" onPress={handleLogout} />
  );
}
export default SignOut;
