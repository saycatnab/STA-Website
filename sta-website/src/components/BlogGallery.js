import "./BlogGalleryStyles.css"
import React from "react"
import MosqueImg from "../assets/masjid-img.jpg"
import BurgKhalifa from "../assets/burgkhalifa-img.jpg"
import BoatImg from "../assets/boat-img.jpg"
import AlleyImg from "../assets/alleyway-img.jpg"
import StatueImg from "../assets/statue-img.jpg"

import { Link } from "react-router-dom"

const BlogGallery = () => {
    return(
                <div className="gallery">
                        <div className="grid-item mosque-img">
                                <img src={MosqueImg} alt="mosque"></img>
                                <div className="content">
                                        <h1>travel</h1>
                                        <h1>Lorem Ipsum</h1>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br></br> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation u</p>
                                        <button><Link to="/services" className="nav-btn">Read more</Link></button>
                                </div>
                        </div>
                        <div className="alley-img grid-item">
                                <img src={AlleyImg} alt="alley"></img>
                                <div className="content small-pic">
                                        <h1>travel</h1>
                                        <h1>Lorem Ipsum</h1>
                                        
                                </div>
                        </div>
                        <div className="boat-img grid-item">
                                <img  src={BoatImg} alt="boat"></img>
                                <div className="content small-pic small-pic1">
                                        <h1>travel</h1>
                                        <h1>Lorem Ipsum</h1>
                                        
                                </div>
                        </div>
                        <div className="statue-img grid-item">
                                <img  src={StatueImg} alt="statue"></img>
                                <div className="content">
                                        <h1>travel</h1>
                                        <h1>Lorem Ipsum</h1>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br></br> tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation u</p>
                                        <button><Link to="/services" className="nav-btn">Read MoreS</Link></button>
                                </div>
                        </div>
                        
        
                </div>
    )
}

export default BlogGallery