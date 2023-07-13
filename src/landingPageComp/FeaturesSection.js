import React from 'react';
import Features from './Features';
import { ReadyCard } from './ReadyCard';

const FeaturesSection = () => {
	return (
		<section className='features'>
			<ReadyCard />
			<Features />
		</section>
	);
};

export default FeaturesSection;
