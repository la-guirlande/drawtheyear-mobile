import React from "react";
import { Button, Text, View } from 'react-native';
import { HomeProps } from "../types/navigation-types";

export const HomePage = ({navigation}: HomeProps) => {

    const goToProfilePage = () => {
        navigation.navigate('Profile', {name: "Miki"})
    }

    return (
        <View>
            <Text>Home Page</Text>
            <Button title="Profil" onPress={() => goToProfilePage()}/>
        </View>
    )
}
