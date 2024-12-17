// app/(entrenar)/workout-details.tsx
import React, { useContext } from "react";
import { View, Text, ScrollView, Pressable, Image } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { WorkoutsContext } from "../context/WorkoutsContext";
import { ImagesMapContext } from "../context/ImagesMapContext";
import { MqttContext } from "../context/MqttContext";
import { Ionicons } from "@expo/vector-icons";

export default function WorkoutDetailsScreen() {
  const { workouts } = useContext(WorkoutsContext);
  const { publishMessage } = useContext(MqttContext);
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

  const mainImage = imagesMap[workout.image];

  // Función para manejar el press del botón START
  const handleStart = () => {
    // Publicar "Hola Mundo" en el tópico "esp32/test"
    publishMessage("esp32/test", " Mundo");
    console.log("Se envió ' Mundo' a esp32/test");
    router.push("/session?id=" + id);
  };

  return (
    <View className="flex-1 bg-[#121212]">
      {/* Botón de atrás */}
      <View className="flex-row px-3 pt-10 pb-3 items-center">
        <Pressable onPress={() => router.back()} className="mr-3">
          <Ionicons name="chevron-back" size={24} color="#FFFFFF" />
        </Pressable>
      </View>

      {/* Imagen principal */}
      <View className="flex-row">
        <Image source={mainImage} className="w-full h-64" resizeMode="cover" />
      </View>

      <View className="px-3 flex-1">
        <Text className="text-white text-2xl font-semibold py-2">
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

        <View className="flex-row items-center justify-between border-t border-gray-700 py-3 px-1">
          <Text className="text-white text-lg font-semibold">Ejercicios</Text>
          <Pressable onPress={() => router.push("/workout-activity?id=" + id)}>
            <Text className="text-[#7B61FF] text-sm">Ver más</Text>
          </Pressable>
        </View>

        <ScrollView
          className="flex-1 px-4"
          showsVerticalScrollIndicator={false}
        >
          {workout.rounds.map((round, idx) => {
            const exerciseImage = imagesMap[round.exerciseId];
            return (
              <View
                className="flex-row items-center bg-[#1E1E1E] rounded-xl mb-3 overflow-hidden"
                key={idx}
              >
                <Image
                  source={exerciseImage}
                  className="w-24 h-20"
                  resizeMode="cover"
                />
                <View className="ml-3 py-3 flex-1">
                  <Text className="text-white font-semibold text-base pb-2">
                    {round.exerciseId}
                  </Text>
                  <Text className="text-[#CCCCCC] text-xs">
                    {round.time} segundos
                  </Text>
                </View>
              </View>
            );
          })}
        </ScrollView>
      </View>

      <View className="px-3 py-2 border-t border-gray-700">
        <Pressable
          className="bg-[#7B61FF] rounded-full py-4 mx-5 my-2"
          onPress={handleStart} // Llamar a handleStart
        >
          <Text className="text-white text-center text-base font-semibold">
            INICIAR
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
