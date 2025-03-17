/* eslint-disable no-unused-vars */
import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

interface DefaultState {
  isConnected: boolean
  setIsConnected: (value: boolean) => void
}

/* const useStore = create<DefaultState>((set) => ({
  isConnected: false,
  setIsConnected: (value: boolean) =>
    set(() => ({
      isConnected: value,
    })),
})) */
export const useStore = create(
  persist(
    (set, get) => ({
      isConnected: false,
      setIsConnected: (value: boolean) => set({ isConnected: value }),
    }),
    {
      name: 'isConnectedS',
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    },
  ),
)

export default useStore
