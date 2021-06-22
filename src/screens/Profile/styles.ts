import { CORES } from "./../../constants/cores";
import { FONTES } from "./../../constants/fonts";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center"
    },
    usuario: {
        flexDirection: "row"
    },
    greeting: {
        fontFamily: FONTES.title500,
        fontSize: 24,
        color: CORES.heading,
        marginRight: 5
    },
    nomeUsuario: {
        fontFamily: FONTES.title700,
        fontSize: 24,
        color: CORES.heading
    },
    mensagem: {
        fontFamily: FONTES.text400,
        color: CORES.highlight
    }
});
