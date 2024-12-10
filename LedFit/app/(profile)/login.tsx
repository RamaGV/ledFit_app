// app/(profile)/login.tsx
import React from "react";
import { View, Text, Pressable } from "react-native";
import { Link } from "expo-router";

export default function LoginScreen() {
  return (
    <View className="flex-1 bg-[#121212] px-5 justify-center">
      <Text className="text-white text-3xl font-semibold mb-10">
        Let's you in.
      </Text>

      <View className="mb-5">
        <Pressable className="bg-[#1E1E1E] py-4 px-5 rounded-lg mb-3">
          <Text className="text-white text-center text-base">
            Continue with Facebook
          </Text>
        </Pressable>

        <Link href="/(tabs)" asChild>
          <Pressable className="bg-[#1E1E1E] py-4 px-5 rounded-lg mb-3">
            <Text className="text-white text-center text-base">
              Continue with Google
            </Text>
          </Pressable>
        </Link>

        <Pressable className="bg-[#1E1E1E] py-4 px-5 rounded-lg mb-3">
          <Text className="text-white text-center text-base">
            Continue with Apple
          </Text>
        </Pressable>
      </View>

      <Text className="text-[#888] text-center text-base mb-5">or</Text>

      <Link href="/(profile)/sign-in" asChild>
        <Pressable className="bg-[#7B61FF] py-4 rounded-lg mb-5">
          <Text className="text-white text-center text-base font-semibold">
            Sign in with password
          </Text>
        </Pressable>
      </Link>

      <View className="flex-row justify-center">
        <Text className="text-white text-sm">Don't have an account? </Text>
        <Link href="/(profile)/sign-up">
          <Text className="text-[#7B61FF] text-sm">Sign up</Text>
        </Link>
      </View>
    </View>
  );
}
