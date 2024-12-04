import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View className="p-4 bg-slate-600">
      <Text>Hola Mundo</Text>
      <StatusBar style="auto" />
    </View>
  );
}
