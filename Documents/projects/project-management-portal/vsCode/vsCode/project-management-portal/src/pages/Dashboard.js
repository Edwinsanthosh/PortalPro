import React from 'react';
import './Dashboard.css'; // Import the CSS file

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Dashboard</h1>
      <p className="dashboard-subtitle">Overview of your key metrics and recent activities.</p>



      <div className='dashboard-grid1'>
        {/* Recent Tasks Card */}

        <div className="dashboard-card">
            <h6>Recent Tasks</h6>
            <hr />
            <p>Here are some of the recent tasks assigned to you. Make sure to complete them on time.</p>
            <ul className="dashboard-list">
                <li className="dashboard-list-item">Task 1: Complete project report</li>
                <li className="dashboard-list-item">Task 2: Review team submissions</li>
            </ul>
        </div>
      </div>
      
      <div className="dashboard-grid">

        

        {/* Key Metrics Card */}
        <div className="dashboard-card">
          <div className="dashboard-card-header">
            <div className="dashboard-icon">
              <svg width="40" height="40" fill="#1976d2" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 4v16h2V6h4v14h2V6h4v14h2V4H3zm12 8h2v2h-2v-2zm4 0h2v2h-2v-2z"/>
              </svg>
            </div>
            <div className="dashboard-card-content">
              <div className="dashboard-metrics">123</div>
              <div>Project</div>
            </div>
          </div>
          <hr />
        </div>

        {/* Team Overview Card */}
        <div className="dashboard-card">
          <div className="dashboard-card-header">
            <div className="dashboard-icon dashboard-team-icon">
              <svg width="40" height="40" fill="#388e3c" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-4 2c-2.66 0-8 1.34-8 4v2h16v-2c0-2.66-5.34-4-8-4zm12 0c-2.66 0-8 1.34-8 4v2h16v-2c0-2.66-5.34-4-8-4z"/>
              </svg>
            </div>
            <div className="dashboard-card-content">
              <div className="dashboard-metrics">#1976d2</div>
              <div>Team Members</div>
            </div>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
