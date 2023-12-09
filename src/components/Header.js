import React from "react";
import { Link } from "react-router-dom";





function Header() {
    
    return (
        
        <header className="header">
            <div className="text-header">
                Meteo DATA
            </div> 
            <nav className="login-link">
                
                <span className="home"><Link to="/"><img src={require('./img/home.png')} alt="Home" width="30"></img></Link></span>
                <span className="sign-In"><Link  to="/sign-in"><img src={require("./img/sign-in.png")} alt="Sign-In" width="30"></img></Link></span>
                <span className="logout"><Link  to="/logout"><img src={require("./img/logout.png")} alt="Logout" width="30"></img></Link></span>
                
              
            </nav>
 
        </header>
    )
}

export default Header