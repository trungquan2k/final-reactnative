import React,{useContext, useState, useEffect} from 'react';
import { View, StyleSheet, Text,ScrollView,TouchableOpacity } from 'react-native';

const SeeMore =({children, numberOfLines})=>{

    const [lines, setLines] = useState([]);
    const [show, setShow]=useState(false);
    if(lines.length>numberOfLines){
        var string = '';
        for(var i=0;i<numberOfLines;i++){
            string+=lines[i].text;
        }
        if(lines[numberOfLines-1].width>220){
            string = string.slice(0,string.length-Math.round((lines[numberOfLines-1].width-220)/6.5));
            string = string.slice(0,string.lastIndexOf(' '));
        }else if(lines[numberOfLines-1].text.indexOf('\n')>0){
            string=string.slice(0,string.lastIndexOf('')-2);
        }
     
    }

    return (
        <>
        <Text onTextLayout={(e)=>setLines(e.nativeEvent.lines)} style={styles.hideText}>{children}</Text>
        <Text style={styles.contentInfo}>
            { show || lines.length<=numberOfLines && lines.length>0 ? children:string}
            <Text style={styles.contentSeeMore} onPress={()=>{setShow(!show)}}>{lines.length<=numberOfLines?null:show?" see less":" see more"}</Text>
        </Text>
        </>
    )
}

export default SeeMore;

const styles = StyleSheet.create({
    contentSeeMore:{
        color: '#DB147F', 
        fontWeight: '700',
    },
    contentInfo: {
        lineHeight: 24,
        fontSize:14,
        letterSpacing:-0.02,
    },
    hideText:{
        opacity:0,
        position:'absolute',
        fontFamily:''
    }
})