import { StyleSheet, useColorScheme, View } from "react-native";
import Spacer from "../../components/Spacer";
import ThemedView from "../../components/ThemedView";
import ThemedText from "../../components/ThemedText";
import ThemedCard from "../../components/ThemedCard";
import { Colors } from "../../constants/Color";
const Profile = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;
  return (
    <ThemedView style={styles.container}>
      <View style={[styles.box, { backgroundColor: theme.uiBackground }]}>
        <ThemedText>
          Notification and Reminders will be displayed here in future
        </ThemedText>
        <Spacer height={20} />
        <ThemedText>
          Upcoming appointments, lab tests, and follow-ups will be shown here
        </ThemedText>
      </View>
      {/* <ThemedText title={true} style={styles.heading}>
        Profile: main dashboard containg a diplay rectangle on top for all
        important stuff like reminders and notigications maybe in future some
        ads but only for government
      </ThemedText> */}
      <Spacer height={50} />
    </ThemedView>
  );
};

export default Profile;

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
  box: {
    position: "absolute",
    top: 30,
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 20,
    borderRadius: 10,
    height: "25%",
    width: "80%",
    elevation: 5,
    shadowColor: "#0cffebff",
    shadowRadius: 3.84,
  },
});
