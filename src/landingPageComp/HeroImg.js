import React from 'react';
import heroImage from '../assetLanding/image 17.png';
const HeroImg = () => {
	return (
		<div className='heroImgWrapper'>
			<img src={heroImage} alt='heroImage' className='img' />
		</div>
	);
};

export default HeroImg;
