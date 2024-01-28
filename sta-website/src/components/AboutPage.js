import "./AboutPageStyles.css"
import React from "react"
import selfieArt from "../assets/faceless-art.png"

import { Link } from "react-router-dom"


const AboutPage = () => {
    return(
        <div className="About-section">
            <div >
               
            </div>
            <img  className="placeholder" src={selfieArt}></img>
            <div className="paragraph">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <span className="callout"><p>Check out our <a href="https://www.instagram.com/sistersteachingabroad/" target="_blank">instagram!</a></p></span>

            </div>
        </div>
    )
}    


export default AboutPage