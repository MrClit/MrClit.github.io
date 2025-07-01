import { NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

const NavBar: React.FC = () => {
  const { t } = useTranslation();
  const linkBase = "px-3 py-2 bg-indigo-500 rounded transition-colors duration-200";
  const linkInactive = "text-white hover:bg-indigo-600";
  const linkActive = "bg-indigo-700 text-white";
  const getNavLinkClass = (isActive: boolean) => 
    `${linkBase} ${isActive ? linkActive : linkInactive}`;

  return (
    <nav className="fixed top-0 left-0 right-0 w-full flex justify-between items-center py-2 px-4 bg-white/5 dark:bg-gray-900/5 backdrop-blur-lg shadow-sm z-50">
      <div className="flex gap-4">
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
      <div className="flex items-center">
        <LanguageSwitcher />
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default NavBar;
