import React from 'react';
import { Link } from 'react-router-dom';

function BannerSection() {
  return (
    <div className="container">
      <div className="row align-items-center">
        <div className="col-12 col-lg-12">
          <div className="navbar-header navbar-header-custom row" style={theme.logo}>
            <div className="col-xl-2 col-lg-2">
              <Link to="#" className="navbar-brand">
                {/* <img id="logo" src={logo} alt="Cultural Tourism Logo" /> */}
              </Link>
            </div>
            <div className="col-xl-10 col-lg-10 offset-lg-0 sm-display-none">
              <div className="row">
                <div className="col-md-4">
                  <div className="width-100">
                    <span className="display-inline-block width-40px vertical-align-top">
                      <i className="far fa-clock text-theme-color font-size30"></i>
                    </span>
                    <p className="display-inline-block no-margin width-75 vertical-align-top">
                      <span className="font-weight-600 display-block">Mon - Sun 08:00-21:00</span>
                      <span>Come and meet us</span>
                    </p>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="width-100">
                    <span className="display-inline-block width-40px vertical-align-top">
                      <i className="fas fa-mobile-alt text-theme-color font-size30"></i>
                    </span>
                    <p className="display-inline-block no-margin width-75 vertical-align-top">
                      <span className="font-weight-600 display-block">(+255) 784 606 654 | 767 606 654</span>
                      <span>info@mtowambuculturaltourism.co.tz</span>
                    </p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="width-100">
                    <span className="display-inline-block width-40px vertical-align-top">
                      <i className="fas fa-map-marker-alt text-theme-color font-size30"></i>
                    </span>
                    <p className="display-inline-block no-margin width-75 vertical-align-top">
                      <span className="font-weight-600 display-block">Mto wa Mbu</span>
                      <span>Monduli, Arusha</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const logo = require("../../../assets/imgs/logo.png");
const theme = {
  logo: {
    backgroundImage: "url(" + logo + ")",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center left ",
    backgroundSize: "13%"
  }
}
export default BannerSection;