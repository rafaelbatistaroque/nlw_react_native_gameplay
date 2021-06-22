import React from 'react';
import { Text, View, Image, StatusBar } from 'react-native';
import { styles } from './styles';
import IllustrationImagem from "../../assets/illustration.png";
import { ButtonIcon } from "../../components";
import { useNavigation } from "@react-navigation/native";
import { TELAS } from "../../constants";

export const SignIn = () => {
    const navigation = useNavigation();

    const handleSignIn = () => {
        navigation.navigate(TELAS.Home);
    };

    return (
        <View style={styles.container}>
            <Image source={IllustrationImagem} style={styles.image} resizeMode="stretch" />
            <View style={styles.content}>
                <Text style={styles.title}>
                    Conecte-se {"\n"}
                    e organize suas {"\n"}
                    jogatinas
                </Text>
                <Text style={styles.subtitle}>
                    Crie grupos para jogar seus games {`\n`}
                    favoritos com seus amigos
                </Text>
                <ButtonIcon titulo="Entrar com Discord" onPress={handleSignIn} />
            </View>
        </View>
    );
};