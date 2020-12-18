import React, { Component } from 'react';
import { Text, View } from 'react-native';

class Home extends Component {

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 50 }}>Home</Text>
            </View>
        );
    }
}

export default Home;