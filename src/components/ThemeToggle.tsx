import { useEffect } from 'react';
import useThemeStore from '../store/useThemeStore';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useThemeStore();

  const handleClick = () => {
    toggleTheme();
  };

  return (
    <button
      onClick={handleClick}
      className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 dark:bg-gray-300 hover:cursor-pointer"
    >
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
  );
};

export default ThemeToggle;