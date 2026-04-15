import { useRouter } from "expo-router";
import { FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { DADOS_EVENTOS } from "../../mocks/event";
import { Event } from "../../types/event";

export default function HomeScreen() {
  const router = useRouter();

  const abrirDetalhes = (evento: Event) => {
    router.push({ pathname: "/detail", params: { evento: JSON.stringify(evento) } });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.titulo}>Easy Ticket</Text>
        <TextInput placeholder="Buscar evento" placeholderTextColor="#9aa1b5" style={styles.input} />
      </View>

      <FlatList
        data={DADOS_EVENTOS}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.lista}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card} onPress={() => abrirDetalhes(item)}>
            <Image source={{ uri: item.imagem }} style={styles.imagem} />
            <View style={styles.cardConteudo}>
              <Text style={styles.nome}>{item.titulo}</Text>
              <Text style={styles.info}>{item.data}</Text>
              <Text style={styles.info}>{item.local}</Text>
              <Text style={styles.preco}>{item.preco}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eef1ff",
  },

  header: {
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 14,
  },

  titulo: {
    fontSize: 28,
    fontWeight: "700",
    color: "#1f2b5c",
    marginBottom: 12,
  },

  input: {
    backgroundColor: "#ffffff",
    borderRadius: 12,
    height: 44,
    paddingHorizontal: 14,
    color: "#1f2b5c",
  },

  lista: {
    padding: 16,
    paddingBottom: 120,
    gap: 12,
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 14,
    overflow: "hidden",
  },

  imagem: {
    width: "100%",
    height: 150,
    backgroundColor: "#d8dcf2",
  },

  cardConteudo: {
    padding: 12,
  },

  nome: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1f2b5c",
    marginBottom: 6,
  },

  info: {
    fontSize: 14,
    color: "#545d7a",
    marginBottom: 2,
  },

  preco: {
    fontSize: 16,
    fontWeight: "700",
    color: "#3f51b5",
    marginTop: 8,
  },
});