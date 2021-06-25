import { StyleSheet } from "react-native";
import { CORES, FONTES } from "../../constants";

export const styles = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 24
    },
    content: {
        flex: 1,
        justifyContent: "center"
    },
    titulo: {
        fontFamily: FONTES.title700,
        color: CORES.heading,
        fontSize: 18,
        marginBottom: 4
    },
    type: {
        fontFamily: FONTES.text400,
        color: CORES.highlight,
        fontSize: 12
    }
});
