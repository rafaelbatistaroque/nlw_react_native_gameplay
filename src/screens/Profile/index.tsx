import React from "react";
import { Text, View } from "react-native";
import { Avatar } from "../../components";
import { styles } from "./styles";

export const Profile: React.FC = () => {
    return (
        <View style={styles.container}>
            <Avatar urlImagem="https://github.com/rafaelbatistaroque.png" />
            <View>
                <View style={styles.usuario}>
                    <Text style={styles.greeting}>Olá</Text>
                    <Text style={styles.nomeUsuario}>Rafael</Text>
                </View>
                <Text style={styles.mensagem}>hoje é dia de vitória</Text>
            </View>
        </View>
    );
};