import React from 'react';
import { Text, View } from 'react-native';

const MovieCard = ({ movie }) => {
    console.log("movie", movie);
    return (
        <View>
            <Text style={{ fontSize: 50 }}>MovieCard</Text>
        </View>
    );
}

export default MovieCard;