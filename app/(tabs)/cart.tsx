import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useMemo, useState } from "react";
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { DADOS_EVENTOS } from "../../mocks/event";
import { Event } from "../../types/event";

export default function CartScreen() {
  const router = useRouter();
  const [itens, setItens] = useState<Event[]>([DADOS_EVENTOS[0], DADOS_EVENTOS[1]]);
  const quantidade = itens.length;
  const totalFixo = useMemo(() => (quantidade === 0 ? "R$ 0,00" : "R$ 210,00"), [quantidade]);

  const removerItem = (id: string) => {
    setItens((anterior) => anterior.filter((item) => item.id !== id));
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>Meu Carrinho ({quantidade} itens)</Text>

      <FlatList
        data={itens}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.lista}
        ListEmptyComponent={<Text style={styles.vazio}>Seu carrinho está vazio.</Text>}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.imagem }} style={styles.imagem} />
            <View style={styles.info}>
              <Text style={styles.nome}>{item.titulo}</Text>
              <Text style={styles.texto}>{item.data}</Text>
              <Text style={styles.texto}>{item.local}</Text>
              <Text style={styles.preco}>{item.preco}</Text>
              <TouchableOpacity style={styles.lixeira} onPress={() => removerItem(item.id)}>
                <Ionicons name="trash" size={20} color="#b23a48" />
              </TouchableOpacity>
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
    backgroundColor: "#eef1ff",
  },

  titulo: {
    fontSize: 24,
    fontWeight: "700",
    color: "#1f2b5c",
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
    color: "#1f2b5c",
  },

  texto: {
    color: "#4e5676",
    marginTop: 3,
  },

  preco: {
    fontSize: 16,
    fontWeight: "700",
    color: "#3f51b5",
    marginTop: 6,
  },

  lixeira: {
    marginTop: 8,
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
  },

  vazio: {
    textAlign: "center",
    color: "#4e5676",
    marginTop: 30,
    fontSize: 16,
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
    color: "#4e5676",
    fontSize: 14,
  },

  totalValor: {
    color: "#1f2b5c",
    fontSize: 20,
    fontWeight: "700",
  },

  botao: {
    backgroundColor: "#3f51b5",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 18,
  },

  botaoTexto: {
    color: "#fff",
    fontWeight: "700",
  },
});