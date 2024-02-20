import React from "react";
import "./ServicesTabsStyles.css"
import "./ProductsPageStyles.css"
import DigitalGuide from "../assets/digitalProduct1.png"
import Guide1PDF from "../assets/Guide-to-teaching.pdf"
import productData from "./data/productsData.json"


const ProductsPage = () => {
    return(
        <div className="Product-page-section">
            <div>
                <h1 className="product-header">Check out our latest products!</h1>
            </div>
        {/* <div className="Product1-section"> 
                <div className="product-desc">
                    <h1 className="product-header">Guide to Teaching in the Middle East</h1>
                    <p className="product-para">Lorem ipsum eget fusce tempor dapibus lobortis lectus, blandit dictum himenaeos cursus diam et, sed sit aliquam suspendisse tristique non. Ad volutpat viverra maecenas rhoncus luctus turpis tellus, rutrum nisi imperdiet laoreet neque at ullamcorper, erat neque quis sociosqu rutrum imperdiet.</p>
                    <button className="product-button"><a href={Guide1PDF} download="Guide-to-teaching">Download for free!</a></button>
                </div>
                <img className="product-img" src={DigitalGuide}></img>
            </div> */}
            {
                productData.map(data => {
                    
                    return(
                        <div className="Product1-section"> 
                            <div className="product-desc">
                                <h1 className="product-header">{data.productTitle}</h1>
                                <p className="product-para">{data.productDesc}</p>
                                <button className="product-button"><a href={data.productPDF} download={data.productPDFtitle}>Download for free!</a></button>
                            </div>
                                <img className="product-img" src={data.productImg}></img>
                        </div>
                        
                    )
                })
            }
        </div>
    )
    }

export default ProductsPage;