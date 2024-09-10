import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Friends from './pages/Friends';
import Project from './pages/ProjectPage'; // Adjusted import
import './App.css'
import ProjectPage from './pages/ProjectPage';

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
    <Header toggleSidebar={toggleSidebar} />
    <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    <main className={`main-content ${isSidebarOpen ? 'sidebar-open' : ''}`}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/friends" element={<Friends />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/projects" element={<Project />} />
      </Routes>
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Project Management Portal. All rights reserved.</p>
      </footer>
    </main>
    </Router>
  );
};

export default App;
