import { FONTES, CORES } from "../../constants";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: 104,
        height: 120,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8,
        marginRight: 8
    },
    content: {
        width: 100,
        height: 116,
        borderRadius: 8,
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 20
    },
    checked: {
        position: "absolute",
        top: 7,
        right: 7,
        width: 10,
        height: 10,
        backgroundColor: CORES.primary,
        borderRadius: 3
    },
    check: {
        position: "absolute",
        top: 7,
        right: 7,
        width: 12,
        height: 12,
        backgroundColor: CORES.secondary100,
        borderColor: CORES.secondary50,
        borderWidth: 2,
        borderRadius: 3
    },
    titulo: {
        fontFamily: FONTES.title700,
        color: CORES.heading,
        fontSize: 15,
        marginTop: 15
    }
});
