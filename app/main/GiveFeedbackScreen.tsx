import React, { useState } from "react";
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import email from "react-native-email";

export default function GiveFeedbackScreen() {
  const [feedback, setFeedback] = useState("");

  const handleSubmit = () => {
    if (!feedback.trim()) {
      Alert.alert("Error", "Please enter your feedback!");
      return;
    }

    const to = ["nbagirovdev@gmail.com"]; //feedback will come to my mail
    email(to, {
      subject: "App Feedback",
      body: feedback,
    }).catch(console.error);

    Alert.alert("Thank you!", "Your feedback has been submitted.");
    setFeedback("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>💬 Give Feedback</Text>
      <Text style={styles.subtitle}>We value your opinion!</Text>

      <TextInput
        
        style={styles.input}
        placeholder="Write your feedback..."
        placeholderTextColor="#aaa"
        multiline
        value={feedback}
        onChangeText={setFeedback}
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit Feedback</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f5f6fa", paddingTop: 130 },
  title: { fontSize: 28, fontWeight: "700", marginBottom: 5, textAlign: "center" },
  subtitle: { fontSize: 16, color: "#7f8c8d", marginBottom: 20, textAlign: "center" },
  input: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 15,
    fontSize: 16,
    height: 150,
    textAlignVertical: "top",
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 3,
  },
  button: {
    backgroundColor: "#3498db",
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
    shadowColor: "#3498db",
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 4,
  },
  buttonText: { color: "#fff", fontWeight: "600", fontSize: 16 },
});
