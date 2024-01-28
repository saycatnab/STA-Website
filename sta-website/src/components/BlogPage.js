import React from "react";
import "./BlogPageStyles.css"
import MosqueImg from "../assets/masjid-img.jpg"
import CafeImg from "../assets/cafe-img.jpg"
import BoatImg from "../assets/boat-img.jpg"
import AlleyImg from "../assets/alleyway-img.jpg"
import StatueImg from "../assets/statue-img.jpg"
import { Link } from "react-router-dom"
import blogData from "./data/blogdata.json"



const BlogPage = () => {
    return(
        <div className="posts-view">

            {
                blogData.map(data => {
                    
                    return(
                        <div className="post">
                            <Link to={data.link} className="img-hover">
                                <img className="postImg" src={`${data.image}`} alt="">
                                </img>
                            </Link>
                            <div className="postInfo">
                                <div className="postCats">
                                    <span className="postCat">{}</span>
                                    <span className="postCat">{data.date}</span>
                                </div>
                                <hr></hr>
                                <span className="postTitle">
                                    {data.title}
                                </span>
                                <p className="postDesc">
                                    {data.contents1}
                                </p>
                                <span className=""><Link to={data.link} className="read-more">Read more</Link></span>
                            </div>
                        </div>
                        
                    )
                })
            }
            {/* <div className="post">
                <Link to="/page-1" className="img-hover">
                    <img className="postImg" src={blogData.image} alt="">
                    </img>
                </Link>
                <div className="postInfo">
                    <div className="postCats">
                        <span className="postCat">Travel</span>
                        <span className="postCat">1 day ago</span>
                    </div>
                    <hr></hr>
                    <span className="postTitle">
                        Lorem Ipsum ...
                    </span>
                    <p className="postDesc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet porttitor eget dolor. Aenean pharetra magna ac placerat vestibulum lectus mauris. Suscipit adipiscing bibendum est ultricies integer quis. Faucibus a pellentesque sit amet porttitor. Ullamcorper velit sed ullamcorper morbi tincidunt ornare. Eu nisl nunc mi ipsum faucibus vitae aliquet. Dictumst quisque sagittis purus sit amet volutpat consequat. Eu lobortis elementum nibh tellus molestie nunc non blandit massa. Sed euismod nisi porta lorem mollis aliquam ut porttitor leo. Nunc id cursus metus aliquam eleifend mi in nulla. Aliquet lectus proin nibh nisl. Amet est placerat in egestas erat. Sagittis eu volutpat odio facilisis mauris sit amet massa vitae. Vitae et leo duis ut diam quam nulla.
                    </p>
                    <span className=""><Link to="/page-1" className="read-more">Read more</Link></span>
                </div>
                
            </div>
            <div className="post">
            <Link to="/page-2" className="img-hover">
                    <img className="postImg" src={blogData.image} alt="">
                    </img>
                </Link>
                <div className="postInfo">
                    <div className="postCats">
                        <span className="postCat">Travel</span>
                        <span className="postCat">1 day ago</span>
                    </div>
                    <hr></hr>
                    <span className="postTitle">
                        Lorem Ipsum ...
                    </span>
                    <p className="postDesc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet porttitor eget dolor. Aenean pharetra magna ac placerat vestibulum lectus mauris. Suscipit adipiscing bibendum est ultricies integer quis. Faucibus a pellentesque sit amet porttitor. Ullamcorper velit sed ullamcorper morbi tincidunt ornare. Eu nisl nunc mi ipsum faucibus vitae aliquet. Dictumst quisque sagittis purus sit amet volutpat consequat. Eu lobortis elementum nibh tellus molestie nunc non blandit massa. Sed euismod nisi porta lorem mollis aliquam ut porttitor leo. Nunc id cursus metus aliquam eleifend mi in nulla. Aliquet lectus proin nibh nisl. Amet est placerat in egestas erat. Sagittis eu volutpat odio facilisis mauris sit amet massa vitae. Vitae et leo duis ut diam quam nulla.
                    </p>
                    <span className=""><Link to="/page-2" className="read-more">Read more</Link></span>
                </div>
                
            </div>
            <div className="post">
                <Link to="/page-3" className="img-hover">
                    <img className="postImg" src={BoatImg} alt="">
                    </img>
                </Link>
                <div className="postInfo">
                    <div className="postCats">
                        <span className="postCat">Travel</span>
                        <span className="postCat">1 day ago</span>
                    </div>
                    <hr></hr>
                    <span className="postTitle">
                        Lorem Ipsum ...
                    </span>
                    <p className="postDesc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet porttitor eget dolor. Aenean pharetra magna ac placerat vestibulum lectus mauris. Suscipit adipiscing bibendum est ultricies integer quis. Faucibus a pellentesque sit amet porttitor. Ullamcorper velit sed ullamcorper morbi tincidunt ornare. Eu nisl nunc mi ipsum faucibus vitae aliquet. Dictumst quisque sagittis purus sit amet volutpat consequat. Eu lobortis elementum nibh tellus molestie nunc non blandit massa. Sed euismod nisi porta lorem mollis aliquam ut porttitor leo. Nunc id cursus metus aliquam eleifend mi in nulla. Aliquet lectus proin nibh nisl. Amet est placerat in egestas erat. Sagittis eu volutpat odio facilisis mauris sit amet massa vitae. Vitae et leo duis ut diam quam nulla.
                    </p>
                    <span className=""><Link to="/page-3" className="read-more">Read more</Link></span>
                </div>
            
            </div>
            <div className="post">
                <Link to="/page-4" className="img-hover">
                    <img className="postImg" src={AlleyImg} alt="">
                    </img>
                </Link>
                <div className="postInfo">
                    <div className="postCats">
                        <span className="postCat">Travel</span>
                        <span className="postCat">1 day ago</span>
                    </div>
                    <hr></hr>
                    <span className="postTitle">
                        Lorem Ipsum ...
                    </span>
                    <p className="postDesc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet porttitor eget dolor. Aenean pharetra magna ac placerat vestibulum lectus mauris. Suscipit adipiscing bibendum est ultricies integer quis. Faucibus a pellentesque sit amet porttitor. Ullamcorper velit sed ullamcorper morbi tincidunt ornare. Eu nisl nunc mi ipsum faucibus vitae aliquet. Dictumst quisque sagittis purus sit amet volutpat consequat. Eu lobortis elementum nibh tellus molestie nunc non blandit massa. Sed euismod nisi porta lorem mollis aliquam ut porttitor leo. Nunc id cursus metus aliquam eleifend mi in nulla. Aliquet lectus proin nibh nisl. Amet est placerat in egestas erat. Sagittis eu volutpat odio facilisis mauris sit amet massa vitae. Vitae et leo duis ut diam quam nulla.
                    </p>
                    <span className=""><Link to="/page-4" className="read-more">Read more</Link></span>
                </div>
                
            </div>
            <div className="post">
                <Link to="/page-5" className="img-hover">
                    <img className="postImg" src={StatueImg} alt="">
                    </img>
                </Link>
                <div className="postInfo">
                    <div className="postCats">
                        <span className="postCat">Travel</span>
                        <span className="postCat">1 day ago</span>
                    </div>
                    <hr></hr>
                    <span className="postTitle">
                        Lorem Ipsum ...
                    </span>
                    <p className="postDesc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet porttitor eget dolor. Aenean pharetra magna ac placerat vestibulum lectus mauris. Suscipit adipiscing bibendum est ultricies integer quis. Faucibus a pellentesque sit amet porttitor. Ullamcorper velit sed ullamcorper morbi tincidunt ornare. Eu nisl nunc mi ipsum faucibus vitae aliquet. Dictumst quisque sagittis purus sit amet volutpat consequat. Eu lobortis elementum nibh tellus molestie nunc non blandit massa. Sed euismod nisi porta lorem mollis aliquam ut porttitor leo. Nunc id cursus metus aliquam eleifend mi in nulla. Aliquet lectus proin nibh nisl. Amet est placerat in egestas erat. Sagittis eu volutpat odio facilisis mauris sit amet massa vitae. Vitae et leo duis ut diam quam nulla.
                    </p>
                    <span className=""><Link to="/page-5" className="read-more">Read more</Link></span>
                </div>
                
            </div> */}
            
        </div>

    )

}

export default BlogPage;
