
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    rating: {
        paddingTop: 20,
        paddingLeft:20,
        paddingRight:20,
    },
    body: {
        flexDirection: 'row',
        padding: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0,
        elevation: 1,
        backgroundColor: "white",
        borderTopRightRadius:10,
        borderTopLeftRadius:10
    },
    content: {
        flexDirection: 'column',
        paddingHorizontal: 16,
        flex: 1
    },
    title: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 14,
    },
    subtitle:{
        fontSize:12,
        color:'black'
    },
    hidden: {
        height: 0,
    },
    list: {
        overflow: 'hidden',
        borderBottomRightRadius:10,
        borderBottomLeftRadius:10,
        // height:300
    },
    button: {
        alignItems: 'baseline',
        padding: 5,
    },

    //user review
    userReview:{
        flexDirection:'column',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0,
        elevation: 1,
        backgroundColor: "white",
        padding: 20,
        borderBottomRightRadius:10,
        borderBottomLeftRadius:10
    },
    avatar:{
        height:40,
        width:40,
        borderRadius:8,
        // backgroundColor:'black'
    },
    reviewer:{
        flexDirection: 'column',
    },
    header:{
        flexDirection:'row',
    },
    text:{
        justifyContent:'space-between',
        paddingHorizontal:10,
        fontSize:14
    },
    star:{
        justifyContent:'space-between',
        marginHorizontal:5,
        marginVertical:2
       
    },
    footer:{
        flexDirection:'row'
    },
    image:{
        flexDirection:'row',
        marginTop:10,
    },
    imageSlide:{
        width: 70,
        height: 70,
        borderRadius:8,
        marginHorizontal:6,
    },

    // National Quality Standard

    nqsRating:{
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',  
        
    },
    nqsImage:{
        height:57,
        width:91,
        borderRadius:8,
        
        // backgroundColor:'black',  
    },
    listNQS:{
        flexDirection:'column',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0,
        elevation: 1,
        backgroundColor: "white",
        padding: 20,
        borderBottomRightRadius:10,
        borderBottomLeftRadius:10,
        marginBottom:10
    },
    
});

export default styles;