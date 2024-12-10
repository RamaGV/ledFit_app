// app/context/WorkoutsContext.tsx
import React, { createContext, useState, useEffect, useCallback } from "react";

interface Workout {
  _id: string;
  title: string;
  level: string;
  rounds: Exercise[];
  image: string;
  totalTime: string;
  // ... otros campos si los hay
}
interface Exercise {
  exerciseId: string;
  isActive: boolean;
  time: number;
}

interface WorkoutsContextValue {
  workouts: Workout[];
  loading: boolean;
  rounds: Exercise[];
  error: string | null;
  reload: () => Promise<void>;
}

export const WorkoutsContext = createContext<WorkoutsContextValue>({
  workouts: [],
  rounds: [],
  loading: true,
  error: null,
  reload: async () => {},
});

export function WorkoutsProvider({ children }: { children: React.ReactNode }) {
  const [workouts, setWorkouts] = useState<Workout[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchWorkouts = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch("http://192.168.1.3:5000/api/routines/all");
      if (!response.ok) {
        throw new Error("Error fetching workouts");
      }
      const data = await response.json();
      setWorkouts(data);
      setError(null);
    } catch (err: any) {
      console.error("Error fetching workouts:", err);
      setError("Failed to load workouts");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchWorkouts();
  }, [fetchWorkouts]);

  return (
    <WorkoutsContext.Provider
      value={{ workouts, loading, error, reload: fetchWorkouts } as any}
    >
      {children}
    </WorkoutsContext.Provider>
  );
}
