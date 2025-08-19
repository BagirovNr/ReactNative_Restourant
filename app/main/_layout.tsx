import { Ionicons } from "@expo/vector-icons"; 
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StatusBar } from "react-native";
import GiveFeedbackScreen from "../main/GiveFeedbackScreen.jsx"; 
import HomeScreen from "../main/home";

const Tab = createBottomTabNavigator();

export default function TabLayout() {
  return (
    <>
    <StatusBar barStyle='dark-content' />
    <Tab.Navigator
    screenOptions={({ route }) => ({
      headerShown: false,
        tabBarShowLabel: true,
        tabBarStyle: { backgroundColor: "#fff", paddingBottom: 5, height: 60 },
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = "home";
          } else if (route.name === "Feedback") {
            iconName = "chatbubble-ellipses";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#3498db",
        tabBarInactiveTintColor: "#95a5a6",
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Feedback" component={GiveFeedbackScreen} />
    </Tab.Navigator>
        </>
  );
}
