import React from 'react'
import '../Styles/Navbar.css'

export const Navbar = () => {
    return (
        <div className='navbar-fragment'>
            {/* Navbar */}
            <nav className="navbar">
                <div className="left-nav">FITNESS</div>
                <div className="right-nav">
                    <a href="#" className="nav-links">Home</a>
                    <a href="#about" className="nav-links">About</a>
                    <a href="" className="nav-links">Service</a>
                    <a href="" className="nav-links">Shedule</a>
                    <a href="" className="nav-links">Contact</a>
                </div>
            </nav>

            {/* Banner */}
            <div className="banner-area">
                <div className="banner-text">
                    <div className="team-name">______ Asymmetric</div> <br />
                    BUILD PERFECT BODY <br /> SHAPE FOR GOOD AND <br /> HEALTHY LIFE.
                </div>
            </div>
        </div>
    )
}
