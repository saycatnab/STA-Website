import React from "react";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar"
import BlogGallery from "../components/BlogGallery";
import InstaPosts from "../components/InstaPosts";


const Home = () => {
    return (
    <div>
        <Navbar />
        <HeroSection />
        <BlogGallery />
        <InstaPosts />
    </div>
    )
}

export default Home;