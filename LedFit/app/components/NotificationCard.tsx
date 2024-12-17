// componnts/NotificationCard.tsx

import React from "react";
import { View, Text, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { ImagesMapContext } from "../context/ImagesMapContext";
import { UsersContext } from "../context/UsersContext";

export type NotificationCardInterface = {
  date: string;
  title: string;
  subtitle: string;
  timestamp: string;
  read: boolean;
  icon: string;
};

const NotificationCard = ({
  date,
  title,
  subtitle,
  timestamp,
  read,
  icon,
}: NotificationCardInterface) => {
  const { imagesMap } = React.useContext(ImagesMapContext);
  const { users } = React.useContext(UsersContext);

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 10,
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image
          source={imagesMap[icon]}
          style={{ width: 50, height: 50, marginRight: 10 }}
        />
        <View>
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>{title}</Text>
          <Text style={{ fontSize: 14, color: "gray" }}>{subtitle}</Text>
        </View>
      </View>
      <Text style={{ fontSize: 12, color: "gray" }}>{timestamp}</Text>
    </View>
  );
};
