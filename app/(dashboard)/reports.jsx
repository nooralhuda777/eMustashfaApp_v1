import { StyleSheet } from "react-native";
import Spacer from "../../components/Spacer";
import ThemedView from "../../components/ThemedView";
import ThemedText from "../../components/ThemedText";
import { TouchableOpacity } from "react-native";
import ThemedCard from "../../components/ThemedCard";

const Reports = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedText title={true} style={styles.heading}>
        Your Reports
      </ThemedText>
      <Spacer height={50} />

      <ThemedView style={styles.cardsContainer}>
        <TouchableOpacity style={styles.card}>
          <ThemedText style={styles.cardTitle}>Lab Reports</ThemedText>
          <ThemedText style={styles.cardSubtitle}>
            View your lab reports
          </ThemedText>
        </TouchableOpacity>

        <Spacer width={20} />

        <TouchableOpacity style={styles.card}>
          <ThemedText style={styles.cardTitle}>Radiology Reports</ThemedText>
          <ThemedText style={styles.cardSubtitle}>
            View your radiology reports
          </ThemedText>
        </TouchableOpacity>

        <Spacer width={20} />

        <TouchableOpacity style={styles.card}>
          <ThemedText style={styles.cardTitle}>Old Reports</ThemedText>
          <ThemedText style={styles.cardSubtitle}>
            View your old reports
          </ThemedText>
        </TouchableOpacity>
      </ThemedView>
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
  cardsContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
    alignSelf: "center",
  },
  card: {
    padding: 20,
    borderRadius: 10,
    shadowColor: "#0cffebff",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: "100%",
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  cardSubtitle: {
    fontSize: 14,
  },
});
