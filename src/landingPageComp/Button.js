import React from 'react';

const Button = ({ classes, value }) => {
	return (
		<>
			<button className={classes === 'orange' ? 'btn1_orange' : 'btn1'}>
				{value}
			</button>
		</>
	);
};

export default Button;
