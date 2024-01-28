import React from "react";
import "./ServicesTabsStyles.css"
import SchoolImg from "../assets/school-img.jpg"
import { Link } from "react-router-dom"
import GroupImg from "../assets/teaching-icon2.png"
import SingleImg from "../assets/single-icon2.png"


const ServicesTabs = () => {
    return(
        <div className="servicesTabsSection" >
            <div className="servicesTabs-wrapper">
                <div className="servicesTabs services1">
                    <h1>Group Mentoring</h1>
                    <img src={GroupImg} className="servicesTab-img servicesTab-img-group"></img>
                    <br></br>
                    <Link to="https://docs.google.com/forms/d/e/1FAIpQLSeQnMkn2kk9TluN1SvvKEmA1lxw5j7Df3cL5vJOhZ7NyAv4LQ/viewform" className="register-btn">Register here!</Link>
                </div>
                <div className="servicesTabs services2">
                    <h1>1-to-1 Mentoring</h1>
                    <img src={SingleImg} className="servicesTab-img servicesTab-img-single"></img>
                    <br></br>
                    <Link to="https://docs.google.com/forms/d/e/1FAIpQLSeQnMkn2kk9TluN1SvvKEmA1lxw5j7Df3cL5vJOhZ7NyAv4LQ/viewform" className="register-btn">Register here!</Link>
                </div>
                <div className="servicesTabs services3">
                    <h1>Group Mentoring</h1>
                    <img src={GroupImg} className="servicesTab-img servicesTab-img-group"></img>
                    <br></br>
                    <Link to="/services" className="register-btn">Coming soon!</Link>
                    
                </div>
            </div>
            
        </div>
    )
}

export default ServicesTabs;