import { useEffect, useState } from "react";
import { useRouter } from "expo-router";
import { getAuthenticated } from "../auth";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from '@expo/vector-icons';
import { useCart } from "../cartContext";
import { useTicket } from "../ticketContext"


export default function CartScreen(){
    const router = useRouter();
    const { carrinho, remover, total, limparCarrinho } = useCart();
    const { adicionarTickets } = useTicket();
    const carrinhoVazio = carrinho.length === 0;
    const [toast, setToast] = useState({visivel: false, mensagem: "",});

    useEffect(() => {
        if (!getAuthenticated()) {
            router.replace('/login');
        }
    }, []);

    const handlePress = () => {
        if (carrinhoVazio) return;

        adicionarTickets(carrinho);
        limparCarrinho();

        mostrarToast("Compra realizada com sucesso!");

        setTimeout(() => {
            router.push("/ticket");
        }, 1500);
    };

    const mostrarToast = (texto: string) => {
        setToast({ visivel: true, mensagem: texto });
        
        setTimeout(() => {
            setToast({ visivel: false, mensagem: "" });
            router.push("/ticket")
        }, 1500);
    };

    return(
        <SafeAreaView>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()} style={styles.botaoVoltar}>
                    <Ionicons name="arrow-back" size={24} color="#fff" />
                </TouchableOpacity>
                <Text style={styles.tituloHeader}> Meu Carrinho ({carrinho.length})</Text>
            </View>
            {toast.visivel && (
                <View style={styles.toast}>
                    <Text style={styles.toastTexto}>{toast.mensagem}</Text>
                </View>
            )}
            <ScrollView contentContainerStyle={{paddingBottom: 120}}>
                {carrinho.map((item, index) => (
                    <View key={index} style={styles.card}>
                    <Image source={{ uri: item.imagem }} style={styles.imagem} />

                    <View style={styles.info}>
                        <Text style={styles.titulo}>{item.titulo}</Text>
                        <Text>{item.data}</Text>
                        <Text>{item.local}</Text>
                        <Text style={styles.preco}>{item.preco}</Text>
                        <TouchableOpacity onPress={() => remover(item.titulo)}>
                            <Ionicons name="trash" size={24} color="#d13838" />
                        </TouchableOpacity>
                    </View>
                    </View>
                ))}
                <View style={styles.totalContainer}>
                    <Text style={styles.totalTexto}>Total:</Text>
                    <Text style={styles.totalValor}> R$ {total.toFixed(2)}</Text>
                </View>
                <TouchableOpacity style={[styles.botaoComprar, { backgroundColor: carrinhoVazio ? '#666' : '#0b0' }]}onPress={handlePress}>
                    <Text style={styles.textoBotao}>
                        {carrinhoVazio ? 'Sem Itens' : 'Finalizar Compra'}
                    </Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f4f6f8",
    },
    botaoVoltar: {
        backgroundColor: "#666",
        borderRadius: 14,
        paddingVertical: 14,
        alignItems: "center",
        justifyContent: "center",
        marginRight: 12,
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

    titulo: {
        fontSize: 18,
        fontWeight: "bold",
    },

    preco: {
        color: "#0b0",
        fontWeight: "bold",
        marginTop: 4,
    },
    totalContainer: {
        backgroundColor: "#fff",
        padding: 20,
        margin: 16,
        borderRadius: 12,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        elevation: 3,
    },

    totalTexto: {
        fontSize: 18,
        fontWeight: "bold",
    },

    totalValor: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#0b0",
    },
    botaoComprar: {
        borderRadius: 14,
        paddingVertical: 14,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 20,
    },
    textoBotao: {
        color: "#ffffff",
        fontSize: 16,
        fontWeight: "bold",
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
})    
