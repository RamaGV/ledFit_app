// app/context/WorkoutsContext.tsx
import React, { createContext, useState, useEffect, useCallback } from "react";

interface Workout {
  _id: string;
  title: string;
  level: string;
  rounds: Exercise[];
  image: string;
  totalTime: string;
  group: string;
  description: string;
  isBookmarked: boolean;
}
interface Exercise {
  exerciseId: string;
  isActive: boolean;
  time: number;
}

interface WorkoutsContextValue {
  workouts: Workout[];
  loadWorkouts: boolean;
  rounds: Exercise[];
  errorWorkouts: string | null;
  reload: () => Promise<void>;
}

export const WorkoutsContext = createContext<WorkoutsContextValue>({
  workouts: [],
  rounds: [],
  loadWorkouts: true,
  errorWorkouts: null,
  reload: async () => {},
});

export function WorkoutsProvider({ children }: { children: React.ReactNode }) {
  const [workouts, setWorkouts] = useState<Workout[]>([]);
  const [loadWorkouts, setLoadingWorkout] = useState(true);
  const [errorWorkouts, setErrorWorkouts] = useState<string | null>(null);

  const fetchWorkouts = useCallback(async () => {
    try {
      setLoadingWorkout(true);
      const response = await fetch("http://192.168.1.3:5000/api/routines/all");
      if (!response.ok) {
        throw new Error("ErrorWorkouts fetching workouts");
      }
      const data = await response.json();
      setWorkouts(data);
      setErrorWorkouts(null);
    } catch (err: any) {
      console.error("ErrorWorkouts fetching workouts:", err);
      setErrorWorkouts("Failed to load workouts");
    } finally {
      setLoadingWorkout(false);
    }
  }, []);

  useEffect(() => {
    fetchWorkouts();
  }, [fetchWorkouts]);

  return (
    <WorkoutsContext.Provider
      value={
        {
          workouts,
          loadWorkouts,
          errorWorkouts,
          reload: fetchWorkouts,
        } as any
      }
    >
      {children}
    </WorkoutsContext.Provider>
  );
}

export default WorkoutsProvider;
