import React, { useState } from "react";
import AboutUs from "../images/AboutUs.jpg";
import { Link } from "react-router-dom"
import Footer from "../components/Footer"

function About() {
  return (
    <>

<nav className="navbar navbar-expand-lg position-absolute w-100" style={{ zIndex: 100, top: 0, left: '0px', right: '70px' }}>
            
 
            <div>
                        
                            {/* Navigation Links */}
                            <ul className="navbar-nav d-flex justify-content-center align-items-center m-0 position-relative" style={{ marginTop: '0px', padding: '30px', right: '-700px' }}>
                                <li className="nav-item"><Link className="nav-link text-black rounded " to="/">Home</Link></li>
                                <li className="nav-item"><Link className="nav-link text-danger bg-transparent rounded" to="/about">About</Link></li>
                                <li className="nav-item"><Link className="nav-link text-black rounded" to="/menu">Menu</Link></li>
                                <li className="nav-item"><Link className="nav-link text-black rounded" to="/events">Events</Link></li>
                                <li className="nav-item"><Link className="nav-link text-black rounded" to="/gallery">Gallery</Link></li>
                                <li className="nav-item"><Link className="nav-link text-black rounded" to="/reservations">Reservations</Link></li>
                                <li className="nav-item"><Link className="nav-link text-black rounded" to="/contact">Contact</Link></li>
                            </ul>
                        </div>
                    </nav>
                
            
    <div className="container my-5">
      {/* Image positioned to the left */}
      <div className="d-flex align-items-center">
        <img 
          src={AboutUs} 
          alt="female-bartender" 
          className="me-3 rounded position-relative"
          style={{ width: "500px", height: "auto" ,left:'-40px' }}
        />
        <h1 className="display-6 fw-bold text-danger position-relative d-flex" style={{ margin:'-70px', padding:'80px', top:'-250px', right:'-47px'}}>
          About Rock ‘N’ Rooster Saloon
        </h1>
      </div>
      {/* Content Section */}
      <div className="my-5 text-end position-relative d-flex justify-content-end">
    <p className="lead text-muted position-relative text-end" style={{ margin:'-50px', padding:'-10px', top:'-530px', left:'-20px' }}>
        Rock ‘N’ Rooster Saloon brings Nashville vibes to Jacksonville, Alabama, 
        <div className="my-5 text-end position-relative d-flex justify-content-end"> 
        <p className="lead text-muted position-relative text-end" style={{ margin:'-40px', padding:'-0px', right:'60px'}}>
          offering live music, craft cocktails, and a welcoming atmosphere.</p></div>
          <div className="my-5 text-end position-relative d-flex justify-content-end"> 
        <p className="lead text-muted position-relative text-end" style={{ margin:'-60px', padding:'10px', left:'-40px'}}>
         After three years of renovations, co-owners<strong className="black"> Cole Burgess</strong> and <strong>Jared Curvin</strong> </p></div>
         <div className="my-5 text-end position-relative d-flex justify-content-end"> 
         <p className="lead text-muted position-relative text-end" style={{ margin:'-70px', padding:'10px', left:'-120px'}}>
         transformed the space into a multi-level venue catering to all.</p></div>
    </p>
      </div>
<div className='position-relative d-flex' style={{ margin:'-80px', padding:'-30px', right:'-590px', top:'-520px' }}>
<font size='9'
        color='black' >*********************************
        </font>
</div>

      <div className="my-5 text-end position-relative">
        <h2 className="display-4 fw-bold position-relative" style={{ bottom:'510px'}}>The Saloon Experience</h2>
        <div className="my-5 text-end position-relative d-flex justify-content-end">
    <p className="lead text-muted position-relative text-end" style={{ margin:'-50px', padding:'-10px', top:'-500px', left:'-60px' }}>
          Our main floor features a dance floor, live bands, and a rustic bar  </p></div>
          <div className="my-5 text-end position-relative d-flex justify-content-end">
    <p className="lead text-muted position-relative text-end" style={{ margin:'-50px', padding:'-15px', top:'-510px', left:'-100px' }}>
    serving up signature drinks. With tic-tac-toe at every table  </p></div>
    <div className="my-5 text-end position-relative d-flex justify-content-end">
    <p className="lead text-muted position-relative text-end" style={{ margin:'-50px', padding:'-15px', top:'-518px', left:'-80px' }}>
    and vinyl-covered walls, we blend nostalgia with excitement.</p></div>
      </div>
      <div className='position-relative d-flex' style={{ margin:'-80px', padding:'-30px', right:'-590px', top:'-500px' }}>
<font size='9'
        color='black' >*********************************
        </font>
</div>
      <div className="my-5 text-end">
        <h2 className="display-4 fw-bold">The 1888 Cocktail Lounge</h2>
        <p>
          Upstairs, the <strong>1888 Cocktail Lounge</strong> offers a vintage speakeasy vibe with red velvet seating, antique decor, and live acoustic music—perfect for a refined yet cozy night out.
        </p>
      </div>

      <div className="my-5 text-end">
        <h2 className="display-4 fw-bold">More Than a Bar</h2>
        <p>
          Beyond nightlife, we’re a community staple with weekly specials, live entertainment, and an upcoming restaurant.
        </p>
        <p>
          As the official afterparty spot for <strong>Jax State athletics</strong>, Rock ‘N’ Rooster is where great times and lasting memories are made. Join us!
        </p>
      </div>
    </div>
  <Footer />
</>
  )
}
export default About;