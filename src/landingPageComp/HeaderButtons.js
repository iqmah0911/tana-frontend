import React from 'react';
import Button from './Button';
import { Link } from "react-router-dom";

const HeaderButtons = (props) => {
	return (
		<div className={props.classes}>
			<Link to="/overview">
			<Button value='LOGIN' classes='' />
			</Link>
			<Link to='/overview'>
			<Button value='SIGNUP' classes='orange' />
			</Link>
		</div>
	);
};

export default HeaderButtons;
