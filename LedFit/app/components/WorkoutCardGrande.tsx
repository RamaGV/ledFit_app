import React from "react";
import { Text, View } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";

export type WorkoutCardGrandeType = {
  maskGroup?: any; // Ajustar tipado si lo deseas
  title?: string;
  tiempo?: string;
  nivel?: string;
  imagen?: any; // Ajustar tipado si lo deseas
  component?: "Card Grande";
};

const WorkoutCardGrande = ({
  maskGroup,
  title,
  tiempo,
  nivel,
  imagen,
  component = "Card Grande",
}: WorkoutCardGrandeType) => {
  return (
    <View
      style={{ width: "230", height: "230" }}
      className="overflow-hidden rounded-3xl"
    >
      <Image
        style={{ position: "absolute", width: "100%", height: "100%" }}
        contentFit="cover"
        source={imagen}
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
      <View className="flex-1 flex flex-col absolute gap-1 bottom-[-60%] w-full h-full px-[5%]">
        <Text className="text-white font-bold text-[20px] leading-[29px]">
          {title}
        </Text>
        <View className="flex-row items-center gap-2 w-full">
          <Text className="flex-1 text-white text-[14px] font-medium">
            {tiempo}
          </Text>
          <Text className="flex-1 text-white text-[14px] font-medium">
            {nivel}
          </Text>
          <Image
            className="w-6 h-6  "
            contentFit="cover"
            source={require("../../assets/iconlylightbookmark3.png")}
          />
        </View>
      </View>
    </View>
  );
};

export default WorkoutCardGrande;
