import React from "react";
import { TouchableOpacity, TouchableOpacityProps, View, Text } from "react-native";
import { GuildIcon } from "../GuildIcon";
import { Feather } from "@expo/vector-icons";
import { styles } from "./styles";
import { CORES } from "../../constants";
import { SvgProps } from "react-native-svg";

export type GuildProps = {
    id: string;
    name: string;
    icon?: React.FC<SvgProps>;
    owner: boolean;
};

type Props = TouchableOpacityProps & {
    data: GuildProps;
};

export const Guild: React.FC<Props> = ({ data, ...rest }) => {
    return (
        <TouchableOpacity style={styles.container} activeOpacity={.7} {...rest}>
            <GuildIcon />
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