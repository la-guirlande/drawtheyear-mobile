import React from "react";
import { Button, Text, View } from 'react-native';

export const HomePage: React.FC = ({navigation}) => {

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