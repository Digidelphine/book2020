import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Link } from 'react-router-dom'
import './Card.css'

import { SiAdobexd } from 'react-icons/si'
import { FiFigma } from 'react-icons/fi'
import { SiAdobephotoshop } from 'react-icons/si'
import { MdError } from 'react-icons/md'

function Card({props}) {

    const data = props
    console.log(data);

    const setIcons = (datas) => {
        console.log(datas);
        
        let results = datas.map( (icons) => {
            let myIcon = ''
            switch (icons.name) {
                case 'figma':
                    myIcon = <Link key={uuidv4()} to="https://www.figma.com/" target="_blank">
                                <FiFigma style={{ color: `${icons.color}` }}/>
                            </Link>
                    break
                case 'adobe':
                    myIcon = <Link key={uuidv4()} to="https://www.adobe.com/products/xd.html" target="_blank">
                                <SiAdobexd style={{ color: `${icons.color}` }}/>
                            </Link>
                    break
                case 'photoshop':
                    myIcon = <Link key={uuidv4()} to="https://www.adobe.com/products/photoshop.html" target="_blank">
                                <SiAdobephotoshop style={{ color: `${icons.color}` }}/>
                            </Link>
                    break
                default:
                    myIcon = <MdError key={uuidv4()} style={{ color: 'red' }}/>
            }
            return myIcon
        })
        return <div className="card-icons">{results}</div>
    }

    return (
        <>  
            <div className={`gallery-item ${ parseInt(data.id)%3 === 0 ? 'h-1' : 'h-2' } p${data.id}`}>
                    <div className="image">
                        <div className="flip-card">
                            <div className="card-inner">
                                <div className="card-front" style={{ backgroundImage: `url(${data.cover})`}}>
                                    <div className="card-content">
                                        <h2>{data.title}</h2>
                                    </div>
                                </div>
                                <div className="card-back">
                                    <div className="card-top">
                                        <p>{data.description}</p>
                                    </div>
                                    {setIcons(data.icons)}
                                     <Link className="btn-grad" to="#" data-toggle="modal" data-target={`#modal${data.id}`}>
                                        <p>En savoir plus</p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
            
            <div className="modal fade" id={`modal${data.id}`} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">{ data.modal.title }</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <img className="img-fluid" src={ data.modal.image } alt="" />
                        </div>
                        <div className="modal-body">
                            <p className="text-center">{ data.modal.text }</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-projet-1" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
      </>
  )
}

export default Card
