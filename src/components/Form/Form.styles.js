import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({

    container: {
        width: '100%',
        flexDirection: 'row',
        margin: 10,
        height: '10%'
    },

    input: {
        flex: 1,
        color: 'white',
        fontSize: 16,
        height: 50,
        backgroundColor: 'transparent',
        padding: 10,
        borderWidth: 1,
        borderColor: 'gray',
        alignContent: 'center',
        justifyContent: 'center',
        marginLeft: 10,
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8
    },

    button: {
        backgroundColor: 'transparent',
        padding: 10,
        borderWidth: 1,
        borderColor: 'gray',
        alignContent: 'center',
        justifyContent: 'center',
        marginRight: 10,
        height: 50,
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8
    },

    buttonImage: {
        width: 26,
        height: 26,
    }

})