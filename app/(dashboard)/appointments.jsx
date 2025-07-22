import { StyleSheet, useColorScheme, TouchableOpacity } from "react-native";
import { Colors } from "../../constants/Color";
import ThemedView from "../../components/ThemedView";
import ThemedText from "../../components/ThemedText";
import Spacer from "../../components/Spacer";
const Appointments = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;
  return (
    <ThemedView style={styles.container}>
      <ThemedText title={true} style={styles.heading}>
        Appointments
      </ThemedText>
      <Spacer height={50} />
      <ThemedView style={styles.cardsContainer}>
        <TouchableOpacity style={styles.card}>
          <ThemedText style={styles.cartTitle}>Health Center</ThemedText>
          <ThemedText style={styles.cardSubtitle}>
            Book your appointment
          </ThemedText>
        </TouchableOpacity>

        <Spacer width={20} />

        <TouchableOpacity style={styles.card}>
          <ThemedText style={styles.cardTitle}>
            Salmaniya Medical Complex
          </ThemedText>
          <ThemedText style={styles.cardSubtitle}>
            Book your appointment
          </ThemedText>
        </TouchableOpacity>

        <Spacer width={20} />

        <TouchableOpacity style={styles.card}>
          <ThemedText style={styles.cardTitle}>
            King Hamad University Hospital
          </ThemedText>
          <ThemedText style={styles.cardSubtitle}>
            Book your appointment
          </ThemedText>
        </TouchableOpacity>

        <Spacer width={20} />

        <TouchableOpacity style={styles.card}>
          <ThemedText style={styles.cardTitle}>Government Hospitals</ThemedText>
          <ThemedText style={styles.cardSubtitle}>
            Book your appointment
          </ThemedText>
        </TouchableOpacity>
      </ThemedView>
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
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
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
  cardsContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
    alignSelf: "center",
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  cardSubtitle: {
    fontSize: 12,
  },
});
