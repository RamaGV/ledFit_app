// app/(tabs)/entrenar.tsx
import { useRouter } from "expo-router";
import React, { useState, useContext } from "react";
import TopNavbar from "../components/TopNavbar";
import { WorkoutsContext } from "../context/WorkoutsContext";
import { ImagesMapContext } from "../context/ImagesMapContext";
import {
  View,
  Text,
  Pressable,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import WorkoutCard from "../components/WorkoutCard";

export default function EntrenarScreen() {
  const [selectedLevel, setSelectedLevel] = useState("Intermedio");
  const { imagesMap } = useContext(ImagesMapContext);
  const { workouts, loadWorkouts, errorWorkouts } = useContext(WorkoutsContext);
  const router = useRouter(); // Importa y usa el router

  if (loadWorkouts) return <ActivityIndicator />;
  if (errorWorkouts) return <Text>Error: {errorWorkouts}</Text>;

  const levels = ["Principiante", "Intermedio", "Avanzado"];

  return (
    <View className="flex-1 bg-[#121212] px-4">
      <TopNavbar
        component="Navbar"
        theme="Dark"
        title="Entrenar"
        iconlyLightSearch={require("../../assets/iconlylightsearch.png")}
      />

      <View className="flex-row mb-5">
        {levels.map((level) => {
          const isActive = level === selectedLevel;
          return (
            <Pressable
              key={level}
              onPress={() => setSelectedLevel(level)}
              className={`px-4 py-2 rounded-full mr-3 ${
                isActive ? "bg-[#7B61FF]" : "bg-[#1E1E1E]"
              }`}
            >
              <Text className="text-white text-sm">{level}</Text>
            </Pressable>
          );
        })}
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {workouts
          .filter((item) => item.level === selectedLevel)
          .map((item, idx) => (
            <Pressable
              key={item._id || idx}
              className="m-3"
              onPress={() => {
                router.push(`/(entrenar)/workout-details?id=${item._id}`);
              }}
            >
              <WorkoutCard
                title={item.title}
                totalTime={item.totalTime}
                level={item.level}
                imagen={imagesMap[item.image]}
                isBookmarked={item.isBookmarked}
                component="Card Chica"
              />
            </Pressable>
          ))}
      </ScrollView>
    </View>
  );
}
