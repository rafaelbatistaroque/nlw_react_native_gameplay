import React from "react";
import { Image, View } from "react-native";
import { styles } from "./styles";
import DiscordSVG from "../../assets/discord.svg";
import { SvgProps } from "react-native-svg";

const { CDN_IMAGEM } = process.env;

type Props = {
    guildId: string;
    iconId?: React.FC<SvgProps>;
};

export const GuildIcon: React.FC<Props> = ({ guildId, iconId }) => {

    return (
        <View style={styles.container}>
            {iconId
                ? <Image source={{ uri: `${CDN_IMAGEM}/icons/${guildId}/${iconId}.png` }} style={styles.image} resizeMode="cover" />
                : <DiscordSVG width={40} height={40} />
            }
        </View>
    );
};