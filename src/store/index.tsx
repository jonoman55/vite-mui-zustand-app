// DOCS : https://github.com/pmndrs/zustand
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { PaletteMode } from '@mui/material';

interface IAppStore {
  headerTabValue: string;
  setHeaderTabValue: (value: string) => any;
  cardsTabValue: string;
  setCardsTabValue: (value: string) => any;
  mode: PaletteMode;
  setThemeMode: (mode: PaletteMode) => any;
}

const appStore = (set: any): IAppStore => ({
  headerTabValue: 'one',
  setHeaderTabValue: (value: string) => set({ headerTabValue: value }),
  cardsTabValue: '1',
  setCardsTabValue: (value: string) => set({ cardsTabValue: value }),
  mode: 'light',
  setThemeMode: (mode: PaletteMode) =>
    set({ mode: mode === 'light' ? 'dark' : 'light' }),
});

const useAppStore = create(
  persist<IAppStore>(appStore, {
    name: 'app',
  })
);

export default useAppStore;
