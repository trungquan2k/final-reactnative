import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import MultiSlider from "@ptomasroos/react-native-multi-slider";
import SliderCustomLabel from "./CustomSlider";

const VALUES = { min: 0, max: 10 }
const SliderPad = 12;

const textTransformerTimes = (value) => {
    return value === 0
        ? "10"
        : (value < 11 ? value : value - 10);
};

const DoubleSlider = () => {
    const { min, max } = VALUES;
    const [width, setWidth] = useState(100);
    const [selected, setSelected] = useState(null);

    if (!selected) {
        setSelected([min, max]);
    }

    // Callbacks
    const onLayout = (event) => {
        setWidth(event.nativeEvent.layout.width - SliderPad * 2);
    };
    const onValuesChangeFinish = (values) => {

        setSelected(values);
        console.log(values);
    };

    return (
        <View onLayout={onLayout} style={styles.wrapper}>
            <View style={styles.content}>
                <View style={styles.values}>
                    <Text style={styles.text}>{selected ? selected[0] : "0"}</Text>
                </View>
                <View >
                    <Text>Very Good</Text>
                </View>
            </View>
            <MultiSlider
                min={min}
                max={max}
                allowOverlap={false}
                values={selected}
                sliderLength={width}
                onValuesChangeFinish={onValuesChangeFinish}
                customLabel={SliderCustomLabel(textTransformerTimes)}
                enableLabel={true}
                trackStyle={{
                    height: 10,
                    borderRadius: 8,
                }}
                markerOffsetY={5}
                selectedStyle={{
                    backgroundColor: "#DB147F",
                }}
                unselectedStyle={{
                    backgroundColor: "#32A4FC",
                }}
            />
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
                The KindiCare Rating for this service of <Text style={{color:'#32A4FC'}}>{selected}</Text>  is lower than the average 
                KindiCare Rating for the area of <Text style={{color:'#32A4FC'}}>{selected}</Text>, and represents the good quality of service provided
                </Text>
            </View>
        </View>
    );
}
export default DoubleSlider;

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        // padding: 20,
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
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0,
        elevation: 1,
    },
    text: {
        color: 'white'
    },
    notes: {
        flexDirection: 'row',
        marginTop: 20,
    },
    boxAverage: {
        height: 14,
        width: 14,
        backgroundColor: "#32A4FC",
        borderRadius:4
    },
    boxService: {
        height: 14,
        width: 14,
        backgroundColor: "#DB147F",
        borderRadius:4
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
    textContent:{
       marginTop:5,
    }

});
