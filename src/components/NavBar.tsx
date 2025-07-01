import { NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";
import { useState } from "react";

const NavBar: React.FC = () => {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  const linkBase = "px-3 py-2 bg-indigo-500 rounded transition-colors duration-200";
  const linkInactive = "text-white hover:bg-indigo-600";
  const linkActive = "bg-indigo-700 text-white";
  const getNavLinkClass = (isActive: boolean) => 
    `${linkBase} ${isActive ? linkActive : linkInactive}`;

  return (
    <nav className="fixed top-0 left-0 right-0 w-full flex justify-between items-center py-2 px-4 bg-white/90 dark:bg-gray-900/95 backdrop-blur-lg shadow-sm z-50">
      {/* Botón hamburguesa solo en móvil */}
      <button
        className="md:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
        aria-label="Open menu"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span className={`block w-6 h-0.5 bg-indigo-500 mb-1 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-indigo-500 mb-1 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-indigo-500 transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
      </button>
      {/* Enlaces de navegación */}
      <div className="hidden md:flex gap-4">
        <NavLink 
          to="/" 
          className={({ isActive }) => getNavLinkClass(isActive)}
        >
          {t('navbar.home')}
        </NavLink>
        <NavLink 
          to="/projects" 
          className={({ isActive }) => getNavLinkClass(isActive)}
        >
          {t('navbar.projects')}
        </NavLink>
        <NavLink 
          to="/about" 
          className={({ isActive }) => getNavLinkClass(isActive)}
        >
          {t('navbar.about')}
        </NavLink>
      </div>
      {/* Menú móvil desplegable */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full flex flex-col items-center gap-2 bg-white/90 dark:bg-gray-900/95 py-4 shadow-md md:hidden animate-fade-in z-50">
          <NavLink 
            to="/" 
            className={({ isActive }) => `${getNavLinkClass(isActive)} w-1/3 max-w-xs text-center`}
            onClick={() => setMenuOpen(false)}
          >
            {t('navbar.home')}
          </NavLink>
          <NavLink 
            to="/projects" 
            className={({ isActive }) => `${getNavLinkClass(isActive)} w-1/3 max-w-xs text-center`}
            onClick={() => setMenuOpen(false)}
          >
            {t('navbar.projects')}
          </NavLink>
          <NavLink 
            to="/about" 
            className={({ isActive }) => `${getNavLinkClass(isActive)} w-1/3 max-w-xs text-center`}
            onClick={() => setMenuOpen(false)}
          >
            {t('navbar.about')}
          </NavLink>
        </div>
      )}
      {/* Botones de la derecha */}
      <div className="flex items-center ml-2">
        <LanguageSwitcher />
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default NavBar;
