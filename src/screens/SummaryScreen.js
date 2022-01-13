import React, { useState } from 'react';
import { View, StyleSheet, Text, Image, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const Summary=()=> {
    const [active, setActive] = useState(false);

    const MainContent = () => (
        <>
            <Text style={styles.contentTitle}>General Information</Text>
            <View style={styles.contentRow}>
                <AntDesign name="upcircle" size={24} color="#32A4FC" />
                <Text style={styles.contentText}>221 Ferrars Street, South Melbourne, VIC 3205</Text>
            </View>
            <View style={styles.contentRow}>
                <AntDesign name="upcircle" size={24} color="#32A4FC" />
                <Text style={styles.contentText}>Goodstart Early Learning</Text>
            </View>
            <View style={styles.contentRow}>
                <AntDesign name="upcircle" size={24} color="#32A4FC" />
                <Text style={styles.contentText}>Centre-based Care</Text>
            </View>
            <View style={styles.contentRow}>
                <AntDesign name="upcircle" size={24} color="#32A4FC" />
                <Text style={styles.contentText}>01 January 2012</Text>
            </View>
            <View style={styles.contentRow}>
                <AntDesign name="upcircle" size={24} color="#32A4FC" />
                <Text style={[styles.contentText, { color: '#32A4FC', backgroundColor: '#E9F4FF', borderRadius: 6, paddingHorizontal: 8, paddingVertical: 4 }]}>KindiCare Basic</Text>
            </View>
            <Text style={styles.contentTitle}>Contact Info</Text>
            <View style={styles.contentRow}>
                <AntDesign name="upcircle" size={24} color="#32A4FC" />
                <Text style={styles.contentText}>1300 001 154</Text>
            </View>
            <View style={styles.contentRow}>
                <AntDesign name="upcircle" size={24} color="#32A4FC" />
                <Text style={styles.contentText}>goodstartearlylearning@gmail.com</Text>
            </View>
            <View style={styles.contentRow}>
                <AntDesign name="upcircle" size={24} color="#32A4FC" />
                <Text style={[styles.contentText, { color: '#DB147F' }]}>https://www.goodstart.org.au/</Text>
            </View>
            <Text style={styles.contentTitle}>Enquiries Summary</Text>
            <View style={[styles.contentRow, { justifyContent: 'space-between' }]}>
                <View style={{ flexDirection: 'row' }}>
                    <AntDesign name="upcircle" size={24} color="#32A4FC" />
                    <Text style={styles.contentText}>Total Enquiries</Text>
                </View>
                <Text style={styles.contentText}>192</Text>
            </View>
            <View style={[styles.contentRow, { justifyContent: 'space-between' }]}>
                <View style={{ flexDirection: 'row' }}>
                    <AntDesign name="upcircle" size={24} color="#32A4FC" />
                    <Text style={styles.contentText}>More Information</Text>
                </View>
                <Text style={styles.contentText}>192</Text>
            </View>
            <View style={[styles.contentRow, { justifyContent: 'space-between' }]}>
                <View style={{ flexDirection: 'row' }}>
                    <AntDesign name="upcircle" size={24} color="#32A4FC" />
                    <Text style={styles.contentText}>Check for Vacancies</Text>
                </View>
                <Text style={styles.contentText}>192</Text>
            </View>
            <View style={[styles.contentRow, { justifyContent: 'space-between' }]}>
                <View style={{ flexDirection: 'row' }}>
                    <AntDesign name="upcircle" size={24} color="#32A4FC" />
                    <Text style={styles.contentText}>Book a Tour or Visit</Text>
                </View>
                <Text style={styles.contentText}>192</Text>
            </View>
        </>
    )

    return (
        <ScrollView contentContainerStyle={styles.main} showsVerticalScrollIndicator={false}>
            <View style={styles.mainHeader}>
                <View style={styles.mainInfo}>
                    <Image style={styles.mainImg} source={require('../../assets/images/avatar.jpg')} />
                    <View>
                        <Text style={styles.mainText}>Goodstart Early Learning ABC</Text>
                        <Text style={{ color: '#36BF57' }}>• Active</Text>
                    </View>
                </View>
                {active ? <AntDesign onPress={() => { setActive(false) }} name="upcircle" size={24} color="#32A4FC" />
                    : <AntDesign onPress={() => { setActive(true) }} name="downcircle" size={24} color="#32A4FC" />}
            </View>
            {active ? <MainContent /> : null}
        </ScrollView>
    );
}
export default Summary;

const styles = StyleSheet.create({
    main: {
        marginHorizontal: 20,
        padding: 16,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#F2F0F0',
    },
    mainHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingBottom: 20,
    },
    mainInfo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    mainImg: {
        width: 80,
        height: 80,
        borderRadius: 8,
        marginRight: 12
    },
    mainText: {
        fontSize: 16,
        fontWeight: '700',
        width: 165,
    },
    contentTitle: {
        fontSize: 16,
        fontWeight: '700',
        marginVertical: 20
    },
    contentRow: {
        flexDirection: 'row',
        marginBottom: 16,
        alignItems: 'center',
    },
    contentText: {
        fontSize: 16,
        marginHorizontal: 16,
    }
})