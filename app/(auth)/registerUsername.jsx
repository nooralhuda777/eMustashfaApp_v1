import react from "react";
import { push, ref, set } from "firebase/database";
import { realTimeDatabase } from "../../FirebaseConfig";
import { StyleSheet, Text } from "react-native";
import Spacer from "../../components/Spacer";
import ThemedButton from "../../components/ThemedButton";

const REALTIME_DATABASE_KEY = "register_usernames";

export default class RegisterUsername extends react.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
    };
    this.writeData = this.writeData.bind(this);
  }

  writeData = () => {
    const usernameListRef = ref(realTimeDatabase, REALTIME_DATABASE_KEY);
    const newUsernameRef = push(usernameListRef);
    set(newUsernameRef, {
      username: this.state.username,
      password: this.state.password,
      date: new Date().toLocaleTimeString(),
    })
      .then(() => {
        console.log("Data written to Firebase");
      })
      .catch((error) => {
        console.error("Error writing to Firebase:", error);
      });
  };

  handleChange = (e) => {
    let username = e.target.name;
    let value = e.target.value;

    this.setState({
      [username]: value,
    });
  };
  render() {
    return (
      <>
        <input
          type="text"
          style={styles.input}
          name="username"
          value={this.state.username}
          placeholder="Username"
          onChange={(e) => this.handleChange(e)}
        />
        <input
          type="password"
          style={styles.input}
          name="password"
          value={this.state.password}
          placeholder="Password"
          onChange={(e) => this.handleChange(e)}
        />
        <Spacer height={10} />

        <ThemedButton style={styles.btn} onPress={this.writeData}>
          <Text>Register</Text>
        </ThemedButton>
      </>
    );
  }
}
const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  btn: {
    backgroundColor: "#4CAF50",
    padding: 10,
    borderRadius: 5,
    fontSize: 18,
  },
});
