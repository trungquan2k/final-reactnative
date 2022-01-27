import React, {useState,useEffect} from 'react';
import { View, Text, SafeAreaView, StyleSheet, ScrollView, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { auth } from '../auth/firebase';
import { getUser } from '../../services';
const Profile=()=> {
    const [user,setUser]=useState();
    useEffect( async()=>{
        const doc= await getUser(auth.currentUser.uid);
        setUser({...doc});
    },[]);

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>More</Text>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.row}>
                    <View style={styles.info}>
                        <Image style={styles.img} source={{uri:user?.avatar}} />
                        <View>
                            <Text style={styles.name}>{user?.name}</Text>
                            <Text>{user?.role}</Text>
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
        borderBottomColor: '#D0C9D6',
        borderBottomWidth: 1,
        backgroundColor:'white'
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
        backgroundColor:'white'
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