import React, { useState } from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Summary from './Summary';
import Information from './Information';
import FeatureComponent from '../components/FeatureComponent';
import ServiceComponent from '../components/ServiceComponent';
import { ReviewComponent } from '../components/RatingandServiceComponent';
import MarketingComponent from '../components/MarketingComponent';

export default function CentreDetails() {
    const [active, setActive] = useState('SUMMARY');

    return (
        <View style={{ flex: 1 }}>
            <View style={styles.header}>
                <Ionicons style={styles.headerBack} name="arrow-back-sharp" size={20} color="#857E7F" />
                <Text style={styles.headerTitle}>Centre Details</Text>
            </View>
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
            {active == 'FEATURES' ? <FeatureComponent /> : null}
            {active == 'SERVICES' ? <ServiceComponent /> : null}
            {active == 'REVIEWS' ? <ReviewComponent /> :null}
            {active == 'MARKETING' ? <MarketingComponent /> :null}
         
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        height: 88,
        paddingHorizontal: 20,
        paddingBottom: 12,
        justifyContent: 'flex-end',
        borderBottomWidth: 1,
        borderBottomColor: '#F2F0F0'
    },
    headerBack: {
        position: 'absolute',
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