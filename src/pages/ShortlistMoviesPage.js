import React from 'react';
import { View, StyleSheet } from 'react-native';
import ShortList from '../components/Shortlist';

const ShortlistMoviesPage = () => {
    return (
        <View style={styles.container}>
            <ShortList />
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


export default ShortlistMoviesPage;