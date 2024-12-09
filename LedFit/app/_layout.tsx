// app/_layout.tsx
import React from "react";
import { Stack } from "expo-router";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useColorScheme } from "react-native";

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      {/* El Stack principal muestra el (tabs) como pantalla inicial */}
      <Stack screenOptions={{ headerShown: false }}>
        {/* (tabs) es una carpeta, así que expo-router lo interpretará como una pantalla/grupo */}
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="featured-workout" />
        {/* Puedes agregar más pantallas globales aquí si las requieres */}
      </Stack>
    </ThemeProvider>
  );
}
