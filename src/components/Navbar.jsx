import React from 'react';
import { Link } from "react-router-dom";
import Logo from "../images/RocknRoosterLogo.jpg";

function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">

            <div>
                <img src={Logo} alt="Logo" class='rounded' width='200px'/>
            
            </div>

            {/* Navigation Links */}
            <ul>
                <li><Link to="/" className="btn btn-danger">Home</Link></li>
                <li><Link to="/about" className="btn btn-primary">About</Link></li>
                <li><Link to="/menu" className="btn btn-primary">Menu</Link></li>
                <li><Link to="/events" className="btn btn-primary">Events</Link></li>
                <li><Link to="/gallery" className="btn btn-primary">Gallery</Link></li>
                <li><Link to="/reservations" className="btn btn-primary">Reservations</Link></li>
                <li><Link to="/contact" className="btn btn-primary">Contact</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
