import React from 'react';
import './Home.css'; // Import the CSS file

const Home = () => {
  return (
    <div className="home-container">
      <div className="hero-section">
        <h2>Welcome to the Project Management Portal</h2>
        <p>Your one-stop solution for managing your final year project submissions.</p>
        <button className="hero-button">Get Started</button>
      </div>

      <div className="overview-container">
        <div className="overview-card">
          <h3>Total Projects</h3>
          <p>50</p>
        </div>

        <div className="overview-card">
          <h3>Active Projects</h3>
          <p>15</p>
        </div>

        <div className="overview-card">
          <h3>Completed Projects</h3>
          <p>35</p>
        </div>
      </div>

      <div className="recent-activities">
        <h2>Recent Activities</h2>
        <ul>
          <li>Project 1 submission approved</li>
          <li>New mentor assigned to Project 2</li>
          <li>Team 3 reported a delay in their submission</li>
        </ul>
      </div>

      <div className="featured-projects">
        <h2>Featured Projects</h2>
        <div className="project-card">
          <img src="https://via.placeholder.com/150" alt="Project Thumbnail" className="project-image" />
          <div className="project-info">
            <h3>Project A</h3>
            <p>Brief description of Project A. This project focuses on innovative solutions in cybersecurity.</p>
          </div>
        </div>

        <div className="project-card">
          <img src="https://via.placeholder.com/150" alt="Project Thumbnail" className="project-image" />
          <div className="project-info">
            <h3>Project B</h3>
            <p>Brief description of Project B. This project aims to develop a new algorithm for data encryption.</p>
          </div>
        </div>

        <div className="project-card">
          <img src="https://via.placeholder.com/150" alt="Project Thumbnail" className="project-image" />
          <div className="project-info">
            <h3>Project C</h3>
            <p>Brief description of Project C. This project involves creating a web application for secure communications.</p>
          </div>
        </div>
      </div>

      <div className="quick-actions">
        <h2>Quick Actions</h2>
        <div className="action-card">
          <h3>Submit New Project</h3>
          <p>Click here to submit your new project proposal and get started.</p>
          <button className="action-button">Submit</button>
        </div>

        <div className="action-card">
          <h3>View Pending Approvals</h3>
          <p>Check the list of pending project approvals and follow up with mentors.</p>
          <button className="action-button">View</button>
        </div>

        <div className="action-card">
          <h3>Request Mentor</h3>
          <p>Request a mentor for guidance and support on your project.</p>
          <button className="action-button">Request</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
