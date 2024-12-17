// app/(entrenar)/workout-activity.tsx
import React, { useContext } from "react";
import { View, Text, Pressable, ScrollView, Image } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { WorkoutsContext } from "../context/WorkoutsContext";
import { ImagesMapContext } from "../context/ImagesMapContext";
import { Ionicons } from "@expo/vector-icons";

export default function WorkoutActivityScreen() {
  const { workouts } = useContext(WorkoutsContext);
  const { imagesMap } = useContext(ImagesMapContext);
  const router = useRouter();

  const { id } = useLocalSearchParams();
  const workout = workouts.find((w) => w._id === id);

  if (!workout) {
    return (
      <View className="flex-1 bg-[#121212] items-center justify-center">
        <Text className="text-white">Workout no encontrado</Text>
      </View>
    );
  }

  return (
    <View className="flex-1 bg-[#121212] pt-10 px-4">
      {/* Header */}
      <View className="flex-row items-center mb-5">
        <Pressable onPress={() => router.back()} className="mr-3">
          <Ionicons name="chevron-back" size={24} color="#FFFFFF" />
        </Pressable>
        <Text className="text-white text-xl font-semibold">
          Workout Activity
        </Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} className="flex-1 mb-5">
        {workout.rounds.map((round, idx) => {
          const exerciseImage =
            imagesMap[round.exerciseId] ||
            require("../../assets/exercises/defaultExercise.png");
          return (
            <View
              key={idx}
              className="flex-row items-center bg-[#1E1E1E] rounded-xl mb-3 overflow-hidden"
            >
              <Image
                source={exerciseImage}
                className="w-24 h-20"
                resizeMode="cover"
              />
              <View className="ml-3 py-3 flex-1">
                <Text
                  className="text-white font-semibold text-base"
                  numberOfLines={1}
                >
                  {round.exerciseId}
                </Text>
                <Text className="text-[#CCCCCC] text-sm">
                  {round.time} seconds
                </Text>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}
