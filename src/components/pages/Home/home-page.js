import React from 'react';

import HomeSlider from './../../shared/sliders/home-slider';
import HomeIntro from './home-intro';
import AboutSection from './about-section';
import Counter from '../../shared/counter/counter';
import ListService from './service-intro';

function HomePage() {
	return (
		<div>
			<HomeSlider />
			<HomeIntro />
			<AboutSection />
			<Counter />
			<ListService />
		</div>
	)
}
// const image = require("../../../assets/imgs/contant-left02.jpg");
export default HomePage;