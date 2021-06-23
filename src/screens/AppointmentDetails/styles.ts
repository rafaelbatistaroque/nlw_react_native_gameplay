import { StyleSheet } from "react-native";
import { CORES, FONTES } from "../../constants";
import { getBottomSpace } from "react-native-iphone-x-helper";

export const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    banner: {
        width: "100%",
        height: 234,
        marginBottom: 30
    },
    bannerContent: {
        flex: 1,
        justifyContent: "flex-end",
        paddingHorizontal: 24,
        marginBottom: 30
    },
    titulo: {
        fontSize: 28,
        fontFamily: FONTES.title700,
        color: CORES.heading
    },
    subtitulo: {
        fontSize: 16,
        fontFamily: FONTES.text400,
        color: CORES.heading
    },
    members: {
        marginLeft: 24,
        marginTop: 27
    },
    footer: {
        paddingHorizontal: 24,
        paddingVertical: 20,
        marginBottom: getBottomSpace()
    }
});
