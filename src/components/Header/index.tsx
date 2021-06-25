import React, { ReactNode } from "react";
import { View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { BorderlessButton } from "react-native-gesture-handler";
import { styles } from "./styles";
import { Feather } from "@expo/vector-icons";
import { CORES } from "../../constants";
import { useNavigation } from "@react-navigation/native";

type Props = {
    titulo: string;
    action?: ReactNode;
};

export const Header: React.FC<Props> = ({ titulo, action }) => {
    const { secondary100, secondary40, heading } = CORES;

    const navigation = useNavigation();

    const handleGoBack = () => {
        navigation.goBack();
    };

    return (
        <LinearGradient colors={[secondary100, secondary40]} style={styles.container}>
            <BorderlessButton onPress={handleGoBack}>
                <Feather name="arrow-left" size={24} color={heading} />
            </BorderlessButton>
            <Text style={styles.titulo}>{titulo}</Text>
            {action
                ? <View>{action}</View>
                : <View style={{ width: 24 }} />}
        </LinearGradient>
    );
};