import React, { useState } from 'react'
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native'
import SwitchToggle from "react-native-switch-toggle";
import { Ionicons } from '@expo/vector-icons';
import { BottomSheet } from 'react-native-btr';

const MarketingComponent = () => {
    const [visible, setVisible] = useState(false);
    const toggleBottomNavigationView = () => {
        setVisible(!visible);
    };
    const [active, setActive] = useState([1, 2])

    const data = [
        {
            id: 1,
            name: 'Featured Listing',
            icon: 'information-circle',
            price: "$" + 50 + "/per month"
        },
        {
            id: 2,
            name: 'Featured Listing',
            icon: 'information-circle',
            price: "$" + 50 + "/per month"
        },
        {
            id: 3,
            name: 'Featured Listing',
            icon: 'information-circle',
            price: "$" + 50 + "/per month"
        }
    ]

    const RenderItem = ({ item }) => {
        const check = active.includes(item.id);
        const toggleSwitch = () => {
            if (check) {
                active.splice(active.indexOf(item.id), 1);
                setActive([...active]);
            } else {
                setActive([...active, item.id]);
            }
        }
        return (
            <View style={styles.marketing}>
                <View style={styles.layout}>
                    <View style={styles.content}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text>{item.name}</Text>
                            <TouchableOpacity
                                onPress={() => toggleBottomNavigationView()}
                            >
                                <Ionicons name={item.icon} size={14} color="#857E7F" />
                            </TouchableOpacity>

                        </View>
                        <Text>{item.price}</Text>
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
                data={data}
                renderItem={RenderItem}
                keyExtractor={(item) => item.id}
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