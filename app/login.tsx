import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { setAuthenticated } from "./auth";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const router = useRouter();

  const entrar = () => {
    if (!email || !senha) {
      return;
    }
    setAuthenticated(true);
    router.replace("/(tabs)/home");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.box}>
        <Ionicons name="ticket" size={54} color="#3f51b5" />
        <Text style={styles.titulo}>Entrar no Easy Ticket</Text>
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          placeholderTextColor="#9aa1b5"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor="#9aa1b5"
          secureTextEntry
          value={senha}
          onChangeText={setSenha}
        />
        <TouchableOpacity style={styles.botao} onPress={entrar}>
          <Text style={styles.botaoTexto}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: "#eef1ff", 
    justifyContent: "center", 
    padding: 20 
  },

  box: { 
    backgroundColor: "#fff", 
    borderRadius: 16, 
    padding: 22, 
    gap: 10 
  },

  titulo: { 
    fontSize: 23, 
    fontWeight: "700", 
    color: "#1f2b5c", 
    marginBottom: 6 
  },

  input: {
    height: 46,
    borderWidth: 1,
    borderColor: "#d3d8ee",
    borderRadius: 10,
    paddingHorizontal: 12,
    color: "#1f2b5c",
  },

  botao: { 
    marginTop: 6, 
    backgroundColor: "#3f51b5", 
    borderRadius: 10, 
    paddingVertical: 12, 
    alignItems: "center" 
  },
  
  botaoTexto: { 
    color: "#fff", 
    fontWeight: "700", 
    fontSize: 16 
  },
});
