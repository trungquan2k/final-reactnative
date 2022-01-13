import React, { useState } from 'react'
import { TouchableOpacity, View, Text, LayoutAnimation, Image, ScrollView, FlatList, SafeAreaView, SectionList } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import DoubleSlider from './DoubleSlider';
import styles from '../css/RatingStyle';
import { Ionicons } from '@expo/vector-icons';



const RatingAndServiceComponent = () => {
    return (
        <>
            <RatingComponent title="KindiCare Rating" subtitle="Very Good" />
            <ReviewUserComponent title="User Review" subtitle="Very Good"/>
            <NQSRatingComponent title="NQS Rating" subtitle="Last reviewed 21 September 2017" />
        </>
    );
}
export default RatingAndServiceComponent;
