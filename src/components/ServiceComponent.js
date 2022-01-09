import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

export default function ServiceComponent(props) {
    return (
        <View style={styles.service}>
            <View style={styles.body}>
                <Image
                    source={{ uri: props.imgUri }}
                    style={{
                        height: 48,
                        width: 48,
                        resizeMode: 'contain',
                    }}
                />
                <View style={styles.content}>
                    <Text style={styles.title}>{props.title}</Text>
                    <Text style={styles.subtitle}>{props.subtitle}</Text>
                    <Text style={styles.money}>{props.money}</Text>
                </View>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    service:{
        flex:1,
        padding:10,
    },
    body:{
        flexDirection:'row',
        padding:20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0,
        elevation: 1,
        backgroundColor: "white",
        borderRadius: 10
    },
    content:{
        flexDirection:'column',
        justifyContent:'space-between',
        paddingHorizontal:16,
    },
    title:{
        color:'black', 
        paddingVertical:4,
        fontWeight:'bold'  ,
        fontSize:14,
    },
    subtitle:{
        color:'black', 
        paddingVertical:4,
    },
    money:{
        color:'black', 
        paddingVertical:4,
    }

})
