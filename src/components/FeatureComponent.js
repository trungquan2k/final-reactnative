import React, { useState } from 'react'
import { View, Text, StyleSheet,FlatList } from 'react-native'
import SwitchToggle from "react-native-switch-toggle";
import { styles } from '../css/StyleFeature';
import { Ionicons } from '@expo/vector-icons';


const FeatureComponent = () => {
    const [isEnabled, setIsEnabled] = useState(false);
   
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
            console.log(active);
        }

        return(
            <View style={styles.feature}>
            <View style={[styles.layout,{justifyContent:'space-between'}]}>
                <View style={{flexDirection:'row'}}>
                <Ionicons
                        name={item.icon}
                        size={20}
                        color="black"
                        style={
                            styles.star
                        } />
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

