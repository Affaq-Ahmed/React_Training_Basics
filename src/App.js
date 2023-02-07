import { useEffect, useState } from 'react';
import './App.css';
import CardList from './components/card-list/card-list';
import SearchBox from './components/search-box/search-box';

const App = () => {
	const [monsters, setMonsters] = useState([]);
	const [searchField, setSearchField] = useState('');
	const [filteredMonsters, setFilteredMonsters] = useState(monsters);

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((response) => response.json())
			.then((users) => {
				setMonsters(users);
			});
	}, []);

	useEffect(() => {
		setFilteredMonsters(
			monsters.filter((monster) => {
				return monster.name.toLocaleLowerCase().includes(searchField);
			})
		);
	}, [searchField, monsters]);

	const onSearchChange = (e) => {
		const searchFieldString = e.target.value.toLocaleLowerCase();
		setSearchField(searchFieldString);
	};

	return (
		<div className="App">
			<h1 className="app-title">Monster-Dex</h1>
			<SearchBox
				className="monsters-search-box"
				onSearchChange={onSearchChange}
				placeholder="search monsters"
			/>
			<CardList monsters={filteredMonsters} />;
		</div>
	);
};

export default App;
