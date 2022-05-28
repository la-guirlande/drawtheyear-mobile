import React from "react";
import { Button, Text, View } from 'react-native';
import { ProfileProps } from "../../types/navigation-types";

export const ProfilePage = ({navigation, route}: ProfileProps) => {

    const goToAuthPage = () => {
        navigation.navigate('Authentication')
    }

    return (
        <View>
            <Text>Profile Page</Text>
            <Text>This is {route.params.name}'s profile</Text>
            <Button title="Profil" onPress={() => goToAuthPage()}/>
        </View>
    )
}
