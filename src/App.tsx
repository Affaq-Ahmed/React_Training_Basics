import React, { ChangeEvent, useEffect, useState } from 'react';
import CardList from './components/card-list/card-list';
import SearchBox from './components/search-box/search-box';

import { getData } from './utils/data.utils';
import './App.css';

export type Monster = {
	id: number;
	name: string;
	email: string;
};

const App = () => {
	const [monsters, setMonsters] = useState<Monster[]>([]);
	const [searchField, setSearchField] = useState('');
	const [filteredMonsters, setFilteredMonsters] = useState(monsters);

	useEffect(() => {
		const fetchMonsters = async () => {
			const fecthedMonsters = await getData<Monster[]>(
				'https://jsonplaceholder.typicode.com/users'
			);
			setMonsters(fecthedMonsters);
		};
		fetchMonsters();
	}, []);

	useEffect(() => {
		setFilteredMonsters(
			monsters.filter((monster) => {
				return monster.name.toLocaleLowerCase().includes(searchField);
			})
		);
	}, [searchField, monsters]);

	const onSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
		const searchFieldString = e.target.value.toLocaleLowerCase();
		setSearchField(searchFieldString);
	};

	return (
		<div className='App'>
			<h1 className='app-title'>Monster-Dex</h1>
			<SearchBox
				className='monsters-search-box'
				onSearchChange={onSearchChange}
				placeholder='search monsters'
			/>
			<CardList monsters={filteredMonsters} />;
		</div>
	);
};

export default App;
