import React from "react";
import { Text, View } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { Avatar, ModalLogOut } from "../../components";
import { useAuthContext } from "../../hooks/AuthContext";
import { styles } from "./styles";

export const Profile: React.FC = () => {
    const { user, signOut } = useAuthContext();
    const [openLogoutModal, setOpenLogoutModal] = React.useState<boolean>(false);

    const handlerCloseModal = () => setOpenLogoutModal(false);
    const handlerOpenModal = () => setOpenLogoutModal(true);
    const handleSignOut = () => signOut();

    return (
        <View style={styles.container}>
            <RectButton onPress={handlerOpenModal}>
                <Avatar urlImagem={user.avatar} />
            </RectButton>
            <View>
                <View style={styles.usuario}>
                    <Text style={styles.greeting}>Olá</Text>
                    <Text style={styles.nomeUsuario}>{user.firstName}</Text>
                </View>
                <Text style={styles.mensagem}>hoje é dia de vitória</Text>
            </View>
            <ModalLogOut visible={openLogoutModal} LogoutAction={handleSignOut} closeModal={handlerCloseModal} />
        </View>
    );
};