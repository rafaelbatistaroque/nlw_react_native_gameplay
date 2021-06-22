import { StyleSheet } from 'react-native';
import { CORES, FONTES } from "../../constants";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    image: {
        width: "100%",
        height: 360
    },
    content: {
        marginTop: -40,
        paddingHorizontal: 50
    },
    title: {
        color: CORES.heading,
        textAlign: "center",
        fontSize: 40,
        marginBottom: 16,
        fontFamily: FONTES.title700,
        lineHeight: 40
    },
    subtitle: {
        color: CORES.heading,
        textAlign: "center",
        fontSize: 15,
        marginBottom: 64,
        fontFamily: FONTES.title500,
        lineHeight: 25
    }
});
