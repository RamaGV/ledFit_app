// app/(entrenar)/workout-details.tsx
import React, { useContext } from "react";
import { View, Text, ScrollView, Pressable, Image } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { WorkoutsContext } from "../context/WorkoutsContext";
import { ImagesMapContext } from "../context/ImagesMapContext";

export default function WorkoutDetailsScreen() {
  const { workouts } = useContext(WorkoutsContext);
  const { imagesMap } = useContext(ImagesMapContext);

  // Ajuste aquí: cambiar workoutId por id
  const { id } = useLocalSearchParams();

  const workout = workouts.find((w) => w._id === id);

  if (!workout) {
    return (
      <View className="flex-1 bg-[#121212] items-center justify-center">
        <Text className="text-white">Workout no encontrado</Text>
      </View>
    );
  }

  const mainImage = imagesMap[workout.image];

  return (
    <View className="flex-1 bg-[#121212]">
      <View className="flex-row ">
        <Image
          source={mainImage}
          className="flex-1 items-center justify-center"
          resizeMode="cover"
        />
      </View>
      <View className="px-3 py-2">
        <Text className="text-white text-2xl font-semibold my-2">
          {workout.title}
        </Text>

        <View className="flex-row flex-wrap mb-2">
          {workout.level && (
            <View className="bg-[#1E1E1E] px-3 py-1 rounded-full mr-2 mb-2">
              <Text className="text-white text-sm">{workout.level}</Text>
            </View>
          )}
          {workout.totalTime && (
            <View className="bg-[#1E1E1E] px-3 py-1 rounded-full mr-2 mb-2">
              <Text className="text-white text-sm">{workout.totalTime}</Text>
            </View>
          )}
        </View>

        <View className="flex-row items-center justify-between border-t border-gray-700 pt-5">
          <Text className="text-white text-lg font-semibold">
            Workout Activity
          </Text>
          <Text className="text-[#7B61FF] text-sm">See All</Text>
        </View>

        <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
          {workout.rounds.map((round, idx) => {
            return (
              <View
                className="flex-row items-center bg-[#1E1E1E] rounded-xl mb-3 overflow-hidden"
                key={idx}
              >
                <Image
                  source={imagesMap[round.exerciseId]}
                  style={{
                    width: 100,
                    height: 80,
                  }}
                  resizeMode="cover"
                />
                <View className="ml-3 py-3 flex-1">
                  <Text className="text-white font-semibold text-base">
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

      <Pressable className="bg-[#7B61FF] py-4 rounded-full mt-5">
        <Text className="text-white text-center text-base font-semibold">
          START
        </Text>
      </Pressable>
    </View>
  );
}
