// app/(entrenar)/session.tsx
import React, { useState, useEffect, useContext } from "react";
import { View, Text, Image, Pressable } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { WorkoutsContext } from "../context/WorkoutsContext";
import { Ionicons } from "@expo/vector-icons";

// Importar tus imágenes de estados
// Ajusta las rutas según tus assets
const imgGetReady = require("../../assets/exercises/defaultExercise.png");
const imgExercise = require("../../assets/exercises/defaultExercise.png");
const imgRest = require("../../assets/exercises/rest.png");
const imgCongrats = require("../../assets/exercises/defaultExercise.png");

export default function SessionScreen() {
  const { workouts } = useContext(WorkoutsContext);
  const { id } = useLocalSearchParams();
  const router = useRouter();

  const workout = workouts.find((w) => w._id === id);

  const [phase, setPhase] = useState<
    "getReady" | "exercise" | "rest" | "finished"
  >("getReady");
  const [currentRoundIndex, setCurrentRoundIndex] = useState(-1);
  // -1 indica que aún no empezamos las rondas, estamos en getReady
  const [timeRemaining, setTimeRemaining] = useState(10); // 10 seg de getReady por defecto

  useEffect(() => {
    if (!workout) return;
    // Cuando inicia la pantalla, empieza el get ready
    let interval = setInterval(() => {
      setTimeRemaining((t) => {
        if (t <= 1) {
          clearInterval(interval);
          startWorkout();
        }
        return t - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [workout]);

  const startWorkout = () => {
    // Pasar al primer round
    if (!workout || workout.rounds.length === 0) {
      setPhase("finished");
      return;
    }
    setCurrentRoundIndex(0);
    startRound(0);
  };

  const startRound = (index: number) => {
    const round = workout!.rounds[index];
    const isRest = round.isActive === false;
    setPhase(isRest ? "rest" : "exercise");
    setTimeRemaining(round.time);

    let interval = setInterval(() => {
      setTimeRemaining((t) => {
        if (t <= 1) {
          clearInterval(interval);
          nextRound();
        }
        return t - 1;
      });
    }, 1000);
  };

  const nextRound = () => {
    if (!workout) return;
    const nextIndex = currentRoundIndex + 1;
    if (nextIndex >= workout.rounds.length) {
      // No más rondas
      setPhase("finished");
      return;
    }
    setCurrentRoundIndex(nextIndex);
    startRound(nextIndex);
  };

  if (!workout) {
    return (
      <View className="flex-1 bg-[#121212] items-center justify-center">
        <Text className="text-white">Cargando entrenamiento...</Text>
      </View>
    );
  }

  const handleBack = () => {
    router.back();
  };

  let screenContent;
  if (phase === "getReady") {
    // Pantalla Get Ready
    screenContent = (
      <View className="flex-1 items-center justify-center">
        <Text className="text-white text-xl mb-5">Get Ready!</Text>
        <Image
          source={imgGetReady}
          className="w-40 h-40 mb-5"
          resizeMode="contain"
        />
        <Text className="text-white text-5xl font-bold">{timeRemaining}</Text>
        <Pressable
          className="bg-[#7B61FF] rounded-full py-3 px-10 mt-5"
          onPress={() => {
            // Opcional: empezar de nuevo el getReady
            setTimeRemaining(10);
          }}
        >
          <Text className="text-white text-base font-semibold">Start Over</Text>
        </Pressable>
      </View>
    );
  } else if (phase === "exercise") {
    // Pantalla de ejercicio
    const round = workout.rounds[currentRoundIndex];
    screenContent = (
      <View className="flex-1">
        <View className="items-center">
          <Image
            source={imgExercise}
            className="w-full h-[350]"
            resizeMode="cover"
          />
          <View className="flx-1 flex-col items-center">
            <View className="py-4">
              <Text className="text-white text-xl font-semibold">
                {round.exerciseId}
              </Text>
              <Text className="text-[#CCCCCC] text-sm text-center">
                {round.time} segundos
              </Text>
            </View>

            <View className="">
              <Text className="text-white text-4xl font-bold">
                {timeRemaining}
              </Text>
            </View>

            <View className="flex-1 bottom-[-160]">
              <Pressable className="bg-[#7B61FF] py-3 px-10 rounded-full mb-5">
                <Text className="text-white text-base font-semibold">
                  PAUSAR
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    );
  } else if (phase === "rest") {
    // Pantalla de descanso
    const round = workout.rounds[currentRoundIndex];
    const nextRoundIndex = currentRoundIndex + 1;
    const nextExercise = workout.rounds[nextRoundIndex]
      ? workout.rounds[nextRoundIndex].exerciseId
      : "Último";
    screenContent = (
      <View className="flex-1">
        <View className="items-center">
          <Image
            source={imgRest}
            className="w-full h-[50%]"
            resizeMode="cover"
          />
          <Text className="text-[#7B61FF] text-2xl font-semibold my-3">
            Toma un descanso
          </Text>
          <Text className="text-white text-4xl font-bold mb-2">
            {timeRemaining < 10 ? `0${timeRemaining}` : timeRemaining}
          </Text>
          <Text className="text-[#CCCCCC]">
            Siguiente ({nextRoundIndex + 1}/{workout.rounds.length})
          </Text>
          <Text className="text-white text-xl font-semibold my-3">
            {nextExercise}
          </Text>
          <Pressable className="bg-[#7B61FF] py-3 px-10 rounded-full mt-5">
            <Text className="text-white text-base font-semibold">
              Saltar descanso
            </Text>
          </Pressable>
        </View>
      </View>
    );
  } else {
    // Pantalla final (finished)
    screenContent = (
      <View className="flex-1 items-center justify-center bg-[#121212]">
        <Image
          source={imgCongrats}
          className="w-40 h-40 mb-5"
          resizeMode="contain"
        />
        <Text className="text-white text-2xl font-semibold mb-3">
          ¡Felicidades!
        </Text>
        <Text className="text-[#CCCCCC] mb-5">
          Has completado el entrenamiento
        </Text>
        <Pressable
          className="bg-[#7B61FF] py-3 px-10 rounded-full"
          onPress={handleBack}
        >
          <Text className="text-white text-base font-semibold">Back Home</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <>
      <View className="flex-1 bg-[#121212]">{screenContent}</View>
    </>
  );
}
