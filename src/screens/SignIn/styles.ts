import { StyleSheet } from 'react-native';
import { CORES } from "../../constants";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: CORES.background
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
        marginBottom: 16
    },
    subtitle: {
        color: CORES.heading,
        textAlign: "center",
        fontSize: 15,
        marginBottom: 64
    }
});
