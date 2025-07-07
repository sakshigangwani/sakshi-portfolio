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
                    <Navbar />

                <div className="body-content">
                    <div className="txt-content">
                        <motion.div
                            initial={{ x: -100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="titleContent"
                        >
                            <p className="name-title">Hi, My name is Sakshi Gangwani</p>

                            <div className="caption">
                                <p>I build web & mobile apps,</p>
                                <p>design smart IoT systems, and</p>

                                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '10px' }}>
                                    <span style={{ fontSize: '28px', color: '#E5D9F2' }}>I have a</span>
                                    <TypeAnimation
                                        sequence={[
                                            ' Patent to prove it!',
                                            1500,
                                            '',
                                            500
                                        ]}
                                        wrapper="span"
                                        cursor={true}
                                        repeat={Infinity}
                                        style={{
                                            fontSize: '28px',
                                            color: '#b19cd9',
                                            fontWeight: 'bold',
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="btn-container">
                                <a href="#projects" className="btn">Explore Projects</a>
                            </div>
                        </motion.div>
                    </div>

                    <div className="image">
                        <motion.div
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                            className="image-wrapper"
                        >
                            <div className="image-wrapper">
                                <div className="glow-ring"></div>
                                <motion.img
                                    src={profileImage}
                                    alt="Sakshi Gangwani"
                                    className="profile-image"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.3 }}
                                />
                            </div>
                            <p className="img-caption">Tech Enthusiast | Creator | Dreamer</p>
                            <div className="intro-social-section">
                                <div className="social-media-box">
                                    <div className="social-row">
                                        <a href="https://github.com/sakshigangwani" target="_blank" className="social-icon" title="GitHub">
                                            <img src="/icons/github.png" className="img-icon" />
                                        </a>
                                        <a href="https://leetcode.com" target="_blank" className="social-icon" title="LeetCode">
                                            <img src="/icons/leetcode.png" className="img-icon" />
                                        </a>
                                        <a href="https://www.linkedin.com/in/sakshi-gangwani/" target="_blank" className="social-icon" title="LinkedIn">
                                            <img src="/icons/linkedin.png" className="img-icon" />
                                        </a>
                                        <a href="mailto:gangwani.sakshi15@email.com" className="social-icon" title="Email">
                                            <img src="/icons/email.png" className="img-icon" />
                                        </a>
                                    </div>

                                    <div className="social-row">
                                        <a href="https://www.behance.net/sakshigangwani" target="_blank" className="social-icon" title="Behance">
                                            <img src="/icons/behance.png" className="img-icon" />
                                        </a>
                                        <a href="https://dribbble.com/sakshi115s" target="_blank" className="social-icon" title="Dribbble">
                                            <img src="/icons/dribbble.png" className="img-icon" />
                                        </a>
                                        <a href="https://instagram.com" target="_blank" className="social-icon" title="Instagram">
                                            <img src="/icons/instagram.png" className="img-icon" />
                                        </a>
                                        <a href="https://x.com" target="_blank" className="social-icon" title="X">
                                            <img src="/icons/x.png" className="img-icon" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
