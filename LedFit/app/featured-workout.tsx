// app/featured-workout.tsx
import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable, FlatList } from "react-native";
import { useRouter } from "expo-router";
import WorkoutGridCard from "./components/WorkoutGridCard";
import CustomModal from "./components/CustomModal";

export default function FeaturedWorkoutScreen() {
  const router = useRouter();
  const [isGrid, setIsGrid] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedWorkout, setSelectedWorkout] = useState<any>(null);

  const workouts = [
    {
      title: "Arms Dumbbell",
      duration: "10 minutes",
      level: "Intermediate",
      imageUrl: "https://via.placeholder.com/300x200",
    },
    {
      title: "Man Dumbbell",
      duration: "8 minutes",
      level: "Beginner",
      imageUrl: "https://via.placeholder.com/300x200",
    },
    {
      title: "Arms Exercise",
      duration: "12 minutes",
      level: "Advanced",
      imageUrl: "https://via.placeholder.com/300x200",
    },
    {
      title: "Pull Up Training",
      duration: "10 minutes",
      level: "Intermediate",
      imageUrl: "https://via.placeholder.com/300x200",
    },
    {
      title: "Yoga Movement",
      duration: "15 minutes",
      level: "Beginner",
      imageUrl: "https://via.placeholder.com/300x200",
    },
    {
      title: "Abdominal Exercise",
      duration: "6 minutes",
      level: "Advanced",
      imageUrl: "https://via.placeholder.com/300x200",
    },
    {
      title: "Throw Ball Exercise",
      duration: "12 minutes",
      level: "Intermediate",
      imageUrl: "https://via.placeholder.com/300x200",
    },
    {
      title: "Jogging Training",
      duration: "8 minutes",
      level: "Beginner",
      imageUrl: "https://via.placeholder.com/300x200",
    },
  ];

  const openModal = (workout: any) => {
    setSelectedWorkout(workout);
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => router.back()}>
          <Text style={styles.icon}>←</Text>
        </Pressable>
        <Text style={styles.title}>My Bookmark</Text>
        <View style={{ flexDirection: "row" }}>
          <Pressable onPress={() => setIsGrid(false)}>
            <Text style={[styles.icon, { marginRight: 10 }]}>☰</Text>
          </Pressable>
          <Pressable onPress={() => setIsGrid(true)}>
            <Text style={styles.icon}>▦</Text>
          </Pressable>
        </View>
      </View>

      <FlatList
        data={workouts}
        numColumns={isGrid ? 2 : 1}
        key={isGrid ? "G" : "L"}
        columnWrapperStyle={
          isGrid ? { justifyContent: "space-between" } : undefined
        }
        renderItem={({ item }) => (
          <Pressable onPress={() => openModal(item)}>
            <WorkoutGridCard
              title={item.title}
              duration={item.duration}
              level={item.level}
              imageUrl={item.imageUrl}
              isGrid={isGrid}
            />
          </Pressable>
        )}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={{ paddingBottom: 80, paddingTop: 20 }}
      />

      <CustomModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        workout={selectedWorkout}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  icon: {
    color: "#FFFFFF",
    fontSize: 20,
  },
  title: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "600",
  },
});
