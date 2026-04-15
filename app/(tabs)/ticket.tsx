import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { DADOS_EVENTOS } from "../../mocks/event";

const BILHETES = [
  {
    id: "b1",
    titulo: DADOS_EVENTOS[0].titulo,
    data: DADOS_EVENTOS[0].data,
    local: DADOS_EVENTOS[0].local,
    imagem: DADOS_EVENTOS[0].imagem,
    codigo: "TKT-2026-A1B2",
  },
  {
    id: "b2",
    titulo: DADOS_EVENTOS[2].titulo,
    data: DADOS_EVENTOS[2].data,
    local: DADOS_EVENTOS[2].local,
    imagem: DADOS_EVENTOS[2].imagem,
    codigo: "TKT-2026-C3D4",
  },
];

export default function TicketScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>Meus Bilhetes ({BILHETES.length} bilhetes)</Text>

      <FlatList
        data={BILHETES}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.lista}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.imagem }} style={styles.imagem} />
            <View style={styles.info}>
              <Text style={styles.nome}>{item.titulo}</Text>
              <Text style={styles.texto}>{item.data}</Text>
              <Text style={styles.texto}>{item.local}</Text>
              <Text style={styles.codigo}>{item.codigo}</Text>
            </View>
          </View>
        )}
      />
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

  codigo: {
    marginTop: 10,
    color: "#2e7d6e",
    fontWeight: "700",
  },
});
