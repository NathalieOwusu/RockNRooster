import React from 'react';
import HeroVideo from "../images/HeroVideo.mp4";
import { Link } from 'react-router-dom';

function Home(){
    return(
        <div>
            <div className= "position-relative">
                <video 
                autoPlay 
                muted 
                loop 
                className="w-100 vh-100 object-fit-cover">
                    <source src={HeroVideo} type="video/mp4" />
                </video>
                <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50"></div>
                {/* Content */}
                <div className="position-absolute top-50 start-50 translate-middle text-center text-white">
                    <h1 className="display-3 fw-bold">Welcome to Rock 'N' Rooster Saloon</h1>
                    <p className="lead">Experience the best live music, drinks, and food in town!</p>
                    <Link to="/reservations" >
                    <button  className="border-0 bg-danger text-white rounded-pill px-4 py-2 shadow-sm hover:bg-danger-dark transition-all position-relative" style={{ margin:'0px', top:'45px' }}> Book Now</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default Home;