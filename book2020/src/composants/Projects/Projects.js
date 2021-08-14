import React, { useState } from 'react'
import Card from './Card/Card'
import './Projects.css'

function Projects() {

    const [datas,] = useState([
        {
            id: 1,
            icons: [{ name: 'adobe', color: '#ff61f6' },{ name: 'figma', color: '#C7B9FF' }],
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
            icons: [{ name: 'photoshop', color: '#31a8ff' }],
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
            icons: [{ name: 'adobe', color: '#ff61f6' },{ name: 'photoshop', color: '#31a8ff' }],
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
            icons: [{ name: 'adobe', color: '#ff61f6' },{ name: 'figma', color: '#C7B9FF' }],
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
            icons: [{ name: 'adobe', color: '#ff61f6' },{ name: 'figma', color: '#C7B9FF' }],
            cover: '../../../img/cover2.jpg',
            title: 'Socoon',
            description: 'Application d\'entraide intergénérationnel',
            modal: { 
                title: 'Figma',
                text: 'Réalisation du design du site web',
                image: '../../../img/modal4.jpg' 
            }
        },
        {
            id: 6,
            icons: [{ name: 'adobe', color: '#ff61f6' },{ name: 'figma', color: '#C7B9FF' }],
            cover: '../../../img/cover4.jpg',
            title: 'Socoon',
            description: 'Application d\'entraide intergénérationnel',
            modal: { 
                title: 'Figma',
                text: 'Réalisation du design du site web',
                image: '../../../img/modal4.jpg' 
            }
        },
        {
            id: 7,
            icons: [{ name: 'adobe', color: '#ff61f6' },{ name: 'figma', color: '#C7B9FF' }],
            cover: '../../../img/cover3.jpg',
            title: 'Socoon',
            description: 'Application d\'entraide intergénérationnel',
            modal: { 
                title: 'Figma',
                text: 'Réalisation du design du site web',
                image: '../../../img/modal4.jpg' 
            }
        },
        {
            id: 8,
            icons: [{ name: 'adobe', color: '#ff61f6' },{ name: 'figma', color: '#C7B9FF' }],
            cover: '../../../img/cover1.jpg',
            title: 'Socoon',
            description: 'Application d\'entraide intergénérationnel',
            modal: { 
                title: 'Figma',
                text: 'Réalisation du design du site web',
                image: '../../../img/modal4.jpg' 
            }
        },
        {
            id: 9,
            icons: [{ name: 'adobe', color: '#ff61f6' },{ name: 'figma', color: '#C7B9FF' }],
            cover: '../../../img/cover1.jpg',
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
            <div className="content-wrapper">
                <div className="gallery-container">
                {
                    datas.map((item, i) => <Card props={ item } key={ i } />)
                }
                </div>
           </div>
        </>
    )
}

export default Projects