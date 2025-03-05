import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HeroVideo from "../images/HeroVideo.mp4";
import Logo from "../images/RocknRoosterLogo.jpg";
import Navbar from "../components/Navbar";

function Home() {
    const [isSpinning, setIsSpinning] = useState(false);

    return (
        <div className="position-relative">
            <Navbar />

            {/* Video Section */}
            <div className="position-relative">
                <video autoPlay muted loop className="w-100 vh-100 object-fit-cover">
                    <source src={HeroVideo} type="video/mp4" />
                </video>
                <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50"></div>

                {/* Content */}
                <div className="position-absolute top-50 start-50 translate-middle text-center text-white">
                    <h1 className="display-3 fw-bold">Welcome to Rock 'N' Rooster Saloon</h1>
                    <p className="lead">Experience the best live music, drinks, and food in town!</p>

                    {/* Logo */}
                    <div>
                        <img 
                            src={Logo} 
                            alt="Logo" 
                            className="rounded-circle" 
                            width="100px"
                            onMouseEnter={() => setIsSpinning(true)}
                            onMouseLeave={() => setIsSpinning(false)}
                            style={{
                                margin: '-140px -60px', 
                                position: 'absolute', 
                                top: '30px', 
                                left: '51%', 
                                transform: isSpinning ? 'rotate(360deg)' : 'rotate(0deg)',
                                transition: 'transform 0.6s ease-in-out'
                            }} 
                        />
                    </div>

                    {/* Button */}
                    <Link to="/reservations">
                    <button className="border-0 bg-danger text-white rounded-pill px-4 py-2 shadow-sm transition-all position-relative shadow-lg hover-shadow-white">Book Now  </button>
                    </Link>
                </div>
            </div>

            {/* Footer Overlay */}
            <footer className="position-absolute bottom-0 w-100 text-center text-white py-2" style={{ zIndex: 10 }}>
                <p>&#169; 2025 Rock N Rooster Saloon. All rights reserved.</p>
                <p>Created by Nathalie Owusu</p>
            </footer>
        </div>
    );
}

export default Home;
