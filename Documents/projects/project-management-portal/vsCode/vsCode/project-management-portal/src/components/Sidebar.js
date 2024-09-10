import React from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import WorkIcon from '@mui/icons-material/Work';
import './Sidebar.css'; // Your provided CSS

const Sidebar = ({ isSidebarOpen }) => {
  return (
    <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
      <nav className="sidebar-nav">
        <Link to="/" className="sidebar-item">
          <HomeIcon className="sidebar-icon" />
          <span className="sidebar-text">Home</span>
        </Link>
        <Link to="/dashboard" className="sidebar-item">
          <DashboardIcon className="sidebar-icon" />
          <span className="sidebar-text">Dashboard</span>
        </Link>
        <Link to="/friends" className="sidebar-item">
          <PersonIcon className="sidebar-icon" />
          <span className="sidebar-text">Friends</span>
        </Link>
        <Link to="/projects" className="sidebar-item">
          <WorkIcon className="sidebar-icon" />
          <span className="sidebar-text">Projects</span>
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
