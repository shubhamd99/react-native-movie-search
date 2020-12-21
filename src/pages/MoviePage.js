import React from 'react';
import { Text, View, Platform, StyleSheet } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { useDispatch } from 'react-redux';
import { fetchMovies, clearMovies } from "../store/actions/movieStore";

import MovieList from '../components/MovieList';

const MoviesPage = () => {
	// We can access DOM elements/component instances within React with the help of Refs
	const [searchTerm, setSearch] = React.useState("");
	// state, setState for functional component
	const searchBar = React.useRef(null);

	// Redux Dispatch Hook to dispatch actions
	const dispatch = useDispatch();

	// Combination of DidMount, DidUpdate and WillUnmount for functional component
	React.useEffect(() => {
		if (searchTerm.length > 3) {
			dispatch(fetchMovies(searchTerm))
		} else {
			dispatch(clearMovies())
		}

	}, [searchTerm]);

	return (
		<View style={styles.container}>
			<SearchBar
				placeholder="Search Movies Here..."
				onChangeText={setSearch}
				platform={(Platform.OS === 'ios') ? 'ios' : 'android'}
				value={searchTerm}
				ref={searchBar}
			/>
			<MovieList />
		</View>
	);
}

// In React native, the StyleSheet.create() ensures that the values are immutable and opaque.
// They are used to send the style only once through the bridge to avoid passing a new style object.
const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingVertical: 10,
		paddingHorizontal: 8,
	},
});

export default MoviesPage;