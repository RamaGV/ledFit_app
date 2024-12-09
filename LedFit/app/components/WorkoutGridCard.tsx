// components/WorkoutGridCard.tsx
import React from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";

interface WorkoutGridCardProps {
  title: string;
  duration: string;
  level: string;
  imageUrl: string;
  isGrid: boolean;
}

export default function WorkoutGridCard({
  title,
  duration,
  level,
  imageUrl,
  isGrid,
}: WorkoutGridCardProps) {
  const cardWidth = isGrid
    ? Dimensions.get("window").width / 2 - 30
    : Dimensions.get("window").width - 40;

  return (
    <View style={[styles.cardContainer, { width: cardWidth }]}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <View style={styles.overlay}>
        <Text style={styles.title} numberOfLines={1}>
          {title}
        </Text>
        <View style={styles.infoRow}>
          <Text style={styles.infoText}>{duration}</Text>
          <Text style={styles.infoText}>|</Text>
          <Text style={styles.infoText}>{level}</Text>
        </View>
        <Text style={styles.bookmark}>🔖</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "#1E1E1E",
    borderRadius: 16,
    marginBottom: 15,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 120,
  },
  overlay: {
    position: "absolute",
    bottom: 10,
    left: 15,
    right: 15,
  },
  title: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 5,
  },
  infoRow: {
    flexDirection: "row",
    marginBottom: 5,
  },
  infoText: {
    color: "#CCCCCC",
    fontSize: 12,
    marginRight: 5,
  },
  bookmark: {
    color: "#FFFFFF",
    fontSize: 16,
    alignSelf: "flex-end",
  },
});
