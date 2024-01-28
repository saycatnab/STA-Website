import React from "react";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar"
import BlogGallery from "../components/BlogGallery";
import InstaPosts from "../components/InstaPosts";
import ServicesTabs from "../components/ServicesTabs";
import Footer from "../components/Footer";

const Home = () => {
    return (
    <div>
        <Navbar />
        <HeroSection />
        <BlogGallery />
        <ServicesTabs />
        <InstaPosts />
        <Footer />
    </div>
    )
}

export default Home;