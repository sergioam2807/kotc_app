import { create } from "zustand";
import { persist } from "zustand/middleware";
import { UserData } from "@/services/userService";

interface UserStore {
  userData: UserData | null;
  setUserData: (data: UserData | null) => void;
  loadingUser: boolean;
  setLoadingUser: (loading: boolean) => void;
}

export const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      userData: null,
      setUserData: (data) => set({ userData: data }),
      loadingUser: false,
      setLoadingUser: (loading) => set({ loadingUser: loading }),
    }),
    {
      name: "user-data",
      storage: {
        getItem: (name) => {
          if (typeof window === "undefined") return null;
          const item = window.sessionStorage.getItem(name);
          return item ? JSON.parse(item) : null;
        },
        setItem: (name, value) => {
          if (typeof window !== "undefined") window.sessionStorage.setItem(name, JSON.stringify(value));
        },
        removeItem: (name) => {
          if (typeof window !== "undefined") window.sessionStorage.removeItem(name);
        },
      },
    }
  )
);
