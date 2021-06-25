import React from "react";
import { Text, View } from "react-native";
import { Avatar } from "../../components";
import { useAuthContext } from "../../hooks/AuthContext";
import { styles } from "./styles";

export const Profile: React.FC = () => {
    const { user } = useAuthContext();
    return (
        <View style={styles.container}>
            <Avatar urlImagem={user.avatar} />
            <View>
                <View style={styles.usuario}>
                    <Text style={styles.greeting}>Olá</Text>
                    <Text style={styles.nomeUsuario}>{user.firstName}</Text>
                </View>
                <Text style={styles.mensagem}>hoje é dia de vitória</Text>
            </View>
        </View>
    );
};