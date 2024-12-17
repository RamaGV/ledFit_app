// app/_layout.tsx
import React from "react";
import { Stack } from "expo-router";
import { useColorScheme } from "react-native";
import { UsersProvider } from "./context/UsersContext";
import { MqttProvider } from "./context/MqttContext";
import { WorkoutsProvider } from "./context/WorkoutsContext";
import { ImagesMapProvider } from "./context/ImagesMapContext";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";

export default function RootLayout() {
  const color = useColorScheme();

  return (
    <UsersProvider>
      <MqttProvider>
        <ImagesMapProvider>
          <WorkoutsProvider>
            <ThemeProvider value={color === "dark" ? DarkTheme : DefaultTheme}>
              <Stack screenOptions={{ headerShown: false }}>
                <Stack.Screen name="(tabs)" />
                <Stack.Screen name="(profile)" />
                <Stack.Screen name="(entrenar)" />
              </Stack>
            </ThemeProvider>
          </WorkoutsProvider>
        </ImagesMapProvider>
      </MqttProvider>
    </UsersProvider>
  );
}
