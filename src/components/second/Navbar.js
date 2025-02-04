import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <div>
       <nav className="navbar navbar-expand-lg navbar-light bg-warning">
            <div className="container-fluid">
                <Link className="navbar-brand text-danger" to="/second">{props.number}<span className='text-white'>{props.title}</span></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/second">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/second/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/second/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}
