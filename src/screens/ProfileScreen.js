import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, ScrollView, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { auth } from '../auth/firebase';
const Profile=()=> {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>More</Text>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.row}>
                    <View style={styles.info}>
                        <Image style={styles.img} source={require('../../assets/images/avatar.jpg')} />
                        <View>
                            <Text style={styles.name}>{auth.currentUser?.email}</Text>
                            <Text>Provider User (Admin)</Text>
                        </View>
                    </View>
                    <AntDesign name="right" size={20} color="black" />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
export default Profile;

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
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16
    },
    info: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    img: {
        width: 48,
        height: 48,
        borderRadius: 24,
        marginRight: 16
    },
    name: {
        fontWeight: 'bold',
        color: '#171725',
        marginBottom: 4
    }
})