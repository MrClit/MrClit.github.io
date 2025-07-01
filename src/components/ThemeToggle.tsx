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
      className="w-14 h-8 flex items-center rounded-full p-1 transition-colors duration-300 focus:outline-none bg-gray-300 dark:bg-gray-700"
      aria-label="Toggle theme"
    >
      <span
        className={`w-6 h-6 flex items-center justify-center rounded-full shadow-md transform transition-transform duration-300 bg-white dark:bg-gray-900 ${theme === 'dark' ? 'translate-x-6' : 'translate-x-0'}`}
      >
        {theme === 'dark' ? '🌙' : '☀️'}
      </span>
    </button>
  );
};

export default ThemeToggle;