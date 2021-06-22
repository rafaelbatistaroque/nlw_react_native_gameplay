import { StyleSheet } from "react-native";
import { CORES, FONTES } from "../../constants";

export const styles = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 24
    },
    titulo: {
        fontFamily: FONTES.title700,
        color: CORES.heading,
        fontSize: 18,
    },
    subtitulo: {
        fontFamily: FONTES.text400,
        color: CORES.highlight,
        fontSize: 12,
    }
});
