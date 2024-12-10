// app/bookmark.tsx
import React, { useState } from "react";
import { View, Text, Pressable, ScrollView, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function BookmarkScreen() {
  const [isGrid, setIsGrid] = useState(true);
  const router = useRouter();

  // Datos de ejemplo
  const workouts = [
    {
      title: "Arms Dumbbell",
      duration: "10 minutes",
      level: "Intermedio",
      image: require("../assets/functionalStrengthImage.png"),
    },
    {
      title: "Man Dumbbell",
      duration: "8 minutes",
      level: "Beginner",
      image: require("../assets/hathaYogaImage.png"),
    },
    {
      title: "Arms Exercise",
      duration: "12 minutes",
      level: "Advanced",
      image: require("../assets/potenciaEnCadenaImage.png"),
    },
    {
      title: "Pull Up Training",
      duration: "10 minutes",
      level: "Intermedio",
      image: require("../assets/amrapImage.png"),
    },
    {
      title: "Yoga Movement",
      duration: "15 minutes",
      level: "Beginner",
      image: require("../assets/fundamentosImage.png"),
    },
    {
      title: "Abdominal Exerc.",
      duration: "6 minutes",
      level: "Advanced",
      image: require("../assets/sinDescansoImage.png"),
    },
    // ... más items
  ];

  return (
    <View className="flex-1 bg-[#121212] pt-10 px-4">
      {/* Header */}
      <View className="flex-row items-center justify-between mb-5">
        <View className="flex-row items-center">
          <Pressable onPress={() => router.back()}>
            <Ionicons name="chevron-back" size={24} color="#FFFFFF" />
          </Pressable>
          <Text className="text-white text-xl font-semibold ml-3">
            My Bookmark
          </Text>
        </View>
        <View className="flex-row">
          <Pressable onPress={() => setIsGrid(false)} className="mr-3">
            <Ionicons
              name="list"
              size={24}
              color={isGrid ? "#888" : "#7B61FF"}
            />
          </Pressable>
          <Pressable onPress={() => setIsGrid(true)}>
            <Ionicons
              name="grid"
              size={24}
              color={isGrid ? "#7B61FF" : "#888"}
            />
          </Pressable>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {isGrid ? (
          /* Vista en grid: 2 columnas */
          <View className="flex-row flex-wrap justify-between">
            {workouts.map((item, idx) => (
              <View
                key={idx}
                className="w-[48%] bg-[#1E1E1E] rounded-xl overflow-hidden mb-4"
              >
                <Image
                  source={item.image}
                  style={{ width: "100%", height: 100 }}
                  resizeMode="cover"
                />
                <View className="p-3">
                  <Text
                    className="text-white font-semibold text-base mb-1"
                    numberOfLines={1}
                  >
                    {item.title}
                  </Text>
                  <Text className="text-[#CCCCCC] text-xs mb-1">
                    {item.duration} | {item.level}
                  </Text>
                  <Text className="text-white text-right">🔖</Text>
                </View>
              </View>
            ))}
          </View>
        ) : (
          /* Vista en lista: una columna */
          <View>
            {workouts.map((item, idx) => (
              <View
                key={idx}
                className="flex-row bg-[#1E1E1E] rounded-xl overflow-hidden mb-4"
              >
                <Image
                  source={item.image}
                  style={{ width: 100, height: 100 }}
                  resizeMode="cover"
                />
                <View className="p-3 flex-1 justify-center">
                  <Text
                    className="text-white font-semibold text-base mb-1"
                    numberOfLines={1}
                  >
                    {item.title}
                  </Text>
                  <Text className="text-[#CCCCCC] text-xs mb-1">
                    {item.duration} | {item.level}
                  </Text>
                </View>
                <Text className="text-white self-center mr-3">🔖</Text>
              </View>
            ))}
          </View>
        )}
      </ScrollView>
    </View>
  );
}
