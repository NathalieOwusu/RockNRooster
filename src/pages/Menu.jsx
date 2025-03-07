import React, { useEffect } from "react";
import EighteenMenu from "../images/MenuPic.jpg";
import RRMenu from "../images/MenuPic2.jpg";
import { Link } from "react-router-dom";


function Menu() {
  useEffect(() => {
    document.body.classList.add("bodyMenuPage");
    return () => {
      document.body.classList.remove("bodyMenuPage");
    };
  }, []);
  return (
    <>
      <div className="position-relative" style={{ overflowX: 'hidden' }}>
        <nav className="navbar navbar-expand-lg position-relative w-100" style={{ zIndex: 100, top: '-30px', left: '0px', right: '70px' }}>
          <div>
            {/* Navigation Links */}
            <ul className="navbar-nav d-flex justify-content-center align-items-center m-0 position-relative" style={{ marginTop: '0px', padding: '30px', right: '-700px' }}>
              <li className="nav-item"><Link className="nav-link text-white rounded " to="/">Home</Link></li>
              <li className="nav-item"><Link className="nav-link text-white rounded" to="/about">About</Link></li>
              <li className="nav-item"><Link className="nav-link text-danger bg-transparent" to="/menu">Menu</Link></li>
              <li className="nav-item"><Link className="nav-link text-white rounded" to="/events">Events</Link></li>
              <li className="nav-item"><Link className="nav-link text-white rounded" to="/gallery">Gallery</Link></li>
              <li className="nav-item"><Link className="nav-link text-white rounded" to="/reservations">Reservations</Link></li>
              <li className="nav-item"><Link className="nav-link text-white rounded" to="/contact">Contact</Link></li>
            </ul>
          </div>
        </nav>
        <div className="bodyMenuPage"></div>
      </div>

      <div className="container my-5 position-fixed">
        {/* Image section */}
        <div className="d-flex align-items-center justify-content-start">
          
          <img 
            src={EighteenMenu} 
            alt="1888 Menu" 
            className="me-3 position-relative shadow-lg p-1 img-scale rounded"
            style={{ width: "545px", height: "auto", top:'-120px', right:'-80px' }}
          />
          <img 
            src={RRMenu} 
            alt="Rock N Rooster Menu" 
            className="me-3 position-relative shadow-lg p-1 img-scale rounded"
            style={{ width: "510px", height: "auto", top:'-120px', right:'-70px' }}
          />
         {/* Button */}
         <Link to="/reservations">
  <button
    className="border-0 text-white rounded-pill px-4 py-2 shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-purple-300"
    style={{ 
      position: 'relative', 
      bottom: '-195px', 
      left: '-850px', 
      backgroundColor: '#664FC5', 
      fontSize: '0.875rem',
      whiteSpace: 'nowrap'
    }}
  >
    Download Menus
  </button>
</Link>


<Link to="/contact">
  <button
    className="border-0 text-white rounded-pill px-4 py-2 shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-purple-300"
    style={{ 
      position: 'relative', 
      bottom: '-190px', 
      left: '-410px', 
      backgroundColor: '#664FC5', 
      fontSize: '0.875rem',
      whiteSpace: 'nowrap'
    }}
  >
    Order Now
  </button>
</Link>

        </div>
         {/* Footer Overlay */}
  {/* <footer className="position-relative margin-bottom-0 w-100 text-center text-white py-2" style={{ zIndex: 10, top:'-100px'}}>
                <p>&#169; 2025 Rock N Rooster Saloon. All rights reserved.</p>
                <p>Created by Nathalie Owusu</p>
            </footer> */}
      </div>
    </>
  );
}

export default Menu;
