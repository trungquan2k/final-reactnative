import React, { useContext, useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native'
import SwitchToggle from "react-native-switch-toggle";
import { Ionicons } from '@expo/vector-icons';
import { BottomSheet } from 'react-native-btr';
import CenterContext from '../context/CenterContext';
import { getMarketings,getDetail } from '../../services';
 
const MarketingComponent = ({centerId}) => {
    const [allMarketings, setMarketings] =useState([]);
    const [active, setActive] = useState([])
    const [visible, setVisible] = useState(false);
    const toggleBottomNavigationView = () => {
        setVisible(!visible);
    };
    const centers = useContext(CenterContext);
    useEffect(async ()=>{
        const marketings= await getMarketings();
        setMarketings([...marketings]);
        setActive([...getDetail(centers,centerId,"marketing")]); 

    },[]);

    const RenderItem = ({ item }) => {
        const {price,id,name,description,icon} = item;
        const check = active.includes(id);
        const toggleSwitch = () => {
            if (check) {
                active.splice(active.indexOf(id), 1);
                setActive([...active]);
            } else {
                setActive([...active, id]);
            }
        }
        return (
            <View style={styles.marketing}>
                <View style={styles.layout}>
                    <View style={styles.content}>
                        <View style={{
                            flexDirection: 'row'
                        }}>
                            <Text>{name}</Text>
                            <TouchableOpacity
                                onPress={() => toggleBottomNavigationView()}
                            >
                                <Ionicons name={icon} size={14} color="#857E7F" />
                            </TouchableOpacity>

                        </View>
                        <Text>{` $ ${price}/per month`}</Text>
                    </View>
                    <View style={styles.switchButton}>
                        <SwitchToggle
                            switchOn={check}
                            onPress={() => toggleSwitch()}
                            containerStyle={{
                                width: 36,
                                height: 22,
                                borderRadius: 25,
                                padding: 3,
                                marginHorizontal: 160

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
        )
    }
    return (
        <View>
            <FlatList
                data={allMarketings}
                renderItem={RenderItem}
                keyExtractor={(item,index) => `marketings${index}`}
                style={styles.flatList}
            />
            {/* Modal */}
            <View>
                <BottomSheet
                    visible={visible}
                    onBackButtonPress={toggleBottomNavigationView}
                    onBackdropPress={toggleBottomNavigationView}
                >
                    <View style={styles.bottomNavigationView}>
                        <View
                            style={{
                                flex: 1,
                                flexDirection: 'column',
                            }}>
                            <Text
                                style={{
                                    textAlign: 'center',
                                    padding: 20,
                                    fontSize: 20,
                                }}>
                                Featured Listing
                            </Text>
                            <View>
                                <Text>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Commodo erat tempor scelerisque sit adipiscing velit.
                                    Commodo erat tempor scelerisque sit adipiscing velit.
                                </Text>
                            </View>

                        </View>
                    </View>
                </BottomSheet>
            </View>
        </View>


    )
}

export default MarketingComponent;


const styles = StyleSheet.create({
    marketing: {
        paddingTop: 20,
        paddingLeft: 20,
        paddingRight: 20,

    },
    layout: {
        padding: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0,
        elevation: 1,
        backgroundColor: 'white',
        flexDirection: 'row',
        borderRadius: 8
    },
    content: {
        flexDirection: 'column'
    },
    switchButton: {
        justifyContent: 'center',
    },

    bottomNavigationView: {
        backgroundColor: '#fff',
        width: '100%',
        height: 250,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
});