import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Header() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.body.classList.toggle("dark", savedTheme === "dark");
  }, []);
  
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.body.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
  };

  return (
    <header className="header">
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
      <button className="theme-toggle-btn" onClick={toggleTheme}>
        {theme === "light" ? "Dark" : "Light"}
      </button>
    </header>
  );
}
