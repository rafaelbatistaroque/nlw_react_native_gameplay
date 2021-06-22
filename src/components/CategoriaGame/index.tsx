import React from "react";
import { Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { SvgProps } from "react-native-svg";
import { styles } from "./styles";
import { CORES } from "../../constants";

type Props = RectButtonProps & {
    titulo: string,
    icon: React.FC<SvgProps>;
    checked?: boolean;
};

export const CategoriaGame: React.FC<Props> = ({ titulo, icon: Icon, checked = false, ...rest }) => {
    const { secondary50, secondary70 } = CORES;

    return (
        <RectButton {...rest}>
            <LinearGradient style={styles.container} colors={[secondary50, secondary70]}>
                <View style={[styles.content, { opacity: checked ? 1 : 0.4 }]}>
                    <View style={checked ? styles.checked : styles.check} />
                    <Icon width={48} height={48} />
                    <Text style={styles.titulo}>
                        {titulo}
                    </Text>
                </View>
            </LinearGradient>
        </RectButton>
    );
};