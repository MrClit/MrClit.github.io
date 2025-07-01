import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { useEffect } from 'react';
import NavBar from "./components/NavBar";
import useThemeStore from "./store/useThemeStore";
import './i18n'; // Importa la configuración de i18n
import { useTranslation } from "react-i18next";

// Lazy load de las páginas
const Home = lazy(() => import("./pages/Home"));
const Projects = lazy(() => import("./pages/Projects"));
const About = lazy(() => import("./pages/About"));

// Componente para manejar el tema
const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useThemeStore();

  useEffect(() => {
    const root = document.documentElement;
    root.className = theme;
  }, [theme]);

  return <>{children}</>;
};

function App() {
  const { t } = useTranslation();
  
  return (
    <ThemeProvider>
      <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900">
        <NavBar />
        <main className="flex-grow pt-16">
          <Suspense fallback={<div className="w-full text-center py-10 text-lg">{t('suspense.loading')}</div>}>
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
