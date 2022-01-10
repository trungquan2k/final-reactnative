import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from '../css/StyleMarketing'
import SwitchToggle from "react-native-switch-toggle";
import { Ionicons } from '@expo/vector-icons';
import { BottomSheet } from 'react-native-btr';

const MarketingComponent = () => {
    const [isEnabled, setIsEnabled] = useState(false);

    // switch toggle
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    // modal show bottom
    const [visible, setVisible] = useState(false);
    const toggleBottomNavigationView = () => {
        setVisible(!visible);
    };

    return (
        <View>
            <View style={styles.marketing}>
                <View style={styles.layout}>
                    <View style={styles.content}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text>Featured Listing</Text>
                            <TouchableOpacity
                                onPress={()=>toggleBottomNavigationView()}
                            >
                                <Ionicons name="information-circle" size={14} color="#857E7F" />
                            </TouchableOpacity>

                        </View>
                        <Text>$50/ permonth</Text>
                    </View>
                    <View style={styles.switchButton}>
                        <SwitchToggle
                            switchOn={isEnabled}
                            onPress={toggleSwitch}
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
