import React from "react";
import "./ServicesTabsStyles.css"
import "./ProductsPageStyles.css"
import DigitalGuide from "../assets/digitalProduct1.png"
import Guide1PDF from "../assets/Guide-to-teaching.pdf"


const ProductsPage = () => {
    return(
        <div className="Product-page-section">
            <div className="Product1-section"> 
                <div className="product-desc">
                    <h1>Check out our latest product!</h1>
                    <p>Lorem ipsum eget fusce tempor dapibus lobortis lectus, blandit dictum himenaeos cursus diam et, sed sit aliquam suspendisse tristique non. Ad volutpat viverra maecenas rhoncus luctus turpis tellus, rutrum nisi imperdiet laoreet neque at ullamcorper, erat neque quis sociosqu rutrum imperdiet.</p>
                    <button><a href={Guide1PDF} download="Guide-to-teaching">Download for free!</a></button>
                </div>
                <img className="product-img" src={DigitalGuide}></img>
            </div>
        </div>
    )
    }

export default ProductsPage;