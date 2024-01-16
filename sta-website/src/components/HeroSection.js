import "./HeroSectionStyles.css"
import React from "react"
import clockTower from "../assets/clockTower.jpg"
import { Link } from "react-router-dom"

const HeroSection = () => {
    return(
        <div className="hero-section">
            <div className="base">
                <img className="clockTower-blog" src={clockTower}></img>
                <div className="initial-blog">
                    <h1><span>what we do</span></h1>
                    <h1>We make teaching abroad easier</h1>
                    <button><Link to="/services" className="nav-btn">Our Services</Link></button>
                </div>
            </div>
            <div>
            
            </div>
        </div>
    )
}

export default HeroSection