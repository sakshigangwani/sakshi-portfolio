import "./Education.css";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import uscLogo from "../images/usc-logo.png";
import djSanghviLogo from "../images/djsanghvi-logo.jpg";
import kjLogo from "../images/kj.png";

const educationData = [
    {
        id: 1,
        logo: uscLogo,
        institute: "Viterbi School of Engineering, University of Southern California",
        location: "Los Angeles, United States of America",
        degree: "Masters in Computer Science (MSCS)",
        duration: "Aug 2025 - May 2027",
        grade: "N/A",
    },
    {
        id: 2,
        logo: djSanghviLogo,
        institute: "SVKM's Dwarkadas J. Sanghvi College of Engineering",
        location: "Vile Parle, Mumbai, India",
        degree: "B.Tech in Computer Engineering",
        duration: "Nov 2022 - May 2025",
        grade: "9.7 out of 10",
    },
    {
        id: 3,
        logo: kjLogo,
        institute: "K. J. Somaiya Polytechnic",
        location: "Vidyavihar, Mumbai, India",
        degree: "Diploma in Computer Engineering",
        duration: "Aug 2019 - Aug 2022",
        grade: "98.1%",
    },
];

const Education = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="education-container">
            <h2 className="education-title">Education</h2>
            <p className="education-subtitle">
                My Academic Journey. One class at a time:
            </p>

            <div className="timeline">
                {educationData.map((item, index) => (
                    <motion.div
                        className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
                        key={item.id}
                        initial={{
                            opacity: 0,
                            x: isMobile ? 0 : index % 2 === 0 ? -100 : 100,
                            y: isMobile ? 100 : 0,
                        }}
                        whileInView={{ opacity: 1, x: 0, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        {/* Logo floating on the timeline line */}
                        <div className="timeline-logo-on-line">
                            <img src={item.logo} alt={item.institute} />
                        </div>

                        {/* Card content */}
                        <div className="content-box">
                            <img
                                src={item.logo}
                                alt={item.institute}
                                className="edu-logo-inside-card"
                            />
                            <h3 className="instituteTitle">{item.institute}</h3>
                            <h4 className="locationTitle">{item.location}</h4>
                            <h4 className="degreeTitle">{item.degree}</h4>
                            <p className="duration">{item.duration}</p>
                            <p className="grade">
                                <strong>Grade:</strong> {item.grade}
                            </p>
                        </div>
                    </motion.div>
                ))}

                {/* Main timeline vertical line */}
                <div className="timeline-line"></div>
            </div>
        </div>
    );
};

export default Education;
