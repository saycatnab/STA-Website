import React from "react";
import "./ServicesHeroStyles.css"
import SchoolImg from "../assets/school-img.jpg"
import { Link } from "react-router-dom"
import ServicesTabs from "./ServicesTabs"


const ServicesHero = () => {
    return(
        <div className="services-hero">
            <div className="services-wrapper">
                
                <div className="servicesHero-text">
                    <h1>Our Services</h1>
                    <p>Lorem ipsum eget fusce tempor dapibus lobortis lectus, blandit dictum himenaeos cursus diam et, sed sit aliquam suspendisse tristique non. Ad volutpat viverra maecenas rhoncus luctus turpis tellus.</p>
                    <span ><p className="servicesHero-callout">Check out our Services below!</p></span>
                   
                </div>
                <div>
                    <img className="servicesHero-img" src={SchoolImg}></img>
                </div>
            </div>
        </div>
    )

}

export default ServicesHero;