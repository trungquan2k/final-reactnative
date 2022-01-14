import React, { useContext, useState } from 'react';
import { View, StyleSheet, Text, Image, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import CenterContext from '../context/CenterContext';
import { IconSummary } from '../components/IconSummary';

const Summary=({centerId})=> {
    const [active, setActive] = useState(false);
    const centers=  useContext(CenterContext)
    const {name, address,contact,date,description,kindService,outdoor}= centers.find(v=>v.id===centerId);

    const MainContent = () => (
        <>
          <Text style={styles.contentTitle}>General Information</Text>
           <IconSummary style={styles.contentText} value={`${address.LGA} ${address.Region}`} />
           <IconSummary style={styles.contentText} value={name} />
           <IconSummary style={styles.contentText} value={outdoor} />
           <IconSummary style={styles.contentText} value={date} />
           <Text style={styles.contentTitle}>Contact Info</Text>
           <IconSummary style={styles.contentText} value={contact.phone} />
           <IconSummary style={styles.contentText} value={contact.email} />
           <IconSummary  style={[styles.contentText, { color: '#DB147F' }]} value={contact.website} />
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