import { useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";

function Navbar({ darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <a href="#home" className="logo" onClick={closeMenu}>
        AK<span>.</span>
      </a>

      <nav className={menuOpen ? "nav-links active" : "nav-links"}>
        <a href="#home" onClick={closeMenu}>Home</a>
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#skills" onClick={closeMenu}>Skills</a>
        <a href="#projects" onClick={closeMenu}>Projects</a>
        <a href="#education" onClick={closeMenu}>Education</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>
      </nav>

      <div className="nav-actions">
        <button
          className="theme-btn"
          onClick={() => setDarkMode(!darkMode)}
          aria-label="Toggle theme"
        >
          {darkMode ? <Sun size={19} /> : <Moon size={19} />}
        </button>

        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </div>
    </header>
  );
}

export default Navbar;
