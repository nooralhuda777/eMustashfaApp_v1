import { StyleSheet, View, useColorScheme } from "react-native";
import ThemedView from "../../components/ThemedView";
import ThemedText from "../../components/ThemedText";
import ThemedButton from "../../components/ThemedButton";
import { Link } from "expo-router";
import Spacer from "../../components/Spacer";
import SignOutButton from "../../components/SignoutButton";
import { Colors } from "../../constants/Color";

const Settings = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;
  return (
    <ThemedView style={styles.container} safe={true}>
      {/* <ThemedText title={true} style={styles.heading}>
        User Settings like drawers one for profile and account changes otheres
        for selecting the theme and log out
      </ThemedText> */}
      <View style={[styles.box, { backgroundColor: theme.uiBackground }]}>
        <ThemedText>
          Here you can manage your account settings, change your theme, choose
          preffered language, and log out.
        </ThemedText>
      </View>
      {/* <Link href="/" style={styles.btn}>
        <ThemedButton style={styles.btn}>
          <Text>Edit Profile</Text>
        </ThemedButton>
      </Link> */}
      <Spacer height={50} />
      <SignOutButton />
    </ThemedView>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1,
    alignItems: "center",
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  btn: {
    justifyContent: "center",
    textAlign: "center",
    width: "80%",
  },
  box: {
    position: "absolute",
    top: 30,
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 20,
    borderRadius: 10,

    width: "80%",
    elevation: 5,
    shadowColor: "#0cffebff",
    shadowRadius: 3.84,
  },
});
