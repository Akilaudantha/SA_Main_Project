import React from 'react'

const Home = () => {
  return (
    <div>
      <html lang="en">
<head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Auction Management System</title>
    <link rel="stylesheet" href="styles.css"/>
</head>
<body>
    
    <header>
        <div className="logo">AuctionHouse</div>
        <nav>
            <a href="#">Home</a>
            <a href="#">Auctions</a>
            <a href="#">My Bids</a>
            <a href="#">Profile</a>
        </nav>
    </header>

    
    <main>
        <h1>Current Auctions</h1>
        <div className="auction-container">

            
            <div class="auction-item">
                <img src="item1.jpg" alt="Item 1"/>
                <h2>Antique Clock</h2>
                <p>Starting Bid: $50</p>
                <p id="highest-bid-1">Highest Bid: $50</p>
                <input type="number" id="bid-1" placeholder="Your Bid"/>
                <button onclick="placeBid(1)">Place Bid</button>
            </div>

            
            <div class="auction-item">
                <img src="item2.jpg" alt="Item 2"/>
                <h2>Vintage Car</h2>
                <p>Starting Bid: $5000</p>
                <p id="highest-bid-2">Highest Bid: $5000</p>
                <input type="number" id="bid-2" placeholder="Your Bid"/>
                <button onclick="placeBid(2)">Place Bid</button>
            </div>

        </div>
    </main>

    
    <footer>
        <p>&copy; 2024 AuctionHouse. All Rights Reserved.</p>
    </footer>

    <script src="script.js"></script>
</body>
</html>
    </div>
  )
}

export default Home
