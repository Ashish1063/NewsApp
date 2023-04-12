import React, { Component } from 'react';
import './navbar.css';
import { Link } from 'react-scroll'
export default class NavBar extends Component {
    render() {
        return (
            <div className='NavBar bg-dark '  >

                <nav className="navbar navbar-expand "  >

                    {/* <div className="container-fluid">
                       <a className="navbar-brand" href="#">NewsApp</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button> */}
                  <div className="container"> 
                    <a className="navbar-brand" href="#" style={{ color: "white" }}>NewsApp</a>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{ justifyContent: "flex-end" }}>
                        <div className="d-flex" >
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{ position: "flex", justifyContent: "right" }}>
                                <li className="nav-item">
                                <a href='/'><Link className="nav-link" style={{ color: "white" }} activeClass="active" to="news" spy={true} smooth={true} duration={500} >News</Link></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#" style={{ color: "white" }} >About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#"style={{ color: "white" }}>Contact</a>
                                </li>

                            </ul>
                            </div>
                        </div>
                    </div>
                </nav>




            </div>
        )
    }
}
