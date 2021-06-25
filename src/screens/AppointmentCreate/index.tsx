import React from "react";
import { Text, View, ScrollView, KeyboardAvoidingView, Platform } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import { Header, CategorySelect, GuildIcon, SmallInput, TextArea, CustomButton, ModalView, GuildProps, Background } from "../../components";
import { styles } from "./styles";
import { CORES } from "../../constants";
import { Guilds } from "../Guilds";

export const AppointmentCreate: React.FC = () => {
    const [categoria, setNovaCategoria] = React.useState<string>("");
    const [openGuildsModal, setOpenGuildsModal] = React.useState<boolean>(false);
    const [guild, setGuild] = React.useState<GuildProps>({} as GuildProps);

    const handlerOpenGuilds = () => {
        setOpenGuildsModal(true);
    };

    const handlerGuildsSelect = (guildSelecionada: GuildProps) => {
        setGuild(guildSelecionada);
        setOpenGuildsModal(false);
    };

    const handlerCloseGuilds = () => {
        setOpenGuildsModal(false);
    };

    const handleCategorySelect = (categoriaId: string) => {
        setNovaCategoria(categoriaId);
    };

    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>
            <Background>
                <ScrollView>
                    <Header titulo="Agerdar partida" />
                    <Text style={[styles.label, { marginLeft: 24, marginTop: 36, marginBottom: 18 }]}>Categoria</Text>
                    <CategorySelect hasCheckBox setCategoria={handleCategorySelect} categorySelect={categoria} />
                    <View style={styles.form}>
                        <RectButton onPress={handlerOpenGuilds}>
                            <View style={styles.select}>
                                {
                                    guild.icon ? <GuildIcon /> : <View style={styles.image} />
                                }
                                <View style={styles.selectBody}>
                                    <Text style={styles.label}>
                                        {guild.name ? guild.name : "Selecione um servidor"}</Text>
                                </View>
                                <Feather name="chevron-right" color={CORES.heading} size={18} />
                            </View>
                        </RectButton>
                        <View style={styles.field}>
                            <View>
                                <Text style={[styles.label, { marginBottom: 12 }]}>Dia e Mês</Text>
                                <View style={styles.column}>
                                    <SmallInput maxLength={2} />
                                    <Text style={styles.divider}>/</Text>
                                    <SmallInput maxLength={2} />
                                </View>
                            </View>
                            <View>
                                <Text style={[styles.label, { marginBottom: 12 }]}>Hora e Minuto</Text>
                                <View style={styles.column}>
                                    <SmallInput maxLength={2} />
                                    <Text style={styles.divider}>:</Text>
                                    <SmallInput maxLength={2} />
                                </View>
                            </View>
                        </View>
                        <View style={[styles.field, { marginBottom: 12 }]}>
                            <Text style={styles.label}>Descrição</Text>
                            <Text style={styles.caractersLimit}>Max 100 caracteres</Text>
                        </View>
                        <TextArea multiline maxLength={100} numberOfLines={50} autoCorrect={false} />
                        <View style={styles.footer}>
                            <CustomButton titulo="Agendar" />
                        </View>
                    </View>
                </ScrollView>
            </Background>
            <ModalView visible={openGuildsModal} closeModal={handlerCloseGuilds}>
                <Guilds handlerGuildsSelect={handlerGuildsSelect} />
            </ModalView>
        </KeyboardAvoidingView>
    );
};