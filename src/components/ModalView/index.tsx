import React, { ReactNode } from "react";
import { Modal, ModalProps, Text, View } from "react-native";
import { Background } from "../Background";
import { styles } from "./styles";

type Props = ModalProps & {
    children: ReactNode,
};

export const ModalView: React.FC<Props> = ({ children, ...rest }) => {
    return (
        <Modal transparent animationType="slide" {...rest}>
            <View style={styles.overlay}>
                <View style={styles.container}>
                    <Background>
                        <View style={styles.bar} />
                        {children}
                    </Background>
                </View>
            </View>
        </Modal>
    );
};