import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';


function getHeaderTitle(route) {
    // Access the tab navigator's state using `route.state`
    const routeName = route.state
        ? // Get the currently active route name in the tab navigator
        route.state.routes[route.state.index].name
        : // If state doesn't exist, we need to default to `screen` param if available, or the initial screen
        // In our case, it's "Feed" as that's the first screen inside the navigator
        route.params?.screen || 'Oggi';

    switch (routeName) {
        case 'Oggi':
            return 'Oggi';
        case 'Calendario':
            return 'Ecco il calendario';
        case 'Abitudini':
            return 'Abitudini';
        case 'Impostazioni':
            return 'Impostazioni';
    }
}

export default function Header(props) {
    return (
        <View>
            <Text>{getHeaderTitle(props.route)}</Text>
        </View>
    );
}