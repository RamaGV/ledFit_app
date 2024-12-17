// App.tsx
import React from "react";
import { ExpoRoot } from "expo-router";
import { NativeWindStyleSheet } from "nativewind";

NativeWindStyleSheet.setOutput({
  default: "native",
});

export default function App() {
  // Crea el contexto de la carpeta "app"
  const ctx = require.context("./app");

  // Pasa el contexto al ExpoRoot
  return (
    <>
      <ExpoRoot context={ctx} />
    </>
  );
}
