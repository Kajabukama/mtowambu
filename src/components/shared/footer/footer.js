import React from 'react';
import { Link } from 'react-router-dom';
import FooterTopSection from './footer-topsection';

function Footer() {
  return (
    <footer class="no-padding-top">

      <FooterTopSection />

      <div class="container">
        <div class="row">

          <div class="col-lg-4 col-md-6 sm-margin-30px-bottom">

            <img alt="footer-logo" src={logo} width="50%" />
            <p class="margin-25px-top margin-20px-bottom">Mto Wa Mbu Cultural Tourism Programme is among the local tourism enterprises located on the Northern Circuit of Tanzania.</p>
            <ul class="footer-list">
              <li>
                <span class="d-inline-block vertical-align-top font-size18"><i class="fas fa-map-marker-alt text-theme-color"></i></span>
                <span class="d-inline-block width-85 vertical-align-top padding-10px-left">Box 100, Red Banana, Mto wa Mbu Arusha.</span>
              </li>
              <li>
                <span class="d-inline-block vertical-align-top font-size18"><i class="fas fa-mobile-alt text-theme-color"></i></span>
                <span class="d-inline-block width-85 vertical-align-top padding-10px-left">(+255) 748 606 564 | 767 606 564</span>
              </li>
              <li>
                <span class="d-inline-block vertical-align-top font-size18"><i class="far fa-envelope text-theme-color"></i></span>
                <span class="d-inline-block width-85 vertical-align-top padding-10px-left">info@mtowambuculturaltourism.co.tz</span>
              </li>
            </ul>

          </div>

          <div class="col-lg-4 col-md-6 sm-margin-30px-bottom">
            <h3 class="text-white">Quick Links</h3>
            <div class="row">
              <div class="col-md-6 no-padding-right xs-padding-15px-right">
                <ul class="footer-list xs-margin-5px-bottom">
                  <li><Link to="#">About Us</Link></li>
                  <li><Link to="#">Experiences</Link></li>
                  <li><Link to="#">Community Projects</Link></li>
                  <li><Link to="#">Our Guides</Link></li>
                  <li><Link to="#">Foundation</Link></li>
                </ul>
              </div>
              <div class="col-md-6 no-padding-right xs-padding-15px-right">
                <ul class="footer-list">
                  <li><Link to="#">Canoeing Tours</Link></li>
                  <li><Link to="#">Maasai Boma Visit</Link></li>
                  <li><Link to="#">Village Walks</Link></li>
                  <li><Link to="#">Rift Valley Trekking</Link></li>
                  <li><Link to="#">Mountain Biking</Link></li>
                  <li><Link to="#">Nature Walk</Link></li>
                </ul>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6">
            <div class="padding-30px-left sm-no-padding-left">
              <h3 class="text-white">Newsletter</h3>
              <p class="margin-20px-bottom">Nemo enim enim voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequr.</p>
              <form>
                <div class="form-group footer-subscribe">
                  <input type="email" placeholder="Subscribe with us" id="Email1" class="form-control" />
                  <Link class="butn theme grey-hover"><span>Join</span></Link>
                </div>
              </form>
            </div>
          </div>
        </div>

      </div>

      <div class="footer-bar">
        <div class="container">
          <div class="row">
            <div class="col-md-6 text-left xs-text-center xs-margin-5px-bottom">
              <div class="footer-social-icons small">
                <ul>
                  <li><Link to="#"><i class="fab fa-facebook-f"></i></Link></li>
                  <li><Link to="#"><i class="fab fa-twitter"></i></Link></li>
                  <li><Link to="#"><i class="fab fa-google-plus-g"></i></Link></li>
                  <li><Link to="#"><i class="fab fa-youtube"></i></Link></li>
                  <li><Link to="#"><i class="fab fa-linkedin-in"></i></Link></li>
                </ul>
              </div>
            </div>
            <div class="col-md-6 text-right xs-text-center">
              <p class="xs-margin-5px-top xs-font-size13">&copy; 2019 Cultural Tourism Mto wa Mbu, Developed by  @kajabukama</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

const logo = require("../../../assets/imgs/logo.png");
export default Footer;