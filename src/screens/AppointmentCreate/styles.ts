import { StyleSheet } from "react-native";
import { CORES, FONTES } from "../../constants";

export const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    label: {
        fontSize: 18,
        fontFamily: FONTES.title700,
        color: CORES.heading
    },
    form: {
        paddingHorizontal: 24,
        marginTop: 32
    },
    select: {
        width: "100%",
        flexDirection: "row",
        height: 64,
        borderColor: CORES.secondary50,
        borderWidth: 1,
        borderRadius: 8,
        alignItems: "center",
        paddingRight: 25,
        overflow: "hidden"
    },
    image: {
        width: 64,
        height: 64,
        backgroundColor: CORES.secondary50,
        borderRadius: 8
    },
    selectBody: {
        flex: 1,
        alignItems: "center",
    },
    field: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 30
    },
    column: {
        flexDirection: "row",
        alignItems: "center"
    },
    divider: {
        marginRight: 4,
        fontSize: 15,
        fontFamily: FONTES.text500,
        color: CORES.highlight
    },
    caractersLimit: {
        fontFamily: FONTES.text400,
        fontSize: 12,
        color: CORES.heading
    },
    footer: {
        marginVertical: 20,
        marginBottom: 56
    }
});
