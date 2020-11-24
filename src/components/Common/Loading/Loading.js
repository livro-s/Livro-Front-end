import React from 'react';
import { Spinner } from '@class101/ui';
import { Palette } from 'styles/Palette/Palette';
import './Loading.scss';

const Loading = () => {
	const { main } = Palette;

	return (
		<div className='Loading'>
			<Spinner size={100} backgroundColor={main} />
		</div>
	);
};

export default Loading;
