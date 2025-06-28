import { NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const NavBar: React.FC = () => {
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
          Home
        </NavLink>
        <NavLink 
          to="/projects" 
          className={({ isActive }) => getNavLinkClass(isActive)}
        >
          Projects
        </NavLink>
        <NavLink 
          to="/about" 
          className={({ isActive }) => getNavLinkClass(isActive)}
        >
          About me
        </NavLink>
      </div>
      <div className="flex items-center">
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default NavBar;
