import { CORES } from "./../../constants/cores";
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
    iconWrapper: {
        width: 56,
        height: 56,
        justifyContent: "center",
        alignItems: "center",
        borderRightWidth: 1,
        borderColor: CORES.line
    },
    iconButton: {
        width: 24,
        height: 18
    },
    title: {
        flex: 1,
        color: CORES.heading,
        fontSize: 15,
        textAlign: "center"
    }
});
