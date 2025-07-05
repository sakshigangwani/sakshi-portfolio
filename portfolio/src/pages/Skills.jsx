import "./Skills.css";
import About from "../components/About/About";
import { motion } from "framer-motion";
import { useEffect } from "react";

const skillsData = [
    {
        title: "Frontend",
        skills: ["React Js", "Redux", "Next Js", "Angular Js", "HTML", "CSS", "JavaScript", "Bootstrap", "Material UI", "Flutter"],
    },
    {
        title: "Backend",
        skills: ["Node Js", "Express Js", "GraphQL", "Python", "Flask", "Django", "MySQL", "PostgreSQL", "MongoDB", "Firebase"],
    },
    {
        title: "Languages",
        skills: ["C", "C++", "Embedded C", "Python", "JavaScript", "TypeScript", "PHP", "SQL", "NoSQL", "Swift"]
    },
    {
        title: "Frameworks & Libraries",
        skills: ["Bootstrap", "Flutter", "FastAPI", "React Native"]
    },
    {
        title: "Developer Tools",
        skills: ["Git", "GitHub", "VS Code", "Visual Studio", "IntelliJ IDEA"]
    },
    {
        title: "Protocols",
        skills: ["MQTT", "Modbus"]
    },
    {
        title: "UI/UX & Design",
        skills: ["Figma"]
    },
    {
        title: "Operating System",
        skills: ["Linux"]
    },
    {
        title: "Other Skills",
        skills: ["Machine Learning", "REST APIs"]
    }
];

const Skills = () => {
    return (
        <div className="skills-container">
            <About />
            <div className="skills-header">
                <p className="title">My Skills</p>
                <p className="caption-skills">My Developer DNA 🧬</p>
            </div>

            <div className="skills-grid">
                {skillsData.map((section, index) => (
                    <motion.div
                        className="skill-card"
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }} // faster entrance
                        whileHover={{ scale: 1.05, y: -5 }}
                        whileTap={{ scale: 0.98 }}
                        // faster hover effect:
                        animate={{ transition: { duration: 0.15, ease: "easeInOut" } }}
                        viewport={{ once: true }}
                    >

                        <h3>{section.title}</h3>
                        <div className="skill-tags">
                            {section.skills.map((skill, idx) => (
                                <span className="tag" key={idx}>{skill}</span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
