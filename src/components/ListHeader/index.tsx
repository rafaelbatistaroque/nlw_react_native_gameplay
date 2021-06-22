import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";

type Props = {
    titulo: string;
    subtitulo: string;
};

export const ListHeader: React.FC<Props> = ({ titulo, subtitulo }) => {
    return (
        <View style={styles.container} >
            <Text style={styles.titulo}>{titulo}</Text>
            <Text style={styles.subtitulo}>{subtitulo}</Text>
        </View>
    );
};