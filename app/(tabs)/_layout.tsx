import { Tabs } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";

const corPrincipal = "#3f51b5";
const corInativa = "#9aa1b5";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: corPrincipal,
        tabBarInactiveTintColor: corInativa,
        tabBarStyle: { height: 64, paddingBottom: 8, paddingTop: 6 },
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
