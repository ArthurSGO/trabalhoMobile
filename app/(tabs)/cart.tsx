import { useRouter } from "expo-router";
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { DADOS_EVENTOS } from "../../mocks/event";
import { Event } from "../../types/event";

const ITENS_CARRINHO: Event[] = [DADOS_EVENTOS[0], DADOS_EVENTOS[1]];

export default function CartScreen() {
  const router = useRouter();
  const quantidade = ITENS_CARRINHO.length;
  const totalFixo = "R$ 210,00";

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>Meu Carrinho ({quantidade} itens)</Text>

      <FlatList
        data={ITENS_CARRINHO}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.lista}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.imagem }} style={styles.imagem} />
            <View style={styles.info}>
              <Text style={styles.nome}>{item.titulo}</Text>
              <Text style={styles.texto}>{item.data}</Text>
              <Text style={styles.texto}>{item.local}</Text>
              <Text style={styles.preco}>{item.preco}</Text>
            </View>
          </View>
        )}
      />

      <View style={styles.rodape}>
        <View>
          <Text style={styles.totalLabel}>Total</Text>
          <Text style={styles.totalValor}>{totalFixo}</Text>
        </View>
        <TouchableOpacity style={styles.botao} onPress={() => router.push("/(tabs)/ticket")}>
          <Text style={styles.botaoTexto}>Finalizar Compra</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f7f6",
  },

  titulo: {
    fontSize: 24,
    fontWeight: "700",
    color: "#1f2a37",
    paddingHorizontal: 16,
    paddingTop: 8,
  },

  lista: {
    padding: 16,
    paddingBottom: 140,
    gap: 12,
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 14,
    overflow: "hidden",
  },

  imagem: {
    width: "100%",
    height: 130,
  },

  info: {
    padding: 12,
  },

  nome: {
    fontSize: 17,
    fontWeight: "700",
    color: "#1f2a37",
  },

  texto: {
    color: "#5c6b73",
    marginTop: 3,
  },

  preco: {
    fontSize: 16,
    fontWeight: "700",
    color: "#2e7d6e",
    marginTop: 6,
  },

  rodape: {
    position: "absolute",
    left: 16,
    right: 16,
    bottom: 20,
    backgroundColor: "#fff",
    borderRadius: 14,
    padding: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  totalLabel: {
    color: "#5c6b73",
    fontSize: 14,
  },

  totalValor: {
    color: "#1f2a37",
    fontSize: 20,
    fontWeight: "700",
  },

  botao: {
    backgroundColor: "#e57a44",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 18,
  },

  botaoTexto: {
    color: "#fff",
    fontWeight: "700",
  },
});
