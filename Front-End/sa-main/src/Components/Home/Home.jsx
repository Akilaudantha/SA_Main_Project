import React, { useState } from 'react';
<<<<<<< Updated upstream
import { Link } from 'react-router-dom';
=======
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
>>>>>>> Stashed changes
import './Home.css';

const Home = () => {
  const [bids, setBids] = useState({
    1: 50, 
    2: 5000 
  });

  const placeBid = (itemId) => {
    const newBid = parseFloat(document.getElementById(`bid-${itemId}`).value);
    if (newBid > bids[itemId]) {
      setBids((prevBids) => ({
        ...prevBids,
        [itemId]: newBid
      }));
    } else {
      alert('Bid must be higher than the current highest bid.');
    }
  };

  return (
    <div>
      <header>
        <div className="logo">AuctionHouse</div>
        <nav>
<<<<<<< Updated upstream
        <Link to="/">Home</Link>
          <Link to="/auctions">Auctions</Link>
          <Link to="/my-bids">My Bids</Link>
          <Link to="/profile">Profile</Link>
=======
          <Link to="/">Home</Link> {/* Replace a with Link for Home */}
          <Link to="/auctions">Auctions</Link> {/* Replace a with Link for Auctions */}
          <Link to="/my-bids">My Bids</Link> {/* Replace a with Link for My Bids */}
          <Link to="/profile">Profile</Link> {/* Replace a with Link for Profile */}
>>>>>>> Stashed changes
        </nav>
      </header>

      <main>
        <h1>Current Auctions</h1>
        <div className="auction-container">

          <div className="auction-item">
            <img src="item1.jpg" alt="Item 1"/>
            <h2>Antique Clock</h2>
            <p>Starting Bid: $50</p>
            <p id="highest-bid-1">Highest Bid: ${bids[1]}</p>
            <input type="number" id="bid-1" placeholder="Your Bid" />
            <button onClick={() => placeBid(1)}>Place Bid</button>
          </div>

          <div className="auction-item">
            <img src="item2.jpg" alt="Item 2"/>
            <h2>Vintage Car</h2>
            <p>Starting Bid: $5000</p>
            <p id="highest-bid-2">Highest Bid: ${bids[2]}</p>
            <input type="number" id="bid-2" placeholder="Your Bid" />
            <button onClick={() => placeBid(2)}>Place Bid</button>
          </div>

        </div>
      </main>

      <footer>
        <p>&copy; 2024 AuctionHouse. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
