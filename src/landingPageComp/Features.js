import React from 'react';
import icon1 from '../assetLanding/meter-tool.svg';
import contactIcon from '../assetLanding/contact.svg';
import icon3 from '../assetLanding/Vector (1).svg';
import arrow1 from '../assetLanding/Vector (3).svg';
import arrow2 from '../assetLanding/Vector (5).svg';
import arrow3 from '../assetLanding/Vector (4).svg';
const Features = () => {
	return (
		<div className='featuresWrapper'>
			<div className='feature1Wrapper'>
				<div className='iconWrapper'>
					<img src={icon1} alt='icon' className='icon123' />
				</div>
				<p className='featureText'>
					Create your meter
					<small className='small'>step1</small>
				</p>
			</div>
			<div className='directionsWrapper'>
				<div className='direction1'>
					<img src={arrow2} alt='icon' className='' />
				</div>
				<div className='direction2'>
					<img src={arrow1} alt='icon' className='' />
				</div>
			</div>
			<div className='feature23Wrapper'>
				<div className='feature2Wrapper'>
					<div className='iconWrapper2'>
						<img src={contactIcon} alt='icon' className='icon123' />
					</div>
					<p className='featureText'>
						Get a bank account for <br /> your meter
						<small className='small'>step2</small>
					</p>
				</div>
				<div className='feature3Wrapper'>
					<div className='iconWrapper3'>
						<img src={icon3} alt='icon' className='icon123' />
					</div>
					<p className='featureText'>
						Fund your account each <br /> time you want to recharge <br /> your
						meter
						<small className='small'>step3</small>
					</p>
				</div>
			</div>
			<div className='direction3'>
				<img src={arrow3} alt='icon' />
			</div>
		</div>
	);
};

export default Features;
