import React, { useState ,useEffect} from "react";
import { StyleSheet, Text, View } from "react-native";
import MultiSlider from "@ptomasroos/react-native-multi-slider";
import SliderCustomLabel from "./CustomSlider";
import styles from "../css/DoubleSliderStyle";

const VALUES = { min: 0, max: 10 }

const textTransformerTimes = (value) => {
    return value === 0
        ? "10"
        : (value < 11 ? value : value - 10);
};
const DoubleSlider = () => {
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
                The KindiCare Rating for this service of <Text style={{color:'#32A4FC'}}>{selected}</Text>  is lower than the average 
                KindiCare Rating for the area of <Text style={{color:'#32A4FC'}}>{selected}</Text>, and represents the good quality of service provided
                </Text>
            </View>
        </View>
    );
}
export default DoubleSlider;
