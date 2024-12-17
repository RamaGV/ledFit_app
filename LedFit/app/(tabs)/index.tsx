import React from "react";
import {
  View,
  Text,
  ScrollView,
  Pressable,
  ActivityIndicator,
} from "react-native";
import WorkoutCardGrande from "../components/WorkoutCardGrande";
import { ImagesMapContext } from "../context/ImagesMapContext";
import { WorkoutsContext } from "../context/WorkoutsContext";
import { UsersContext } from "../context/UsersContext";
import WorkoutCard from "../components/WorkoutCard";
import TopNavbar from "../components/TopNavbar";
import { router } from "expo-router";
import { useState } from "react";

const defaultImage = require("../../assets/defaultWorkout.png");

export default function HomeScreen() {
  const levels = ["Principiante", "Intermedio", "Avanzado"];
  const [selectedLevel, setSelectedLevel] = useState("Intermedio");
  const { imagesMap } = React.useContext(ImagesMapContext);
  const { user } = React.useContext(UsersContext);
  const { workouts, loadWorkouts, errorWorkouts } =
    React.useContext(WorkoutsContext);

  if (loadWorkouts) {
    return (
      <View className="flex-1 bg-[#121212]">
        <ActivityIndicator color="#7B61FF" size="large" />
      </View>
    );
  }

  if (errorWorkouts) {
    return (
      <View className="flex-1 bg-[#121212]">
        <Text>Error</Text>
      </View>
    );
  }
  const featuredWorkouts = workouts.slice(0, 4);

  return (
    <View className="flex-1 bg-[#121212] px-4">
      <TopNavbar
        component="Navbar"
        theme="Dark"
        iconlyCurvedNotification={require("../../assets/iconlycurvednotification.png")}
        iconlyCurvedBookmark={require("../../assets/iconlycurvedbookmark.png")}
      />
      <Text className="text-white text-2xl font-semibold mb-3">
        Hola, {user.tag} 👋
      </Text>

      <View className="flex-row items-center justify-between">
        <Text className="text-white text-lg font-semibold">
          Mis entrenamientos
        </Text>
        <Pressable
          onPress={() => {
            router.push(`/(entrenar)/mis-entrenamientos`);
          }}
        >
          <Text className="text-[#7B61FF] text-sm">Ver más</Text>
        </Pressable>
      </View>

      <View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {featuredWorkouts.map((item, idx) => (
            <View key={item._id || idx} className="m-3">
              <Pressable
                key={item._id || idx}
                onPress={() => {
                  router.push(`/(entrenar)/workout-details?id=${item._id}`);
                }}
              >
                <WorkoutCardGrande
                  key={item._id || idx}
                  title={item.title}
                  tiempo={item.totalTime}
                  nivel={item.level}
                  imagen={imagesMap[item.image] || defaultImage}
                  component="Card Grande"
                />
              </Pressable>
            </View>
          ))}
        </ScrollView>
      </View>

      <View className="flex-row items-center justify-between my-2">
        <Text className="text-white text-lg font-semibold">Niveles</Text>
        <Pressable
          onPress={() => {
            router.push(`/entrenar`);
          }}
        >
          <Text className="text-[#7B61FF] text-sm">Ver más</Text>
        </Pressable>
      </View>

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

      <View className="flex-1 flex-col items-center justify-center">
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
    </View>
  );
}
