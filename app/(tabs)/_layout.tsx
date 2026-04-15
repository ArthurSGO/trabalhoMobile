import { Tabs } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";

const corPrincipal = "#2e7d6e";
const corInativa = "#8aa39d";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: corPrincipal,
        tabBarInactiveTintColor: corInativa,
        tabBarStyle: {
          height: 64,
          paddingBottom: 8,
          paddingTop: 6,
          backgroundColor: "#ffffff",
          borderTopColor: "#d7e2df",
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Início",
          tabBarIcon: ({ color }) => <FontAwesome name="home" size={22} color={color} />,
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          title: "Carrinho",
          tabBarIcon: ({ color }) => <FontAwesome name="shopping-cart" size={22} color={color} />,
        }}
      />
      <Tabs.Screen
        name="ticket"
        options={{
          title: "Bilhetes",
          tabBarIcon: ({ color }) => <FontAwesome name="ticket" size={22} color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Perfil",
          tabBarIcon: ({ color }) => <FontAwesome name="user" size={22} color={color} />,
        }}
      />
    </Tabs>
  );
}
