import { Stack } from "expo-router";
import { CartProvider } from "./cartContext";
import { TicketProvider } from "./ticketContext";

export default function RootLayout(){
    return(
        <CartProvider>
             <TicketProvider>
                <Stack screenOptions={{headerShown: false,}}>
                    <Stack.Screen name="(tabs)"/>
                    <Stack.Screen name="login" />
                    <Stack.Screen name="cart" />
                    <Stack.Screen name="detail" />
                    <Stack.Screen name="ticket" />
                </Stack>
            </TicketProvider>    
        </CartProvider>
    )
}