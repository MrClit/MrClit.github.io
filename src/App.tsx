import { Suspense, lazy, useEffect, type ReactNode } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import useThemeStore from './store/useThemeStore';
import './i18n';
import { useTranslation } from 'react-i18next';

// Lazy load the pages
const Home = lazy(() => import('./pages/Home'));
const Projects = lazy(() => import('./pages/Projects'));
const About = lazy(() => import('./pages/About'));

// Component to handle the theme
const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const { theme } = useThemeStore();

  useEffect(() => {
    const root = document.documentElement;
    root.className = theme;
  }, [theme]);

  return <>{children}</>;
};

function App() {
  const { t, i18n } = useTranslation();

  // Keep <html lang> in sync with the active i18next language
  useEffect(() => {
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <ThemeProvider>
      <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900">
        <NavBar />
        <main className="grow pt-16">
          <Suspense
            fallback={
              <div className="w-full text-center py-10 text-lg">{t('suspense.loading')}</div>
            }
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </Suspense>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
