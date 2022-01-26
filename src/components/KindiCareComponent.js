import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
const KindiCareComponent = ({ average_rate, rate, description }) => {
 
    const [average, setAverage] = useState('40%');
    const [service, setService] = useState('20%');

    return (
        <View style={styles.wrapper}>
            <View style={styles.content}>
                <View style={styles.values}>
                    <Text style={styles.text}>{rate}</Text>
                </View>
                <View >
                    <Text>Very Good</Text>
                </View>
            </View>
            <View>
                <Text style={[{
                    position:'relative',
                    left:average,
                    top:5
                },styles.value]}>
                    8.4
                </Text>
                <View style={styles.slideValue}>
                    <View style={{
                        height: '100%',
                        width: average,
                        backgroundColor: '#DB147F',
                        borderTopStartRadius: 6,
                        borderBottomStartRadius: 6,
                    }} />
                    <View style={{
                        height: '100%',
                        width: service,
                        backgroundColor: '#32A4FC',
                    }} />
                </View>
                <View style={styles.valueNumber}>
                    <Text style={styles.value}>
                        7.9
                    </Text>
                    <Text style={[{
                        marginLeft:average,
                        position:'absolute',
                        left:service
                    }, styles.value]}>
                       {average_rate}
                    </Text>
                    <Text style={[{
                        textAlign: 'right'
                    }, styles.value]}>
                        9.3
                    </Text>
                </View>
            </View>
            <View style={styles.notes}>
                <View style={styles.average}>
                    <View style={styles.boxAverage} />
                    <Text>Average</Text>
                </View>
                <View style={styles.service}>
                    <View style={styles.boxService} />
                    <Text>This Service</Text>
                </View>
            </View>
            <View>
                <Text style={styles.textContent}>
                    {description}
                </Text>
            </View>
        </View>
    );
}
export default KindiCareComponent;

const styles = StyleSheet.create({
    wrapper: {
        padding: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0,
        elevation: 1,
        backgroundColor: 'white',
    },
    content: {
        flexDirection: 'column',
        justifyContent: "center",
        alignItems: "center",
    },
    values: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#DB147F',
        width: 60,
        height: 60,
        borderRadius: 8,
        marginVertical:5
    },
    // style slide
    slideValue:{
        height: 10,
        width: '100%',
        flexDirection: 'row',
        backgroundColor: '#F2F2F2',
        marginTop: 10,
    },
    valueNumber:{
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between'
    },
    value:{
        fontSize:12,
        fontWeight:'400',
        color:'#857E7F'
    },
    ///
    text: {
        color: 'white',
        fontSize:20,
        fontWeight:'700'
    },
    notes: {
        flexDirection: 'row',
        marginTop: 20,
    },
    boxAverage: {
        height: 14,
        width: 14,
        backgroundColor: "#32A4FC",
        borderRadius: 4
    },
    boxService: {
        height: 14,
        width: 14,
        backgroundColor: "#DB147F",
        borderRadius: 4
    },
    average: {
        flexDirection: "row",
        alignItems: 'center',
        marginRight: 40
    },
    service: {
        flexDirection: "row",
        alignItems: 'center'
    },
    textContent: {
        marginTop: 5,
    }

});