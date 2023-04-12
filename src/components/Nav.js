import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './nav.css';
export default class Nav extends Component {


    render() {

        return (
            <div className='Nav'>


                <nav className="navbar navbar-expand-lg bg-light">
                    <div className="container">
                        {/* <Link className="navbar-brand" to="/">Categories</Link> */}
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                             <span className="navbar-toggler-icon"></span>  
                        </button> 
                        <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{possition:"flex", justifyContent:"center"}}>
                            <div className="d-flex" > 
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 my-5 mx-5"  style={{fontWeight:"bolder"}} >

                              <li class="nav-item "><Link class="nav-link" to="/Business">Business</Link></li>
                              <li class="nav-item "><Link class="nav-link" to="/Entertainment">Entertainment</Link></li>
                             <li class="nav-item active "><Link class="nav-link" to="/">General</Link></li>
                             <li class="nav-item "><Link class="nav-link" to="/Health">Health</Link></li>
                             <li class="nav-item "><Link class="nav-link" to="/Science">Science</Link></li>
                             <li class="nav-item "><Link class="nav-link" to="/Sports">Sports</Link></li>
                             <li class="nav-item "><Link class="nav-link" to="/Technology">Technology</Link></li>

                            </ul>
                            </div>
                        </div>
                    </div>
                </nav>

            </div>
        )
    }
}
