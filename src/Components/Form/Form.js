import React, { useState } from 'react';
import './Form.scss';

const Form = (props) => {
	const [climbName, setClimbName] = useState('');

	const handleSubmit = (event) => {
		console.log('handleSubmit clicked');
		event.preventDefault();
		props.handleSubmit(climbName);
		setClimbName('');
	};

	const handleChange = (event) => {
		console.log('handleChange clicked');
		const name = event.target.value;
		setClimbName(name);
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
				<label htmlFor='climbName'>Find a Route</label>
				<input
					id='name'
					type='text'
					value={climbName}
					onChange={handleChange}
				/>
				<input type='submit' value='Submit' />
			</form>
		</>
	);
};

export default Form;
