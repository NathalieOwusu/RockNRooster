import React from "react";
import AboutUs from "../images/AboutUs.jpg";

function About() {
  return (
    <div className="container my-5">
      {/* Image positioned to the left */}
      <div className="d-flex align-items-center">
        <img 
          src={AboutUs} 
          alt="female-bartender" 
          className="me-3"
          style={{ width: "500px", height: "auto" }}
        />
        <h1 className="display-4 fw-bold text-danger position-relative" style={{ margin:'0px'}}>
          About Rock ‘N’ Rooster Saloon
        </h1>
      </div>

      {/* Content Section */}
      <div className="my-5 text-end">
        <p className="lead text-muted position-relative text-end">
          Rock ‘N’ Rooster Saloon brings Nashville vibes to Jacksonville, Alabama, offering live music, craft cocktails, and a welcoming atmosphere.
        </p>
      </div>

      <div className="my-5 text-end">
        <h2 className="display-4 fw-bold">The Saloon Experience</h2>
        <p>
          After three years of renovations, co-owners <strong>Cole Burgess</strong> and <strong>Jared Curvin</strong> transformed the space into a multi-level venue catering to all.
        </p>
        <p>
          Our main floor features a dance floor, live bands, and a rustic bar serving up signature drinks. With tic-tac-toe at every table and vinyl-covered walls, we blend nostalgia with excitement.
        </p>
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
  );
}

export default About;
