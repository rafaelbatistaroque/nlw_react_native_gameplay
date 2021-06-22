import { LinearGradient } from "expo-linear-gradient";
import { Image } from "react-native";
import React from "react";
import { CORES } from "../../constants";
import { styles } from "./styles";

type Props = {
    urlImagem: string;
};

export const Avatar: React.FC<Props> = ({ urlImagem }) => {
    const { secondary50, secondary70 } = CORES;

    return (
        <LinearGradient style={styles.container} colors={[secondary50, secondary70]}>
            <Image source={{ uri: urlImagem }} style={styles.avatar} />
        </LinearGradient>
    );
};