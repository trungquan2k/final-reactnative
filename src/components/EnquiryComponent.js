import React from 'react';
import { View,Text,StyleSheet,Image} from "react-native"
export const EnquiryComponent = ({icon,value,style}) => {
  return <>
     <View style={styles.contentRow}>
        <View style={styles.contentRow}>
            <Image  style={styles.tinyLogo} source={{uri:icon}} />
            <Text style={styles.enquiries}> {value}</Text>
        </View>
        <Text style={styles.contentText}>192</Text>
        </View>
  </>;
};

const styles = StyleSheet.create({
    contentRow: {
        flexDirection: 'row',
        marginBottom: 16,
        alignItems: 'center',
        justifyContent: 'space-between' 
    },
    tinyLogo: {
        width: 30,
        height: 30,
      },
    contentText: {
        fontSize: 16,
        marginHorizontal: 16,
        fontWeight:'bold'
    },
    enquiries:{
        fontSize:16,
        marginHorizontal:16,
    },
   
})