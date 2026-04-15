import { Tabs } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";


export default function TabLayout() {
    return(
        <Tabs screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: "#007AFF",
            tabBarInactiveTintColor: "#8e8e93"
            }}>
            <Tabs.Screen name="home" options={{
                title: "Home",
                tabBarActiveTintColor: "#007AFF",
                tabBarInactiveTintColor: "#8e8e93",
            tabBarIcon: ({ color }) => <FontAwesome name="home" size={24} color={color} />
                }}/>
            <Tabs.Screen name="cart" options={{
                title: "Meu Carrinho",
                tabBarActiveTintColor: "#007AFF",
                tabBarInactiveTintColor: "#8e8e93",
                tabBarIcon: ({ color }) => <FontAwesome name="shopping-cart" size={24} color={color} />
            }}/>
            <Tabs.Screen name="ticket" options={{
                title: "Meus Bilhetes",
                tabBarActiveTintColor: "#007AFF",
                tabBarInactiveTintColor: "#8e8e93",
                tabBarIcon: ({ color }) => <FontAwesome name="ticket" size={24} color={color} />
            }}/>
            <Tabs.Screen name="profile" options={{
                title: "Perfil",
                tabBarActiveTintColor: "#007AFF",
                tabBarInactiveTintColor: "#8e8e93",
                tabBarIcon: ({ color }) => <FontAwesome name="user" size={24} color={color} />
            }}/>
        </Tabs>
    )
}
