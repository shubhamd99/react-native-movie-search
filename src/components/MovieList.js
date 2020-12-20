import React from 'react';
import { ActivityIndicator, Text, View, StyleSheet, FlatList } from 'react-native';
import { useSelector, shallowEqual } from 'react-redux';
import theme from "../themes/base-theme";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import MovieCard from './MovieCard';

const MovieList = () => {
    const { movies, loading } = useSelector(state => state.movieStore, shallowEqual); // State, Equality Function

    // Spinner
    if (loading) {
        return (
            <View style={styles.center}>
                <ActivityIndicator size="large" color={theme.brandPrimary} />
            </View>
        )
    }

    if (movies.length === 0) {
        return (
            <View style={styles.center}>
                <MaterialCommunityIcons name="movie-search" size={theme.noContentAvailableIconSize}
                style={{ color: theme.fadeColor }} />
            </View>
        )
    }

    const renderItem = ({ item }) => {
        return <MovieCard movie={item} />;
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={movies}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
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
    }
});

export default MovieList;