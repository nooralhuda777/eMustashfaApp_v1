import { StyleSheet, Text, View } from "react-native";
import React from "react";
//import Calendar from "react-native-calendar";
import ThemedView from "../../components/ThemedView";
const Appointments = () => {
  return (
    <ThemedView style={styles.container}>
      <Text>
        Appointments: where all the appointments are displayed and patients can
        book appointments
      </Text>
    </ThemedView>
  );
};

export default Appointments;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1,
    alignItems: "center",
  },
});
