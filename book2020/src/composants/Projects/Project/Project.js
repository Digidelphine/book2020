import React from 'react'
import { Link } from 'react-router-dom'
import './Project.css'

import { FiFigma } from 'react-icons/fi'

function Project(props) {
    const data = props.props;
    console.log(data);
    
    return (
        <>
            <div className="item">
                <Link className="item-click" to="#" data-toggle="modal" data-target={`#modal${data.id}`}>
                    <div className="item-icon"><FiFigma /></div>
                    <img src={ data.cover } alt="exemple"/>
                    <div className="title">
                        { data.title }
                        <p className="description">"{ data.description }"</p>
                    </div>
                </Link>
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

export default Project
