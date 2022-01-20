import React from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity, ScrollView, StatusBar } from "react-native";
import { FontAwesome, Ionicons,AntDesign,Entypo } from "@expo/vector-icons";
import CardContentDashBoard from "../components/CardContentDashBoard";
import { Pressable } from "react-native";


const Dashboard = ({ navigation }) => {
    return (
        <ScrollView style={styles.container}>
            <StatusBar style='light' />
            <View style={styles.header}>
            <Image source={require('../../assets/Vector.png')} width={100} style={styles.icon} />
                <Pressable style={styles.headerSelect} onPress={() => {}}>
                    <Entypo name="shop" size={20} color='white' />
                    <Text style={styles.headerTitle}>Goodstart Early Learning ABC</Text>
                    <AntDesign name="down" size={20} color="white" />
                </Pressable>
                <TouchableOpacity>
                    <AntDesign name="pluscircleo" size={20} color="white" />
                </TouchableOpacity>
            </View>
            <View>
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
            </View>

        </ScrollView>
    );
}
export default Dashboard;

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    header: {
        height: 136,
        backgroundColor: '#DB147F',
        borderBottomColor: '#DB147F',
        borderBottomRightRadius: 16,
        borderBottomLeftRadius: 16,
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
    icon: {
        position: 'absolute',
        left: 0
    }
});