import "./NavbarStyles.css"
import React from "react"
import mainLogo from "../assets/sta-website-logo2.png"
import pinterestlogo from "../assets/pinterestLogoBrown.png"
import youtubeLogo from "../assets/youtubeLogo.png"
import tiktokLogo from "../assets/tiktokLogo.png"
import searchLogo from "../assets/searchLogo.png"
import instaLogo from "../assets/instaLogo.png"

import { Link } from "react-router-dom"

const Navbar = () => {
    return(
        <div className=" ">
            <div className="header">
                    <ul className="nav-menu">
                        <li>
                            <Link to="/" className="nav-btn">Home</Link>
                        </li>
                        <li>
                            <Link to="/about" className="nav-btn">About</Link>
                        </li>
                        <li>
                            <Link to="/blog" className="nav-btn">Blog</Link>
                        </li>
                        <li>
                            <Link to="/services" className="nav-btn">Services</Link>
                        </li>
                        <li>
                            <Link to="/products" className="nav-btn">Products</Link>
                        </li>
                    </ul>
                    <ul className="socials-nav">
                    <li>
                        <img className="smlogo "src={searchLogo}></img>
                    </li>
                    <li>
                        <img className="smlogo"src={instaLogo}></img>
                    </li>
                    <li>
                        <img className="smlogo pinterest"src={pinterestlogo}></img>
                    </li>
                    <li>
                        <img className="smlogo"src={youtubeLogo}></img>
                    </li>
                    
                    </ul>
                    
            </div>
            <div className="logo-nav">
                        <img src={mainLogo}></img>
            </div>
        </div>    
    )
}

export default Navbar;