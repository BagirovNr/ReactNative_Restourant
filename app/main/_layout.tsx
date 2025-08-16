import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../main/home";


const Tab = createBottomTabNavigator()
export default function TabLayout() {

  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
    </Tab.Navigator>
  );
}
