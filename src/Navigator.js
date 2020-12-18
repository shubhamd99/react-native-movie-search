import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import PropTypes from 'prop-types';

const theme = require('./themes/base-theme');

import Home from './components/Home';
import About from './components/About';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function StackNavigator(props) {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Home}
            options={{
                title: 'Home',
                headerStyle: {
                  backgroundColor: theme.brandPrimary,

                },
                headerTintColor: '#fff',
            }} />
            <Stack.Screen name="About" component={About}
            options={{
                title: 'About',
                headerStyle: {
                  backgroundColor: theme.brandPrimary,

                },
                headerTintColor: '#fff',
            }} />
        </Stack.Navigator>
    );
}

class Navigator extends Component {

    render() {
        return <Drawer.Navigator initialRouteName="Home" drawerType="front">
            <Drawer.Screen name="Home" component={StackNavigator} />
        </Drawer.Navigator>
    }
}

Navigator.propTypes = {
    data: PropTypes.array,
}

function bindAction(dispatch) {
    return {}
}

const mapStateToProps = state => ({
    data: state.mainStore.data,
});

export default connect(mapStateToProps, bindAction)(Navigator);