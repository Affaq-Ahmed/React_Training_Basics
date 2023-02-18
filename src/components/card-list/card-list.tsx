import React from 'react';
import Card from '../card/card';

import './card-list.css';
import { Monster } from 'src/App';

type CardListProps = {
	monsters: Monster[];
};

const CardList = ({ monsters }: CardListProps) => {
	return (
		<div className='card-list'>
			{monsters.map((monster) => {
				return <Card monster={monster} />;
			})}
		</div>
	);
};

export default CardList;
