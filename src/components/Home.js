import React, { Component } from 'react'
import './home.css';
import { Link } from 'react-scroll';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

export default class Home extends Component {
    render() {
        return (
            <>
                <div className="head"  >
                    <h3>News Web App</h3>
                </div>

                <div className=' Home'>


                    {/* <div className="container"> 

                <iframe src='https://j.gifs.com/KYo5qo.gif'  ></iframe>

                </div> */}

                    <div className="content">



                        <div className="text">
                            <h1> <h2>  Welcome <br/>to Our<br/> </h2>News App<br/><h3> Lsatest news is here..</h3></h1>
                        </div>
                        <Link className="nav-link" style={{ color: "white" }} activeClass="active" to="news" spy={true} smooth={true} duration={500} ><button class="button-57" ><span className="text">Click here</span><span><ArrowDownwardIcon/></span></button></Link>

                    </div>

                </div>
            </>

        )
    }
}
