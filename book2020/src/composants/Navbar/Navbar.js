import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { FaHamburger } from "react-icons/fa"
import Typed from 'react-typed'

function Navbar() {
  return (
      <>
        <Typed className="typed-title"
            typeSpeed={90}
            backSpeed={90}
            loop
            strings={['Delphine Gaspar ', 'UX Designer ']}
        />
        <nav className="navbar navbar-expand-sm">
            <div id="navbarToggle" className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"><FaHamburger/></span>
            </div>
            <div className="collapse navbar-collapse fixCenter" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link over-link" to="/projects">Réalisations</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link over-link" to="/about">A propos</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link over-link" to="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
      </>
  )
}

export default Navbar
