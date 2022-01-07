import React, { useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, Switch, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Ionicons, AntDesign, Entypo } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import Dialog, { SlideAnimation, DialogContent } from 'react-native-popup-dialog';

export default function Centres() {
    const [visible, setVisible] = useState(false);
    return (
        <View style={styles.container}>
            <StatusBar style='light' />
            <View style={styles.header}>
                <TouchableOpacity style={styles.headerSelect} onPress={() => setVisible(true)}>
                    <Entypo name="shop" size={20} color='white' />
                    <Text style={styles.headerTitle}>All Centres</Text>
                    <AntDesign name="down" size={20} color="white" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <AntDesign name="pluscircleo" size={20} color="white" />
                </TouchableOpacity>
            </View>
            <Dialog
                visible={visible}
                dialogAnimation={new SlideAnimation({
                    initialValue: 0, // optional
                    slideFrom: 'bottom', // optional
                    useNativeDriver: true, // optional
                })}
            >
                <DialogContent style={styles.dialogContent}>
                    <Text>aa</Text>
                </DialogContent>
            </Dialog>
            <View style={styles.body}>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        height: 136,
        backgroundColor: '#DB147F',
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 52,
        paddingHorizontal: 20
    },
    headerSelect: {
        flexDirection: 'row',
    },
    headerTitle: {
        color: 'white',
        fontSize: 14,
        paddingHorizontal: 10
    },
    dialogContent: {
        width: '100%',
    },
    body: {

    }
})
