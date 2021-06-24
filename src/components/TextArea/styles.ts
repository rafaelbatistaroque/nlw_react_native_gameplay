import { StyleSheet } from "react-native";
import { CORES, FONTES } from "../../constants";

export const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 95,
        backgroundColor: CORES.secondary40,
        color: CORES.heading,
        borderRadius: 8,
        fontFamily: FONTES.text400,
        fontSize: 12,
        marginRight: 4,
        textAlign: "center"
    }
});
