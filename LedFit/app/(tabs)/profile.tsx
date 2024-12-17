// app/(profile)/profile.tsx
import React from "react";
import { View, Text, Pressable, Image } from "react-native";
import TopNavbar from "../components/TopNavbar";
import { useRouter } from "expo-router";
import { UsersContext } from "../context/UsersContext";
// import { useAuth } from "../../hooks/useAuth"; // Ajustar si usas un hook real

export default function ProfileScreen() {
  const router = useRouter();
  const { user } = React.useContext(UsersContext);

  return (
    <View className="flex-1 bg-[#121212] px-4">
      {/* Header */}
      <TopNavbar component="Navbar" theme="Dark" title="Perfil" />

      {/* Foto y datos del usuario */}
      <View className="items-center mt-10">
        <View className="w-20 h-20 rounded-full mb-5">
          <Image
            className="w-20 h-20 rounded-full mb-5"
            source={require("../../assets/amrapImage.png")}
            resizeMode="cover"
          />
        </View>
        <Text className="text-white text-xl font-semibold">{user.name}</Text>
        <Text className="text-[#CCCCCC] text-sm">{user.email}</Text>
      </View>

      <View className="mt-10 mb-5 border-t border-gray-700" />
      <View className="flex-col gap-4">
        <Pressable className="flex-row">
          <Image
            className="w-5 h-5 ml-3"
            source={require("../../assets/icons/editIcon.png")}
          />
          <Text className="text-white ml-3 text-base">Editar Perfil</Text>
        </Pressable>
        <Pressable
          className="flex-row"
          onPress={() => {
            router.push("/notifications");
          }}
        >
          <Image
            className="w-5 h-5 ml-3"
            source={require("../../assets/iconlycurvednotification1.png")}
          />
          <Text className="text-white ml-3 text-base">Notificaciones</Text>
        </Pressable>
        <Pressable className="flex-row">
          <Image
            className="w-5 h-5 ml-3"
            source={require("../../assets/icons/infoIcon.png")}
          />
          <Text className="text-white ml-3 text-base">Ayuda</Text>
        </Pressable>

        <View className="flex-row">
          <Image
            className="w-5 h-5 ml-3"
            source={require("../../assets/icons/darkThemeIcon.png")}
          />
          <Text className="text-white ml-3 text-base flex-1">Modo Oscuro</Text>
          <View className="bg-gray-800 w-12 h-6 rounded-full p-0.5 border border-[#7B61FF] justify-center">
            <View className="bg-[#7B61FF] w-6 h-4 rounded-full ml-auto" />
          </View>
        </View>

        <Pressable
          className="flex-row"
          onPress={() => {
            // auth.logout(); // Ajustar si usas un hook real
            router.push("/login");
          }}
        >
          <Image
            className="w-5 h-5 ml-3"
            source={require("../../assets/icons/iconlylogout.png")}
          />
          <Text className="text-red-500 ml-3 text-base">Logout</Text>
        </Pressable>
      </View>
    </View>
  );
}
