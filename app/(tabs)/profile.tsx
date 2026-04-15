import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <View style={styles.avatarContainer}>
          <Ionicons name="person-circle-outline" size={110} color="#8aa39d" />
        </View>
        <Text style={styles.nome}>Arthur Soares Gardim</Text>
        <Text style={styles.bio}>RA: 14526</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f7f6",
    justifyContent: "center",
    padding: 20,
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 24,
    alignItems: "center",
  },

  avatarContainer: {
    width: 110,
    height: 110,
    borderRadius: 55,
    marginBottom: 14,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#edf3f1",
  },

  nome: {
    fontSize: 24,
    fontWeight: "700",
    color: "#1f2a37",
  },

  bio: {
    fontSize: 15,
    color: "#5c6b73",
    marginTop: 6,
  },
});
