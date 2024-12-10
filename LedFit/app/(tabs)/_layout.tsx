// app/(tabs)/_layout.tsx
import { Tabs } from "expo-router";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#121212",
          borderTopColor: "#1E1E1E",
        },
        tabBarActiveTintColor: "#7B61FF",
        tabBarInactiveTintColor: "#888",
        tabBarBackground: undefined, // Puedes agregar un fondo si lo deseas
      }}
    >
      <Tabs.Screen
        name="index" // Corresponde a app/(tabs)/index.tsx
        options={{
          title: "Inicio",
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="entrenar" // Corresponde a app/(tabs)/entrenar.tsx
        options={{
          title: "Entrenar",
          tabBarIcon: ({ color }) => (
            <Ionicons name="play-circle" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile" // Corresponde a app/(tabs)/explore.tsx
        options={{
          title: "Perfil",
          tabBarIcon: ({ color }) => (
            <Ionicons name="person-circle" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
