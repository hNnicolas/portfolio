import React, { useEffect, useState } from "react"
import { Link } from "react-scroll"
import "./Navbar.css"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [theme, setTheme] = useState("dark-mode")

  const scrollOffset = -170

  const toggleTheme = () => {
    const newTheme = theme === "dark-mode" ? "light-mode" : "dark-mode"
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)
    document.body.className = newTheme
  }

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme) {
      setTheme(savedTheme);
      document.body.className = savedTheme
    }
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className={`navbar ${theme}`}>
      <nav>
        <button onClick={toggleTheme} className="theme">
          <img
            src={theme === "dark-mode" ? "/assets/icon_sun.png" : "/assets/icon_moon.png"}
            alt={theme === "dark-mode" ? "Light mode" : "Dark mode"}
            className="theme-icon"
          />
        </button>
        <button className="btn">ID</button>
        <h3 className="active">Nicolas</h3>
        <div
          className={`menu ${isMenuOpen ? "openmenu" : ""}`}
          id="menu"
          onClick={toggleMenu}
        >
          <div>
            <span className="line-1"></span>
            <span className="line-2"></span>
            <span className="line-3"></span>
          </div>
        </div>
        <ul
          className={`nav-menu ${isMenuOpen ? "navbar" : ""}`}
          onClick={toggleMenu}
        >
          <li>
            <Link to="home" smooth={true} duration={500} offset={scrollOffset}>
              Accueil
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500} offset={scrollOffset}>
              Propos
            </Link>
          </li>
          <li>
            <Link
              to="skills"
              smooth={true}
              duration={500}
              offset={scrollOffset}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="projet"
              smooth={true}
              duration={500}
              offset={scrollOffset}
            >
              Projets
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              offset={scrollOffset}
              className="active-contact"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
