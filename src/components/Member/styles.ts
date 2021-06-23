import { StyleSheet } from "react-native";
import { CORES, FONTES } from "../../constants";

export const styles = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center"
    },
    titulo: {
        fontFamily: FONTES.title700,
        color: CORES.heading,
        fontSize: 18
    },
    status: {
        flexDirection: "row",
        alignItems: "center"
    },
    bulletStatus: {
        width: 8,
        height: 8,
        borderRadius: 4,
        marginRight: 10
    },
    nameStatus: {
        fontFamily: FONTES.text400,
        color: CORES.highlight,
        fontSize: 12
    }
});
