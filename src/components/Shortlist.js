import React from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import { useSelector, shallowEqual } from 'react-redux';
import theme from "../themes/base-theme";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import MovieCard from './MovieCard';

const ShortList = () => {
    const { savedMovies } = useSelector(state => state.shortListedMovies, shallowEqual); // State, Equality Function
    const savedMoviesArray = savedMovies ? Object.values(savedMovies) : [];
    // console.log("savedMovies", savedMovies)

    if (savedMoviesArray.length === 0) {
        return (
            <View style={styles.center}>
                <MaterialIcons name="videocam-off" size={theme.noContentAvailableIconSize}
                style={{ color: theme.fadeColor }} />
                <Text style={styles.title}>No Shortlisted Movies to show</Text>
            </View>
        )
    }

    const renderItem = ({ item }) => {
        return <MovieCard movie={item} isShortListedMovie={true} />;
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={savedMoviesArray}
                renderItem={renderItem}
                keyExtractor={(item, index) => item.imdbID}
                style={styles.container}
            />
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
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        marginTop: 20,
        fontSize: 20,
        fontWeight: 'bold',
        color: theme.fadeColor
    }
});

export default ShortList;