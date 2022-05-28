import React from "react";
import { Text, View } from 'react-native';

export const ProfilePage: React.FC = ({navigation, route}) => {

    return (
        <View>
            <Text>Profile Page</Text>
            <Text>This is {route.params.name}'s profile</Text>
        </View>
    )
}