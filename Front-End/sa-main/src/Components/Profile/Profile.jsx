import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Profile.css';

const Profile = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login'); 
  };

  return (
    <div className="profile-container">
      <header className="profile-header">
        <div className="logo">Auction<span>House</span></div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/auctions">Auctions</Link>
          <Link to="/my-bids">My Bids</Link>
          <Link to="/profile">Profile</Link>
        </nav>
      </header>

      <main>
        <section className="profile-card">
          <h1>John Doe</h1>
          <table className="profile-table">
            <tbody>
              <tr>
                <td><strong>Email:</strong></td>
              </tr>
              <tr>
                <td><strong>Account Balance:</strong></td>
              </tr>
              <tr>
                <td><strong>Bids Won:</strong></td>
              </tr>
            </tbody>
          </table>
          <div className="profile-actions">
          <Link to="/edit-profile" className="edit-link">
              <button className="edit-btn">Edit Profile</button>
            </Link>
            <button className="logout-btn" onClick={handleLogout}>Logout</button>
          </div>
        </section>
      </main>

      <footer>
        <p>&copy; 2024 AuctionHouse. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Profile;
