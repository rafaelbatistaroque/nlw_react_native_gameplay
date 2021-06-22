import React from 'react';
import { Image, Text, View } from 'react-native';
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import DiscordImage from "../../assets/discord.png";
import { styles } from './styles';

type Props = RectButtonProps & {
    titulo: string;
};

export const ButtonIcon: React.FC<Props> = ({ titulo, ...rest }) => {
    return (
        <RectButton style={styles.container} {...rest}>
            <View style={styles.iconWrapper}>
                <Image source={DiscordImage} style={styles.iconButton} />
            </View>
            <Text style={styles.title}>
                {titulo}
            </Text>
        </RectButton>
    );
};