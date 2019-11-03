import React from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import './normalize-css.css';
import './slider-animations.css';
import './home-slider.css';

import content from './slider-content';

class HomeSlider extends React.Component {
  render() {
    return (
      <Slider className="slider-wrapper">
        {content.map((item, index) => (
          <div
            key={index}
            className="slider-content"
            style={{ background: `url('${item.image}') no-repeat center center` }}
          >
            <div className="inner">
              <h1>{item.title}</h1>
              <p>{item.description}</p>
              <button>{item.button}</button>
            </div>
            <div>
              <img src={item.userProfile} alt={item.user} />
              <span>
                authored by <strong>{item.user}</strong>
              </span>
            </div>
          </div>
        ))}
      </Slider>
    )
  }
}

export default HomeSlider;