import React from 'react';

const FooterForm = () => {
	return (
		<form>
			<div class='full-input'>
				<input type='text' name='name' placeholder='Name' />
			</div>
			<div class='full-input'>
				<input type='email' name='name' placeholder='Email' />
			</div>

			<textarea name='message' placeholder='Message'></textarea>

			<div className='buttonWrapper'>
				<button className='sendBtn'>Send</button>
			</div>
		</form>
	);
};

export default FooterForm;
