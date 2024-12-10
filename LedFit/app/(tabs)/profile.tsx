// app/(profile)/profile.tsx
import React from "react";
import { View, Text, Pressable } from "react-native";
import TopNavbar from "../components/TopNavbar";
// import { useAuth } from "../../hooks/useAuth"; // Ajustar si usas un hook real

export default function ProfileScreen() {
  // const { user } = useAuth();
  const user = {
    name: "Christina Ainsley",
    email: "christina_ainsley@yourdomain.com",
  }; // Mock

  return (
    <View className="flex-1 bg-[#121212] px-4">
      {/* Header */}
      <TopNavbar component="Navbar" theme="Dark" title="Perfil" />

      {/* Foto y datos del usuario */}
      <View className="items-center mt-10">
        <View className="w-20 h-20 rounded-full bg-gray-500 mb-5" />
        <Text className="text-white text-xl font-semibold">{user.name}</Text>
        <Text className="text-[#CCCCCC] text-sm">{user.email}</Text>
      </View>

      {/* Card Upgrade Premium */}
      <View className="mt-10 bg-[#7B61FF] rounded-xl p-5">
        <Text className="text-yellow-300 font-bold mb-2">
          PRO Upgrade to Premium
        </Text>
        <Text className="text-white mb-3 text-sm">
          Enjoy workout access without ads and restrictions
        </Text>
        <Pressable className="bg-white rounded-full py-2 px-4 self-start">
          <Text className="text-[#7B61FF] font-bold">Go</Text>
        </Pressable>
      </View>

      {/* Opciones */}
      <View className="mt-10 border-t border-gray-700 pt-5">
        <Pressable className="flex-row items-center mb-5">
          <Text className="text-white ml-3 text-base">Edit Profile</Text>
        </Pressable>
        <Pressable className="flex-row items-center mb-5">
          <Text className="text-white ml-3 text-base">Notifications</Text>
        </Pressable>
        <Pressable className="flex-row items-center mb-5">
          <Text className="text-white ml-3 text-base">Security</Text>
        </Pressable>
        <Pressable className="flex-row items-center mb-5">
          <Text className="text-white ml-3 text-base">Help</Text>
        </Pressable>

        <View className="flex-row items-center mb-5">
          <Text className="text-white ml-3 text-base flex-1">Dark Theme</Text>
          <View className="bg-white w-10 h-5 rounded-full p-0.5">
            <View className="bg-[#7B61FF] w-4 h-4 rounded-full ml-auto" />
          </View>
        </View>

        <Pressable className="flex-row items-center">
          <Text className="text-red-500 ml-3 text-base">Logout</Text>
        </Pressable>
      </View>
    </View>
  );
}
