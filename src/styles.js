import { StyleSheet, Dimensions, Platform } from "react-native";

const MAGENTA = "#DB3EB1";

export const styles = StyleSheet.create({
    globalText: {
        fontFamily: "Comfortaa-VariableFont_wght"
    },
    container: {
        alignItems: 'center',
        backgroundColor: '#fff',
        flex: 1,
        height: Dimensions.get('window').height,
        justifyContent: 'flex-start',
        padding: 50,
        paddingTop: Platform.OS === "ios" ? 80 : 50,
        width: Dimensions.get('window').width,
    },
    h1: {
        color: MAGENTA,
        fontFamily: "Pacifico-Regular",
        fontSize: 30,
        marginBottom: 50,
        textAlign: "center"
    },
    h2: {
        color: MAGENTA,
        fontFamily: "Pacifico-Regular",
        fontSize: 20,
        marginBottom: 10,
        textAlign: "left"
    },
    payee: {
        fontSize: 30,
        fontWeight: "400",
        marginBottom: 50,
        textAlign: "center"
    },
    button: {
        alignItems: "center",
        backgroundColor: MAGENTA,
        fontFamily: "Quicksand-VariableFont_wght",
        justifyContent: "center",
        marginTop: 10,
        textAlign: "center",
    },
    list: {
        marginTop: 50,
        width: "100%"
    },
    listItem: {
        alignItems: "center",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        width: "100%",
        borderBottomWidth: 0.6
    }
})