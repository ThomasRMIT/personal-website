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
      {/* Header */}
      <header className="header">
        <h1>Thomas Williams</h1>
      </header>

      <div className="content-wrapper">
        {/* Left Sidebar */}
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

        {/* Main Content */}
        <main className="main-content">
          {/* About Me */}
          <section className="content-section content-container">
            <h2>About Me</h2>
            <p>
              I am a passionate second-year Software Engineering student at RMIT with a strong interest in
              developing innovative software solutions. My goal is to gain experience in various aspects of software development and work on real-world projects.
            </p>
          </section>

          {/* Technical Skills */}
          <section className="content-section content-container">
            <h2>Technical Skills</h2>
            <ul>
              <li>Programming Languages: Java, JavaScript, Python, C++</li>
              <li>Web Development: React, HTML, CSS, Spring Boot</li>
              <li>Database: MySQL, H2, MongoDB</li>
              <li>Version Control: Git, GitHub</li>
              <li>Tools: Docker, Maven, Jenkins, GitHub Actions, JIRA</li>
            </ul>
          </section>

          {/* Demonstrated Skills */}
          <section className="content-section content-container">
            <h2>Demonstrated Skills</h2>
            <ul>
              <li>Problem-solving and debugging in software projects</li>
              <li>Team collaboration in software development environments</li>
              <li>Continuous Integration and Deployment (CI/CD)</li>
              <li>Developing responsive and accessible web applications</li>
            </ul>
          </section>

          {/* Projects */}
          <section className="content-section content-container">
            <h2>Projects</h2>
            <ul>
              <li>
                <strong>VetCare Web Application</strong> — Spring Boot, MySQL, Docker
                <p>Built a full-stack system for appointment booking and medical records.</p>
              </li>
              <li>
                <strong>PDF Summarizer with GUI and LLM Integration</strong> – <a href="https://github.com/ThomasRMIT/pdf-summarizer" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
                <p>Designed a desktop GUI app to summarize PDFs using LLMs via the Ollama API, supporting drag-and-drop, PDF export, and auto-updating features.</p>
              </li>
              <li>
                <strong>Super Mario Bros AI Agent</strong> – <a href="https://github.com/ThomasRMIT/SuperMarioBrosAI" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
                <p>Created a reinforcement learning agent using Stable Baselines3 (PPO) to play a Super Mario clone. Customized state input and reward design.</p>
              </li>
              <li>
                <strong>Machine Learning Game Agents</strong> – <a href="https://github.com/ThomasRMIT/ml-games" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
                <p>Implemented MCTS, neural networks, and heuristic-based agents for games like Connect 4 and Tic Tac Toe with Unity-based visualization and benchmarking tools.</p>
              </li>
              <li>
                <strong>Cancer Cell Image Classifier</strong> — PyTorch
                <p>Implemented CNNs for medical image classification using EDA and model evaluation.</p>
              </li>
            </ul>
          </section>

          {/* Education and Training */}
          <section className="content-section content-container">
            <h2>Education and Training</h2>
            <h3>Education</h3>
            <p>Current Third year student at RMIT City Campus</p>
            <ul>
              <li>Currently Studying Bachelor of Software Engineering</li>
              <li>High School – Beaconhills College, Berwick Campus Class of 2022</li>
            </ul>

            <h3>Licences & Verification</h3>
            <ul>
              <li>Certificate III in Hospitality - 2025</li>
              <li>Responsible Service of Alcohol – 2023</li>
              <li>Casino Special Employee Licence – 2023</li>
            </ul>
          </section>

          {/* Employment */}
          <section className="content-section content-container">
            <h2>Employment</h2>
            <h3>Table Dealer – Crown Casino (May 2023 – Present)</h3>
            <p>Part Time Work</p>
            <p>Conducted table games with professionalism, accuracy, and compliance with regulations, providing an engaging experience for patrons.</p>

            <h3>Bartender – District 14 Nightclub (April 2023 – August 2023)</h3>
            <p>Casual Work</p>
            <p>Mixed and served drinks, handled payments, and worked effectively in a loud and fast-paced team environment.</p>

            <h3>Operations Team Member - Bunnings Warehouse (August 2022 – February 2023)</h3>
            <p>Casual Work</p>
            <p>Assisted customers with DIY projects, provided product advice, and maintained stock and cleanliness.</p>

            <h3>Kitchen All-Rounder - Lollipops Playland & Café (March 2022 – July 2022)</h3>
            <p>Casual Work</p>
            <p>Managed food preparation, cleaning, kitchen organization, and customer service for events and daily orders.</p>

            <h3>Crew Member - McDonald's (December 2019 - October 2021)</h3>
            <p>Casual Work</p>
            <p>Prepared food, maintained hygiene standards, and delivered customer service as part of a fast-paced team.</p>

            <h3>Volunteer - The Smith Family (May 2018 - September 2018)</h3>
            <p>Volunteering</p>
            <p>Provided reading support to students with literacy difficulties via a structured peer program.</p>
          </section>

          {/* Availability */}
          <section className="content-section content-container">
            <h2>Availability</h2>
            <p>Monday - Sunday: All Day</p>
          </section>
        </main>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>
          Website designed and built by Thomas with <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">React</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
