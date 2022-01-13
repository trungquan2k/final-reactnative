import React, { useState } from 'react';
import { View, StyleSheet, Text, ScrollView, TouchableOpacity, TouchableHighlight } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Summary from './SummaryScreen';
import Information from './InformationScreen';
import HoursComponents from '../components/HoursComponents';
import FeatureComponent from '../components/FeatureComponent';
import ServiceComponent from '../components/ServiceComponent';
import MarketingComponent from '../components/MarketingComponent';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native-paper';



const CentreDetails = ({navigation}) => {
    const [active, setActive] = useState('SUMMARY');
    return (
        <View style={{ flex: 1 }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <View style={styles.header}>
                    <Ionicons style={styles.headerBack} name="arrow-back-sharp" size={20} color="#857E7F" />
                    <Text style={styles.headerTitle}>Centre Details</Text>
                </View>
            </TouchableOpacity>
            <View>
                <ScrollView contentContainerStyle={styles.tabPane} horizontal={true} showsHorizontalScrollIndicator={false}>
                    <Text onPress={() => { setActive('SUMMARY') }} style={[styles.tabItem, { color: active == 'SUMMARY' ? '#DB147F' : '#857E7F' }]}>SUMMARY</Text>
                    <Text onPress={() => { setActive('INFORMATION') }} style={[styles.tabItem, { color: active == 'INFORMATION' ? '#DB147F' : '#857E7F' }]}>CENTRE INFORMATION</Text>
                    <Text onPress={() => { setActive('HOURS') }} style={[styles.tabItem, { color: active == 'HOURS' ? '#DB147F' : '#857E7F' }]}>HOURS</Text>
                    <Text onPress={() => { setActive('SERVICES') }} style={[styles.tabItem, { color: active == 'SERVICES' ? '#DB147F' : '#857E7F' }]}>SERVICES</Text>
                    <Text onPress={() => { setActive('FEATURES') }} style={[styles.tabItem, { color: active == 'FEATURES' ? '#DB147F' : '#857E7F' }]}>FEATURES</Text>
                    <Text onPress={() => { setActive('REVIEWS') }} style={[styles.tabItem, { color: active == 'REVIEWS' ? '#DB147F' : '#857E7F' }]}>RATINGS AND REVIEWS</Text>
                    <Text onPress={() => { setActive('MARKETING') }} style={[styles.tabItem, { color: active == 'MARKETING' ? '#DB147F' : '#857E7F' }]}>MARKETING</Text>
                </ScrollView>
            </View>
            {active == 'SUMMARY' ? <Summary /> : null}
            {active == 'INFORMATION' ? <Information /> : null}
            {active == 'HOURS' ? <HoursComponents /> : null}
            {active == 'FEATURES' ? <FeatureComponent /> : null}
            {active == 'SERVICES' ? <ServiceComponent /> : null}
            {active == 'REVIEWS' ? <RatingAndServiceComponent /> : null}
            {active == 'MARKETING' ? <MarketingComponent /> : null}

        </View>
    );
}

export default CentreDetails;
const styles = StyleSheet.create({
    header: {
        height: 88,
        paddingHorizontal: 20,
        paddingBottom: 12,
        justifyContent: 'flex-end',
        // flexDirection:'row',
        borderBottomWidth: 1,
        borderBottomColor: '#F2F0F0'
    },
    headerBack: {
        position: 'absolute',
        // top:3,
        left: 20,
        bottom: 12
    },
    headerTitle: {
        fontSize: 16,
        fontWeight: '700',
        textAlign: 'center'
    },
    tabPane: {
        paddingVertical: 12,
        paddingLeft: 20,
        paddingRight: 8,
    },
    tabItem: {
        paddingHorizontal: 12,
        paddingVertical: 8,
        marginRight: 12,
        fontSize: 10,
        fontWeight: '700'
    }
})