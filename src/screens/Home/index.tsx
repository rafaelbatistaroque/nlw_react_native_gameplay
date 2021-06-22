import React from "react";
import { FlatList, View, Text } from "react-native";
import { ButtonAdd, CategorySelect, ListHeader, Appointment, ListDivider } from "../../components";
import { Profile } from "../Profile";
import { styles } from "./styles";

export const Home = () => {
    const appointments = [
        {
            id: "1",
            guild: {
                id: "1",
                name: "Lendários",
                icon: undefined,
                owner: true
            },
            category: "1",
            date: '22/06 ás 20:00h',
            description: "É hoje que vamos chegar ao challender sem perder uma partida da md10"
        },
        {
            id: "2",
            guild: {
                id: "1",
                name: "Lendários",
                icon: undefined,
                owner: false
            },
            category: "1",
            date: '22/06 ás 20:00h',
            description: "É hoje que vamos chegar ao challender sem perder uma partida da md10"
        }
    ];

    const [categoria, setNovaCategoria] = React.useState<string>("");

    const handleCategorySelect = (categoriaId: string) => {
        categoriaId === categoria ? setNovaCategoria("") : setNovaCategoria(categoriaId);
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Profile />
                <ButtonAdd />
            </View>

            <CategorySelect categorySelect={categoria} setCategoria={handleCategorySelect} />
            <View style={styles.content}>
                <ListHeader titulo="Partidas agendadas" subtitulo="Total 6" />
                <FlatList data={appointments} keyExtractor={item => item.id} renderItem={({ item }) => (
                    <Appointment data={item} />
                )}
                    ItemSeparatorComponent={() => <ListDivider />}
                    style={styles.matches}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </View>
    );
};