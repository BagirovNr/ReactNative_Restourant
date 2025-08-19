import { useRouter } from "expo-router";
import { useState } from "react";
import { StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Login() {
  const router = useRouter();
  const [name, setName] = useState("");

  return (
	<>
	<StatusBar barStyle='dark-content' />
	
    <View style={styles.container}>
      <Text style={styles.title}>Welcome 👋</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        placeholderTextColor="#aaa"
        value={name}
        onChangeText={setName}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push({ pathname: "/main/home", params: { name } })}
      >
        <Text style={styles.buttonText}>Go to Menu</Text>
      </TouchableOpacity>
    </View>
</>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", padding: 20, backgroundColor: "#f5f6fa" },
  title: { fontSize: 28, fontWeight: "700", marginBottom: 20 },
  input: { width: "100%", padding: 15, borderRadius: 12, backgroundColor: "#fff", marginBottom: 15, fontSize: 16 },
  button: { width: "100%", padding: 15, borderRadius: 12, backgroundColor: "#3498db", alignItems: "center" },
  buttonText: { color: "#fff", fontWeight: "600", fontSize: 16 },
});
