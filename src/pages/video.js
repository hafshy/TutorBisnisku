import React, { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import PartnersSection from "../components/Partners";
import Sidebar from "../components/Sidebar";
import { motion } from "framer-motion";
import { animationOne, transition } from "../animations";
import VideoSection from "../components/VideoSection";

const Video = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <motion.div
            initial="out"
            animate="in"
            exit="out"
            variants={animationOne}
            transition={transition}
        >
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <VideoSection />
            <Footer />
        </motion.div>
    );
};

export default Video;
