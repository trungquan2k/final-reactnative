import React, { useState } from 'react'
import { TouchableOpacity, View, Text, LayoutAnimation, Image, StyleSheet, } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import DoubleSlider from './DoubleSlider';




const RatingComponent = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = () => {
        setIsOpen(value => !value);
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    }
    return (
        <View style={styles.rating}>
            <View style={styles.body}>
                <View style={styles.headerTitle}>
                    <Image
                        source={{ uri: 'https://i.ibb.co/5MpC8kP/ic-Kindi-Care.png' }}
                        style={styles.icon}
                    />
                </View>
                <View style={styles.content}>
                    <Text style={styles.title}>{props.title}</Text>
                    <Text style={styles.subtitle}>{props.subtitle}</Text>
                </View>
                <TouchableOpacity onPress={toggleOpen} activeOpacity={0.6} style={styles.button}>
                    {!isOpen ? <FontAwesome name={'chevron-down'} size={14} color="black" /> : <FontAwesome name={'chevron-up'} size={14} color="black" />}
                </TouchableOpacity>
            </View>
            <View style={[styles.list, !isOpen ? styles.hidden : undefined]}>
                <DoubleSlider />
            </View>
        </View>
    );
};


export default RatingComponent ;

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
        borderTopLeftRadius:10,
       
    },
    content: {
        flexDirection: 'column',
        paddingHorizontal: 16,
        flex: 1
    },
    title: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 16,
        justifyContent:'center'
    },
    subtitle:{
        fontSize:12,
        color:'black'
    },
    // style 
    hidden: {
        height: 0,
    },
    list: {
        overflow: 'hidden',
        borderBottomRightRadius:10,
        borderBottomLeftRadius:10,
    },
    button: {
        padding: 5,
    },
    headerTitle:{ 
        width: 54, 
        height: 40, 
        justifyContent: 'center', 
        alignItems: 'center' 
    },
    icon:{
        height: 32,
        width: 32,
    }
    // National Quality Standard
   
    
});



