import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SocialNetwork from "./social-network";
import BannerSection from "./banner-section";


class Navbar extends Component {
  render() {
    return (
      <header className="header-style4">
        <div className="navbar-default">
          <div className="top-search bg-theme">
            <div className="container">
              <form className="search-form" action="search.html" method="GET" acceptCharset="utf-8">
                <div className="input-group">
                  <span className="input-group-addon cursor-pointer">
                    <button className="search-form_submit fas fa-search font-size18 text-white" type="submit"></button>
                  </span>
                  <input type="text" className="search-form_input form-control" name="s" autoComplete="off" placeholder="Type & hit enter..." />
                  <span className="input-group-addon close-search"><i className="fas fa-times font-size18 line-height-28 margin-5px-top"></i></span>
                </div>
              </form>
            </div>
          </div>

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