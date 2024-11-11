// store/userStore.ts

import { create } from "zustand";



const useUserStore = create((set) => ({
  user: null, 
  setUser: (user: string) => set({ user }), 
  clearUser: () => set({ user: null }), 
}));

export default useUserStore;
