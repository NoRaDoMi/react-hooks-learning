import React, { useEffect, useState } from 'react';

Clock.propTypes = {};

function formatDate(date) {
	if (!date) return '';

	// Add 1 zero and get 2 last character
	const hours = `0${date.getHours()}`.slice(-2);
	const minutes = `0${date.getMinutes()}`.slice(-2);
	const seconds = `0${date.getSeconds()}`.slice(-2);

	return `${hours}:${minutes}:${seconds}`;
}

function Clock(props) {
	const [ timeString, setTimeString ] = useState();

	useEffect(() => {
		const clockInterval = setInterval(() => {
			console.log('setInterval');
			const now = new Date();
			const newTimeString = formatDate(now);

			setTimeString(newTimeString);
		}, 1000);

		return () => {
			console.log('Clock cleanup');
			clearInterval(clockInterval);
		};
	}, []);

	return <p style={{ fontSize: '42px' }}>{timeString}</p>;
}

export default Clock;
