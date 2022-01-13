import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    wrapper: {
        padding: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0,
        elevation: 1,
        backgroundColor: 'white',
    },
    content: {
        flexDirection: 'column',
        justifyContent: "center",
        alignItems: "center",
    },
    values: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#DB147F',
        width: 60,
        height: 60,
        borderRadius: 8,
       
    },
    text: {
        color: 'white'
    },
    notes: {
        flexDirection: 'row',
        marginTop: 20,
    },
    boxAverage: {
        height: 14,
        width: 14,
        backgroundColor: "#32A4FC",
        borderRadius:4
    },
    boxService: {
        height: 14,
        width: 14,
        backgroundColor: "#DB147F",
        borderRadius:4
    },
    average: {
        flexDirection: "row",
        alignItems: 'center',
        marginRight: 40
    },
    service: {
        flexDirection: "row",
        alignItems: 'center'
    },
    textContent:{
       marginTop:5,
    }

});

export default styles;


