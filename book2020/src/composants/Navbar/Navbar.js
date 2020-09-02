import React from 'react'
import './Navbar.css'
import { GiVineFlower } from "react-icons/gi";

function Navbar() {
  return (
      <>
        <h2 className="titre">Delphine Gaspar</h2>
        <nav className="navbar navbar-expand-sm">
            <div id="navbarToggle" className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"><GiVineFlower/></span>
            </div>
            <div className="collapse navbar-collapse fixCenter" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link test" href="#">A propos</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link test" href="#">Compétences</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link test" href="#">Réalisations</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link test" href="#">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
      </>
    
  )
}

export default Navbar
