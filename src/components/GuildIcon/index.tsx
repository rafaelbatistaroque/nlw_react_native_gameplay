import React from "react";
import { Image } from "react-native";
import { styles } from "./styles";

export const GuildIcon: React.FC = () => {
    return (
        <Image source={{ uri: "https://pbs.twimg.com/media/E1ScfE6WUAEVsw8.png" }} style={styles.image} resizeMode="cover" />
    );
};