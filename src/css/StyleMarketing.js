import { Dimensions, StyleSheet } from "react-native";


const styles = StyleSheet.create({
    marketing: {
        paddingTop: 20,
        paddingLeft: 20,
        paddingRight: 20,

    },
    layout: {
        padding: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0,
        elevation: 1,
        backgroundColor: 'white',
        flexDirection: 'row',
        borderRadius: 8
    },
    content: {
        flexDirection: 'column'
    },
    switchButton: {
        justifyContent: 'center',
    },

    bottomNavigationView: {
        backgroundColor: '#fff',
        width: '100%',
        height: 250,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopLeftRadius:10,
        borderTopRightRadius:10
      },


});

export default styles;