import React, { ReactNode } from "react";
import { Modal, ModalProps, TouchableWithoutFeedback, View } from "react-native";
import { Background } from "../Background";
import { styles } from "./styles";

type Props = ModalProps & {
    children: ReactNode,
    closeModal: () => void;
};

export const ModalView: React.FC<Props> = ({ children, closeModal, ...rest }) => {
    return (
        <Modal transparent statusBarTranslucent animationType="slide" {...rest}>
            <TouchableWithoutFeedback onPress={closeModal}>
                <View style={styles.overlay}>
                    <View style={styles.container}>
                        <Background>
                            <View style={styles.bar} />
                            {children}
                        </Background>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    );
};