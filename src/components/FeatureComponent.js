import React, { useContext, useEffect, useState } from 'react'
import { View, Text, StyleSheet,FlatList } from 'react-native'
import SwitchToggle from "react-native-switch-toggle";
import { FontAwesome } from '@expo/vector-icons';
import CenterContext from '../context/CenterContext';
import { getFeatures,getDetail } from '../../services';


const FeatureComponent = ({centerId}) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const [active, setActive] = useState([])
    const [allFeatures,setFeatures] =useState([])
    const centers = useContext(CenterContext);
    useEffect(async ()=>{
        const features= await getFeatures();
        setFeatures([...features]);
        setActive([...getDetail(centers,centerId,"features")]); 

    },[]);
    const RenderItem=({item})=>{
        const {icon,title,id} = item;
        const check = active.find(v=>v===id);
        const toggleSwitch = () =>{
            if(check){
                active.splice(active.indexOf(id),1);
                setActive([...active]);
            }else{
                setActive([...active,id]);
            }
        }
        return(
            <View style={styles.feature}>
            <View style={[styles.layout,{justifyContent:'space-between'}]}>
                <View 
                style={styles.star}
                >
                <FontAwesome
                        name="list"
                        size={20}
                        color="black"
                        />
                    <Text style={styles.text}>{title}</Text>
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
                data={allFeatures}
                renderItem={RenderItem}
                keyExtractor={(item,index) => `feature${index}`}
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


