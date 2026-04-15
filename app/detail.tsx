import React, { useEffect } from "react";
import { useRouter, useLocalSearchParams } from "expo-router"
import { Ionicons } from '@expo/vector-icons';
import { useState } from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { getAuthenticated } from "./auth";
import { useCart } from "./cartContext";

export default function DetailScreen() {
      const router = useRouter();
  
      useEffect(() => {
          if (!getAuthenticated()) {
              router.replace('/login');
          }
      }, []);
  
  const params = useLocalSearchParams();
  const evento = JSON.parse(params.evento as string);

  const [mensagem, setMensagem] = useState('');
  const [visivel, setVisivel] = useState(false);

  const { carrinho, adicionar, remover } = useCart();
  const garantido = carrinho.some(e => e.titulo === evento.titulo);

  const mostrarToast = (texto: string) => {
    setMensagem(texto);
    setVisivel(true);

    setTimeout(() => {
      setVisivel(false);
    }, 1500);
  };

  const handlePress = () => {
    const novoValor = !garantido;

      if (novoValor) {
        adicionar(evento);
            mostrarToast('Ingresso adicionado ao carrinho!');
      } else {
        mostrarToast('Ingresso removido do carrinho.');
        remover(evento.titulo);
      }
  };

  return (
    <SafeAreaView style={styles.container}>

        {visivel && (
          <View style={[styles.toast, {backgroundColor: !garantido ? '#b00': '#0b0'}]}>
            <Text style={styles.toastTexto}>{mensagem}</Text>
          </View>
        )}

        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()} style={styles.botaoVoltar}>
            <Ionicons name="arrow-back" size={24} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.tituloHeader}>{evento.titulo}</Text>
        </View>

      <ScrollView showsVerticalScrollIndicator={false}>

        <Image source={{ uri: evento.imagem }} style={styles.imagem} />

        <View style={styles.content}>

          <Text style={styles.titulo}>{evento.titulo}</Text>

          <View style={styles.cardInfo}>
            <Text style={styles.label}><View/><Ionicons name="calendar-sharp" size={20} color="#222fff"/> Data:</Text>
            <Text style={styles.valor}>{evento.data}</Text>

            <Text style={styles.label}><Ionicons name="pin-sharp" size={20} color="#b00"/> Local:</Text>
            <Text style={styles.valor}>{evento.local}</Text>

            <Text style={styles.label}>Valor:</Text>
            <Text style={styles.preco}>{evento.preco}</Text>
          </View>

          <View style={styles.cardDescricao}>
            <Text style={styles.subtitulo}>O Que Irá Acontecer?</Text>
            <Text style={styles.descricao}>
              {evento.descricao || "Sem descrição disponível para este evento."}
            </Text>
          </View>

          <TouchableOpacity style={[styles.botaoIngresso, { backgroundColor: garantido ? '#666' : '#0b0' }]}onPress={handlePress}>
            <Text style={styles.textoBotao}>
              {garantido ? 'Ingresso Já Garantido!' : 'Garantir Ingresso'}
            </Text>
          </TouchableOpacity>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f4f6f8",
    },

    imagem: {
        width: "100%",
        height: 320,
        backgroundColor: "#d9d9d9",
    },

    content: {
        padding: 20,
    },

    titulo: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#111111",
        marginBottom: 18,
    },

    cardInfo: {
        backgroundColor: "#ffffff",
        borderRadius: 16,
        padding: 18,
        marginBottom: 18,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.08,
        shadowRadius: 8,
        elevation: 4,
    },

    label: {
        fontSize: 15,
        fontWeight: "900",
        color: "#000",
        textTransform: "uppercase",
        marginBottom: 4,
        marginTop: 10,

    },

    valor: {
        fontSize: 16,
        fontWeight: "500",
        color: "#222222",
    },

    preco: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#0b0",
        marginTop: 2,
    },

    cardDescricao: {
        backgroundColor: "#ffffff",
        borderRadius: 16,
        padding: 18,
        marginBottom: 24,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.08,
        shadowRadius: 8,
        elevation: 4,
    },

    subtitulo: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#111111",
        marginBottom: 10,
    },

    descricao: {
        fontSize: 16,
        color: "#444444",
        lineHeight: 24,
    },

    textoBotao: {
        color: "#ffffff",
        fontSize: 16,
        fontWeight: "bold",
    },

    botaoIngresso: {
        borderRadius: 14,
        paddingVertical: 14,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 20,
    },

    botaoVoltar: {
        backgroundColor: "#666",
        borderRadius: 14,
        paddingVertical: 14,
        alignItems: "center",
        justifyContent: "center",
        marginRight: 12,
    },

    toast: {
        position: 'absolute',
        top: 50,
        alignSelf: 'center',
        backgroundColor: 'rgba(0,210,0,0.8)',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 20,
        zIndex: 999
    },

    toastTexto: {
        color: '#fff'
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#666",
        paddingHorizontal: 16,
        paddingVertical: 14,
    },
    tituloHeader: {
        color: "#fff",
        fontSize: 24,
        fontWeight: "bold",
        flex: 1,
    },
});