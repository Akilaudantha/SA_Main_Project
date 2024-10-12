import React, { useState, useEffect } from 'react';
import './App.css';
import featured1 from './images/featured1.jpg'; // Ensure you import your images
import featured2 from './images/featured2.jpg';
import featured3 from './images/featured3.jpg';
import auction1 from './images/auction1.jpg';
import auction2 from './images/auction2.jpg';
import auction3 from './images/auction3.jpg';

function App() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [featured1, featured2, featured3]; // Array of featured images

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(interval); // Cleanup the interval on unmount
    }, []);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <div className="App">
            <nav>
                <div className="logo">Auction House</div>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Auctions</a></li>
                    <li><a href="#">My Bids</a></li>
                    <li><a href="#">Profile</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
                <input type="text" placeholder="Search Auctions..." className="search-bar" />
            </nav>

            <div className="carousel">
                <div className="carousel-inner">
                    {slides.map((slide, index) => (
                        <div className={`carousel-item ${index === currentSlide ? 'active' : ''}`} key={index}>
                            <img src={slide} alt={`Featured Auction ${index + 1}`} />
                            <div className="carousel-caption">Featured Auction Item {index + 1}</div>
                        </div>
                    ))}
                </div>
                <a className="carousel-control prev" onClick={prevSlide}>&#10094;</a>
                <a className="carousel-control next" onClick={nextSlide}>&#10095;</a>
            </div>

            <section className="categories">
                <h2>Auction Categories</h2>
                <div className="category-grid">
                    <div className="category-card">Art</div>
                    <div className="category-card">Jewelry</div>
                    <div className="category-card">Antiques</div>
                    <div className="category-card">Collectibles</div>
                    <div className="category-card">Electronics</div>
                    <div className="category-card">Furniture</div>
                </div>
            </section>

            <section className="highlighted-auctions">
                <h2>Highlighted Auctions</h2>
                <div className="auction-grid">
                    <div className="auction-card">
                        <img src={auction1} alt="Auction Item 1" />
                        <h3>Auction Item 1</h3>
                        <p>Starting Bid: $100</p>
                        <p>Time Remaining: 02:15:30</p>
                        <button>Place Bid</button>
                    </div>
                    <div className="auction-card">
                        <img src={auction2} alt="Auction Item 2" />
                        <h3>Auction Item 2</h3>
                        <p>Starting Bid: $200</p>
                        <p>Time Remaining: 01:45:00</p>
                        <button>Place Bid</button>
                    </div>
                    <div className="auction-card">
                        <img src={auction3} alt="Auction Item 3" />
                        <h3>Auction Item 3</h3>
                        <p>Starting Bid: $150</p>
                        <p>Time Remaining: 03:05:20</p>
                        <button>Place Bid</button>
                    </div>
                </div>
            </section>

            <footer>
                <p>&copy; 2024 Auction House. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default App;
