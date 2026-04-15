import { useRouter } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { setAuthenticated } from "../auth";

export default function ProfileScreen() {
  const router = useRouter();

  const sair = () => {
    setAuthenticated(false);
    router.replace("/login");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Image
          source={{ uri: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&w=400&q=60" }}
          style={styles.imagem}
        />
        <Text style={styles.nome}>Arthur</Text>
        <Text style={styles.bio}>Aluno do projeto Easy Ticket</Text>
        <TouchableOpacity style={styles.botao} onPress={sair}>
          <Text style={styles.botaoTexto}>Sair</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#eef1ff", justifyContent: "center", padding: 20 },
  card: { backgroundColor: "#fff", borderRadius: 16, padding: 24, alignItems: "center" },
  imagem: { width: 110, height: 110, borderRadius: 55, marginBottom: 14 },
  nome: { fontSize: 24, fontWeight: "700", color: "#1f2b5c" },
  bio: { fontSize: 15, color: "#4e5676", marginTop: 6 },
  botao: { marginTop: 18, backgroundColor: "#3f51b5", paddingVertical: 10, paddingHorizontal: 26, borderRadius: 12 },
  botaoTexto: { color: "#fff", fontWeight: "700" },
});
