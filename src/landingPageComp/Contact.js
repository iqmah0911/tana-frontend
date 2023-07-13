import React from 'react';
import Logo from './Logo';
const Contact = () => {
	return (
		<div className='contact'>
			<h4 style={{ fontSize: '28px', marginBottom: '1rem' }}>Contact</h4>
			<p>Phone:+234812345678</p>
			<p>Email: tana@gmail.com</p>
			<div
				style={{
					width: '209px',
					background: '#fff',
					height: '92px',
					textAlign: 'center',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					marginTop: '3rem',
				}}>
				<Logo />
			</div>
		</div>
	);
};

export default Contact;
