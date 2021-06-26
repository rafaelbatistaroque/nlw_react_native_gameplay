import { StyleSheet } from "react-native";
import { CORES } from "../../constants";

export const styles = StyleSheet.create({
    container: {
        width: 64,
        height: 64,
        borderRadius: 8,
        backgroundColor: CORES.discord,
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        marginRight: 20
    },
    image: {
        width: 64,
        height: 64
    }
});
