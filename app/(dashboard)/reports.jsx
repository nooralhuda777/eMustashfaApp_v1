import { StyleSheet } from "react-native";
import Spacer from "../../components/Spacer";
import ThemedView from "../../components/ThemedView";
import ThemedText from "../../components/ThemedText";

const Reports = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedText title={true} style={styles.heading}>
        Reports here is where all the patient reports including lab, radiology
        and phamacy prescriptions displayed in squares containers
      </ThemedText>
      <Spacer height={50} />
    </ThemedView>
  );
};

export default Reports;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1,
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
