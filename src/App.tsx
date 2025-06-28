import { Routes, Route } from "react-router-dom";
import { useEffect } from 'react';
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import NavBar from "./components/NavBar";
import useThemeStore from "./store/useThemeStore";

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
  return (
    <ThemeProvider>
      <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900">
        <NavBar />
        <main className="flex-grow pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
