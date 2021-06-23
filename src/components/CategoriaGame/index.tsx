import React from "react";
import { Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { SvgProps } from "react-native-svg";
import { styles } from "./styles";
import { CORES } from "../../constants";

type Props = RectButtonProps & {
    titulo: string;
    icon: React.FC<SvgProps>;
    hasCheckBox?: boolean;
    checked?: boolean;
};

export const CategoriaGame: React.FC<Props> = ({ titulo, icon: Icon, checked = false, hasCheckBox = false, ...rest }) => {
    const { secondary40, secondary50, secondary70, secondary85 } = CORES;

    return (
        <RectButton {...rest}>
            <LinearGradient style={styles.container} colors={[secondary50, secondary70]}>
                <LinearGradient style={[styles.content, { opacity: checked ? 1 : 0.5 }]}
                    colors={[checked ? secondary85 : secondary50, secondary40]}>
                    {hasCheckBox && <View style={checked ? styles.checked : styles.check} />}
                    <Icon width={48} height={48} />
                    <Text style={styles.titulo}>
                        {titulo}
                    </Text>
                </LinearGradient>
            </LinearGradient>
        </RectButton>
    );
};