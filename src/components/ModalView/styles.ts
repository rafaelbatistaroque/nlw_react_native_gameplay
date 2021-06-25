import { StyleSheet } from "react-native";
import { CORES } from "../../constants";

export const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: CORES.overlay
    },
    container: {
        flex: 1,
        marginTop: 100
    },
    bar: {
        width: 40,
        height: 2,
        borderRadius: 2,
        backgroundColor: CORES.secondary30,
        alignSelf: "center",
        marginTop: 12
    }
});
