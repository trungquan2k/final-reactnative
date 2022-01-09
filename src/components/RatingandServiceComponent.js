import React, { useState } from 'react'
import { StyleSheet, TouchableOpacity, View, Text, LayoutAnimation, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import DoubleSlider from './DoubleSlider';

const Accordion = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = () => {
        setIsOpen(value => !value);
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    }
    
    return (
        <View style={styles.rating}>
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
                    <Text style={styles.title}>{props.subtitle}</Text>
                </View>
                <TouchableOpacity onPress={toggleOpen} activeOpacity={0.6} style={styles.button}>
                    {!isOpen ? <FontAwesome name={'chevron-down'} size={14} color="black" /> : <FontAwesome name={'chevron-up'} size={14} color="black" />}
                </TouchableOpacity>
            </View>
            <View style={[styles.list, !isOpen ? styles.hidden : undefined]}>
                <Text>{props.children}</Text>
                <DoubleSlider/>
            </View>
            {/* <Text style={{ marginBottom: 100 }}></Text> */}
            
        </View>
    );
};
export default Accordion;
const styles = StyleSheet.create({
    rating: {
        padding: 20,
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
        borderRadius: 10
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
    hidden: {
        height: 0,
    },
    list: {
        overflow: 'hidden',
        height:270,
        // borderColor:'black',
        // borderWidth:1,
        paddingLeft:20
    },
    button: {
        alignItems: 'baseline',
        padding: 5
    },

});