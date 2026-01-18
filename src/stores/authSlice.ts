// store/slices/authSlice.ts
import { StateCreator } from 'zustand'

export type AuthSlice = {
    isAuthenticated: boolean
    login: () => void
    logout: () => void
  }

export const createAuthSlice: StateCreator<
  AuthSlice,
  [],
  [],
  AuthSlice
> = (set) => ({
  isAuthenticated: false,
  login: () => set({ isAuthenticated: true }),
  logout: () => set({ isAuthenticated: false }),
})
