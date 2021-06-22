import { CORES, FONTES } from "./../../constants";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: "row",
        alignSelf: "center"

    },
    content: {
        flex: 1
    },
    header: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 12
    },
    titulo: {
        fontFamily: FONTES.title700,
        color: CORES.heading,
        fontSize: 18
    },
    category: {
        fontFamily: FONTES.text400,
        color: CORES.heading,
        fontSize: 12,
        marginRight: 24
    },
    playersInfo: {
        flexDirection: "row",
        alignItems: "center"
    },
    player: {
        fontFamily: FONTES.text500,
        fontSize: 12,
        marginLeft: 7,
        marginRight: 24
    },
    footer: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    dateInfo: {
        flexDirection: "row",
        alignItems: "center"
    },
    date: {
        fontFamily: FONTES.text500,
        color: CORES.heading,
        fontSize: 12,
        marginLeft: 7
    }
});
