// components/CustomModal.tsx
import React from "react";
import { Modal, View, Text, StyleSheet, Image, Pressable } from "react-native";

interface CustomModalProps {
  visible: boolean;
  onClose: () => void;
  workout: any;
}

export default function CustomModal({
  visible,
  onClose,
  workout,
}: CustomModalProps) {
  if (!workout) return null;

  return (
    <Modal visible={visible} transparent animationType="slide">
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Remove from Bookmark?</Text>
          <View style={styles.workoutContainer}>
            <Image source={{ uri: workout.imageUrl }} style={styles.image} />
            <View style={{ marginLeft: 10 }}>
              <Text style={styles.workoutTitle}>{workout.title}</Text>
              <Text style={styles.workoutInfo}>
                {workout.duration} {workout.level}
              </Text>
            </View>
          </View>
          <View style={styles.buttonsRow}>
            <Pressable
              style={[styles.button, { backgroundColor: "#444" }]}
              onPress={onClose}
            >
              <Text style={styles.buttonText}>Cancel</Text>
            </Pressable>
            <Pressable
              style={[styles.button, { backgroundColor: "#7B61FF" }]}
              onPress={onClose}
            >
              <Text style={styles.buttonText}>Yes, Remove</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.7)",
    justifyContent: "flex-end",
  },
  modalContainer: {
    backgroundColor: "#1E1E1E",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  modalTitle: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 20,
  },
  workoutContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 8,
  },
  workoutTitle: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "600",
  },
  workoutInfo: {
    color: "#CCCCCC",
    fontSize: 12,
  },
  buttonsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    flex: 1,
    paddingVertical: 15,
    borderRadius: 8,
    marginHorizontal: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "600",
  },
});
