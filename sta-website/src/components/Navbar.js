import React from "react"
import "./NavbarStyles.css"

import { Link } from "react-router-dom"

const Navbar = () => {
    return(
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
            </div>
    )
}

export default Navbar;