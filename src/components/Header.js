import React from "react";
import { Link } from "react-router-dom";


function Header() {
    
    return (
        
        <div className="header">
            <header className="text-header">
                Meteo DATA
            <div className="login-link">
                
                <span className="home"><Link to="/">Home</Link></span>
                <span className="Sign-In"><Link  to="/sign-in">Sign-In/Sign-Up</Link></span>
                
            </div>   
            </header>
 
        </div>
    )
}

export default Header