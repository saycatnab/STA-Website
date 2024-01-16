import { Link } from "react-router-dom"
import InstaPl from "../assets/sta-insta-placeholder.png"
import "./InstaPostsStyles.css"
import instaIcon from "../assets/instaLogo.png"

// next step: add in sta logo for nav bar and start on about page.
// should be simple: face less pictures and a big paragraph of who we are
// also add in line borders between the home page

const InstaPosts = () => {
    return(
        <div className="insta-display">
            <div className="wrap">
                <div className="view-insta">
                    <span><img src={InstaPl}></img></span>
                    <div className="hhover">
                        <p>view on instagram</p>
                        <img src={instaIcon} ></img>
                    </div>
                    
                </div>
                <div className="view-insta">
                    <span><img src={InstaPl}></img></span>
                    <div className="hhover">
                        <p>view on instagram</p>
                        <img src={instaIcon} ></img>
                    </div>
                </div>
                <div className="view-insta">
                    <span><img src={InstaPl}></img></span>
                    <div className="hhover">
                        <p>view on instagram</p>
                        <img src={instaIcon} ></img>
                    </div>
                </div>
            </div>
            <div className="wrap">
                <div className="view-insta">
                    <span><img src={InstaPl}></img></span>
                    <div className="hhover">
                        <p>view on instagram</p>
                        <img src={instaIcon} ></img>
                    </div>
                </div>
                <div className="view-insta">
                    <span><img src={InstaPl}></img></span>
                    <div className="hhover">
                        <p>view on instagram</p>
                        <img src={instaIcon} ></img>
                    </div>
                </div>
                <div className="view-insta">
                    <span><img src={InstaPl}></img></span>
                    <div className="hhover">
                        <p>view on instagram</p>
                        <img src={instaIcon} ></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InstaPosts;