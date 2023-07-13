import React from 'react';
import Button from './Button';
import downArrow from '../assetLanding/down-long-solid.svg';
const HeroText = () => {
	return (
		<div className='heroTextWrapper'>
			<h1 className='heroHeader'>
				We are Committed to <br />
				Providing Excellent Service <br /> to Our Customers
			</h1>
			<p className='sub'>
				Engaging users with a solutive platform to enhance <br /> electricity
				purchase from the comfort of your home and <br /> cuts off quieing in
				the cashier’s line.
			</p>
			<div style={{ marginBottom: '1rem' }}>
				<p className='pls'>Please, click here to get started </p>

				<img
					src={downArrow}
					alt='icon'
					style={{
						width: '18px',
						filter:
							' invert(12%) sepia(54%) saturate(4727%) hue-rotate(242deg) brightness(84%) contrast(106%)',
					}}
				/>
			</div>

			<Button value='Get Started' classes='orange' />
		</div>
	);
};

export default HeroText;
