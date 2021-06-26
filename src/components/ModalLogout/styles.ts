import { StyleSheet } from "react-native";
import { CORES, FONTES } from "../../constants";

export const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: CORES.overlay
    },
    container: {
        flex: 1,
        marginTop: "150%"
    },
    perguntaContainer: {
        alignSelf: "center",
        paddingVertical: 20,
    },
    pergunta: {
        fontSize: 22,
        fontFamily: FONTES.title700,
        color: CORES.heading,
        fontWeight: "bold",
        textAlign: "center"
    },
    groupBotoes: {
        paddingHorizontal: 20,
        justifyContent: "space-evenly",
        alignItems: "center",
        flexDirection: "row",
    },
    botao: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        height: 60,
        borderRadius: 8
    },
    botaoNao: {
        marginRight: 5,
        borderWidth: 2,
        borderColor: CORES.secondary60
    },
    botaoSim: {
        marginLeft: 5,
        backgroundColor: CORES.primary
    },
    textoBotao: {
        fontWeight: "bold",
        fontSize: 18,
        color: CORES.highlight
    }
});
