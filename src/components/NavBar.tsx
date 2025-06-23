import { NavLink } from "react-router-dom";

const NavBar: React.FC = () => {
  const linkBase = "px-3 py-2 rounded transition-colors duration-200";
  const linkInactive = "text-white hover:bg-indigo-600";
  const linkActive = "bg-indigo-700 text-white";
  const getNavLinkClass = (isActive: boolean) => 
    `${linkBase} ${isActive ? linkActive : linkInactive}`;

  return (
    <nav className="w-full flex justify-center items-center py-2 gap-4 bg-gray-800/70 backdrop-blur z-50">
      <NavLink 
        to="/" 
        className={({ isActive }) => getNavLinkClass(isActive)}
      >
        Inicio
      </NavLink>
      <NavLink 
        to="/projects" 
        className={({ isActive }) => getNavLinkClass(isActive)}
      >
        Proyectos
      </NavLink>
      <NavLink 
        to="/about" 
        className={({ isActive }) => getNavLinkClass(isActive)}
      >
        Sobre mí
      </NavLink>
    </nav>
  );
};

export default NavBar;
