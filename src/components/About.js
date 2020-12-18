import React, { Component } from 'react';
import { Text, View } from 'react-native';

class About extends Component {

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 50 }}>About</Text>
            </View>
        );
    }
}

export default About;