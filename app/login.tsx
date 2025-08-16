import { useRouter } from "expo-router";
import { Button, Text, View } from "react-native";

export default function Login() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", padding:20 }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Welcome to Login Page</Text>
      <Button title="Go to Home"  onPress={() => router.replace("/main/home")} />
          <Button title="Go Back" onPress={() => router.push("/")} />




    </View>
  );
}
