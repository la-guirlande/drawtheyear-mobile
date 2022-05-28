import React from "react";
import { Text, View } from 'react-native';
import { ProfileProps } from "../types/navigation-types";

export const ProfilePage = ({navigation, route}: ProfileProps) => {

    return (
        <View>
            <Text>Profile Page</Text>
            <Text>This is {route.params.name}'s profile</Text>
        </View>
    )
}
