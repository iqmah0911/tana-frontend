import React from 'react';
import Contact from './Contact';
import FooterForm from './FooterForm';
import QuickLinks from './QuickLinks';

const Footer = () => {
	return (
		<footer className='footer'>
			<Contact />
			<QuickLinks />
			<FooterForm />
		</footer>
	);
};

export default Footer;
