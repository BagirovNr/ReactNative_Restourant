import { useLocalSearchParams } from "expo-router";
import { SectionList, StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  const { name } = useLocalSearchParams();

  const MENU_DATA = [
    {
      title: "Hot Drinks ☕",
      data: Array.from({ length: 10 }, (_, i) => `Hot drink ${i + 1}`),
    },
    {
      title: "Cold Drinks 🧊",
      data: Array.from({ length: 10 }, (_, i) => `Cold drink ${i + 1}`),
    },
    {
      title: "Snacks 🍪",
      data: Array.from({ length: 10 }, (_, i) => `Snack ${i + 1}`),
    },
    {
      title: "Desserts 🍰",
      data: Array.from({ length: 10 }, (_, i) => `Dessert ${i + 1}`),
    },
    {
      title: "Meals 🍔",
      data: Array.from({ length: 10 }, (_, i) => `Meal ${i + 1}`),
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>📋 Menu</Text>
      {name ? <Text style={styles.welcome}>Welcome, {name} 👋</Text> : null}

      <SectionList
        sections={MENU_DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => (
          <View style={styles.itemBox}>
            <Text style={styles.item}>{item}</Text>
          </View>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.section}>{title}</Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f5f6fa", paddingTop: 40, paddingHorizontal: 15 },
  header: { fontSize: 28, fontWeight: "700", textAlign: "center", marginBottom: 10 },
  welcome: { fontSize: 18, textAlign: "center", marginBottom: 20, color: "#34495e" },
  section: { fontSize: 20, fontWeight: "600", backgroundColor: "#dcdde1", paddingVertical: 8, paddingHorizontal: 12, borderRadius: 10, marginTop: 10 },
  itemBox: { backgroundColor: "#fff", padding: 12, marginVertical: 5, borderRadius: 10, shadowColor: "#000", shadowOpacity: 0.05, shadowRadius: 5, elevation: 2 },
  item: { fontSize: 16, color: "#34495e" },
});
