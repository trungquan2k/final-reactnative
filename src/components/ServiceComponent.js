import React from 'react'
import { FlatList, Image, StyleSheet, Text, View } from 'react-native'

const ServiceComponent=()=> {
    const data = [
        {
            id: 1,
            imgUri: "https://i.ibb.co/3kX4vCy/icon.png",
            title: "Long Day Care",
            subtile: "0 to 12 months",
            money: "$112.00 /full day"
        },
        {
            id: 2,
            imgUri: "https://i.ibb.co/k85FjrG/icon1.png",
            title: "Pre-School/ Kindergarten",
            subtile: "0 to 12 months",
            money: "$112.00 /full day"
        },
        {
            id: 3,
            imgUri: "https://i.ibb.co/nmZX5zP/icon2.png",
            title: "Before & After School Care",
            subtile: "0 to 12 months",
            money: "$112.00 /full day"
        },
        {
            id: 4,
            imgUri: "https://i.ibb.co/ssp4GPP/icon3.png",
            title: "Family Day Care",
            subtile: "0 to 12 months",
            money: "$112.00 /full day"
        },
        {
            id: 5,
            imgUri: "https://i.ibb.co/RHvbgJR/icon4.png",
            title: "Vacation Care",
            subtile: "0 to 12 months",
            money: "$112.00 /full day"
        }
    ]

    const renderItem = ({ item }) => (
        <View style={styles.service}>
        <View style={styles.body}>
            <Image
                source={{ uri: item.imgUri }}
                style={styles.icon}
            />
            <View style={styles.content}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.subtitle}>{item.subtile}</Text>
                <Text style={styles.money}>{item.money}</Text>
            </View>
        </View>

    </View>
    );
    return (
        <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.id}
        />
    )
}

export default ServiceComponent;

const styles = StyleSheet.create({
    service: {
        flex: 1,
        padding: 10,
    },
    body: {
        flexDirection: 'row',
        padding: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0,
        elevation: 1,
        backgroundColor: "white",
        borderRadius: 10
    },
    content: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
    },
    title: {
        color: 'black',
        paddingVertical: 4,
        fontWeight: 'bold',
        fontSize: 14,
    },
    subtitle: {
        color: 'black',
        paddingVertical: 4,
    },
    money: {
        color: 'black',
        paddingVertical: 4,
    },
    icon:{
        height: 48,
        width: 48,
    }

})
