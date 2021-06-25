import React from "react";
import { View } from "react-native";
import { styles } from "./styles";

type Props = {
    ehCentralizado?: boolean;
};

export const ListDivider: React.FC<Props> = ({ ehCentralizado }) => {
    return <View style={[styles.container, ehCentralizado ? { marginVertical: 12 } : { marginTop: 2, marginBottom: 30 }]} />;
};