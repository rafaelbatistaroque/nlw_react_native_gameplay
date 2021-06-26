import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import React, { useCallback } from "react";
import { FlatList, View } from "react-native";
import { Appointment, AppointmentProps, Background, ButtonAdd, CategorySelect, ListDivider, ListHeader, Loading } from "../../components";
import { COLLECTION_APPOINTMENTS } from "../../configs";
import { UseForm } from "../../hooks/UseForm";
import { Profile } from "../Profile";
import { styles } from "./styles";

export const Home = () => {
    const navigation = useNavigation();
    const [categoria, setNovaCategoria] = React.useState<string>("");
    const appointments = UseForm<AppointmentProps[]>([]);
    const [loading, setLoading] = React.useState<boolean>(true);

    const handleCategorySelect = (categoriaId: string) => {
        categoriaId === categoria ? setNovaCategoria("") : setNovaCategoria(categoriaId);
    };

    const handleAppointmentDetails = (guildSelected: AppointmentProps) => {
        navigation.navigate("AppointmentDetails", { guildSelected });
    };

    const handleAppointmentCreate = () => {
        navigation.navigate("AppointmentCreate");
    };

    const loadAppointments = async () => {
        // await AsyncStorage.removeItem(COLLECTION_APPOINTMENTS);
        const storage = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS);
        const appointmentsRecebidos: AppointmentProps[] = storage ? JSON.parse(storage) : [];

        if(categoria) {
            appointments.setValor(appointmentsRecebidos.filter(item => item.categoria === categoria));
        } else {
            appointments.setValor(appointmentsRecebidos);
        }

        setLoading(false);
    };

    useFocusEffect(useCallback(() => {
        loadAppointments();
    }, [categoria]));

    return (

        <Background>
            <View style={styles.header}>
                <Profile />
                <ButtonAdd onPress={handleAppointmentCreate} />
            </View>

            <CategorySelect categorySelect={categoria} setCategoria={handleCategorySelect} />
            {
                loading
                    ? <Loading />
                    : <>
                        <ListHeader titulo="Partidas agendadas" subtitulo={`Total ${appointments.valor.length}`} />
                        <FlatList data={appointments.valor} keyExtractor={item => item.id} renderItem={({ item }) => (
                            <Appointment onPress={() => handleAppointmentDetails(item)} propriedade={item} />
                        )}
                            contentContainerStyle={{ paddingBottom: 50 }}
                            ItemSeparatorComponent={() => <ListDivider />}
                            style={styles.matches}
                            showsVerticalScrollIndicator={false}
                        />
                    </>
            }
        </Background>
    );
};