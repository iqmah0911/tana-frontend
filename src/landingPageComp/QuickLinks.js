import React from 'react';
import FooterLinks from './FooterLinks';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';

const QuickLinks = () => {
	return (
		<div className='quick'>
			<h4 style={{ fontSize: '28px', marginBottom: '1rem' }}>Quick Links</h4>
			<FooterLinks />
			<div className='socialIcons'>
				<div className='socialIconWrapper'>
					<FaTwitter />
				</div>
				<div className='socialIconWrapper'>
					<FaLinkedinIn />
				</div>
				<div className='socialIconWrapper'>
					<FaInstagram />
				</div>
			</div>
		</div>
	);
};

export default QuickLinks;
