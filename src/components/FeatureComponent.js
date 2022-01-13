import React, { useState } from 'react'
import { View, Text, StyleSheet,FlatList } from 'react-native'
import SwitchToggle from "react-native-switch-toggle";
import { Ionicons } from '@expo/vector-icons';


const FeatureComponent = () => {

    const [active, setActive] = useState([1,2,3,6,8,9])

    const feature=[
        {
            id:1,
            icon:'star-outline',
            name:'Waitlist',
        },
        {
            id:2,
            icon:'star-outline',
            name:'Direct Debit Facility'
        },
        {
            id:3,
            icon:'star-outline',
            name:'Waitlist',
        },
        {
            id:4,
            icon:'star-outline',
            name:'Direct Debit Facility'
        },
        {
            id:5,
            icon:'star-outline',
            name:'Waitlist',
        },
        {
            id:6,
            icon:'star-outline',
            name:'Direct Debit Facility'
        },
        {
            id:7,
            icon:'star-outline',
            name:'Waitlist',
        },
        {
            id:8,
            icon:'star-outline',
            name:'Direct Debit Facility'
        }
        ,
        {
            id:9,
            icon:'star-outline',
            name:'Direct Debit Facility'
        },
        {
            id:10,
            icon:'star-outline',
            name:'Waitlist',
        },
        {
            id:11,
            icon:'star-outline',
            name:'Direct  '
        }
        ,
        {
            id:12,
            icon:'star-outline',
            name:'Waitlist'
        },
        {
            id:13,
            icon:'star-outline',
            name:'Waitlist',
        },
    ]
    
    const RenderItem=({item})=>{
        const check = active.includes(item.id);
        const toggleSwitch = () =>{
            if(check){
                active.splice(active.indexOf(item.id),1);
                setActive([...active]);
            }else{
                setActive([...active,item.id]);
            }
        }
        return(
            <View style={styles.feature}>
            <View style={[styles.layout,{justifyContent:'space-between'}]}>
                <View 
                style={styles.star}
                >
                <Ionicons
                        name={item.icon}
                        size={20}
                        color="black"
                        />
                    <Text style={styles.text}>{item.name}</Text>
                </View>     
                <View style={styles.switchButton}>
                    <SwitchToggle
                        switchOn={check}
                        onPress={()=>toggleSwitch()}
                        containerStyle={{
                            width: 36,
                            height: 22,
                            borderRadius: 25,
                            padding: 3,                            
                        }}
                        circleStyle={{
                            width: 18,
                            height: 18,
                            borderRadius: 9,
                        }}
                        circleColorOff='#FFFFFF'
                        circleColorOn='#FFFFFF'
                        backgroundColorOn='#DB147F'
                        backgroundColorOff='#BEBEBE'

                    />
                </View>
            </View>

        </View>
        );
    }

    return (
        <View>
            <FlatList
                data={feature}
                renderItem={RenderItem}
                keyExtractor={(item) => item.id}
                style={styles.flatList}
            />
        </View>
    )
}

export default FeatureComponent;

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
        flexDirection:'row'
    },
    text:{
        fontSize:14,
        marginHorizontal:10,
    },
    switchButton: {
        justifyContent:'space-between',
    },
})


