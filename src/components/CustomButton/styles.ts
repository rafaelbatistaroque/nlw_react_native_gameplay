import { CORES, FONTES } from "../../constants";
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 56,
        backgroundColor: CORES.primary,
        borderRadius: 8,
        flexDirection: "row",
        alignItems: "center"
    },
    title: {
        flex: 1,
        color: CORES.heading,
        fontFamily: FONTES.text500,
        fontSize: 15,
        textAlign: "center"
    }
});
