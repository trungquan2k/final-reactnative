import React, { useState, useContext } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native'
import CenterContext from '../context/CenterContext';


const HoursComponents = ({ centerId }) => {
    const [activeButton, setActiveButton] = useState('Monday')
    const centers = useContext(CenterContext);
    const { hours } = centers.find(v => v.id === centerId);

    const Hour = ({ title, item }) => {

        const { Mon_Fri, Sat, Sun } = item;

        return (
            <View style={styles.container}>
                <View style={styles.content}>
                    <View>
                        <Text style={styles.title}>{title}</Text>
                    </View>
                    <View style={styles.header}>
                        <TouchableOpacity onPress={()=>{}} style={styles.btnSelected}>
                            <Text style={styles.textLight}>Mon-Fri</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { }} style={styles.btnSelected}>
                            <Text style={styles.textLight}>Sat</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { }} style={styles.btnSelected}>
                            <Text style={styles.textLight}>Sun</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.body}>
                        <View style={styles.bodyLeft}>
                            <Text style={styles.textDark}>Morning</Text>
                            <View style={{ flexDirection: "row" }}>
                                <Text style={styles.hours}>{Mon_Fri.morning.start}</Text>
                                <Text style={styles.hours}>{Mon_Fri.morning.end}</Text>
                            </View>
                        </View>
                        <View >
                            <Text style={styles.textDark}>Afternoon</Text>
                            <View style={{ flexDirection: "row" }}>
                                <Text style={styles.hours}>{Mon_Fri.afternoon.start}</Text>
                                <Text style={styles.hours}>{Mon_Fri.afternoon.end}</Text>
                            </View>
                        </View>

                    </View>
                </View>
            </View>
        );
    }

    return (
        <>
            <Hour title="Normal" item={hours.normal} />
            <Hour title="School Holidays" item={hours.holidays} />
            <Hour title="School Term" item={hours.term} />
        </>
    )
}

export default HoursComponents;
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
    title: {
        fontWeight: 'bold', fontSize: 16, color: "#2D1F21", paddingVertical: 10
    },
    btnSelected: {
        width: 86,
        height: 32,
        backgroundColor: "#DB147F",
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: "#DB147F",
        borderWidth: 1,
    },
    btnNotSelected: {
        width: 86,
        height: 32,
        backgroundColor: "white",
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: "#DB147F",
        borderWidth: 1,
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
