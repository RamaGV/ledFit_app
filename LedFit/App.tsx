// App.tsx
import React from "react";
import { ExpoRoot } from "expo-router";
import { View, Text } from "react-native";

export default function App() {
  // Crea el contexto de la carpeta "app"
  const ctx = require.context("./app");

  // Pasa el contexto al ExpoRoot
  return (
    <>
      <ExpoRoot context={ctx} />
      {/* <View className="p-4 bg-gray-950">
        <Text>¡Hola, mundo!</Text>
      </View> */}
    </>
  );
}
