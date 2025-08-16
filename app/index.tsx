import { useRouter } from "expo-router";
import { Button, Image, ImageBackground, StatusBar, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LandingPage() {
  const router = useRouter();

  return (
    <>
    <StatusBar barStyle={"dark-content"} backgroundColor={'red'} />
    <ImageBackground style={styles.backgroundImage} resizeMode="contain" blurRadius={1}  source={require('@/assets/images/background.jpeg' )}>
    <SafeAreaView  style={styles.container}>
      <Image resizeMode="stretch" style={styles.logo} source={require('@/assets/images/png.png')  }/>
      <Text style={styles.welcomeText}>Welcome to Fryday</Text>
    </SafeAreaView >
      <Button title="Go to Login" onPress={() => router.replace("./login")} /> 
    </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
  },
  container: {
    flex: 0.1,                   
    justifyContent: "center", 
    alignItems: "center", 
    flexDirection:'row'
  },
  welcomeText: {
    textAlign: "center",
    fontSize: 24,
    color: "#333",          
    fontWeight: "bold",
  },
  logo:{
    width:150,
    height:60,
    marginBottom:4
  }
});

