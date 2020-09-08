import React from 'react'
import './Contact.css'
//import img from '../../img/avatar.jpg'
import { TiSocialLinkedinCircular } from "react-icons/ti"
import { HiOutlineMail } from "react-icons/hi"
import { Link } from 'react-router-dom'

function Contact() {
  
    return (
      <>
        <div className="containerContact">
                <h2>Envie d'une collaboration ? Ecrivez moi</h2>
                <div className="social-icons">
                    <Link to="mailto:gaspardelphine01@gmail.com" target="_blank" rel="noopener noreferrer">
                        <HiOutlineMail />
                    </Link>
                    <TiSocialLinkedinCircular />
                </div>
        </div>
      </>
  )
}

export default Contact
