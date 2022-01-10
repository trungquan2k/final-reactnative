import React, { useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, Switch, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { auth } from "../auth/firebase";
export default function More({ navigation }) {
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
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>More</Text>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={[styles.body, { height: 185 }]}>
                    <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                        <View style={styles.row}>
                            <Text>My profile</Text>
                            <Ionicons name="arrow-forward" size={24} color="#2D1F21" />
                        </View>
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
                            trackColor={{ false: "#767577", true: "#81b0ff" }}
                            thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                            style={{ height: 20 }}
                        />
                    </View>
                </View>
                <View style={[styles.body, { height: 458 }]}>
                    <View style={styles.row}>
                        <Text>About us</Text>
                        <Ionicons name="arrow-forward" size={24} color="#2D1F21" />
                    </View>
                    <View style={styles.row}>
                        <Text>About Kindicare application</Text>
                        <Ionicons name="arrow-forward" size={24} color="#2D1F21" />
                    </View>
                    <View style={styles.row}>
                        <Text>The Kindicare Rating Explained</Text>
                        <Ionicons name="arrow-forward" size={24} color="#2D1F21" />
                    </View>
                    <View style={styles.row}>
                        <Text>About the National Quality Standard (NQS)</Text>
                        <Ionicons name="arrow-forward" size={24} color="#2D1F21" />
                    </View>
                    <View style={styles.row}>
                        <Text>The Value for Money Rating Explained</Text>
                        <Ionicons name="arrow-forward" size={24} color="#2D1F21" />
                    </View>
                    <View style={styles.row}>
                        <Text>About the Government Childcare Subsidy</Text>
                        <Ionicons name="arrow-forward" size={24} color="#2D1F21" />
                    </View>
                    <View style={styles.row}>
                        <Text>FAQ</Text>
                        <Ionicons name="arrow-forward" size={24} color="#2D1F21" />
                    </View>
                    <View style={styles.row}>
                        <Text>Term & Conditions</Text>
                        <Ionicons name="arrow-forward" size={24} color="#2D1F21" />
                    </View>
                    <View style={styles.row}>
                        <Text>Privacy Policy</Text>
                        <Ionicons name="arrow-forward" size={24} color="#2D1F21" />
                    </View>
                    <View style={styles.row}>
                        <Text>Feedback & Support</Text>
                        <Ionicons name="arrow-forward" size={24} color="#2D1F21" />
                    </View>
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

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        fontSize: 16,
        lineHeight: 20,
        fontWeight: '700',
        textAlign: 'center',
        paddingTop: 24,
        paddingBottom: 10,
        borderBottomColor: '#D0C9D6',
        borderBottomWidth: 1,
    },
    body: {
        marginTop: 10,
        paddingVertical: 16,
        justifyContent: 'space-between'
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
    }
})