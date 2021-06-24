import React from 'react';
import { Text } from 'react-native';
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { styles } from './styles';

type Props = RectButtonProps & {
    titulo: string;
};

export const CustomButton: React.FC<Props> = ({ titulo, ...rest }) => {
    return (
        <RectButton style={styles.container} {...rest}>
            <Text style={styles.title}>
                {titulo}
            </Text>
        </RectButton>
    );
};