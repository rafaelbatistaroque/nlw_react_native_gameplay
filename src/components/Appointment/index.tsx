import React from "react";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { Text, View } from "react-native";
import PlayerSvg from "../../assets/player.svg";
import CalendarSvg from "../../assets/calendar.svg";
import { GuildIcon } from "../GuildIcon";
import { styles } from "./styles";
import { CATEGORIAS, CORES } from "../../constants";
import { SvgProps } from "react-native-svg";

export type GuildProps = {
    id: string,
    name: string,
    icon?: React.FC<SvgProps>;
    owner: boolean;
};

export type AppointmentProps = {
    id: string;
    guild: GuildProps,
    category: string,
    date: string,
    description: string,
};

type Props = RectButtonProps & {
    data: AppointmentProps;
};

export const Appointment: React.FC<Props> = ({ data, ...rest }) => {
    const [category] = CATEGORIAS.filter(item => item.id === data.id);
    const { owner, name } = data.guild;
    const { primary, on } = CORES;

    return (
        <RectButton {...rest}>
            <View style={styles.container}>
                <GuildIcon />
                <View style={styles.content}>
                    <View style={styles.header}>
                        <Text style={styles.titulo}>{name}</Text>
                        <Text style={styles.category}>{category.titulo}</Text>
                    </View>
                    <View style={styles.footer}>
                        <View style={styles.dateInfo}>
                            <CalendarSvg />
                            <Text style={styles.date}>
                                {data.date}
                            </Text>
                        </View>
                        <View style={styles.playersInfo}>
                            <PlayerSvg fill={owner ? on : primary} />
                            <Text style={[styles.player, { color: owner ? on : primary }]}>{owner ? "Anfitrião" : "Visitante"}</Text>
                        </View>
                    </View>
                </View>
            </View>
        </RectButton>
    );
};