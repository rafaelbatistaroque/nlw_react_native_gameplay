import React from "react";
import { Text, View } from "react-native";
import { CORES } from "../../constants";
import { Avatar } from "../Avatar";
import { styles } from "./styles";

export type MemberProps = {
    id: string;
    username: string;
    avatar_url: string;
    status: string;
};

type Props = {
    data: MemberProps;
};

export const Member: React.FC<Props> = ({ data }) => {
    const { avatar_url, username, status } = data;
    const { primary, on } = CORES;
    const ehOnline = status === "online";

    return (
        <View style={styles.container}>
            <Avatar urlImagem={avatar_url} />
            <View>
                <Text style={styles.titulo}>
                    {username}
                </Text>
                <View style={styles.status}>
                    <View style={[styles.bulletStatus, { backgroundColor: ehOnline ? on : primary }]} />
                    <Text style={styles.nameStatus}>{ehOnline ? "Disponível" : "Ocupado"}</Text>
                </View>
            </View>
        </View>
    );
};