import "./Experience.css";
import meshnetLogo from "../images/meshnet.jpg";
// import empireLogo from "../images/empire.png"; // Add more logos if needed

const experienceData = [
  {
    id: 1,
    logo: meshnetLogo,
    company: "Meshnet Electronics LLP",
    location: "Andheri, Mumbai, India",
    position: "Technology Associate Intern - Full Stack & Embedded Firmware Developer",
    duration: "Nov 2023 – Dec 2025",
    description: [
      "Led a team of 5 to build IoT dashboards using ThingsBoard for real-time industrial monitoring.",
      "Developed embedded firmware using ESP-IDF for ESP32 boards adhering to MISRA C guidelines.",
      "Integrated IoT protocols like MQTT, Modbus, OPC-UA, BACnet, and HTTP for seamless device communication.",
      "Implemented a watchdog timer and created JSON-based logs for machine events like motor start/stop and RPM tracking.",
      "Configured RFID tags using Ucreate NFC and tested them using TagInfo.",
      "Troubleshooted TBL board issues using network packet analysis in Wireshark.",
      "Replaced Zorxx microhttpd with ESP-HTTP server for better HTTP request handling from ESP web pages.",
      "Built responsive configuration web pages using HTML, CSS, and JavaScript for ESP NVS settings.",
      "Developed Meshnet Electronics’ official website (ESP Gateway Platform) in just 4 days during final exams.",
      "Tech stack used: C, C++, Python, HTML, CSS, JavaScript, Git, GitHub, Figma, QT Creator, ESP-IDF.",
    ],
  },
];

const Experience = () => {
  return (
    <div className="experience-section">
      <h2 className="experience-title">Experience</h2>
      <p className="experience-subtitle">A snapshot of my professional work</p>

      {experienceData.map((exp, index) => (
        <div
          className={`experience-card ${index % 2 === 0 ? "left" : "right"}`}
          key={exp.id}
        >
          <div className="experience-logo">
            <img src={exp.logo} alt={exp.company} />
          </div>

          <div className="experience-content">
            <h3>{exp.company}</h3>
            <h4>{exp.position}</h4>
            <p className="location">{exp.location}</p>
            <p className="duration">{exp.duration}</p>
            <ul className="description">
              {exp.description.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
