import React from "react";
import { FlatList, View } from "react-native";
import { Guild, GuildProps, ListDivider, Loading } from "../../components";
import { api } from "../../services/api";
import { styles } from "./styles";

type Props = {
    handlerGuildsSelect: (guild: GuildProps) => void;
};

export const Guilds: React.FC<Props> = ({ handlerGuildsSelect }) => {
    const [guilds, setGuilds] = React.useState<GuildProps[]>([]);
    const [loading, setLoading] = React.useState<boolean>(true);

    React.useEffect(() => {
        fetchGuilds();
    }, []);

    const fetchGuilds = async () => {
        const response = await api.get("/users/@me/guilds");

        setGuilds(response.data);
        setLoading(false);
    };

    return (
        <View style={styles.container}>
            {loading ? <Loading /> : <FlatList data={guilds}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <Guild data={item} onPress={() => handlerGuildsSelect(item)} />
                )}
                contentContainerStyle={{ paddingBottom: 50, paddingTop: 100 }}
                showsVerticalScrollIndicator={false}
                ItemSeparatorComponent={() => <ListDivider ehCentralizado />}
                ListHeaderComponent={() => <ListDivider ehCentralizado />}
                style={styles.guilds} />}
        </View>
    );
};