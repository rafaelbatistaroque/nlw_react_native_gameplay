import React from "react";
import { Fontisto } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Alert, FlatList, ImageBackground, Text, View, Share, Platform } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import BannerImg from "../../assets/banner.png";
import { AppointmentProps, Loading, Background, ButtonIcon, Header, ListDivider, ListHeader, Member, MemberProps } from "../../components";
import { CORES } from "../../constants";
import { styles } from "./styles";
import { api } from "../../services/api";
import * as Linking from "expo-linking";

type Params = {
    guildSelected: AppointmentProps;
};

type GuildWidget = {
    id: string;
    name: string;
    instant_invite: string;
    members: MemberProps[];
    presence_count: number;
};

export const AppointmentDetails: React.FC = () => {
    const navigation = useNavigation();
    const { params } = useRoute();
    const { guildSelected } = params as Params;
    const [loading, setLoading] = React.useState<boolean>(true);
    const [widget, setWidget] = React.useState<GuildWidget>({} as GuildWidget);

    const fetchGuildWidget = async () => {
        try {
            const response = await api.get(`/guilds/${guildSelected.guild.id}/widget.json`);
            setWidget(response.data);

            setLoading(false);
        } catch {
            Alert.alert("Aviso", "Verifique as configurações do servidor. Será que o widget está habilitado?", [
                { text: "OK", style: "cancel", onPress: () => navigation.navigate("Home") }
            ]);
        }
    };

    const handleShareInvitation = () => {
        const message = Platform.OS === "ios"
            ? `Seja membro da ${guildSelected.guild.name}`
            : widget.instant_invite;

        Share.share({
            message,
            url: widget.instant_invite
        });
    };

    const handleOpenGuild = () => {
        Linking.openURL(widget.instant_invite);
    };

    React.useEffect(() => {
        fetchGuildWidget();
    }, []);

    return (
        <Background>
            <Header
                titulo="Detalhes"
                action={guildSelected.guild.owner && <BorderlessButton>
                    <Fontisto
                        onPress={handleShareInvitation}
                        name="share"
                        size={24}
                        color={CORES.primary} />
                </BorderlessButton>} />
            <ImageBackground
                source={BannerImg}
                style={styles.banner}>
                <View style={styles.bannerContent}>
                    <Text style={styles.titulo}>{guildSelected.guild.name}</Text>
                    <Text style={styles.subtitulo}>{guildSelected.description}</Text>
                </View>
            </ImageBackground>
            {
                loading
                    ? <Loading />
                    : <>
                        <ListHeader titulo="Jogadores" subtitulo={`Total ${widget.members.length}`} />
                        <FlatList data={widget.members} keyExtractor={item => item.id} renderItem={({ item }) => (
                            <Member data={item} />
                        )}
                            ItemSeparatorComponent={() => <ListDivider ehCentralizado />}
                            style={styles.members}
                        />
                    </>
            }
            {guildSelected.guild.owner && <View style={styles.footer}>
                <ButtonIcon onPress={handleOpenGuild} titulo="Entrar na Partida" />
            </View>}
        </Background>
    );
};