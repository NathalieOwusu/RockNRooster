import React, { useState } from 'react';
import { Link } from "react-router-dom";


function Navbar() {


    return (
        <nav className="navbar navbar-expand-lg position-absolute w-100 cursor-pointer" style={{ zIndex: 100, top: 0, left: '0px', right: '70px' }}>
            
 
<div>
            
                {/* Navigation Links */}
                <ul className="navbar-nav d-flex justify-content-center align-items-center m-0 position-relative" style={{ marginTop: '0px', padding: '30px', right: '-700px' }}>
                    <li className="nav-item"><Link className="nav-link text-danger rounded bg-transparent" to="/">Home</Link></li>
                    <li className="nav-item"><Link className="nav-link text-white rounded" to="/about">About</Link></li>
                    <li className="nav-item"><Link className="nav-link text-white rounded" to="/menu">Menu</Link></li>
                    <li className="nav-item"><Link className="nav-link text-white rounded" to="/events">Events</Link></li>
                    <li className="nav-item"><Link className="nav-link text-white rounded" to="/gallery">Gallery</Link></li>
                    <li className="nav-item"><Link className="nav-link text-white rounded" to="/reservations">Reservations</Link></li>
                    <li className="nav-item"><Link className="nav-link text-white rounded" to="/contact">Contact</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;


