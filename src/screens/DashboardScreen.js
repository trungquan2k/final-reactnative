import React from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity, ScrollView, Pressable, StatusBar } from "react-native";
import { Entypo,AntDesign } from "@expo/vector-icons";
import Data from "../mockData/Data.js";

const Dashboard = () => {
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
                <TouchableOpacity >
                    <AntDesign name="pluscircleo" size={20} color="white"  />
                </TouchableOpacity>
            </View>
            <View>
                {
                    Data.map((item, index) => {
                        return (
                            <View style={styles.viewCard} key={index.id}>
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
        borderBottomRightRadius: 16,
        borderBottomLeftRadius: 16,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
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
        top:-50,
        //bottom: 25,
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
