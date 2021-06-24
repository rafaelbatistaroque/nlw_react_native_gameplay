import React from "react";
import { FlatList, View } from "react-native";
import { Guild, GuildProps, ListDivider } from "../../components";
import { styles } from "./styles";

type Props = {
    handlerGuildsSelect: (guild: GuildProps) => void;
};

export const Guilds: React.FC<Props> = ({ handlerGuildsSelect }) => {
    const guilds = [
        {
            id: "1",
            name: "Lendários",
            icon: undefined,
            owner: true
        },
        {
            id: "2",
            name: "Galera do Game",
            icon: undefined,
            owner: true
        }
    ];
    return (
        <View style={styles.container}>
            <FlatList data={guilds}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <Guild data={item} onPress={() => handlerGuildsSelect(item)} />
                )}
                showsVerticalScrollIndicator={false}
                ItemSeparatorComponent={() => <ListDivider />}
                style={styles.guilds} />

        </View>
    );
};