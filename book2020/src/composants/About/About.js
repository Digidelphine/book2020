import React from 'react'
import './About.css'
import img from '../../img/avatar.jpg'
//import { Link } from 'react-router-dom'

function About() {
  return (
      <>
        <div className="content-wrapper-about">
            <div className="diagonal-box">
                <div className="content">
                    <div className="avatar" style={{ backgroundImage: `url(${img})`}}>
                    </div>
                    <div className="descriptif">
                        <p>“Etudiante en marketing digital et UX design à Hetic, 
                            ce programme m’a permit de connaitre l’ensemble des métiers
                            du web. Je porte aujourd’hui un intérêt tout particulier pour
                            l’UX/UI.Je souhaite intégrer une entreprise me permettant 
                            d’enrichir mes compétences dans ce domaine.”
                        </p>
                    </div>
                </div>
            </div>
        </div>
      </>
  )
}

export default About
