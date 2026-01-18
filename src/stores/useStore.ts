import { create } from 'zustand';
import { createCounterSlice, CounterSlice } from './counterStore';
import { AuthSlice, createAuthSlice } from './authSlice';


// type StoreState = AuthSlice & CartSlice

type StoreState = CounterSlice & AuthSlice;

export const useStore = create<StoreState>((...a) => ({
  ...createCounterSlice(...a),
  ...createAuthSlice(...a),
}));
