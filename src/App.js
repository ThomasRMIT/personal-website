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
              <li>Tools: Docker, Maven, Jenkins, GitHub Actions</li>
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

           {/* 
          <section className="content-section content-container">
            <h2>Past Projects</h2>
            <ul>
              <li>
                <strong>VetCare Web Application</strong> - Developed a veterinary clinic management system using Spring Boot, MySQL, and Docker.
              </li>
              <li>
                <strong>Community Library System</strong> - Built a CRUD system for managing library books with a focus on MVC architecture.
              </li>
              <li>
                <strong>Personal Portfolio Website</strong> - Created a personal website using React and GitHub Pages, showcasing my skills and projects.
              </li>
            </ul>
          </section> */}

          {/* Education and Training */}
          <section className="content-section content-container">
            <h2>Education and Training</h2>
            <h3>Education</h3>
            <p>Current Second year student at RMIT City Campus</p>
            <ul>
              <li>Currently Studying Bachelor of Software Engineering</li>
              <li>High School – Beaconhills College, Berwick Campus Class of 2022</li>
            </ul>

            <h3>Licences & Verification</h3>
            <ul>
              <li>Responsible Service of Alcohol – 2023</li>
              <li>Casino Special Employee Licence – 2023</li>
              <li>Australian Probationary Drivers Licence – 2022</li>
            </ul>
          </section>

          {/* Employment */}
          <section className="content-section content-container">
            <h2>Employment</h2>

            <h3>Table Dealer – Crown Casino (May 2023 – Present)</h3>
            <p>Part Time Work</p>
            <p>As a table dealer my job requires displaying a friendly and professional demeanour, large amounts of numerical tasks within a short time frame and conducting games with speed and precision. My role largely requires me to be efficient in quickly calculating and applying numerical tasks presented to me with minimal mistakes in an intensive and high-pressure environment while providing an entertaining and memorable experience to patrons. </p>

            <h3>Bartender – District 14 Nightclub (April 2023 – August 2023)</h3>
            <p>Casual Work</p>
            <p>My role required me to mix and serve drinks, handle cash, maintain a clean work environment and to work effectively as a team within a loud and fast-paced workplace. I have experience in assisting in carrying out the day-to-day tasks within the venue and presenting a fun and memorable experience to customers. </p>

            <h3>Operations Team Member - Bunnings Warehouse (August 2022 – February 2023)</h3>
            <p>Casual Work</p>
            <p>My work at Bunnings Warehouse included working closely with customers to assist with their DIY projects. My duties required being able to adequately answer questions and queries, providing advice and recommendations on a variety of hardware & DIY topics and maintaining stock and clean workstations. </p>

            <h3>Kitchen All-Rounder - Lollipops Playland & Café (March 2022 – July 2022)</h3>
            <p>Casual Work</p>
            <p>While working at Lollipops I took charge of food preparation for both day-to-day orders and large party functions. My duties also included general cleaning, table waiting, kitchen management as well as basic stock management, customer service and event planning.</p>

            <h3>Crew Member - McDonald's (December 2019 - October 2021)</h3>
            <p>Casual Work</p>
            <p>My duties while working at McDonalds included food preparation, food handling, maintaining workstations, customer service and effectively working in a team.</p>

            <h3>Volunteer - The Smith Family (May 2018 - September 2018)</h3>
            <p>Volunteering</p>
            <p>Over an 18-week period, for 40-60 minutes a week, I volunteered for The Smith Family student2student peer support program in which I assisted in the learning improvement of students with reading difficulties. I underwent training by The Smith Family to help students develop reading confidence and skills through reading support methods. </p>
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
