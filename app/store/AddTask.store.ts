import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Task {
  id: number;
  content: string;
  completed: boolean;
  deleted: boolean;
}

interface TaskState {
  tasks: Task[];
  addTask: (content: string) => void;
  completeTask: (id: number) => void;
  deleteTask: (id: number) => void;
}

export const useTaskStore = create<TaskState>()(
  persist(
    (set) => ({
      tasks: [],

      addTask: (content: string) =>
        set((state) => ({
          tasks: [
            ...state.tasks,
            {
              id: Date.now(),
              content,
              completed: false,
              deleted: false,
            },
          ],
        })),

      completeTask: (id: number) =>
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === id ? { ...task, completed: !task.completed } : task
          ),
        })),

      deleteTask: (id: number) =>
        set((state) => ({
          tasks: state.tasks.filter((task) => task.id !== id),
        })),
    }),
    {
      name: "task-storage",
    }
  )
);
