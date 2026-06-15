import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// Detecta el tema preferido del navegador
const getPreferredTheme = (): 'light' | 'dark' => {
  if (typeof window !== 'undefined' && window.matchMedia) {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  return 'light';
};

type Theme = 'light' | 'dark';

interface ThemeStore {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

const useThemeStore = create<ThemeStore>()(
  persist(
    (set) => ({
      theme: getPreferredTheme(), // Usa la preferencia del navegador por defecto
      toggleTheme: () => {
        return set((state) => {
          const newTheme = state.theme === 'light' ? 'dark' : 'light';
          return { theme: newTheme };
        });
      },
      setTheme: (theme) => {
        return set({ theme });
      },
    }),
    {
      name: 'theme-storage',
      version: 1,
      // Usa la preferencia del navegador solo si no hay valor guardado
      partialize: (state) => ({ theme: state.theme }),
      // Reemplaza el estado inicial si hay uno guardado
      merge: (persistedState, currentState) => {
        return {
          ...currentState,
          ...(typeof persistedState === 'object' && persistedState !== null ? persistedState : {}),
        };
      },
    },
  ),
);

export default useThemeStore;
