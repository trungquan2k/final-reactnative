import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'


export default function HoursComponents(props) {
    const [activeButton, setActiveButton] = useState('')

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.title}>
                    <Text style={{ fontWeight: 'bold', fontSize: 16, color: "#2D1F21", paddingVertical: 10 }}>{props.title}</Text>
                </View>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => { }} style={styles.button}>
                        <Text style={styles.textLight}>{props.monday}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { }} style={styles.button}>
                        <Text style={styles.textLight}>{props.sat}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { }} style={styles.button}>
                        <Text style={styles.textLight}>{props.sun}</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.body}>
                    <View style={styles.bodyLeft}>
                        <Text style={styles.textDark}>{props.morning}</Text>
                        <View style={{ flexDirection: "row" }}>
                            <Text style={styles.hours}>{props.hourMorning}</Text>
                            <Text style={styles.hours}>{props.hourAfternoon}</Text>
                        </View>
                    </View>
                    <View >
                        <Text style={styles.textDark}>{props.afternoon}</Text>
                        <View style={{ flexDirection: "row" }}>
                            <Text style={styles.hours}>{props.hoursMorning}</Text>
                            <Text style={styles.hours}>{props.hoursAfternoon}</Text>
                        </View>
                    </View>

                </View>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    content: {
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
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 16
    },
    button: {
        width: 86,
        height: 32,
        backgroundColor: "#DB147F",
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textLight: {
        color: 'white'
    },
    textDark: {
        color: 'black'
    },
    body: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 25,
        paddingVertical: 10

    },
    hours: {
        backgroundColor: '#E9F4FF',
        marginTop: 10,
        height: 36,
        width: 58,
        marginRight: 10,
        borderRadius: 8,
        textAlign: 'center',
        justifyContent: 'space-between',
        paddingVertical: 10,

    }
})
// const data = [
//         {
//             id:1,
//             title: "Normal",
//             monday: "Mon-Fri",
//             sat: "Sat",
//             sun: "Sun",
//             morning: "Morning",
//             hourMorning: "8:00",
//             hourAfternoon: "12:00",
//             afternoon: "Afternoon",
//             hoursMorning: "8:00",
//             hoursAfternoon: "12:00"
//         },
//         {
//             id:2,
//             title: "School Term",
//             monday: "Mon-Fri",
//             sat: "Sat",
//             sun: "Sun",
//             morning: "Morning",
//             hourMorning: "8:00",
//             hourAfternoon: "12:00",
//             afternoon: "Afternoon",
//             hoursMorning: "8:00",
//             hoursAfternoon: "12:00"
//         },
//         {
//             id:3,
//             title: "School Holidays",
//             monday: "Mon-Fri",
//             sat: "Sat",
//             sun: "Sun",
//             morning: "Morning",
//             hourMorning: "8:00",
//             hourAfternoon: "12:00",
//             afternoon: "Afternoon",
//             hoursMorning: "8:00",
//             hoursAfternoon: "12:00"
//         }
//     ]
// const renderItem = ({ item }) => (
//     <HoursComponents
//         title={item.title}
//         monday={item.monday}
//         sat={item.sat}
//         sun={item.sun}
//         morning={item.morning}
//         hourMorning={item.hourMorning}
//         hourAfternoon={item.hourAfternoon}
//         afternoon={item.afternoon}
//         hoursMorning={item.hoursMorning}
//         hoursAfternoon={item.hourMorning}

//     />
// );
{/* <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            /> */}