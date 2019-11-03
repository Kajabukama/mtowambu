import React from 'react';
import { Link } from 'react-router-dom';

function HomeIntro() {
  return (
    <section className="no-padding services-blocks">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-12 no-padding bg-white">
            <div className="padding-ten-all sm-padding-four-all xs-padding-eight-tb xs-padding-six-lr bg-theme height-100">
              <div className="features-flex-square">
                <div className="clearfix">
                  <div className="features-flex-square-icon">
                    <i className="icon-tools font-size40 md-font-size36"></i>
                  </div>
                  <div className="features-flex-square-content">
                    <h4><Link to="#">Cultural Experiences</Link></h4>
                    <p>We are know for our excellent delivery of true and exceptional Cultural Tours in Tanzania, come join us for an unforgetable Experience.</p>
                    <Link to="#" className="features-flex-square-content-button">Learn More</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 no-padding bg-white">
            <div className="padding-ten-all sm-padding-four-all xs-padding-eight-tb xs-padding-six-lr bg-theme-90 height-100">
              <div className="features-flex-square">
                <div className="clearfix">
                  <div className="features-flex-square-icon">
                    <i className="icon-hotairballoon font-size40 md-font-size36"></i>
                  </div>
                  <div className="features-flex-square-content">
                    <h4><Link to="#">Community Development</Link></h4>
                    <p>The proceeds that we earn by your visits, advances our community in Education, Health, Women Empowerment and Environmental conservation</p>
                    <Link to="#" className="features-flex-square-content-button">Learn More</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 no-padding bg-white">
            <div className="padding-ten-all sm-padding-four-all xs-padding-eight-tb xs-padding-six-lr bg-theme-80 height-100">
              <div className="features-flex-square">
                <div className="clearfix">
                  <div className="features-flex-square-icon">
                    <i className="icon-layers font-size40 md-font-size36"></i>
                  </div>
                  <div className="features-flex-square-content">
                    <h4><Link to="#">Game Drive Experiences</Link></h4>
                    <p>We bolster ourselves by providing toilor made  game drive in Lake Manyara, Tarangire, The Serengeti national parks and Ngorongoro Crater.</p>
                    <Link to="#" className="features-flex-square-content-button">Learn More</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeIntro;