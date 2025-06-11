import { NavLink } from "react-router-dom";
import "./header.css"; 

export default function Header() {
  return (
    <header>
      <nav>
        <NavLink to="/" end className={({ isActive }) => isActive ? "active" : ""}>
          Main
        </NavLink>
        {" | "}
        <NavLink to="/contacts" className={({ isActive }) => isActive ? "active" : ""}>
          Contacts
        </NavLink>
        {" | "}
        <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>
          About
        </NavLink>
      </nav>
    </header>
  );
}
