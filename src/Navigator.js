import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const theme = require('./themes/base-theme');

import MoviesPage from './pages/MoviePage';
import ShortlistMoviesPage from './pages/ShortlistMoviesPage';

const Tab = createBottomTabNavigator();

// Note: Arrow VS Regular Functions
// Arrow functions do not have an "arguments" bindings, neither  have there own "this" and can never have duplicate named parameter
// Regular functions are constructable and callable and they can be called by using "new" keyword

function StackNavigator() {
    return (
        <Tab.Navigator 
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconDiv = <Ionicons name={'home'} size={size} color={color} />;
        
                    if (route.name === 'Movies') {
                        iconDiv = focused
                        ? <Ionicons name={'home'} size={size} color={color} /> 
                        : <Ionicons name={'home-outline'} size={size} color={color} />;
                    } else if (route.name === 'Shortlist') {
                        iconDiv = focused
                        ? <MaterialCommunityIcons name={'movie-open'} size={size} color={color} /> 
                        : <MaterialCommunityIcons name={'movie-open-outline'} size={size} color={color} />;
                    }
    
                    // You can return any component that you like here!
                    return iconDiv;
                },
            })}
            tabBarOptions={{
                activeTintColor: theme.brandPrimary,
                inactiveTintColor: theme.inactiveTintColor,
            }}
        >
            <Tab.Screen name="Movies" component={MoviesPage} />
            <Tab.Screen name="Shortlist" component={ShortlistMoviesPage} />
        </Tab.Navigator>
    );
}

const Navigator = () => {
    return <StackNavigator />
}

export default Navigator;