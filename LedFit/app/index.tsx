// app/index.tsx
import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { Link } from "expo-router";

export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Let's you in.</Text>

      <View style={styles.socialButtonsContainer}>
        <Pressable style={styles.socialButton}>
          <Text style={styles.socialButtonText}>Continue with Facebook</Text>
        </Pressable>

        {/* Al presionar este botón iremos a la pantalla Home */}
        <Link href="/(tabs)/" asChild>
          <Pressable style={styles.socialButton}>
            <Text style={styles.socialButtonText}>Continue with Google</Text>
          </Pressable>
        </Link>

        <Pressable style={styles.socialButton}>
          <Text style={styles.socialButtonText}>Continue with Apple</Text>
        </Pressable>
      </View>

      <Text style={styles.orText}>or</Text>

      <Link href="/(auth)/sign-in" asChild>
        <Pressable style={styles.primaryButton}>
          <Text style={styles.primaryButtonText}>Sign in with password</Text>
        </Pressable>
      </Link>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Don't have an account? </Text>
        <Link href="/(auth)/sign-up" style={styles.linkText}>
          Sign up
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    paddingHorizontal: 20,
    justifyContent: "center",
  },
  title: {
    color: "#FFFFFF",
    fontSize: 32,
    fontWeight: "600",
    marginBottom: 40,
  },
  socialButtonsContainer: {
    marginBottom: 20,
  },
  socialButton: {
    backgroundColor: "#1E1E1E",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 10,
  },
  socialButtonText: {
    color: "#FFFFFF",
    textAlign: "center",
    fontSize: 16,
  },
  orText: {
    color: "#888",
    textAlign: "center",
    marginBottom: 20,
    fontSize: 16,
  },
  primaryButton: {
    backgroundColor: "#7B61FF",
    paddingVertical: 15,
    borderRadius: 8,
    marginBottom: 20,
  },
  primaryButtonText: {
    color: "#FFFFFF",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "600",
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
