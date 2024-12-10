// app/notifications.tsx
import React from "react";
import { View, Text, ScrollView, Image, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Link, useRouter } from "expo-router";

export default function NotificationsScreen() {
  // Datos de ejemplo
  const notifications = [
    {
      date: "Today",
      items: [
        {
          icon: require("../assets/icons/iconlyboldbookmark.png"),
          title: "Congratulations!",
          subtitle: "You've been exercising for 2 hours",
          iconBg: "bg-green-500",
        },
        {
          icon: require("../assets/icons/iconlyboldbookmark.png"),
          title: "New Workout is Available!",
          subtitle: "Check now and practice",
          iconBg: "bg-blue-500",
        },
      ],
    },
    {
      date: "Yesterday",
      items: [
        {
          icon: require("../assets/icons/iconlyboldbookmark.png"),
          title: "New Features are Available",
          subtitle: "You can now set exercise reminder",
          iconBg: "bg-red-500",
        },
      ],
    },
    {
      date: "December 11, 2024",
      items: [
        {
          icon: require("../assets/icons/iconlyboldbookmark.png"),
          title: "Verification Successful",
          subtitle: "Account verification complete",
          iconBg: "bg-green-500",
        },
      ],
    },
  ];

  const router = useRouter();

  return (
    <View className="flex-1 bg-[#121212] pt-10 px-4">
      {/* Header */}
      <View className="flex-row items-center justify-between mb-5">
        <Pressable onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={24} color="#FFFFFF" />
        </Pressable>
        <Text className="text-white text-xl font-semibold">Notification</Text>
        <Ionicons name="ellipsis-horizontal" size={24} color="#FFFFFF" />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {notifications.map((section, idx) => (
          <View key={idx}>
            <Text className="text-white text-base font-semibold mb-3">
              {section.date}
            </Text>
            {section.items.map((notif, nIdx) => (
              <View
                key={nIdx}
                className="flex-row items-center bg-[#1E1E1E] rounded-2xl p-4 mb-4"
              >
                <View
                  className={`w-10 h-10 rounded-full justify-center items-center ${notif.iconBg} mr-3`}
                >
                  <Image
                    source={notif.icon}
                    style={{ width: 20, height: 20 }}
                    resizeMode="contain"
                  />
                </View>
                <View className="flex-1">
                  <Text className="text-white font-semibold text-base">
                    {notif.title}
                  </Text>
                  <Text className="text-[#CCCCCC] text-sm">
                    {notif.subtitle}
                  </Text>
                </View>
              </View>
            ))}
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
