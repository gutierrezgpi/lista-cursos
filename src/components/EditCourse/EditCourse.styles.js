import { StyleSheet } from "react-native";

export const Styles = StyleSheet.create({

    container: {
        flex: 1,
        padding: 20,
        justifyContent: "flex-end",
        backgroundColor: '#272727'
    },

    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },

    label: {
        color: 'white',
        fontSize: 20
    },

    input: {
        flex: 1,
        color: 'white',
        backgroundColor: '#323232',
        fontSize: 16,
        height: 50,
        padding: 10,
        borderWidth: 1,
        borderColor: 'gray',
        alignContent: 'center',
        justifyContent: 'center',
        marginLeft: 10,
        borderRadius: 8
    },

    buttonReturn: {
        alignSelf: 'flex-start',
        borderWidth: 1,
        borderColor: 'gray',
        alignContent: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        padding: 4
    },

    buttonContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: "space-between"
    },

    buttonUpdate: {
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 8,
        padding: 4,
    },

    buttonRemove: {
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 8,
        padding: 4,
    }

})