// components/WorkoutCard.tsx
import React from "react";
import { Text, View, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export type WorkoutCardInterface = {
  component: "Card Chica" | "Card Grande" | "Card Grid";
  imagen: any;
  title: string;
  totalTime: string;
  isBookmarked: boolean;
  rounds?: string;
  level?: string;
  group?: string;
};

const WorkoutCard = ({
  component,
  imagen,
  title,
  totalTime,
  isBookmarked,
  rounds,
  level,
  group,
}: WorkoutCardInterface) => {
  let containerClasses = "overflow-hidden rounded-3xl";
  // Ajustar tamaños según el tipo de card
  if (component === "Card Chica") {
    containerClasses += " w-[300px] h-[110px]";
  } else if (component === "Card Grande") {
    containerClasses += " w-[240px] h-[240px]";
  } else if (component === "Card Grid") {
    containerClasses += " w-[150px] h-[150px]";
  }

  return (
    <View className={containerClasses}>
      <Image
        className="overflow-hidden rounded-3xl"
        style={{ position: "absolute", width: "100%", height: "100%" }}
        source={imagen}
        resizeMode="cover"
      />
      <LinearGradient
        style={{ position: "absolute", width: "100%", height: "100%" }}
        locations={[0, 0.17, 0.27, 0.42, 0.53, 0.66, 0.8, 1]}
        colors={[
          "rgba(75, 75, 75, 0)",
          "rgba(68, 68, 68, 0.11)",
          "rgba(64, 64, 64, 0.3)",
          "rgba(58, 58, 58, 0.4)",
          "rgba(54, 54, 54, 0.5)",
          "rgba(47, 47, 47, 0.6)",
          "rgba(41, 41, 41, 0.8)",
          "rgba(32, 32, 32, 0.9)",
        ]}
      />
      <View className="flex-1 flex-col gap-1 absolute bottom-0 w-full px-[5%] pb-4">
        <Text
          className="text-white font-bold text-[16px] leading-[29px]"
          numberOfLines={1}
        >
          {title}
        </Text>
        <View className="flex-row gap-1 items-center w-full">
          {totalTime && (
            <Text className="flex-1 text-white text-[11px]">{totalTime}</Text>
          )}
          {level && (
            <Text className="flex-1 flex-start text-white text-[11px]">
              {level}
            </Text>
          )}
          <Image
            className="flex-1 flex-end w-6 h-6 ml-auto"
            source={
              isBookmarked
                ? require("../../assets/iconlyboldbookmark.png")
                : require("../../assets/iconlylightbookmark3.png")
            }
            resizeMode="contain"
          />
        </View>
      </View>
    </View>
  );
};

export default WorkoutCard;
