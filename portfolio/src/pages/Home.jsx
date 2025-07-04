import Navbar from "../components/Navbar/Navbar";
import profileImage from '../images/sakshi.png';
import "./Home.css";
import { motion } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';
import ParticlesBackground from "../components/ParticlesBackground";

const Home = () => {
    return (
        <>
            <ParticlesBackground />
            <div className="homeContainer">
            <motion.div initial={{ scale: 0.3, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3, ease: "easeOut" }}>
                <Navbar />
            </motion.div>

            <div className="body-content">
                <div className="txt-content">
                    <motion.div initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className='titleContent'
                    >
                        <p className="name-title">Hi, My name is Sakshi Gangwani</p>

                        {/* Static part */}
                        <p className="caption">
                            I build web & mobile apps, design smart IoT systems, and

                        {/* Typing effect only on the last line */}
                        <TypeAnimation
                            sequence={[
                                ' I have a Patent to prove it!',
                                1000,
                                '', // clear
                                500
                            ]}
                            wrapper="span"
                            cursor={true}
                            repeat={Infinity}
                            style={{ fontSize: '30px', color: '#E5D9F2', fontWeight: "bold" }}
                        /></p>
                        <button className="btn">Check Resume</button>
                    </motion.div>
                </div>

                <div className="image">
                    <motion.div initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        className='cardsContent'
                    >
                        <img src={profileImage} alt="" className="img" />
                    </motion.div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Home;
