import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useDispatch } from 'react-redux';
import { addShortlistedMovie, clearShortlistedMovie } from '../store/actions/shortListedMovies';
import theme from '../themes/base-theme';

const MovieCard = ({ movie, isShortListedMovie }) => {
    // console.log("movie", movie);
    const dispatch = useDispatch();
    return (
        <View style={styles.container}>
                <View style={styles.shadow}>
                    <View style={styles.ratingWrapper}>
                        <FontAwesome name="star" style={{ marginRight: 5 }} />
                        <Text>3.5</Text>
                    </View>
                    <Image source={{ uri: movie.Poster }} style={styles.image} resizeMode="cover" />
                </View>
                <View style={{ marginTop: 10, flexDirection: 'row' }}>
                    <View style={{ width: '80%' }}>
                        <Text style={styles.title}>{movie.Title}</Text>
                        <View>
                            <Text style={styles.yearText}>{movie.Year}</Text>
                        </View>
                    </View>
                    <View style={[styles.start, { width: '20%' }]}>
                        {!isShortListedMovie && <TouchableOpacity onPress={() => dispatch(addShortlistedMovie(movie))}>
                            <FontAwesome name="bookmark-o" size={22} style={{ color: theme.greyColor }} />
                        </TouchableOpacity>}
                        {isShortListedMovie && <TouchableOpacity onPress={() => dispatch(clearShortlistedMovie(movie.imdbID))}>
                            <FontAwesome name="bookmark" size={22} style={{ color: '#FE8906' }} />
                        </TouchableOpacity>}
                    </View>
                </View>
        </View>
    );
}

// In React native, the StyleSheet.create() ensures that the values are immutable and opaque.
// They are used to send the style only once through the bridge to avoid passing a new style object.
const styles = StyleSheet.create({
	container: {
		flex: 1,
        padding: 8,
    },
    title: {
        fontSize: 12
    },
    yearText: {
        fontSize: 10,
        color: '#686868'
    },
    image: {
        height: 200,
        width: '100%',
        borderRadius: 6,
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        borderRadius: 8,
    },
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    start: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
    },
    ratingWrapper: {
        position: 'absolute',
        zIndex: 2,
        bottom: 8,
        right: 8,
        paddingHorizontal: 5,
        paddingVertical: 2,
        borderRadius: 5,
        backgroundColor: '#FFC500',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    }
});

export default MovieCard;