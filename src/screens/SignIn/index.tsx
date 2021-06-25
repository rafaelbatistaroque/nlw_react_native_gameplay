import React from 'react';
import { Alert, Image, Text, View, ActivityIndicator } from 'react-native';
import IllustrationImagem from "../../assets/illustration.png";
import { Background, ButtonIcon } from "../../components";
import { CORES } from "../../constants";
import { useAuthContext } from "../../hooks/AuthContext";
import { styles } from './styles';

export const SignIn = () => {
    const { signIn, ehLoading } = useAuthContext();

    const handleSignIn = async () => {
        try {
            await signIn();
        } catch(error) {
            Alert.alert(error);
        }
    };

    return (
        <Background>
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
                    {ehLoading
                        ? <ActivityIndicator color={CORES.primary} />
                        : <ButtonIcon titulo="Entrar com Discord" onPress={handleSignIn} />}
                </View>
            </View>
        </Background>
    );
};