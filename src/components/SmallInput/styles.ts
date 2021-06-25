import { StyleSheet } from "react-native";
import { CORES, FONTES } from "../../constants";

export const styles = StyleSheet.create({
    container: {
        width: 48,
        height: 48,
        backgroundColor: CORES.secondary40,
        color: CORES.heading,
        borderRadius: 8,
        fontFamily: FONTES.text400,
        fontSize: 12,
        marginRight: 4,
        textAlign: "center",
        borderWidth: 1,
        borderColor: CORES.secondary50
    }
});
