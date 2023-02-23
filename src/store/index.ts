import { initialUser } from './../schemas/user';
// DOCS : https://github.com/pmndrs/zustand
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { PaletteMode } from '@mui/material';

import { User } from "../schemas/user";

interface IAppStore {
  headerTabValue: number;
  setHeaderTabValue: (value: number) => any;
  cardsTabValue: string;
  setCardsTabValue: (value: string) => any;
  mode: PaletteMode;
  setThemeMode: (mode: PaletteMode) => any;
  user: User,
  setUser: (email: string, password: string) => User;
  email: string;
  setEmail: (email: string) => string;
  password: string;
  setPassword: (password: string) => string;
};

const appStore = (set: any): IAppStore => ({
  headerTabValue: 0,
  setHeaderTabValue: (value: number) => set({ headerTabValue: value }),
  cardsTabValue: '1',
  setCardsTabValue: (value: string) => set({ cardsTabValue: value }),
  mode: 'light',
  setThemeMode: (mode: PaletteMode) => set({ mode: mode === 'light' ? 'dark' : 'light' }),
  email: '',
  setEmail: (email: string) => set({ email }),
  password: '',
  setPassword: (password: string) => set({ password }),
  user: initialUser,
  setUser: (email: string, password: string) => set((state: IAppStore) => {
    state.user = {
      email,
      password
    }
  }), 
});

const useAppStore = create(
  persist<IAppStore>(appStore, {
    name: 'app',
  }),
);

export default useAppStore;
