import { useState } from "react";
import "./Education.css";

import uscLogo from "../images/usc-logo.png";
import djSanghviLogo from "../images/djsce.png";
import kjLogo from "../images/kj.png";

const educationData = [
    {
        id: 1,
        logo: uscLogo,
        tabTitle: "USC (MSCS)",
        institute: "Viterbi School of Engineering, University of Southern California",
        location: "Los Angeles, United States of America",
        degree: "Masters in Computer Science (MSCS)",
        duration: "Aug 2025 - May 2027",
        grade: "N/A",
    },
    {
        id: 2,
        logo: djSanghviLogo,
        tabTitle: "DJSCE (B.Tech)",
        institute: "SVKM's Dwarkadas J. Sanghvi College of Engineering",
        location: "Vile Parle, Mumbai, India",
        degree: "B.Tech in Computer Engineering",
        duration: "Nov 2022 - May 2025",
        grade: "9.7 out of 10",
    },
    {
        id: 3,
        logo: kjLogo,
        tabTitle: "K. J. Somaiya (Diploma)",
        institute: "K. J. Somaiya Polytechnic",
        location: "Vidyavihar, Mumbai, India",
        degree: "Diploma in Computer Engineering",
        duration: "Aug 2019 - Aug 2022",
        grade: "98.1%",
    },
];

const Education = () => {
    const [activeTab, setActiveTab] = useState(educationData[0].id);

    const activeData = educationData.find(item => item.id === activeTab);

    return (
        <div className="education-tabs-container">
            <h2 className="education-title">Education</h2>
            <p className="education-subtitle">My Academic Journey. One class at a time:</p>

            <div className="tabs">
                {educationData.map(item => (
                    <button
                        key={item.id}
                        className={`tab-button ${item.id === activeTab ? "active" : ""}`}
                        onClick={() => setActiveTab(item.id)}
                    >
                        {item.tabTitle}
                    </button>
                ))}
            </div>

            {activeData && (
                <div className="tab-content">
                    <img src={activeData.logo} alt={activeData.institute} className="tab-logo" />
                    <h3 className="instituteTitle">{activeData.institute}</h3>
                    <h4 className="locationTitle">{activeData.location}</h4>
                    <h4 className="degreeTitle">{activeData.degree}</h4>
                    <p className="duration">{activeData.duration}</p>
                    <p className="grade">
                        <strong>Grade:</strong> {activeData.grade}
                    </p>
                </div>
            )}
        </div>
    );
};

export default Education;