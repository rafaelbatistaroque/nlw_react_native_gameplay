import { Fontisto } from "@expo/vector-icons";
import React from "react";
import { FlatList, ImageBackground, Text, View } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import BannerImg from "../../assets/banner.png";
import { Background, ButtonIcon, Header, ListDivider, ListHeader, Member } from "../../components";
import { CORES } from "../../constants";
import { styles } from "./styles";

export const AppointmentDetails: React.FC = () => {
    const membros = [
        {
            id: "1",
            username: "Rafael",
            avatar_url: "https://github.com/rafaelbatistaroque.png",
            status: "online"
        },
        {
            id: "2",
            username: "Rafael",
            avatar_url: "https://github.com/rafaelbatistaroque.png",
            status: "offline"
        },
        {
            id: "3",
            username: "Rafael",
            avatar_url: "https://github.com/rafaelbatistaroque.png",
            status: "online"
        },
    ];

    return (
        <Background>
            <Header
                titulo="Detalhes"
                action={<BorderlessButton>
                    <Fontisto
                        name="share"
                        size={24}
                        color={CORES.primary} />
                </BorderlessButton>} />
            <ImageBackground
                source={BannerImg}
                style={styles.banner}>
                <View style={styles.bannerContent}>
                    <Text style={styles.titulo}>Lendários</Text>
                    <Text style={styles.subtitulo}>É hoje que vamos chegar ao challender sem perder uma partida da md10</Text>
                </View>
            </ImageBackground>
            <ListHeader titulo="Jogadores" subtitulo="Total 3" />
            <FlatList data={membros} keyExtractor={item => item.id} renderItem={({ item }) => (
                <Member data={item} />
            )}
                ItemSeparatorComponent={() => <ListDivider />}
                style={styles.members}
            />
            <View style={styles.footer}>
                <ButtonIcon titulo="Entrar na Partida" />
            </View>
        </Background>
    );
};