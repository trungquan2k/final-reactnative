import { StyleSheet } from "react-native"


export const styles = StyleSheet.create({

    feature: {
        paddingTop: 10,
        paddingLeft: 20,
        paddingRight: 20,
    },
    layout:{
        padding:20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0,
        elevation: 1,
        backgroundColor: 'white',
        flexDirection: 'row',
        borderRadius: 8,
        
    },
    star:{
       
    },
    text:{
        fontSize:14,
        marginHorizontal:10,
    },
    switchButton: {
        justifyContent:'space-between',
   
        // justifyContent: 'center',
    },
})
