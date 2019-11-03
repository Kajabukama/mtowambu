import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SocialNetwork from "./social-network";
import BannerSection from "./banner-section";


class Navbar extends Component {
  render() {
    return (
      <header className="header-style4">
        <div className="navbar-default">
          <BannerSection />
          <div className="menu_area alt-font">
            <div className="container">
              <nav className="navbar navbar-expand-lg navbar-light no-padding">
                <div className="navbar-toggler"></div>
                <ul className="navbar-nav ml-auto" id="nav">
                  <li><Link to="#">Home</Link></li>
                  <li><Link to="#">About Us</Link>
                    <ul>
                      <li><Link to="#">Our Mission</Link></li>
                      <li><Link to="#">Our Vision</Link></li>
                      <li><Link to="#">Our History</Link></li>
                      <li><Link to="#">Our Guides</Link></li>
                    </ul>
                  </li>
                  <li><Link to="#">Experiences</Link></li>
                  <li><Link to="#">Community Projects</Link></li>
                  <li><Link to="#">Blog</Link></li>
                  <li><Link to="#">Contact Us</Link></li>
                  <li><Link to="#">Foundation</Link></li>
                </ul>

                <SocialNetwork />
              </nav>
            </div>
          </div>
        </div>
      </header>
    )
  }
}

export default Navbar;