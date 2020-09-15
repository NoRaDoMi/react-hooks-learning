import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';

PostFilterForm.propTypes = {
	onSubmit: PropTypes.func
};

PostFilterForm.defaultProps = {
	onSubmit: null
};

function PostFilterForm(props) {
	const { onSubmit } = props;
	const [ searchTerm, setSearchTerm ] = useState('');

	// Khai bao bien tam: co the giu nguyen gia tri sau moi lan render
	const typingTimeoutRef = useRef(null);

	function handleOnChange(e) {
		// console.log(e.target.value);
		const value = e.target.value;
		setSearchTerm(value);

		if (!onSubmit) return;

		if (typingTimeoutRef.current) {
			clearTimeout(typingTimeoutRef.current);
		}

		typingTimeoutRef.current = setTimeout(() => {
			const formValues = {
				// Not used in setTimeout
				// searchTerm: e.target.value
				searchTerm: value
			};
			onSubmit(formValues);
		}, 300);
	}

	return (
		<form>
			<input type="text" value={searchTerm} onChange={handleOnChange} />
		</form>
	);
}

export default PostFilterForm;
