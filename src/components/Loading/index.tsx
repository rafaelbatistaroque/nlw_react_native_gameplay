import React from "react";
import { ActivityIndicator, View } from "react-native";
import { CORES } from "../../constants";
import { styles } from "./styles";

export const Loading: React.FC = () => {
    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color={CORES.primary} />
        </View>
    );
};