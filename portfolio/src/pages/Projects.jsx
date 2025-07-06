import React, { useState } from 'react';
import './Projects.css';

const projectsData = [
    {
        title: 'CityWatch - Wearable Device and App-Based Emergency Response System',
        date: 'May 2024 - May 2025',
        description:
            'CityWatch is a wearable device and app-based emergency response system designed to autonomously detect distress and alert emergency contacts without user input. Built using Arduino Uno with health and environmental sensors, it integrates seamlessly with a React Native app for users, an authority app for responders, and a centralized React-Firebase web dashboard for real-time monitoring. The system intelligently triggers alerts based on sensor data (e.g., pulse, temperature, gas levels), provides live GPS tracking, and enables instant communication during emergencies—ideal for situations where users may be incapacitated. A supporting research paper has been published detailing its impact and implementation.',
        tech: ['React', 'React Native', 'Firebase'],
        image: '/images/citywatch.png',
        category: ['android', 'web', 'iot', 'machine-learning'],
        paperLink: '/papers/citywatch-paper.pdf'
    },
    {
        title: 'IoT Enabled Robot for Detecting Gas Pipe Leakage',
        date: 'Patent Published',
        description:
            'IoT Enabled Robot for Detecting Gas Pipe Leakage is an autonomous robotic system designed for hazardous environments where human entry is risky. Built using Raspberry Pi 4 and equipped with a suite of sensors—including MQ5 for gas detection, DHT11 for temperature and humidity monitoring, and an ultrasonic sensor for obstacle avoidance—it effectively detects LPG gas leaks in confined industrial spaces. The robot leverages machine learning algorithms to analyze sensor data and accurately detect potential leakages, minimizing false alarms. A Flutter-based mobile application, backed by Firebase, enables users to remotely monitor the robot’s real-time status and manually control its movement if required.',
        tech: ['Python', 'Flutter', 'Firebase'],
        image: '/images/robot.jpeg',
        category: ['machine-learning', 'iot'],
    },
    {
        title: 'Unleash the music within!',
        date: 'UI/UX',
        description:
            'Designed an intuitive and visually appealing user interface for a modern music streaming application. Focused on enhancing user engagement through minimal design, smooth navigation, and responsive layouts for various screen sizes. Prioritized user flow by implementing features such as playlists, search, and now-playing screens with sleek transitions and dark mode support.',
        tech: ['Figma', 'UI Design'],
        image: '/images/music.png',
        category: ['ui-ux'],
    },
    {
        title: 'Dot Days App',
        date: 'Ongoing',
        description:
            'Designed a period and PCOD/PCOS tracking application tailored specifically for women’s health. It enables users to log symptoms, receive personalized insights, and track their menstrual cycles over time.',
        tech: ['React Native', 'Firebase', 'UI/UX'],
        image: '/images/dotdays.png',
        category: ['android']
    },
    {
        title: 'Gemini AI Clone',
        date: 'Personal Project',
        description:
            'AI-powered chat app inspired by Gemini AI. Integrated OpenAI API for natural language understanding, used React for frontend, Redux for state management, and Node.js for backend interactions.',
        tech: ['React', 'Redux', 'Node.js', 'OpenAI API'],
        image: '/images/gemini.png',
        category: ['web'],
    },
    {
        title: 'Track Goals App',
        date: 'Personal Productivity Project',
        description:
            'Cross-platform app to track goals using React Native. Implemented goal creation, editing, and deletion with Context API/Redux and React Navigation. UI enhanced with styled-components and Reanimated for a smooth and engaging experience.',
        tech: ['React Native'],
        image: '/images/trackgoals.png',
        category: ['android'],
    },
];

const Projects = () => {
    const [filter, setFilter] = useState('all');

    const filteredProjects =
        filter === 'all'
            ? projectsData
            : projectsData.filter((p) =>
                  Array.isArray(p.category)
                      ? p.category.includes(filter)
                      : p.category === filter
              );

    return (
        <section className="projects-section">
            <h2>Projects</h2>
            <p>
                I have worked on a wide range of projects — from IoT and machine learning to web, app, and UI/UX design.
                Here are some of my highlighted works.
            </p>
            <div className="filters">
                <button onClick={() => setFilter('all')}>All</button>
                <button onClick={() => setFilter('iot')}>IoT</button>
                <button onClick={() => setFilter('web')}>Web Apps</button>
                <button onClick={() => setFilter('android')}>App</button>
                <button onClick={() => setFilter('machine-learning')}>Machine Learning</button>
                <button onClick={() => setFilter('ui-ux')}>UI/UX</button>
            </div>
            <div className="projects-grid">
                {filteredProjects.map((project, idx) => (
                    <div className="project-card" key={idx}>
                        <img src={project.image} alt={project.title} />
                        <div className="tech-tags">
                            {project.tech.map((tech, i) => (
                                <span key={i}>{tech}</span>
                            ))}
                        </div>
                        <h3>{project.title}</h3>
                        <p className="date">{project.date}</p>
                        <p className="desc">{project.description}</p>
                        {project.paperLink && (
                            <a
                                href={project.paperLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="paper-button"
                            >
                                View Research Paper
                            </a>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
