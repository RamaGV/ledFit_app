// app/_layout.tsx
import React from "react";
import { Stack } from "expo-router";
import { useColorScheme } from "react-native";
import { WorkoutsProvider } from "./context/WorkoutsContext";
import { ImagesMapProvider } from "./context/ImagesMapContext";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ImagesMapProvider>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <WorkoutsProvider>
          <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="(profile)" options={{ headerShown: false }} />
            <Stack.Screen name="(entrenar)" options={{ headerShown: false }} />
          </Stack>
        </WorkoutsProvider>
      </ThemeProvider>
    </ImagesMapProvider>
  );
}
