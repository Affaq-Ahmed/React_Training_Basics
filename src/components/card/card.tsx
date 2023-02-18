import React from 'react';
import { Monster } from '../../App';

import './card.css';

type CardProps = {
	monster: Monster;
};

const Card = ({ monster }: CardProps) => {
	const { id, name, email } = monster;
	return (
		<div className='card-container'>
			<img
				src={`https://robohash.org/${id}?set=set1&size=180x180`}
				alt={`monster ${name}`}
			/>
			<h2>{name}</h2>
			<p>{email}</p>
		</div>
	);
};

export default Card;
