import React, { useState } from 'react';
import './Profile.css'; // Import the CSS file

const Profile = () => {
  const [profilePic, setProfilePic] = useState('https://source.unsplash.com/random/100x100'); // Default profile pic
  const [email, setEmail] = useState('user@example.com'); // Default email
  const [newPassword, setNewPassword] = useState('');

  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePic(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to backend
    alert('Profile updated!');
  };

  return (
    <div className="profile-container">
      <h1 className="profile-title">Profile</h1>
      <div className="profile-info">
        <div className="profile-pic">
          <img src={profilePic} alt="Profile" />
          <input type="file" accept="image/*" onChange={handleProfilePicChange} />
        </div>
        <form className="profile-form" onSubmit={handleSubmit}>
          <div className="profile-field">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <div className="profile-field">
            <label htmlFor="password">New Password:</label>
            <input
              type="password"
              id="password"
              value={newPassword}
              onChange={handlePasswordChange}
              required
            />
          </div>
          <button type="submit" className="profile-button">Update Profile</button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
