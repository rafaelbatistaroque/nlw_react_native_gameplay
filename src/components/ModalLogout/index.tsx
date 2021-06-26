import React from "react";
import { Button, Modal, ModalProps, TouchableWithoutFeedback, TouchableOpacity, View, Text } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { Background } from "../Background";
import { styles } from "./styles";

type Props = ModalProps & {
    closeModal: () => void;
    LogoutAction: () => void;
};

export const ModalLogOut: React.FC<Props> = ({ LogoutAction, closeModal, ...rest }) => {
    return (
        <Modal transparent statusBarTranslucent animationType="slide" {...rest}>
            <TouchableWithoutFeedback onPress={closeModal}>
                <View style={styles.overlay}>
                    <View style={styles.container}>
                        <Background>
                            <View style={styles.perguntaContainer}>
                                <Text style={styles.pergunta}>Deseja sair do GamePlay?</Text>
                            </View>
                            <View style={styles.groupBotoes}>
                                <TouchableOpacity style={[styles.botao, styles.botaoNao]} onPress={closeModal}>
                                    <Text style={styles.textoBotao}>Não</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.botao, styles.botaoSim]} onPress={LogoutAction}>
                                    <Text style={styles.textoBotao}>Sim</Text>
                                </TouchableOpacity>
                            </View>
                        </Background>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    );
};