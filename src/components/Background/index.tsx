import { LinearGradient } from "expo-linear-gradient";
import React, { ReactNode } from "react";
import { CORES } from "../../constants";
import { styles } from "./styles";

type Props = {
    children: ReactNode;
};

export const Background: React.FC<Props> = ({ children }) => {
    const { secondary80, secondary100 } = CORES;
    return (
        <LinearGradient style={styles.container} colors={[secondary80, secondary100]}>
            {children}
        </LinearGradient>
    );
};