import React from 'react';
import { Link } from 'react-router-dom';

function AboutSection() {
  return (
    <section>
      <div class="container">
        <div class="section-heading title-style5 border-bottom padding-25px-bottom sm-padding-15px-bottom">
          <h3><span>Mto wa Mbu </span> Cultural Tourism</h3>
          <p class="width-55 sm-width-75 xs-width-95">Mto Wa Mbu Cultural Tourism Programme is among the local tourism enterprises located on the Northern Circuit of Tanzania. This enterprise is located some 120 kilometers away from Arusha city in a small popular town of Mto Wa Mbu before reaching Lake Manyara National Park. Mto Wa Mbu offers numerous numbers of activities and support to the community and proudly guide more than 1000 tourists each year.</p>
        </div>
        <div class="title-box">
          <div class="row">
            <div class="col-md-5 col-sm-12 col-xs-12 text-right xs-text-left">
              <h2 class="font-size36 md-font-size32 sm-font-size30 xs-font-size24 font-weight-800 margin-40px-bottom xs-margin-30px-bottom">Trusted and Deemed Best Cultural Tourism enterprise by Tour Operators Worldwide</h2>
              <div class="display-inline-block vertical-align-middle font-weight-700 font-size18 sm-font-size16 margin-25px-right">Our Story</div>
              <div class="display-inline-block vertical-align-middle about-video">
                <Link class="video video_btn video_btn-style2 small" to="#"><i class="fas fa-play"></i></Link>
              </div>

            </div>
            <div class="col-md-7 col-sm-12 col-xs-12 xs-margin-30px-top">
              <div class="padding-60px-left md-padding-45px-left sm-padding-30px-left xs-no-padding-left">
                <div class="margin-30px-bottom sm-margin-20px-bottom">
                  <p>Mto Wa Mbu Cultural Tourism Programme offers you a stylish cultural tour on Northern Tanzania. Apart from your primarily visiting of Tanzania game parks we teach you, people, lifestyle. How do we dress? How do we cook? What we eat and drink? How we get married? And What is our environment and nature is like? Stay will us, visit us, come with us and learn much more</p>
                </div>
                <Link to="#" class="readmore">read more</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
const video = require("../../../assets/videos/down-time.mp4");
export default AboutSection;