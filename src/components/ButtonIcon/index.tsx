import React from 'react';
import { Text, View, Image, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { styles } from './styles';
import DiscordImage from "../../assets/discord.png";

type Props = TouchableOpacityProps & {
    titulo: string;
};

export const ButtonIcon: React.FC<Props> = ({ titulo, ...rest }) => {
    return (
        <TouchableOpacity style={styles.container} {...rest}>
            <View style={styles.iconWrapper}>
                <Image source={DiscordImage} style={styles.iconButton} />
            </View>
            <Text style={styles.title}>
                {titulo}
            </Text>
        </TouchableOpacity>
    );
};