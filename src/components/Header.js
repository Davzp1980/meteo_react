import React from "react";
import { Link } from "react-router-dom";





function Header() {
    
    return (
        
        <nav className="header">
             <ul>
                <li className="text-header"><h1><a href="/"><span className="meteo">Meteo</span ><span className="Data">Data</span></a></h1></li>
                <li className="home-link"><Link to="/"><img src={require('./img/home.png')} alt="Home" width="30" /></Link></li>
                <li className="sign-In"><Link  to="/sign-in"><img src={require("./img/sign-in.png")} alt="Sign-In" width="30"/></Link></li>
                <li className="logout"><Link  to="/logout"><img src={require("./img/logout.png")} alt="Logout" width="30"/></Link></li>
            </ul>
        </nav>
    )
}

export default Header