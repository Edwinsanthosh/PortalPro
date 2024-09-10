import React from 'react';
import MenuIcon from '@mui/icons-material/Menu'; // Menu icon for mobile view
import './Header.css'; // Your existing CSS

const Header = ({ toggleSidebar }) => {
  const user = {
    name: 'John Doe',
    photoUrl: '', // User image URL or default
  };

  return (
    <header className="header">
      <h1>Sathyabama</h1>
      <div className="header-nav">
        {/* Sidebar toggle button for mobile view */}
        <button className="sidebar-toggle" onClick={toggleSidebar}>
          <MenuIcon />
        </button>
        <div className="header-user">
          <span className="header-username">{user.name}</span>
          <img src={user.photoUrl} alt="Profile" className="header-avatar" />
        </div>
      </div>
    </header>
  );
};

export default Header;
