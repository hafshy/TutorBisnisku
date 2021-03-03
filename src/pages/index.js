import React, {useState} from 'react'
import Activity from '../components/Activity'
import Consult from '../components/ConsultSection'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import Landing from '../components/Landing'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Who from '../components/WhoSection'
import Event from '../components/Events'
import { motion } from 'framer-motion'
import {animationOne, transition} from '../animations'
import '../styles/style.scss'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    const [home] = useState(true)

    return (
        <motion.div initial="out" animate="in" exit="out" variants={animationOne} transition={transition}>
            <Sidebar isOpen={isOpen} toggle={toggle} home={home}/>
            <Navbar toggle={toggle} home={home}/>
            <Landing />
            <Who />
            <HeroSection />
            <Event />
            <Activity />
            <Consult />
            <Footer />
        </motion.div>
    )
}

export default Home
