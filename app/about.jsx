import ThemedView from "../components/ThemedView";
import ThemedText from "../components/ThemedText";
import {
  StyleSheet,
  useColorScheme,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Colors } from "../constants/Color";
const About = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;
  return (
    <ThemedView style={styles.container}>
      <ScrollView>
        <ThemedView style={styles.cardsContainer}>
          <ThemedView
            style={[styles.headingCard, { backgroundColor: theme.background }]}
          >
            <ThemedText
              title={true}
              style={{ textAlign: "center", color: "#07e8db", fontSize: 20 }}
            >
              Welcome to eMustashfa
            </ThemedText>
          </ThemedView>
          <TouchableOpacity
            style={[styles.card, { backgroundColor: theme.background }]}
          >
            <ThemedText>
              We believe that accessing quality healthcare should be simple,
              secure, and stress-free. Our app is designed to connect patients
              directly with healthcare services through a seamless digital
              experience.
            </ThemedText>
          </TouchableOpacity>

          <TouchableOpacity style={styles.card}>
            <ThemedText style={styles.cardTitle}>
              Access Your Medical Reports
            </ThemedText>
            <ThemedText style={styles.cardSubtitle}>
              Instantly view and download your medical records by logging in
              securely with your National ID.
            </ThemedText>
          </TouchableOpacity>

          <TouchableOpacity style={styles.card}>
            <ThemedText style={styles.cardTitle}>Stay Informed</ThemedText>
            <ThemedText style={styles.cardSubtitle}>
              Receive real-time notifications about upcoming appointments,
              required lab tests, or recommended follow-ups—all from your
              personalized dashboard
            </ThemedText>
          </TouchableOpacity>

          <TouchableOpacity style={styles.card}>
            <ThemedText style={styles.cardTitle}>
              Book Appointments Easily
            </ThemedText>
            <ThemedText style={styles.cardSubtitle}>
              Schedule new appointments directly through the app in just a few
              taps.
            </ThemedText>
          </TouchableOpacity>

          <TouchableOpacity style={styles.card}>
            <ThemedText style={styles.cardTitle}>Get Instant Help</ThemedText>
            <ThemedText style={styles.cardSubtitle}>
              Chat with our AI-powered Doctor Assistant 24/7 for quick answers
              to your health-related questions or guidance on next steps.
            </ThemedText>
          </TouchableOpacity>
        </ThemedView>
      </ScrollView>
    </ThemedView>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  headingCard: {
    padding: 7,

    shadowColor: "#0cffebff",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,

    marginButtom: 20,
  },
  card: {
    padding: 20,
    borderRadius: 7,
    shadowColor: "#0cffebff",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: "90%",
    marginVertical: 20,
  },
  cardsContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    alignSelf: "center",
    marginVertical: 70,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  cardSubtitle: {
    fontSize: 14,
  },
});
