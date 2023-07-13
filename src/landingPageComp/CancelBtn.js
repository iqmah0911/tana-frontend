import cancelIcon from '../assetLanding/icons8-cancel-64.png';
export const CancelBtn = ({ handleToggle }) => {
	return (
		<div className='ham' onClick={handleToggle}>
			<img
				src={cancelIcon}
				alt='hamburger'
				style={{ width: '30px', height: '30px' }}
			/>
		</div>
	);
};
