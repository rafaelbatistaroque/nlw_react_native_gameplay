import { useNavigation } from "@react-navigation/native";
import React from "react";
import { FlatList, View } from "react-native";
import { ButtonAdd, CategorySelect, ListHeader, Appointment, ListDivider, Background } from "../../components";
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

    const navigation = useNavigation();

    const handleCategorySelect = (categoriaId: string) => {
        categoriaId === categoria ? setNovaCategoria("") : setNovaCategoria(categoriaId);
    };

    const handleAppointmentDetails = () => {
        navigation.navigate("AppointmentDetails");
    };

    const handleAppointmentCreate = () => {
        navigation.navigate("AppointmentCreate");
    };

    return (
        <Background>
            <View style={styles.header}>
                <Profile />
                <ButtonAdd onPress={handleAppointmentCreate} />
            </View>

            <CategorySelect categorySelect={categoria} setCategoria={handleCategorySelect} />
            <View style={styles.content}>
                <ListHeader titulo="Partidas agendadas" subtitulo="Total 6" />
                <FlatList data={appointments} keyExtractor={item => item.id} renderItem={({ item }) => (
                    <Appointment onPress={handleAppointmentDetails} data={item} />
                )}
                    ItemSeparatorComponent={() => <ListDivider />}
                    style={styles.matches}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </Background>
    );
};