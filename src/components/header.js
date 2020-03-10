import React, { useState } from "react"
import { Link } from "gatsby"

import FimaLogo from "../images/fima-logo.svg"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <header>
      <nav className={`nav-wrapper ${isOpen ? "isOpen" : ""}`}>
        <div className="logo">
          <Link to="#">
            <FimaLogo />
          </Link>
        </div>
        <div
          className={`nav-toggler ${isOpen ? "isOpen" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
        </div>
        <ul className={`navigation ${isOpen ? "isOpen" : ""}`}>
          <li className="nav-link isActive">
            <Link to="#">Home</Link>
          </li>
          <li className="nav-link">
            <Link to="#">Design</Link>
          </li>
          <li className="nav-link nav-logo">
            <Link to="#">
              <FimaLogo />
            </Link>
          </li>
          <li className="nav-link">
            <Link to="#">About</Link>
          </li>
          <li className="nav-link">
            <Link to="#">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
