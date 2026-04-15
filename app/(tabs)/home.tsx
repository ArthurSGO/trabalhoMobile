import { Text, TextInput, View, Image, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Event } from "../../types/event";
import { DADOS_EVENTOS } from "../../mocks/event";
import { useRouter } from "expo-router";
import React, {useEffect} from "react";
import { getAuthenticated } from "../auth";

export default function HomeScreen() {
  const router = useRouter();

  useEffect(() => {
    if (!getAuthenticated()) {
      router.replace("/login");
    }
  }, []);

  const handleNavigateDetail = (item: Event) => {
    router.push({
      pathname: "/detail",
      params: {
        evento: JSON.stringify(item)
      }
    });
  };

  const renderizarCard = ({ item }: { item: Event }) => {
    return (
      <TouchableOpacity onPress={() => handleNavigateDetail(item)}>
        <View style={styles.cardContainer}>
          <Image source={{ uri: item.imagem }} style={styles.cardImagem} />

          <View style={styles.cardInfo}>
            <Text style={styles.cardTitulo}>{item.titulo}</Text>
            <Text style={styles.cardTextoSecundario}>{item.data}</Text>
            <Text style={styles.cardTextoSecundario}>{item.local}</Text>
            <Text style={styles.cardPreco}>{item.preco}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.tituloTela}>EVENTOS</Text>

        <TextInput
          style={styles.inputBusca}
          placeholder="Buscar eventos..."
          placeholderTextColor="#666"
        />
      </View>

      <FlatList
        data={DADOS_EVENTOS}
        keyExtractor={(item) => item.id}
        renderItem={renderizarCard}
        contentContainerStyle={styles.lista}
      />
    </SafeAreaView>
  );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    header: {
        padding: 16,
        backgroundColor: '#ffffff',
        borderBottomWidth: 1,
        borderColor: '#e0e0e0',
    },
    tituloTela: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#000000',
        marginBottom: 12,
    },
    inputBusca: {
        backgroundColor: '#f0f0f0',
        height: 45,
        borderRadius: 8,
        paddingHorizontal: 16,
        color: '#000000',
    },
    lista: {
        padding: 16,
    },
    cardContainer: {
        backgroundColor: '#ffffff',
        borderRadius: 8,
        marginBottom: 16,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: '#e0e0e0',
    },
    cardImagem: {
        width: '100%',
        height: 150,
        backgroundColor: '#e0e0e0',
    },
    cardInfo: {
        padding: 16,
    },
    cardTitulo: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000000',
        marginBottom: 6,
    },
    cardTextoSecundario: {
        fontSize: 14,
        color: '#666666',
        marginBottom: 4,
    },
    cardPreco: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000000',
        marginTop: 8,
    }
});