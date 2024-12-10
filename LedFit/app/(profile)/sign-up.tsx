// app/(profile)/sign-up.tsx
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { Link } from "expo-router";
import CustomCheckbox from "../components/CustomCheckbox";

export default function SignUpScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const isFormFilled = email !== "" && password !== "";

  return (
    <KeyboardAvoidingView
      className="flex-1 bg-[#121212]"
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingBottom: 40,
          justifyContent: "center",
        }}
      >
        <Text className="text-white text-2xl font-semibold mt-10 mb-10">
          Create your Account
        </Text>

        <View className="mb-5">
          <TextInput
            placeholder="Email"
            placeholderTextColor="#888"
            value={email}
            onChangeText={setEmail}
            className="bg-[#1E1E1E] text-white px-4 py-4 rounded-lg text-base mb-4"
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <TextInput
            placeholder="Password"
            placeholderTextColor="#888"
            value={password}
            onChangeText={setPassword}
            className="bg-[#1E1E1E] text-white px-4 py-4 rounded-lg text-base mb-4"
            secureTextEntry
          />
        </View>

        <View className="flex-row items-center mb-7">
          <CustomCheckbox
            checked={rememberMe}
            onToggle={() => setRememberMe(!rememberMe)}
          />
          <Text className="text-white text-sm ml-2">Remember me</Text>
        </View>

        <Pressable
          className={`bg-[#7B61FF] py-4 rounded-lg mb-5 ${!isFormFilled ? "opacity-50" : ""}`}
          disabled={!isFormFilled}
        >
          <Text className="text-white text-center text-base font-semibold">
            Sign up
          </Text>
        </Pressable>

        <Text className="text-[#888] text-center text-base my-5">
          or continue with
        </Text>

        <View className="mb-5">
          <Pressable className="bg-[#1E1E1E] py-4 rounded-lg mb-3">
            <Text className="text-white text-center text-base">Facebook</Text>
          </Pressable>
          <Pressable className="bg-[#1E1E1E] py-4 rounded-lg mb-3">
            <Text className="text-white text-center text-base">Google</Text>
          </Pressable>
          <Pressable className="bg-[#1E1E1E] py-4 rounded-lg mb-3">
            <Text className="text-white text-center text-base">Apple</Text>
          </Pressable>
        </View>

        <View className="flex-row justify-center">
          <Text className="text-white text-sm">Already have an account? </Text>
          <Link href="/(profile)/sign-in">
            <Text className="text-[#7B61FF] text-sm">Sign in</Text>
          </Link>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
