import { CORES } from "./../../constants/cores";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: 48,
        height: 48,
        backgroundColor: CORES.primary,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center"
    }
});
