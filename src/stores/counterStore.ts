import { create, StateCreator } from 'zustand';

export interface CounterSlice {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}

// export const useCounterStore = create<CounterState>((set) => ({
//   count: 0,
//   increment: () => set((state) => ({ count: state.count + 1 })),
//   decrement: () => set((state) => ({ count: state.count - 1 })),
//   reset: () => set({ count: 0 }),
// }));


export const createCounterSlice: StateCreator<
  CounterSlice,
  [],
  [],
  CounterSlice
> = (set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 }),
});


// export const createAuthSlice: StateCreator<
//   AuthSlice,
//   [],
//   [],
//   AuthSlice
// > = (set) => ({
//   isAuthenticated: false,
//   login: () => set({ isAuthenticated: true }),
//   logout: () => set({ isAuthenticated: false }),
// })
