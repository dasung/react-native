import React, { Component } from 'react';
import { View, Text } from 'react-native';


class Profile extends Component {

    // Local navigation within the component.
    static navigationOptions = {
        title: 'Profile'
    };

    render() {
        return (
            <View><Text>Profile Component</Text></View>
        );
    }
}

export default Profile;