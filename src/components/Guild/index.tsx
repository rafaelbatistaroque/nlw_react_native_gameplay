import { Feather } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import { CORES } from "../../constants";
import { GuildProps } from "../Appointment";
import { GuildIcon } from "../GuildIcon";
import { styles } from "./styles";

type Props = TouchableOpacityProps & {
    data: GuildProps;
};

export const Guild: React.FC<Props> = ({ data, ...rest }) => {
    return (
        <TouchableOpacity style={styles.container} activeOpacity={.7} {...rest}>
            <GuildIcon guildId={data.id} iconId={data.icon} />
            <View style={styles.content}>
                <View>
                    <Text style={styles.titulo}>
                        {data.name}
                    </Text>
                    <Text style={styles.type}>
                        {data.owner ? "Administrador" : "Convidado"}
                    </Text>
                </View>
            </View>
            <Feather name="chevron-right" color={CORES.heading} size={24} />
        </TouchableOpacity>
    );
};