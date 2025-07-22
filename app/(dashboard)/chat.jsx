import {
  StyleSheet,
  TextInput,
  Text,
  View,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Spacer from "../../components/Spacer";
import ThemedView from "../../components/ThemedView";
import ThemedText from "../../components/ThemedText";
import ThemedButton from "../../components/ThemedButton";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Chat = () => {
  const [inputText, setInputText] = useState("");
  const [response, setResponse] = useState(null);
  const [conversationHistory, setConversationHistory] = useState([]);
  const options = {
    method: "POST",
    url: "https://ai-medical-diagnosis-api-symptoms-to-results.p.rapidapi.com/analyzeSymptomsAndDiagnose",
    params: { noqueue: "1" },
    headers: {
      "x-rapidapi-key": process.env.EXPO_PUBLIC_RAPID_APIKEY_AI,
      "x-rapidapi-host":
        "ai-medical-diagnosis-api-symptoms-to-results.p.rapidapi.com",
      "Content-Type": "application/json",
    },
    data: {
      symptoms: ["severe headache", "fever", "fatigue", "sensitivity to light"],
      patientInfo: {
        age: 35,
        gender: "female",
        height: 165,
        weight: 65,
        medicalHistory: ["hypertension", "seasonal allergies"],
        currentMedications: ["lisinopril 10mg", "cetirizine 10mg"],
        allergies: ["penicillin"],
        lifestyle: {
          smoking: false,
          alcohol: "occasional",
          exercise: "moderate",
          diet: "balanced",
        },
      },
      lang: "en",
    },
  };

  useEffect(() => {
    setConversationHistory([
      {
        message:
          "Welcome to your eMustashfa! I’m your virtual health assistant. You can tell me your symptoms, and I’ll help explain what they could mean. For example, “I have a headache and a sore throat”",
        response:
          " Let’s get started. Just tell me what you’re experiencing and I’ll give you a possible explanation. Please note: This is not a medical diagnosis. For serious or urgent concerns, consult a healthcare professional.",
      },
    ]);
  }, []);

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSendClick = async () => {
    const newMessage = {
      message: inputText,
    };
    setConversationHistory([...conversationHistory, newMessage]);
    options.data.message = inputText;
    try {
      const response = await axios.request(options);
      if (response && response.data) {
        console.log(response.data);
        setResponse(response.data);
        const advice = response.data?.result?.analysis?.generalAdvice;
        setConversationHistory([
          ...conversationHistory,
          {
            message: inputText,
            response: advice ? advice.join(", ") : "No advice available",
          },
        ]);
      } else {
        console.error("No response data available");
      }
    } catch (error) {
      console.error(error);
      setConversationHistory([
        ...conversationHistory,
        {
          message: inputText,
          response:
            "I am currently experiencing a high number of requests. Please try again later.",
        },
      ]);
    }
    setInputText("");
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ThemedView style={styles.container}>
        <ScrollView>
          {conversationHistory.map((message, index) => (
            <View key={index}>
              {message.message === inputText ? (
                <View style={styles.messageBubbleLeft}>
                  <Text>{message.message}</Text>
                </View>
              ) : (
                <View style={styles.messageBubbleRight}>
                  <Text>{message.message}</Text>
                </View>
              )}
              {message.response && message.message !== inputText ? (
                <View style={styles.messageBubbleLeft}>
                  <Text>{message.response}</Text>
                </View>
              ) : null}
            </View>
          ))}
        </ScrollView>
        <ThemedView style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={inputText}
            onChange={handleInputChange}
            placeholder="Enter your question or symptom"
          />
          <ThemedButton onPress={handleSendClick} style={styles.button}>
            <Text>Send</Text>
          </ThemedButton>
        </ThemedView>
      </ThemedView>
    </TouchableWithoutFeedback>
  );
};

export default Chat;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    padding: 20,
    width: "100%",
  },
  messageBubbleLeft: {
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
    backgroundColor: "#3a4f63",
    color: "#fff",
    width: "fit-content",
    maxWidth: "50%",
    marginLeft: "0",
    marginRight: "auto",
    textAlign: "left",
    alignSelf: "flex-start",
  },
  messageBubbleRight: {
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
    backgroundColor: "#4b4a4a",
    color: "#fff",
    width: "fit-content",
    maxWidth: "50%",
    marginLeft: "auto",
    marginRight: "0",
    textAlign: "right",
    alignSelf: "flex-end",
  },
  inputContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "90%",
  },
  input: {
    height: 40,
    margin: 10,
    borderWidth: 1,
    padding: 10,
    borderColor: "#ccc",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "80%",
    fontSize: 16,
    backgroundColor: "#f5f5f5",
    display: "inline-block",
  },
  button: {
    backgroundColor: "#4Cbdbd",
    padding: 10,
    borderRadius: 5,
    fontSize: 16,
    width: "20%",
    display: "inline-block",
    color: "#fff",
    marginLeft: 8,
  },
});
