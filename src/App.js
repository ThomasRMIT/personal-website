import React, { useEffect, useState } from "react";
import "./App.css";
import profilepic from "./IMG_6786.JPG";

function App() {
  const [showNameInSidebar, setShowNameInSidebar] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    setShowNameInSidebar(scrollY > 200);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="container">
      <header className="header">
        <h1>Thomas Williams</h1>
        <p>Software Engineering Student | Game AI Enthusiast | Full-Stack Developer</p>
      </header>

      <div className="content-wrapper">
        <aside className="sidebar">
          <div className="profile-picture-wrapper">
            <img
              src={profilepic}
              alt="Thomas Williams"
              className="profile-picture"
            />
          </div>
          <div className={`basic-details ${showNameInSidebar ? "show-name" : ""}`}>
            {showNameInSidebar && <h2>Thomas Williams</h2>}
            <p>Email: thomas2003williams@gmail.com</p>
            <p>Phone: 0406 191 718</p>
            <p>Location: Melbourne, Australia</p>
            <p>
              GitHub: <a href="https://github.com/ThomasRMIT" target="_blank" rel="noopener noreferrer">ThomasRMIT</a>
            </p>
            <p>
              LinkedIn: <a href="https://linkedin.com/in/thomas-williams-9b4b36335" target="_blank" rel="noopener noreferrer">thomas-williams</a>
            </p>
          </div>
        </aside>

        <main className="main-content">
          <section className="content-section content-container">
            <h2>Profile</h2>
            <p>
              Enthusiastic and detail-oriented Software Engineering student with strong foundations in full-stack web development, AI/ML projects, and software architecture. Adept at collaborating in agile teams, solving complex problems, and building scalable software systems.
            </p>
          </section>

          <section className="content-section content-container">
            <h2>Education</h2>
            <p><strong>Bachelor of Software Engineering (Professional)</strong></p>
            <p>RMIT University, Melbourne | Mar 2022 – Nov 2026 (Expected)</p>
            <ul>
              <li>Capstone Project: VetCare – Veterinary clinic management system</li>
              <li>Relevant Coursework: Software Architecture, AI Techniques, Web Development</li>
            </ul>
          </section>

          <section className="content-section content-container">
            <h2>Technical Skills</h2>
            <ul>
              <li>Languages: Java, Python, JavaScript, SQL, HTML/CSS</li>
              <li>Frameworks/Libraries: Spring Boot, React.js, Node.js, TensorFlow, PyTorch</li>
              <li>Tools: Git/GitHub, Docker, JIRA, Postman, JUnit, Selenium</li>
              <li>Databases: MySQL, SQLite, MongoDB</li>
              <li>Other: Agile/Scrum, REST APIs, CI/CD with GitHub Actions</li>
            </ul>
          </section>

          <section className="content-section content-container">
            <h2>Project Experience</h2>
            <ul>
              <li>
                <strong>VetCare Web Application</strong> — Spring Boot, MySQL, Docker
                <p>Built a full-stack system for appointment booking and medical records.</p>
              </li>
              <li>
                <strong>Super Mario Bros AI Agent</strong> — Python, PPO, Stable Baselines3
                <p>Developed an RL agent to play Mario using custom reward shaping and ONNX export.</p>
              </li>
              <li>
                <strong>ML Game Agents</strong> — Connect 4 & Tic Tac Toe with MCTS
                <p>Created tournament-tested agents using heuristic strategies.</p>
              </li>
              <li>
                <strong>PDF Summarizer</strong> — React, Python, Ollama API
                <p>GUI app that summarizes PDFs with drag-and-drop functionality.</p>
              </li>
              <li>
                <strong>Cancer Cell Image Classifier</strong> — PyTorch
                <p>Implemented CNNs for medical image classification using EDA and model evaluation.</p>
              </li>
            </ul>
          </section>

          <section className="content-section content-container">
            <h2>Professional Experience</h2>
            <h3>Table Dealer – Crown Resorts (May 2023 – Present)</h3>
            <p>Conducted table games with accuracy and professionalism while maintaining engagement and compliance.</p>

            <h3>Operations Team Member – Bunnings Warehouse (Aug 2022 – Feb 2023)</h3>
            <p>Managed logistics and customer support, developing teamwork and problem-solving skills in a retail setting.</p>
          </section>

          <section className="content-section content-container">
            <h2>Certifications & Achievements</h2>
            <ul>
              <li>Certificate III in Hospitality – Crown College</li>
              <li>Responsible Service of Alcohol – 2023</li>
              <li>Casino Special Employee Licence – 2023</li>
            </ul>
          </section>

          <section className="content-section content-container">
            <h2>Additional</h2>
            <ul>
              <li>Availability: 5+ days per week, open to full-time</li>
              <li>Interests: Game AI development, open-source contributions, tech writing</li>
            </ul>
          </section>
        </main>
      </div>

      <footer className="footer">
        <p>
          Website designed and built by Thomas with <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">React</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
