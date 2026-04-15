import { useTicket } from "../ticketContext";
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TicketScreen() {
  const { tickets } = useTicket();

  return (
    <SafeAreaView style={styles.container}>
      
      <Text style={styles.titulo}>
        Meus Bilhetes ({tickets.length})
      </Text>

      <ScrollView>
        {tickets.map((item, index) => (
          <View key={index} style={styles.card}>
            
            <Image source={{ uri: item.imagem }} style={styles.imagem} />

            <View style={styles.info}>
              <Text style={styles.nome}>{item.titulo}</Text>
              <Text>{item.data}</Text>
              <Text>{item.local}</Text>

              <Text style={styles.codigo}>
                {item.codigo}
              </Text>
            </View>

          </View>
        ))}
      </ScrollView>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
        container: {
        flex: 1,
        backgroundColor: "#f4f6f8",
    },

    titulo: {
        fontSize: 24,
        fontWeight: "bold",
        margin: 16,
    },

    card: {
        backgroundColor: "#fff",
        margin: 16,
        borderRadius: 12,
        overflow: "hidden",
        elevation: 3,
    },

    imagem: {
        width: "100%",
        height: 150,
    },

    info: {
        padding: 12,
    },

    nome: {
        fontSize: 18,
        fontWeight: "bold",
    },

    codigo: {
        marginTop: 10,
        fontWeight: "bold",
        color: "#2f6fed",
    },
});