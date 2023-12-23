import React from "react";






function Footer() {
    
    return (
        <div>
            <div className="footer-box">
                <h2 className="footer-header">The Website is developed in Golang and React</h2> 
                <div className="footer-links">
                    <ul>
                        <li className="back-front"><span>Back-End:</span></li>
                        <li><a className="back-link" href="https://github.com/Davzp1980/meteo.git" target="_blank" rel="noopener noreferrer"><img className="footer-link-img" src={require("./img/github.png")} alt="git-logo" width="30"/></a></li>
                        <li className="back-front"><span>Front-End:</span></li>
                        <li><a className="front-link" href="https://github.com/Davzp1980/meteo_react.git" target="_blank" rel="noopener noreferrer"><img className="footer-link-img" src={require("./img/github.png")} alt="git-logo" width="30"/></a></li>
                    </ul>  
                </div>
            </div> 
        </div>  
    )
}

export default Footer