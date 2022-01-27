import React, { useContext, useEffect, useState } from 'react'
import { View, Text, StyleSheet,FlatList, Image } from 'react-native'
import SwitchToggle from "react-native-switch-toggle";
import { FontAwesome } from '@expo/vector-icons';
import CenterContext from '../context/CenterContext';
import {getDetail, loadAllCenter, updateFeature } from '../../services';


const FeatureComponent = ({centerId}) => {
    const [featuresActive, setActive] = useState([])
    const {centers:[centers,setCenters],features:[features]} = useContext(CenterContext);
    useEffect(async ()=>{
        setActive([...getDetail(centers,centerId,"features")]); 
    },[]);
    useEffect(()=>{

    },[centers])
    const RenderItem=({item})=>{
        const {icon,title,id} = item;
        const check = featuresActive.find(v=>v===id);
        const toggleSwitch = async () =>{
            if(check){
                featuresActive.splice(featuresActive.indexOf(id),1);
                setActive([...featuresActive]);
            }else{
                setActive([...featuresActive,id]);
            }
            updateFeature(centerId,featuresActive)
            setCenters(await loadAllCenter())
        }
        return(
            <View style={styles.feature}>
                <View style={[styles.layout,{justifyContent:'space-between'}]}>
                    <View style={styles.star}>
                        <Image source={{uri:icon}} style={styles.icon} />
                        <Text style={styles.text}>{title}</Text>
                    </View>     
                    <View style={styles.switchButton}>
                        <SwitchToggle
                            switchOn={check}
                            onPress={()=>toggleSwitch()}
                            containerStyle={styles.containerStyle}
                            circleStyle={styles.circleStyle}
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
        <View style={styles.container}>
            {features&&<FlatList
                data={features}
                renderItem={RenderItem}
                keyExtractor={(item,index) => `feature${index}`}
                style={styles.flatList}
                showsVerticalScrollIndicator={false}
            />}
        </View>
    )
}

export default FeatureComponent;

export const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingBottom:20
    },  
    feature: {
       paddingHorizontal:20,
       paddingBottom:6
    },
    layout:{
        padding:16,
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
    icon:{
        width:24,
        height:24
    },
    star:{
        flexDirection:'row'
    },
    text:{
        fontSize:14,
        marginHorizontal:16,
        alignSelf:'center'
    },
    switchButton: {
        justifyContent:'space-between',
    },
    containerStyle:{
        width: 36,
        height: 22,
        borderRadius: 25,
        padding: 3,                            
    },
    circleStyle:{
        width: 18,
        height: 18,
        borderRadius: 9,
    }
})


