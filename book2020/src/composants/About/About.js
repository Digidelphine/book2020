import React from 'react'
import './About.css'
import img from '../../img/avatar.jpg'
import flower from '../../img/flower.png'

function About() {
    console.log(img)
  return (
      <>
        <div className="containerAbout">
            <div className="avatar">
                <div className="avatarIcone" style={{ backgroundImage: `url(${img})`}}></div>
            </div>
            <div className="descriptif">
                <h2>Bienvenue!</h2>
                <p>“ Etudiante en marketing digital et UX design à Hetic, 
                    ce programme m’a permit de connaitre l’ensemble des métiers
                    du web. Je porte aujourd’hui un intérêt tout particulier pour
                    l’UX/UI.Je souhaite intégrer une entreprise me permettant 
                    d’enrichir mes compétences dans ce domaine.”
                </p>
                <p className="citation">“ Seul n’a de valeur que le travail réalisé en profondeur dans 
                    un engagement total et dans une lutte où l’on se livre tout 
                    entier ” Werner Bishop</p>
            </div>
            <img className="img-flower" src={flower} alt="flower" />
        </div>
      </>
  )
}

export default About