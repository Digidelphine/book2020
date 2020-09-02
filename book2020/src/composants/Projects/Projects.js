import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Projects.css'
import Project from './Project/Project'

function Projects() {

    const [datas,] = useState([
        {
            id: 1,
            icon: { name: 'FiFigma', path: 'react-icons/fi' },
            cover: '../../../img/cover1.jpg',
            title: 'Le Second Empire',
            description: 'Brasserie parisienne',
            modal: { 
                title: 'Adobe XD',
                text: 'Réalisation du design du site web d\'une brasserie parisienne',
                image: '../../../img/modal1.jpg'
            }
        },
        {
            id: 2,
            icon: { name: 'FiFigma', path: 'react-icons/fi' },
            cover: '../../../img/cover2.jpg',
            title: 'Booker',
            description: 'Partage de livre' ,
            modal: { 
                title: 'Adobe XD',
                text: 'Réalisation du design du site web d\'une brasserie parisienne',
                image: '../../../img/modal2.jpg' 
            }
        },
        {
            id: 3,
            icon: { name: 'FiFigma', path: 'react-icons/fi' },
            cover: '../../../img/cover3.jpg',
            title: 'Yapla',
            description: 'Plateforme de gestion pour association' ,
            modal: { 
                title: 'Figma',
                text: 'Réalisation du design du site web',
                image: '../../../img/modal3.jpg' 
            }
        },
        {
            id: 4,
            icon: { name: 'FiFigma', path: 'react-icons/fi' },
            cover: '../../../img/cover4.jpg',
            title: 'Assurance',
            description: 'Parcours utilisateur' ,
            modal: { 
                title: 'Figma',
                text: 'Réalisation du design du site web',
                image: '../../../img/modal4.jpg' 
            }
        },
        {
            id: 5,
            icon: { name: 'FiFigma', path: 'react-icons/fi' },
            cover: '../../../img/cover4.jpg',
            title: 'Socoon',
            description: 'Application d\'entraide intergénérationnel',
            modal: { 
                title: 'Figma',
                text: 'Réalisation du design du site web',
                image: '../../../img/modal4.jpg' 
            }
        },
    ])

    return (
        <>
            <div className="css-masonry">
                { datas.map((item, i) => <Project props={ item } key={ i } />) }

                <div className="item"> 
                    <div className="title">
                        <p className="french">
                            All designs & drawings are copyright : <Link to="#" target="_blank" rel="noopener noreferrer">@delphinegaspar</Link>
                        </p>
                    </div>  
                </div>

            </div>
        </>
    )
}

export default Projects
