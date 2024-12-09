import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  Pressable,
  ActivityIndicator,
} from "react-native";
import { Link } from "expo-router";
import WorkoutCardGrande from "../components/WorkoutCardGrande";
import WorkoutCardChica from "../components/WorkoutCardChica";
import TopNavbar from "../components/TopNavbar";

// Mapa de imágenes locales. Debes asegurarte que los nombres coincidan con los devueltos por la API.
// Por ejemplo, si la API retorna "functionalStrengthImage", debes tener functionalStrengthImage.png en assets.
const imagesMap: { [key: string]: any } = {
  functionalStrengthImage: require("../../assets/functionalStrengthImage.png"),
  hathaYogaImage: require("../../assets/hathaYogaImage.png"),
  potenciaEnCadenaImage: require("../../assets/potenciaEnCadenaImage.png"),
  amrapImage: require("../../assets/AMRAPImage.png"),
  tabataImage: require("../../assets/tabataImage.png"),
  sinDescansoImage: require("../../assets/sinDescansoImage.png"),
  fundamentosImage: require("../../assets/fundamentosImage.png"),

  // Si agregas más rutinas o imágenes, añádelas aquí.
};

// Si hay una imagen que no está mapeada, puedes usar una imagen por defecto.
const defaultImage = require("../../assets/defaultWorkout.png"); // Crea una imagen default si no existe.

export default function HomeScreen() {
  const [workouts, setWorkouts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const response = await fetch(
          "http://192.168.1.3:5000/api/routines/all",
        );
        const data = await response.json();
        setWorkouts(data);
      } catch (error) {
        console.error("Error fetching workouts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchWorkouts();
  }, []);

  if (loading) {
    return (
      <View className="flex-1 bg-[#121212]">
        <ActivityIndicator color="#7B61FF" size="large" />
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
        iconlyCurvedPlus={require("../../assets/iconlycurvedplus.png")}
        iconlyCurvedNotification={require("../../assets/iconlycurvednotification.png")}
        iconlyCurvedBookmark={require("../../assets/iconlycurvedbookmark.png")}
        showTypeLogoDefaultComponent
      />
      <Text className="text-white text-2xl font-semibold mb-3">
        Morning, Christina 👋
      </Text>

      <View className="flex-row items-center justify-between">
        <Text className="text-white text-xl font-semibold">
          Featured Workout
        </Text>
        <Link href="/featured-workout" asChild>
          <Pressable>
            <Text className="text-[#7B61FF] text-sm">See All</Text>
          </Pressable>
        </Link>
      </View>

      <View>
        <ScrollView horizontal>
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
          <Text className="text-[#7B61FF] text-sm">See All</Text>
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
              <WorkoutCardChica
                key={item._id || idx}
                title={item.title}
                tiempo={item.totalTime}
                nivel={item.level}
                imagen={imagesMap[item.image] || defaultImage}
                component="Card Chica"
              />
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}
