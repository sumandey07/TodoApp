import { create } from "zustand";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createJSONStorage, persist } from "zustand/middleware";

const UserGlobalStore = create()(
  persist(
    (set, get) => ({
      user: null,
      updateUser: (user) => {
        set({ user });
      },
    }),
    {
      name: "user-storage",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);

export default UserGlobalStore;
