import React from 'react'
import { Link, NavLink, withRouter } from 'react-router-dom' 

const Navbar = (props) => {
    return (
    <nav>
        <div className="nav-wrapper">
        <a href="#!" className="brand-logo"><i className="material-icons">cloud</i>Gastant0</a>
        <ul className="right hide-on-med-and-down">
            <li><Link to="/"><i className="material-icons">payment</i></Link></li>
            <li><NavLink to="/expense"><i className="material-icons">payment</i></NavLink></li>
            <li><NavLink to="/cashin"><i className="material-icons">monetization_on</i></NavLink></li>
            <li><a href="badges.html"><i className="material-icons">receipt</i></a></li>
            <li><a href="mobile.html"><i className="material-icons">more_vert</i></a></li>
        </ul>
        </div>
    </nav>
    );
}

export default withRouter(Navbar)
