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
                <div className="footer-qoute">
                    <img src={logoFooter} className="footer-logo"></img>
                    <p>Welcome to our vibrant sisterhood of educators making a positive impact worldwide</p>
                </div>
                <div className="footer-emailnews">
                    <h1>Join our Newsletter</h1>
                    <form>
                        <label>Enter your name:
                            <input type="text" />
                        </label>
                        <button>
                            Go!
                        </button>
                    </form>
                </div>
                <div className="footer-socials">
                    <h1>Follow us on</h1>
                    <div className="footer-smWrap">
                        <img className="socials-foot" src={youtubeLogo}></img>
                        <img className="socials-foot" src={instaLogo}></img>
                        <img className="socials-foot" src={pinterestlogo}></img>
                    </div>
                </div>
            </div>
            <div className="footer-seperator"></div>
            <div>
                <p>STA website was made with ♡</p>
            </div>
        </div>
    )

}

export default Footer;
