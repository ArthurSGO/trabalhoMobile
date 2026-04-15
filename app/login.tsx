import { Text, View, StyleSheet, TextInput, TouchableOpacity, Pressable, KeyboardAvoidingView, Platform, Keyboard } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useState, useEffect } from "react";
import { useRouter } from "expo-router";
import { getAuthenticated, setAuthenticated } from "./auth";

export default function LoginScreen () {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const router = useRouter();

    useEffect(() => {
        // Se já estiver autenticado, redireciona direto para home e impede voltar para login
        if (getAuthenticated()) {
            router.replace("/(tabs)/home");
        }
    }, []);

    const handleLogin = () => {
        // Simple validation
        if (email.trim() && password.trim()) {
            // Auth fake (aqui você pode chamar API de backend)
            setAuthenticated(true);

            // Substitui a rota para não permitir retorno à tela de login pelo botão "voltar"
            router.replace("/(tabs)/home");
        } else {
            alert("Preencha todos os campos");
        }
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 0}
            style={styles.container}
        >
            <SafeAreaView style={styles.safeArea}>
                <View style={styles.innerContainer}>
                <Ionicons
                    name="person"
                    size={64}
                    color="#007aff"
                    style={styles.logo}
                />

                <Text style={styles.title}>Acesse sua conta</Text>
                <Text style={styles.label}>E-mail</Text>
                <TextInput
                    style={styles.inputStandalone}
                    keyboardType="email-address"
                    placeholder="Digite seu email"
                    value={email}
                    onChangeText={setEmail}
                />
                <Text style={styles.label}>Senha</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        secureTextEntry={!isPasswordVisible}
                        placeholder="Digite sua senha"
                        value={password}
                        onChangeText={setPassword}
                    />
                    <Pressable 
                        onPressIn={() => setIsPasswordVisible(true)}
                        onPressOut={() => setIsPasswordVisible(false)}
                        style={styles.icon}
                    >
                        <Ionicons
                            name="eye"
                            size={24}
                            color="#007aff"
                        />
                    </Pressable>
                </View>
                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                    <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>
                    </View>
                </SafeAreaView>
        </KeyboardAvoidingView>
    );
}
    const styles = StyleSheet.create({
        container: {
            flex: 1,   
            backgroundColor: "#f0f0f0",
            justifyContent: "center",   
            alignItems: "center"
        },
        innerContainer: {
            width: "80%",
            justifyContent: "center",
            alignItems: "center",
            paddingHorizontal: 20,
            paddingVertical: 40,
            backgroundColor: "#fff",
            borderRadius: 10,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 4,
            elevation: 5,
        },
        title: {
            fontSize: 24,
            fontWeight: "bold",
            marginBottom: 20,
        },
        label: {
            alignSelf: "flex-start",
            fontSize: 16,
            marginBottom: 5,
        },
        input: {
            flex: 1,
            height: 50, 
            paddingHorizontal: 10,
        },
        inputStandalone: {
            width: "100%",
            height: 50,
            borderWidth: 1,
            borderColor: "#ccc",
            borderRadius: 5,
            paddingHorizontal: 10,
            marginBottom: 20,
        },
        inputContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            width: '100%',
            borderWidth: 1,
            borderColor: '#ccc',
            borderRadius: 5,
            marginBottom: 20,
        },
        icon: {
            paddingHorizontal: 10,
        },
        button: {
            width: "100%",
            height: 50,
            backgroundColor: "#007bff",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 5,
            marginTop: 10,
        },
        logo: {
            marginBottom: 20,
        },
        buttonText: {
            color: "#fff",
            fontSize: 18,
            fontWeight: "bold",
        },
        safeArea: {
            flex: 1,
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
        },
    });


