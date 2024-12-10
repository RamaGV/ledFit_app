// app/activity-timer.tsx
import React, { useState } from "react";
import { View, Text, Pressable, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function ActivityTimerScreen() {
  const router = useRouter();
  const [time, setTime] = useState(15);
  const [paused, setPaused] = useState(false);

  // Datos de ejemplo
  const exercise = {
    title: "Side Plank",
    image: require("../../assets/hathaYogaImage.png"),
  };

  // Podrías usar un useEffect para decrementar el tiempo cada segundo si no está pausado, etc.

  return (
    <View className="flex-1 bg-[#121212]">
      {/* Header con botón de atrás */}
      <View className="pt-10 px-4 flex-row items-¿center">
        <Pressable onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={24} color="#FFFFFF" />
        </Pressable>
      </View>

      {/* Imagen principal */}
      <View className="items-center mt-5">
        <Image
          source={exercise.image}
          style={{ width: "90%", height: 200, borderRadius: 16 }}
          resizeMode="cover"
        />
      </View>

      {/* Nombre del ejercicio */}
      <Text className="text-white text-xl font-semibold text-center mt-5">
        {exercise.title}
      </Text>

      {/* Contador circular simulado */}
      <View className="mt-10 items-center">
        <View className="w-40 h-40 rounded-full border-8 border-[#7B61FF] items-center justify-center">
          <Text className="text-white text-3xl font-bold">{time}</Text>
        </View>
        <Pressable
          onPress={() => setPaused(!paused)}
          className="bg-[#7B61FF] mt-5 py-3 px-10 rounded-full"
        >
          <Text className="text-white text-base font-semibold">
            {paused ? "RESUME" : "PAUSE"}
          </Text>
        </Pressable>
      </View>

      {/* Botones inferiores */}
      <View className="flex-row justify-between px-10 mt-10">
        <Pressable className="flex-row items-center">
          <Ionicons name="arrow-back-circle" size={24} color="#FFFFFF" />
          <Text className="text-white ml-2">Previous</Text>
        </Pressable>

        <Pressable className="flex-row items-center">
          <Text className="text-white mr-2">Skip</Text>
          <Ionicons name="arrow-forward-circle" size={24} color="#FFFFFF" />
        </Pressable>
      </View>
    </View>
  );
}
