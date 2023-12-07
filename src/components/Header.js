import React from "react";
import { Link } from "react-router-dom";


function Header() {
    
    return (
        
        <div className="header">
            <div className="text-header">
                Meteo DATA
            </div> 
            <div className="login-link">
                
                <span className="home"><Link to="/">Home</Link></span>
                <span className="sign-In"><Link  to="/sign-in">Sign-In</Link></span>
                <span className="logout"><Link  to="/logout">Logout</Link></span>
                
              
            </div>
 
        </div>
    )
}

export default Header