import "./About.css";
import { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";
import { motion } from "framer-motion"; // ✅ Add this
import formalImage from "../../images/sakshi-formal.png";

const About = () => {
    const tiltRef = useRef(null);

    useEffect(() => {
        if (tiltRef.current) {
            VanillaTilt.init(tiltRef.current, {
                max: 15,
                speed: 400,
                glare: true,
                "max-glare": 0.2,
                scale: 1.05,
            });
        }
    }, []);

    return (
        <div className="about-container">
            <motion.div
                ref={tiltRef}
                className="about"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }} // triggers when 20% is visible
            >
                <div className="image-container">
                    <img src={formalImage} alt="Sakshi Formal" className="formal-image"/>
                </div>
                <p className="about-text">
                    MSCS student on a mission to blend beautiful design with powerful tech.
                    I craft responsive web apps, engineer smart IoT systems, and obsess over
                    UI/UX that just makes sense. Where hardware meets elegance and software
                    meets intuition — that’s my zone.
                </p>
            </motion.div>
        </div>
    );
};

export default About;
