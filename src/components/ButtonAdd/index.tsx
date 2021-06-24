import React from "react";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { styles } from "./styles";
import { CORES } from "../../constants";

export const ButtonAdd: React.FC<RectButtonProps> = ({ ...rest }) => {
    return (
        <RectButton style={styles.container} {...rest}>
            <MaterialCommunityIcons name="plus" color={CORES.heading} size={24} />
        </RectButton>
    );
};