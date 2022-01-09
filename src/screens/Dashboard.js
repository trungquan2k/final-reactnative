import React from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';
import CardContentDashBoard from "../components/CardContentDashBoard";


export default function Dashboard() {
    const navigation = useNavigation();
    return (
        <ScrollView style={styles.container}>
            <View style={styles.roundCorner} >
                <Image source={require('../../assets/Vector.png')} width={100} style={styles.logo} />
                <View style={{ flex: 1 }}>
                    <Image source={require('../../assets/ic-centre.png')} width='100%' />
                </View>
                <Text style={{ fontSize: 14, lineHeight: 24, color: 'white' , marginRight:10 }}>Goodstart Early Learning ABC</Text>
                <View style={{ flex: 1, marginLeft: 5 }}>
                    <FontAwesome name={'chevron-down'} size={14} color="white" />
                </View>
                <Ionicons name="notifications-outline" size={20} color="white" />
            </View>
            <CardContentDashBoard 
                imgUri="https://i.ibb.co/NCS4kTW/icon1.png"
                color="#FB8429"
                headerLeft="Aplication"
                contentLeft1="Open Application Value"
                contentLeft2="Total Waitlisted"
                contentLeft3="Waitlist Value"
                headerRight="17"
                contentRight1="116,688,8"
                contentRight2="3"
                contentRight3="$29,749 p.a"
            />
            <CardContentDashBoard 
                imgUri="https://i.ibb.co/QQX3G6X/icon2.png"
                color="#32A4FC"
                headerLeft="Total Activities"
                contentLeft1="Mailbox Received"
                contentLeft2="Mailbox Awaiting Reply"
                contentLeft3="Task Overdue"
                headerRight="17"
                contentRight1="342"
                contentRight2="6"
                contentRight3="2"
            />
            <CardContentDashBoard 
                imgUri="https://i.ibb.co/Fxx3Cwq/icon3.png"
                color="#DB147F"
                headerLeft="Total Centres"
                contentLeft1="Total Places"
                contentLeft2="Enrolment Coverage"
                contentLeft3="Average Enquiry "
                headerRight="32"
                contentRight1="160%"
                contentRight2="72%"
                contentRight3="24 hrs 36 mins"
            />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },
    roundCorner: {
        backgroundColor: '#DB147F',
        width: "100%",
        height: 136,
        // borderBottomWidth: 70,
        borderBottomColor: '#DB147F',
        borderBottomRightRadius: 16,
        borderBottomLeftRadius: 16,
        // justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        elevation: 0,
        padding: 20
    },
    logo: {
        position: 'absolute',
        left: 0
    }
});
