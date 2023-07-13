import React from 'react';
import MenuLinks from './MenuLinks';

const Menu = (props) => {
	return (
		<div className={props.newClass}>
			<MenuLinks />
		</div>
	);
};

export default Menu;
