import React from 'react'
import '../Styles/Navbar.css'
// import banner_video from '../Videos/hero_img.mp4'

export const Navbar = () => {
    return (
        <div className='navbar-fragment'>
            {/* Navbar */}
            <nav className="navbar">
                <div className="left-nav">FITNESS</div>
                <div className="right-nav">
                    <a href="./" className="nav-links">Home</a>
                    <a href="./#about" className="nav-links">About</a>
                    <a href="./#service" className="nav-links">Service</a>
                    <a href="./#gallery" className="nav-links">Gallery</a>
                    <a href="./#calc" className="nav-links">Check It</a>
                </div>
            </nav>
            {/* Banner */}
            <div className="banner-area">
                {/* <video autoPlay muted loop>
                    <source src={banner_video} />
                </video> */}
                <div className="banner-text">
                    <div className="team-name">______ Asymmetric</div> <br />
                    BUILD PERFECT BODY <br /> SHAPE FOR GOOD AND <br /> HEALTHY LIFE.
                </div>
            </div>
        </div>
    )
}
