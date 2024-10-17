import React from "react";
import "./App.css";

function App() {
  return (
    <div className="container">
      {/* Header */}
      <header className="header">
        <h1>Your Website Header</h1>
      </header>

      <div className="content-wrapper">
        {/* Left Sidebar */}
        <aside className="sidebar">
          <div className="profile-picture-wrapper">
            <img
              src="your-profile-picture-url.jpg"
              alt="Your Name"
              className="profile-picture"
            />
          </div>
          <div className="basic-details">
            <h2>Your Name</h2>
            <p>Email: your.email@example.com</p>
            <p>Phone: (123) 456-7890</p>
            <p>Location: Your City, Country</p>
          </div>
        </aside>

        {/* Main Content */}
        <main className="main-content">
          <section className="content-section">
            <h2>Employment History</h2>
            <p>Details about your employment history...</p>
          </section>
          <section className="content-section">
            <h2>Education</h2>
            <p>Details about your education...</p>
          </section>
          <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        </main>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 Your Name. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
