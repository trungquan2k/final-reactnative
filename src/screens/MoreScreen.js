import React, { useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, Switch, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { auth } from "../auth/firebase";

const More=({ navigation })=> {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    
    const handleSignOut = () => {
        auth
          .signOut()
          .then(() => {
            navigation.navigate("Auth")
          })
          .catch(error => alert(error.message))
      }

    const RowItem=({text})=>(
        <View style={styles.row}>
            <Text>{text}</Text>
            <Ionicons name="arrow-forward" size={24} color="#2D1F21" />
        </View>
    )

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>More</Text>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={[styles.body, { height: 185, marginTop:1 }]}>
                    <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                        <RowItem text="My profile"/>
                    </TouchableOpacity>
                    <View style={styles.row}>
                        <Text>Language</Text>
                        <Text style={{ fontWeight: '700' }}>English</Text>
                    </View>
                    <View style={styles.row}>
                        <Text>Price display</Text>
                        <Text style={{ fontWeight: '700' }}>AUD</Text>
                    </View>
                    <View style={styles.row}>
                        <Text>Notifications</Text>
                        <Switch
                            trackColor={{ false: "#F7F8F9", true: "#DB147F" }}
                            thumbColor="white"
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                            style={{ height: 20 }}
                        />
                    </View>
                </View>
                <View style={[styles.body, { height: 458 }]}>
                    <RowItem text="About us"/>
                    <RowItem text="About Kindicare application"/>
                    <RowItem text="The Kindicare Rating Explained"/>
                    <RowItem text="About the National Quality Standard (NQS)"/>
                    <RowItem text="The Value for Money Rating Explained"/>
                    <RowItem text="About the Government Childcare Subsidy"/>
                    <RowItem text="FAQ"/>
                    <RowItem text="Term & Conditions"/>
                    <RowItem text="Privacy Policy"/>
                    <RowItem text="Feedback & Support"/>
                </View>
                <View style={[styles.body, { paddingVertical: 11 }]}>
                    <TouchableOpacity style={styles.row} onPress={()=>{handleSignOut()}}>
                        <Text >Log out</Text>
                        <MaterialCommunityIcons name="logout" size={24} color="#200E32" />
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
export default More;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#E5E5E5'
    },
    header: {
        fontSize: 16,
        lineHeight: 20,
        fontWeight: '700',
        textAlign: 'center',
        paddingTop: 56,
        paddingBottom: 10,
        backgroundColor:'white'
    },
    body: {
        marginTop: 10,
        paddingVertical: 16,
        justifyContent: 'space-between',
        backgroundColor:'white'
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
    }
})