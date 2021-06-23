import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { CORES, FONTES } from "../../constants";

export const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 104,
        paddingTop: getStatusBarHeight(),
        paddingHorizontal: 24,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    titulo: {
        flex: 1,
        textAlign: "center",
        fontFamily: FONTES.title700,
        fontSize: 20,
        color: CORES.heading
    }
});
