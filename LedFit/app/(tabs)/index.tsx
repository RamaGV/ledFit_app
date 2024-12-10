import React from "react";
import {
  View,
  Text,
  ScrollView,
  Pressable,
  ActivityIndicator,
} from "react-native";
import { WorkoutsContext } from "../context/WorkoutsContext";
import { ImagesMapContext } from "../context/ImagesMapContext";
import WorkoutCardGrande from "../components/WorkoutCardGrande";
import WorkoutCardChica from "../components/WorkoutCardChica";
import TopNavbar from "../components/TopNavbar";
import { router } from "expo-router";

const defaultImage = require("../../assets/defaultWorkout.png");

export default function HomeScreen() {
  const { workouts, loading, error } = React.useContext(WorkoutsContext);
  const { imagesMap } = React.useContext(ImagesMapContext);

  if (loading) {
    return (
      <View className="flex-1 bg-[#121212]">
        <ActivityIndicator color="#7B61FF" size="large" />
      </View>
    );
  }

  if (error) {
    return (
      <View className="flex-1 bg-[#121212]">
        <Text>Error</Text>
      </View>
    );
  }
  // Dividimos los workouts en destacados (por ejemplo, 2 primeros) y otros.
  const featuredWorkouts = workouts.slice(0, 2);
  const otherWorkouts = workouts.slice(2);

  return (
    <View className="flex-1 bg-[#121212] px-4">
      <TopNavbar
        component="Navbar"
        theme="Dark"
        iconlyCurvedNotification={require("../../assets/iconlycurvednotification.png")}
        iconlyCurvedBookmark={require("../../assets/iconlycurvedbookmark.png")}
      />
      <Text className="text-white text-2xl font-semibold mb-3">
        Hola, Christina 👋
      </Text>

      <View className="flex-row items-center justify-between">
        <Text className="text-white text-lg font-semibold">
          Mis entrenamientos
        </Text>
        <Pressable>
          <Text className="text-[#7B61FF] text-sm">Ver todos</Text>
        </Pressable>
      </View>

      <View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {featuredWorkouts.map((item, idx) => (
            <View key={item._id || idx} className="m-3">
              <WorkoutCardGrande
                key={item._id || idx}
                title={item.title}
                tiempo={item.totalTime}
                nivel={item.level}
                imagen={imagesMap[item.image] || defaultImage}
                component="Card Grande"
              />
            </View>
          ))}
        </ScrollView>
      </View>

      <View className="flex-row items-center justify-between my-2">
        <Text className="text-white text-lg font-semibold">Workout Levels</Text>
        <Pressable>
          <Text className="text-[#7B61FF] text-sm">Ver todos</Text>
        </Pressable>
      </View>

      <View className="flex-row justify-between mb-3">
        <Pressable className="bg-[#1E1E1E] px-4 py-2 rounded-lg">
          <Text className="text-white text-sm">Beginner</Text>
        </Pressable>
        <Pressable className="bg-[#7B61FF] px-4 py-2 rounded-lg">
          <Text className="text-white text-sm">Intermediate</Text>
        </Pressable>
        <Pressable className="bg-[#1E1E1E] px-4 py-2 rounded-lg">
          <Text className="text-white text-sm">Advanced</Text>
        </Pressable>
      </View>
      <View className="flex-1 flex-col items-center justify-center">
        <ScrollView>
          {otherWorkouts.map((item, idx) => (
            <View key={item._id || idx} className="m-4">
              <Pressable
                key={item._id || idx}
                onPress={() => {
                  router.push(`/(entrenar)/workout-details?id=${item._id}`);
                }}
              >
                <WorkoutCardChica
                  title={item.title}
                  tiempo={item.totalTime}
                  nivel={item.level}
                  imagen={imagesMap[item.image] || defaultImage}
                  component="Card Chica"
                />
              </Pressable>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}
