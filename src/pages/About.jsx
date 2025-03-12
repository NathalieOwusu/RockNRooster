import React, { useEffect } from "react";
import AboutUs from "../images/AboutUs.jpg";
import AboutUs2 from "../images/AboutUs2.jpg";
import { Link } from "react-router-dom"


function About() {
  useEffect(() => {
    document.body.classList.add("bodyAboutPage");
    return () => {
      document.body.classList.remove("bodyAboutPage");
    };
  }, []);
  return (
    <>
<div className="position-relative"style={{ overflowX: 'hidden'}}>


<nav className="navbar navbar-expand-lg position-absolute w-100 cursor pointer" style={{ zIndex: 100, top: 0, left: '0px', right: '70px' }}>
            
 
            <div>
                        
                            {/* Navigation Links */}
                            <ul className="navbar-nav d-flex justify-content-center align-items-center m-0 position-relative" style={{ marginTop: '0px', padding: '30px', right: '-700px' }}>
                                <li className="nav-item"><Link className="nav-link text-white rounded " to="/">Home</Link></li>
                                <li className="nav-item"><Link className="nav-link text-danger bg-transparent rounded" to="/about">About</Link></li>
                                <li className="nav-item"><Link className="nav-link text-white rounded" to="/menu">Menu</Link></li>
                                <li className="nav-item"><Link className="nav-link text-white rounded" to="/events">Events</Link></li>
                                <li className="nav-item"><Link className="nav-link text-white rounded" to="/gallery">Gallery</Link></li>
                                <li className="nav-item"><Link className="nav-link text-white rounded" to="/reservations">Reservations</Link></li>
                                <li className="nav-item"><Link className="nav-link text-white rounded" to="/contact">Contact</Link></li>
                            </ul>
                        </div>
                    </nav>
                <div> 
<div className="bodyAboutPage"> </div>
    
                </div>
    <div className="container my-5">
      {/* Image positioned to the left */}
      <div className="d-flex align-items-center">
        <img 
          src={AboutUs} 
          alt="female-bartender" 
          className="me-3 rounded position-relative shadow-lg p-1  bg-white "
          style={{ width: "500px", height: "auto" ,left:'-40px' }}
        />
        <div className="d-flex align-items-center">
        <img 
          src={AboutUs2} 
          alt="female-bartender" 
          className="me-3 rounded position-relative shadow-lg p-1  bg-white "
          style={{ width: "500px", height: "auto" ,left:'-555px',bottom:'-660px' }}
        />
        </div>
        {/* <h1 className=" display-6 fw-bold text-danger position-relative d-flex" style={{ margin:'-70px', padding:'80px', top:'-250px', right:'90px'}}> */}
        {/* <div className="my-5  position-relative"> */}
        <h1 className="display-5 fw-bold text-danger position-relative d-flex" style={{ margin:'-70px', padding:'10px', top:'-250px', right:'475px', whiteSpace:'nowrap'}}>
          About Rock ‘N’ Rooster Saloon
        </h1>
          {/* About Rock ‘N’ Rooster Saloon
        </h1> */}
      </div>
      {/* Content Section */}
      <div className="my-5 text-end position-relative d-flex justify-content-end ">
    <p className="lead  position-relative text-end" style={{ margin:'-50px', padding:'-10px', top:'-530px', left:'-20px' }}>
        Rock ‘N’ Rooster Saloon brings Nashville vibes to Jacksonville, Alabama, 
        <div className="my-5 text-end position-relative d-flex justify-content-end"> 
        <p className="lead position-relative text-end" style={{ margin:'-40px', padding:'-0px', right:'60px'}}>
          offering live music, craft cocktails, and a welcoming atmosphere.</p></div>
          <div className="my-5 text-end position-relative d-flex justify-content-end"> 
        <p className="lead  position-relative text-end" style={{ margin:'-60px', padding:'10px', left:'-40px'}}>
         After three years of renovations, co-owners<strong className="black"> Cole Burgess</strong> and <strong>Jared Curvin</strong> </p></div>
         <div className="my-5 text-end position-relative d-flex justify-content-end"> 
         <p className="lead  position-relative text-end" style={{ margin:'-70px', padding:'10px', left:'-120px'}}>
         transformed the space into a multi-level venue catering to all.</p></div>
    </p>
      </div>
<div className='position-relative d-flex' style={{ margin:'-80px', padding:'-30px', right:'-590px', top:'-520px' }}>
<font size='9'
        color='red' >*********************************
        </font>
</div>

      <div className="my-5 text-end position-relative">
        <h2 className="display-6 fw-bold position-relative" style={{ bottom:'510px', left:'-60px'}}>The Saloon Experience</h2>
        <div className="my-5 text-end position-relative d-flex justify-content-end">
    <p className="lead  position-relative text-end" style={{ margin:'-50px', padding:'-10px', top:'-500px', left:'-60px' }}>
          Our main floor features a dance floor, live bands, and a rustic bar  </p></div>
          <div className="my-5 text-end position-relative d-flex justify-content-end">
    <p className="lead  position-relative text-end" style={{ margin:'-50px', padding:'-15px', top:'-510px', left:'-100px' }}>
    serving up signature drinks. With tic-tac-toe at every table  </p></div>
    <div className="my-5 text-end position-relative d-flex justify-content-end">
    <p className="lead  position-relative text-end" style={{ margin:'-50px', padding:'-15px', top:'-518px', left:'-80px' }}>
    and vinyl-covered walls, we blend nostalgia with excitement.</p></div>
      </div>
      <div className='position-relative d-flex' style={{ margin:'-80px', padding:'-30px', right:'-590px', top:'-500px' }}>
<font size='9'
        color='red' >*********************************
        </font>
</div>
<div className="my-5 text-end position-relative">
<h2 className="display-6 fw-bold position-relative" style={{ bottom:'485px', right:'30px'}}>The 1888 Cocktail Lounge</h2>
<div className="my-5 text-end position-relative d-flex justify-content-end">
<p className="lead  position-relative text-end" style={{ margin:'-50px', padding:'-10px', top:'-470px', left:'-60px' }}>
         Upstairs, the <strong>1888 Cocktail Lounge</strong> offers a vintage speakeasy vibe </p></div>
         <div className="my-5 text-end position-relative d-flex justify-content-end">
         <p className="lead  position-relative text-end" style={{ margin:'-50px', padding:'-10px', top:'-475px', left:'-60px' }}>   
         with red velvet seating, antique decor, and live acoustic music—</p></div>
         <div className="my-5 text-end position-relative d-flex justify-content-end">
<p className="lead  position-relative text-end" style={{ margin:'-50px', padding:'-10px', top:'-475px', left:'-160px' }}>
         perfect for a refined yet cozy night out.  </p></div>
         </div>
         <div className='position-relative d-flex' style={{ margin:'-80px', padding:'-30px', right:'-590px', top:'-460px' }}>
<font size='9'
        color='red' >*********************************
        </font>
</div>   
      

<div className="my-5 text-end position-relative">
<h2 className="display-6 fw-bold position-relative" style={{ bottom:'445px', left:'-130px'}}>More Than a Bar</h2>
<div className="my-5 text-end position-relative d-flex justify-content-end">
<p className="lead  position-relative text-end" style={{ margin:'-50px', padding:'-10px', top:'-420px', left:'-60px' }}>
          Beyond nightlife, we’re a community staple with weekly specials, </p></div> 
          <div className="my-5 text-end position-relative d-flex justify-content-end">
          <p className="lead  position-relative text-end" style={{ margin:'-50px', padding:'-10px', top:'-420px', left:'-145px' }}>
          live entertainment, and an upcoming restaurant.
        </p></div> 
        <div className="my-5 text-end position-relative d-flex justify-content-end">
        <p className="lead  position-relative text-end" style={{ margin:'-50px', padding:'-10px', top:'-415px', left:'-130px' }}>
          As the official afterparty spot for <strong>Jax State athletics</strong>,</p></div>
          <div className="my-5 text-end position-relative d-flex justify-content-end">
<p className="lead  position-relative text-end" style={{ margin:'-50px', padding:'-10px', top:'-410px', left:'-40px' }}>
           Rock ‘N’ Rooster is where great times and lasting memories are made. </p></div>
           <div className="my-5 text-end position-relative d-flex justify-content-end">
<p className="text-danger position-relative text-end" style={{ margin:'-50px', padding:'-10px', top:'-410px', left:'-265px' }}>
         <i>COME ON DOWN!</i> 
        </p></div>
      </div>
    </div>
  {/* Footer Overlay */}
  <footer className="position-relative margin-bottom-0 w-100 text-center text-white py-2" style={{ zIndex: 10, top:'-200px'}}>
                <p>&#169; 2025 Rock N Rooster Saloon. All rights reserved.</p>
                <p>Created by Nathalie Owusu</p>
            </footer>
</div>
</>
  )
}
export default About;