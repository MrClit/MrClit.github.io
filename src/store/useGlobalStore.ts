import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type Theme = 'light' | 'dark';

interface ThemeStore {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

const useThemeStore = create<ThemeStore>()(
  persist(
    (set) => ({
      theme: 'light',
      toggleTheme: () => {
        return set((state) => {
          const newTheme = state.theme === 'light' ? 'dark' : 'light';
          console.log('Nuevo tema establecido:', newTheme);
          return { theme: newTheme };
        });
      },
      setTheme: (theme) => {
        console.log('Estableciendo tema a:', theme);
        return set({ theme });
      },
    }),
    {
      name: 'theme-storage',
      version: 1,
    }
  )
);

// Hook personalizado para facilitar el uso
export const useTheme = () => {
  const { theme, toggleTheme, setTheme } = useThemeStore();
  return { theme, toggleTheme, setTheme };
};

export default useThemeStore;
