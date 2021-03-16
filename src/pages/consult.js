import React, {useState} from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { motion } from 'framer-motion';
import {animationOne, transition} from '../animations';
import '../styles/style.scss';
import Cons from "../components/Consult"

const Consult = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <motion.div initial="out" animate="in" exit="out" variants={animationOne} transition={transition}>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <Cons />
            <Footer />
        </motion.div>
    )
}

export default Consult
