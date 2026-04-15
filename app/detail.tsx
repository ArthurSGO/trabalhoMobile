import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Event } from "../types/event";

export default function DetailScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const evento = JSON.parse(params.evento as string) as Event;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.botaoVoltar} onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={20} color="#ffffff" />
        </TouchableOpacity>
        <Text style={styles.tituloHeader} numberOfLines={1}>
          {evento.titulo}
        </Text>
      </View>

      <ScrollView contentContainerStyle={styles.conteudo}>
        <Image source={{ uri: evento.imagem }} style={styles.imagem} />
        <Text style={styles.titulo}>{evento.titulo}</Text>

        <View style={styles.card}>
          <Text style={styles.rotulo}>Data e Hora</Text>
          <Text style={styles.valor}>{evento.data}</Text>
          <Text style={[styles.rotulo, styles.espaco]}>Localização</Text>
          <Text style={styles.valor}>{evento.local}</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.subtitulo}>Sobre o evento</Text>
          <Text style={styles.descricao}>
            {evento.descricao} Este evento foi preparado para uma apresentação dinâmica com conteúdo leve,
            ambiente agradável e foco em experiência do público.
          </Text>
        </View>

        <TouchableOpacity style={styles.botao} onPress={() => router.push("/(tabs)/cart")}>
          <Text style={styles.botaoTexto}>Garantir Ingresso</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#eef1ff" },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    backgroundColor: "#3f51b5",
    paddingHorizontal: 14,
    paddingVertical: 12,
  },
  botaoVoltar: { width: 36, height: 36, borderRadius: 18, alignItems: "center", justifyContent: "center" },
  tituloHeader: { color: "#fff", fontSize: 18, fontWeight: "700", flex: 1 },
  conteudo: { padding: 16, paddingBottom: 42 },
  imagem: { width: "100%", height: 220, borderRadius: 14, marginBottom: 14 },
  titulo: { fontSize: 24, fontWeight: "700", color: "#1f2b5c", marginBottom: 12 },
  card: { backgroundColor: "#fff", borderRadius: 14, padding: 14, marginBottom: 14 },
  rotulo: { fontSize: 13, fontWeight: "700", color: "#3f51b5", textTransform: "uppercase" },
  valor: { fontSize: 16, color: "#37405f", marginTop: 4 },
  espaco: { marginTop: 12 },
  subtitulo: { fontSize: 18, fontWeight: "700", color: "#1f2b5c", marginBottom: 8 },
  descricao: { fontSize: 15, color: "#505a7a", lineHeight: 22 },
  botao: { backgroundColor: "#3f51b5", borderRadius: 12, alignItems: "center", paddingVertical: 14 },
  botaoTexto: { color: "#fff", fontSize: 16, fontWeight: "700" },
});
