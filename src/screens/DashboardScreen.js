import React from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity, ScrollView, FlatList } from "react-native";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import CardContentDashBoard from "../components/CardContentDashBoard";
import { Pressable } from "react-native";


const Dashboard = () => {
    const data = [
        {
            id: 1,
            imgUri: "https://i.ibb.co/NCS4kTW/icon1.png",
            color: "#FB8429",
            headerLeft: "Aplication",
            contentLeft1: "Open Application Value",
            contentLeft2: "Total Waitlisted",
            contentLeft3: "Waitlist Value",
            headerRight: "17",
            contentRight1: "116,688,8",
            contentRight2: "3",
            contentRight3: "$29,749 p.a"
        },
        {
            id: 2,
            imgUri: "https://i.ibb.co/QQX3G6X/icon2.png",
            color: "#32A4FC",
            headerLeft: "Total Activities",
            contentLeft1: "Mailbox Received",
            contentLeft2: "Mailbox Awaiting Reply",
            contentLeft3: "Task Overdue",
            headerRight: "17",
            contentRight1: "342",
            contentRight2: "6",
            contentRight3: "2",
        },
        {
            id: 3,
            imgUri: "https://i.ibb.co/Fxx3Cwq/icon3.png",
            color: "#DB147F",
            headerLeft: "Total Centres",
            contentLeft1: "Total Places",
            contentLeft2: "Enrolment Coverage",
            contentLeft3: "Average Enquiry ",
            headerRight: "32",
            contentRight1: "160%",
            contentRight2: "72%",
            contentRight3: "24 hrs 36 mins",
        }
    ];

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
                {
                    data.map(item => {
                        return (
                            <View style={styles.viewCard}>
                                <View style={styles.card} >
                                    <View style={styles.leftCart} >
                                        <View style={{
                                            flexDirection: 'row',
                                            alignItems: 'center'
                                        }}>
                                            <Image
                                                source={{ uri: item.imgUri }}
                                                style={styles.image}
                                            />
                                            <Text style={{
                                                marginLeft: 16,
                                                fontSize: 16,
                                                fontWeight: 'bold'
                                            }}>{item.headerLeft}</Text>
                                        </View>
                                        <Text style={styles.textContent}>{item.contentLeft1}</Text>
                                        <Text style={styles.textContent}>{item.contentLeft2}</Text>
                                        <Text style={styles.textContent}>{item.contentLeft3}</Text>
                                    </View>
                                    <View style={styles.rightCard}>
                                        <Text style={{
                                            color: item.color,
                                            fontSize: 16,
                                            fontWeight: 'bold'
                                        }}
                                        >{item.headerRight}</Text>
                                        <Text style={styles.textContent}>{item.contentRight1}</Text>
                                        <Text style={styles.textContent}>{item.contentRight2}</Text>
                                        <Text style={styles.textContent}>{item.contentRight3}</Text>
                                    </View>
                                </View>
                            </View>
                        )
                    })
                }
            </View>
            {/* <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            /> */}
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
        borderBottomColor: '#DB147F',
        borderBottomRightRadius: 16,
        borderBottomLeftRadius: 16,
        alignItems: 'center',
        flexDirection: 'row',
        elevation: 0,
        padding: 20,
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
    },
    // style view content
    viewCard: {
        height: 200,
        margin: 20,
    },
    card: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0,
        shadowRadius: 4.65,
        elevation: 1,
        flexDirection: "row",
        backgroundColor: "white",
        flexWrap: "wrap",
        borderColor: "black",
        borderBottomColor: '#DB147F',
        borderRadius: 16,
        //position
        position: 'absolute',
        // top:-40,
        bottom: 25,
        padding: 16,
        alignItems: 'center',
    },
    leftCart: {
        flex: 1,
        alignItems: "flex-start",
    },
    rightCard: {
        alignItems: "flex-end",
    },
    textContent: {
        color: "black",
        fontSize: 16,
        lineHeight: 24,
        paddingVertical: 15,
        justifyContent: 'space-between'
    },
    image: {
        height: 30,
        width: 30,
    }
});