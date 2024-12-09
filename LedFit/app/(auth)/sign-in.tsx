// app/(auth)/sign-in.tsx
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { Link } from "expo-router";
import CustomCheckbox from "../components/CustomCheckbox";

export default function SignInScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const isFormFilled = email !== "" && password !== "";

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: "#121212" }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Login to your Account</Text>

        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Email"
            placeholderTextColor="#888"
            value={email}
            onChangeText={setEmail}
            style={styles.input}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <TextInput
            placeholder="Password"
            placeholderTextColor="#888"
            value={password}
            onChangeText={setPassword}
            style={styles.input}
            secureTextEntry
          />
        </View>

        <View style={styles.rememberMeContainer}>
          <CustomCheckbox
            checked={rememberMe}
            onToggle={() => setRememberMe(!rememberMe)}
          />
          <Text style={styles.rememberMeText}>Remember me</Text>
        </View>

        <Link href="/(auth)/forgot-password" style={styles.forgotPasswordText}>
          Forgot the password?
        </Link>

        <Pressable
          style={[styles.primaryButton, !isFormFilled && styles.disabledButton]}
          disabled={!isFormFilled}
        >
          <Text style={styles.primaryButtonText}>Sign in</Text>
        </Pressable>

        <Text style={styles.orText}>or continue with</Text>

        <View style={styles.socialButtonsContainer}>
          <Pressable style={styles.socialButton}>
            <Text style={styles.socialButtonText}>Google</Text>
          </Pressable>
          <Pressable style={styles.socialButton}>
            <Text style={styles.socialButtonText}>Facebook</Text>
          </Pressable>
          <Pressable style={styles.socialButton}>
            <Text style={styles.socialButtonText}>Apple</Text>
          </Pressable>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>Don't have an account? </Text>
          <Link href="/(auth)/sign-up" style={styles.linkText}>
            Sign up
          </Link>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingBottom: 40,
    justifyContent: "center",
  },
  title: {
    color: "#FFFFFF",
    fontSize: 28,
    fontWeight: "600",
    marginVertical: 40,
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    backgroundColor: "#1E1E1E",
    color: "#FFFFFF",
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 8,
    fontSize: 16,
    marginBottom: 15,
  },
  rememberMeContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  rememberMeText: {
    color: "#FFFFFF",
    fontSize: 14,
  },
  forgotPasswordText: {
    color: "#7B61FF",
    fontSize: 14,
    textAlign: "right",
    marginBottom: 30,
  },
  primaryButton: {
    backgroundColor: "#7B61FF",
    paddingVertical: 15,
    borderRadius: 8,
    marginBottom: 20,
  },
  disabledButton: {
    opacity: 0.5,
  },
  primaryButtonText: {
    color: "#FFFFFF",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "600",
  },
  orText: {
    color: "#888",
    textAlign: "center",
    marginVertical: 20,
    fontSize: 16,
  },
  socialButtonsContainer: {
    marginBottom: 20,
  },
  socialButton: {
    backgroundColor: "#1E1E1E",
    paddingVertical: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  socialButtonText: {
    color: "#FFFFFF",
    textAlign: "center",
    fontSize: 16,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  footerText: {
    color: "#FFFFFF",
    fontSize: 14,
  },
  linkText: {
    color: "#7B61FF",
    fontSize: 14,
  },
});
