import React from 'react';
import { Text, View, Image, StatusBar } from 'react-native';
import { styles } from './styles';
import IllustrationImagem from "../../assets/illustration.png";
import { ButtonIcon } from "../../components";

export const SignIn = () => {
    const [texto, setTexto] = React.useState("");
    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
            <Image source={IllustrationImagem} style={styles.image} resizeMode="stretch" />
            <View style={styles.content}>
                <Text style={styles.title}>
                    Organize {`\n`}
                    suas jogatinas{`\n`}
                    facilmente
                </Text>
                <Text style={styles.subtitle}>
                    Crie grupos para jogar seus games {`\n`}
                    favoritos com seus amigos
                </Text>
                <ButtonIcon titulo="Entrar com Discord" activeOpacity={.7} />
            </View>
        </View>
    );
};