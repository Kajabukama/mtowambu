import React from 'react';
import { Link } from 'react-router-dom';

function ListService() {
  return (
    <section class="bg-light-gray">
      <div class="container">
        <div class="section-heading"><span>Services</span>
          <h3>Popular Experiences in Mto wa Mbu</h3>
          <p class="width-55 sm-width-75 xs-width-95">Business consectetur adipisicing elit eiusmod tempor incididunt ut labore et dolore magna aliqua quis nostrud exercitation consequat.</p>
        </div>
        <div class="row">
          <div class="col-lg-4 col-md-12 sm-margin-30px-bottom">
            <div class="blog-grids4">
              <div class="blog-grid-img position-relative">
                <img src={service_one} alt="" />
                <div class="blog-date">
                  <span>1 - 3 Days</span>
                </div>
              </div>
              <div class="blog-grid-text sm-padding-20px-tb bg-white">
                <h4><Link to="#">Mountain Bike Tours</Link></h4>
                <div class="sepratar"></div>
                <p class="no-margin">Exercitation ullamco laboris nisi ut aliquip ex ea commodo Exercitation ullamco laboris nisi ut aliquip ex ea commodo.</p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-12 sm-margin-30px-bottom">
            <div class="blog-grids4">
              <div class="blog-grid-img position-relative">
                <img src={service_two} alt="" />
                <div class="blog-date">
                  <span>1-3 Days</span>
                </div>
              </div>
              <div class="blog-grid-text sm-padding-20px-tb bg-white">
                <h4><Link to="#">Wild Lake Manyara Tours</Link></h4>
                <div class="sepratar"></div>
                <p class="no-margin">Exercitation ullamco laboris nisi ut aliquip ex ea commodo Exercitation ullamco laboris nisi ut aliquip ex ea commodo.</p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-12">
            <div class="blog-grids4">
              <div class="blog-grid-img position-relative">
                <img src={service_three} alt="" />
                <div class="blog-date">
                  <span>1 - 5 Days </span>
                </div>
              </div>
              <div class="blog-grid-text sm-padding-20px-tb bg-white">
                <h4><Link to="#">Village Walk Tours</Link></h4>
                <div class="sepratar"></div>
                <p class="no-margin">Exercitation ullamco laboris nisi ut aliquip ex ea commodo Exercitation ullamco laboris nisi ut aliquip ex ea commodo.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const service_one = require("../../../assets/imgs/service01.JPG");
const service_two = require("../../../assets/imgs/service02.JPG");
const service_three = require("../../../assets/imgs/service05.jpg");
export default ListService;