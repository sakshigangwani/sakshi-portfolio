import "./Education.css";
import { motion } from "framer-motion";
import kiitLogo from "../images/sakshi.png"; // use your image
import schoolLogo from "../images/sakshi-formal.png"; // use your image

const educationData = [
    {
        id: 1,
        logo: kiitLogo,
        institute: "Kalinga Institute of Industrial Technology, Bhubaneswar",
        degree: "Bachelor of Technology - BTech, Computer Science and Engineering",
        duration: "Oct 2021 - Sep 2025",
        grade: "8.41 CGPA",
        description:
            "Courses: DS, OOP, DBMS, OS, CN. Member of GDSC at KIIT, building projects with developers.",
    },
    {
        id: 2,
        logo: schoolLogo,
        institute: "Methodist School, Dankuni",
        degree: "ISC (XII), Science with Computer",
        duration: "Apr 2019 - Apr 2021",
        grade: "93%",
        description: "Focused on core science subjects with computer science specialization.",
    },
];

const Education = () => {
    return (
        <div className="education-container">
            <h2 className="education-title">Education</h2>
            <p className="education-subtitle">
                My education has been a journey of self-discovery and growth. Here are the details:
            </p>

            <div className="timeline">
                {educationData.map((item, index) => (
                    <motion.div
                        className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
                        key={item.id}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        {/* Logo on the line */}
                        <div className="timeline-logo-on-line">
                            <img src={item.logo} alt={item.institute} />
                        </div>

                        <div className="content-box">
                            <img src={item.logo} alt={item.institute} className="edu-logo-inside-card" />
                            <h3>{item.institute}</h3>
                            <h4>{item.degree}</h4>
                            <p className="duration">{item.duration}</p>
                            <p className="grade"><strong>Grade:</strong> {item.grade}</p>
                            <p>{item.description}</p>
                        </div>
                    </motion.div>
                ))}
                <div className="timeline-line"></div>
            </div>
        </div>
    );
};

export default Education;