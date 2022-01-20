import React, { useState ,useEffect} from "react";
import { StyleSheet, Text, View } from "react-native";
import MultiSlider from "@ptomasroos/react-native-multi-slider";
import SliderCustomLabel from "./CustomSlider";


const VALUES = { min: 0, max: 10 }

const textTransformerTimes = (value) => {
    return value === 0
        ? "10"
        : (value < 11 ? value : value - 10);
};
const DoubleSlider = ({average_rate,rate,description}) => {
    const { min, max } = VALUES; 
    const [selected, setSelected] = useState(null);
    if (!selected) {
        setSelected([min, max]);
    }
    // Callbacks
    const onValuesChangeFinish = (values) => {
        setSelected(values);
    };
   

    return (
        <View style={styles.wrapper}>
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
                sliderLength={310}
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
                {description}
                </Text>
            </View>
        </View>
    );
}
export default DoubleSlider;

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