import React from 'react'
import './About.css'
import img from '../../img/avatar.jpg'
import { Link } from 'react-router-dom'

function About() {
  return (
      <>
        <div className="containerAbout">
            <div className="avatar">
                <div className="avatarIcone" style={{ backgroundImage: `url(${img})`}}></div>
                <div className="circle-bg circle-1 avatarIcone"></div>
                <div className="circle-bg circle-2 avatarIcone"></div>
            </div>
            <div className="descriptif">
                <h2>Bienvenue!</h2>
                <p>“Etudiante en marketing digital et UX design à Hetic, 
                    ce programme m’a permit de connaitre l’ensemble des métiers
                    du web. Je porte aujourd’hui un intérêt tout particulier pour
                    l’UX/UI.Je souhaite intégrer une entreprise me permettant 
                    d’enrichir mes compétences dans ce domaine.”
                </p>
                <p className="citation">
                    “Je suis actuellement à la recherche d'une alternance dans le design web à partir de janvier 2021, n'hésitez pas à me <Link className="contact" to="/contact"> contacter </Link>"
                </p>
            </div>
        </div>
      </>
  )
}

export default About
