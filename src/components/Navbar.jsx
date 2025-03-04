import React, { useState } from 'react';
import { Link } from "react-router-dom";


function Navbar() {
    // const [isSpinning, setIsSpinning] = useState(false);

    return (
        <nav className="navbar navbar-expand-lg position-absolute w-100" style={{ zIndex: 100, top: 0, left: '750px', right: '400px' }}>
            {/* Video Background */}
            {/* <div className="position-absolute top-0 left-0 w-100 h-100">
                <video autoPlay muted loop className="w-100 h-100 object-fit-cover">
                    <source src="/path/to/your-video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div> */}

            {/* Content */}
            {/* <div className="container d-flex justify-content-between align-items-center position-relative" style={{ zIndex: 1 }}> */}
                {/* Logo */}
                {/* <div>
                    <img 
                        src={Logo} 
                        alt="Logo" 
                        className="rounded-circle" 
                        width="100px"
                        onMouseEnter={() => setIsSpinning(true)}
                        onMouseLeave={() => setIsSpinning(false)}
                        style={{
                            margin: '60px -120px', 
                            position: 'absolute', 
                            top: '50px', 
                            left: '50%', 
                            transform: isSpinning ? 'rotate(360deg)' : 'rotate(0deg)',
                            transition: 'transform 0.6s ease-in-out'
                        }} 
                    />
                </div> */}

            {/* </div> */}
                <ul className="navbar-nav d-flex justify-content-center align-items-center m-0 position-relative" style={{ marginTop: '0px', padding: '30px' }}>
                    <li className="nav-item"><Link className="nav-link text-danger bg-transparent" to="/">Home</Link></li>
                    <li className="nav-item"><Link className="nav-link text-white rounded" to="/about">About</Link></li>
                    <li className="nav-item"><Link className="nav-link text-white rounded" to="/menu">Menu</Link></li>
                    <li className="nav-item"><Link className="nav-link text-white rounded" to="/events">Events</Link></li>
                    <li className="nav-item"><Link className="nav-link text-white rounded" to="/gallery">Gallery</Link></li>
                    <li className="nav-item"><Link className="nav-link text-white rounded" to="/reservations">Reservations</Link></li>
                    <li className="nav-item"><Link className="nav-link text-white rounded" to="/contact">Contact</Link></li>
                </ul>
                {/* Navigation Links */}
        </nav>
    );
}

export default Navbar;
