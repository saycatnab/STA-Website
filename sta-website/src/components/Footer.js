import React from "react";
import "./FooterStyles.css"
import logoFooter from "../assets/sta-website-logo.png"
import pinterestlogo from "../assets/pinterestLogoBrown.png"
import youtubeLogo from "../assets/youtubeLogo.png"
import tiktokLogo from "../assets/tiktokLogo.png"
import searchLogo from "../assets/searchLogo.png"
import instaLogo from "../assets/instaLogo.png"


const Footer = () => {
    return(
        <div className="footer-section">
            <div className="footer-flex">
                <div className="footer-flexItem footer-quote">
                    <img src={logoFooter} className="footer-logo"></img>
                    <p>Welcome to our vibrant sisterhood of educators making a <br></br>positive impact worldwide</p>
                </div>
                <div className="footer-flexItem footer-emailNews">
                    <h1>Join our Newsletter</h1>
                    <form className="footer-formWrap">
                        <label className="footer-formLabel">
                            Enter your email:
                            <input className="footer-formInput" type="text" />
                        </label>
                        <button className="footer-formButton">
                            Go!
                        </button>
                    </form>
                </div>
                <div className="footer-flexItem footer-socials">
                    <h1>Follow us on</h1>
                    <div className="footer-smWrap">
                        <img className="socials-foot" src={youtubeLogo}></img>
                        <img className="socials-foot" src={instaLogo}></img>
                        <img className="socials-foot" src={pinterestlogo}></img>
                    </div>
                </div>
            </div>
            {/* <div className="footer-seperator"></div> */}
            <div className="footer-endCredits">
                <p>STA website was made with ♡</p>
            </div>
        </div>
    )

}

export default Footer;
