import { useEffect } from 'react';
import useThemeStore from '../store/useGlobalStore';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useThemeStore();

  const handleClick = () => {
    toggleTheme();
  };

  return (
    <button
      onClick={handleClick}
      className="p-2 rounded-full bg-gray-900 dark:bg-gray-300 hover:cursor-pointer"
    >
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
  );
};

export default ThemeToggle;