// app/components/CustomCheckbox.tsx
import React from "react";
import { Pressable, View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface CustomCheckboxProps {
  checked: boolean;
  onToggle: () => void;
}

const CustomCheckbox: React.FC<CustomCheckboxProps> = ({
  checked,
  onToggle,
}) => {
  return (
    <Pressable onPress={onToggle} style={styles.container}>
      <View style={[styles.box, checked && styles.boxChecked]}>
        {checked && <Ionicons name="checkmark" size={16} color="#121212" />}
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    marginRight: 8,
  },
  box: {
    width: 20,
    height: 20,
    borderRadius: 4,
    borderColor: "#7B61FF",
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  boxChecked: {
    backgroundColor: "#7B61FF",
  },
});

export default CustomCheckbox;
