import React from 'react';
import HeroImg from './HeroImg';
import HeroText from './HeroText';

const HeroSection = () => {
	return (
		<section className='hero'>
			<HeroText />
			<HeroImg />
		</section>
	);
};

export default HeroSection;
