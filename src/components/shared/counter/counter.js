import React from 'react';

function Counter() {
  return (
    <section class="parallax" data-overlay-dark="5" data-Background={bg} style={theme.bg}>
      <div class="container">
        <div class="row">
          <div class="col-6 col-lg-3 col-md-6 sm-margin-30px-bottom">
            <div class="counter-box">
              <span class="icon margin-5px-bottom display-block text-white font-size36 xs-font-size30 xs-text-center"><i class="icon-profile-male"></i></span>
              <h4 class="countup text-white display-block xs-text-center">234542</h4>
              <div class="separator-line-horrizontal-medium-light3 bg-white margin-15px-tb xs-margin-10px-tb opacity5 center-col"></div>
              <p class="font-size24 sm-font-size20 xs-font-size18 font-weight-600 text-white no-margin text-center">Satisfied Visitors</p>
            </div>
          </div>
          <div class="col-6 col-lg-3 col-md-6 sm-margin-30px-bottom">
            <div class="counter-box">
              <span class="icon margin-5px-bottom display-block text-white font-size36 xs-font-size30 xs-text-center"><i class="icon-happy"></i></span>
              <h4 class="countup text-white display-block xs-text-center">55</h4>
              <div class="separator-line-horrizontal-medium-light3 bg-white margin-15px-tb xs-margin-10px-tb opacity5 center-col"></div>
              <p class="font-size24 sm-font-size20 xs-font-size18 font-weight-600 text-white no-margin text-center">Happy Guides</p>
            </div>
          </div>
          <div class="col-6 col-lg-3 col-md-6">
            <div class="counter-box">
              <span class="icon margin-5px-bottom display-block text-white font-size36 xs-font-size30 xs-text-center"><i class="icon-trophy"></i></span>
              <h4 class="countup text-white display-block xs-text-center">12</h4>
              <div class="separator-line-horrizontal-medium-light3 bg-white margin-15px-tb xs-margin-10px-tb opacity5 center-col"></div>
              <p class="font-size24 sm-font-size20 xs-font-size18 font-weight-600 text-white no-margin text-center">Awards Wining</p>
            </div>
          </div>
          <div class="col-6 col-lg-3 col-md-6">
            <div class="counter-box">
              <span class="icon margin-5px-bottom display-block text-white font-size36 xs-font-size30 xs-text-center"><i class="icon-genius"></i></span>
              <h4 class="countup text-white display-block xs-text-center">56726625</h4>
              <div class="separator-line-horrizontal-medium-light3 bg-white margin-15px-tb xs-margin-10px-tb opacity5 center-col"></div>
              <p class="font-size24 sm-font-size20 xs-font-size18 font-weight-600 text-white no-margin text-center">Tours Made</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
const bg = require("../../../assets/imgs/sliders/maasai-village.jpg");
const theme = {
  bg: {
    backgroundImage: "url(" + bg + ")",
    backgroundRepeat: "no-repeat",
  }
}
export default Counter;