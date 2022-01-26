import React, { useContext, useState } from 'react';
import { View, StyleSheet, Text, Image, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import CenterContext from '../context/CenterContext';
import { IconSummary } from '../components/IconSummary';
import { EnquiryComponent } from '../components/EnquiryComponent';

const Summary=({centerId})=> {
    const [active, setActive] = useState(false);
    const {centers:[centers,setCenters]}=  useContext(CenterContext)
    const {name, address,contact,date,description,kindService,outdoor}= centers.find(v=>v.id===centerId);
    if(!address) return <Text> Error </Text>

    const MainContent = () => (
            <View>
                <View  style={styles.hr}/> 
                <Text style={styles.contentTitle}>General Information</Text>
                <IconSummary style={styles.contentText}  icon="https://i.ibb.co/Db1gbHg/ic-map-pin.png"  value={`${address.houseNumber}, ${address.LGA}, ${address.Region}`} />
                <IconSummary style={styles.contentText} icon="https://i.ibb.co/F8FQchb/ic-centre.png" value={name} />
                <IconSummary style={styles.contentText} icon="https://i.ibb.co/2MqJzCX/ic-outdoor.png"value={outdoor} />
                <IconSummary style={styles.contentText} icon="https://i.ibb.co/4TWkM5D/ic-calendar-blank.png" value={date} />
                <View  style={styles.hr}/>
                <Text style={styles.contentTitle} >Contact Info</Text>
                <IconSummary style={styles.contentText}   icon="https://i.ibb.co/L03kjZy/ic-phone.png" value={contact.phone} />
                <IconSummary style={styles.contentText} icon="https://i.ibb.co/6rqY8WV/Envelope-Simple.png"  value={contact.email} />
                <IconSummary  style={[styles.contentText, { color: '#DB147F' }]}  icon="https://i.ibb.co/MRqSZZ4/ic-arrow-1.png" value={contact.website} />
            </View>
                )

    return (
        <ScrollView contentContainerStyle={styles.main} showsVerticalScrollIndicator={false}>
            <View style={styles.content}>
                    <View style={styles.mainHeader}>
                        <Image style={styles.mainImg} source={require('../../assets/images/avatar.jpg')} />
                        <View style={styles.mainInfo} >
                            <Text style={styles.mainText}>{name}</Text>
                            <Text style={{ color: '#36BF57' }}>• Active</Text>
                        </View>
                        {active ? <AntDesign style={styles.flexEnd} onPress={() => { setActive(false) }} name="upcircle" size={24} color="#32A4FC" />: <AntDesign style={styles.flexEnd} onPress={() => { setActive(true) }} name="downcircle" size={24} color="#32A4FC" />}
                    </View>

                {active ? <MainContent /> : null}
            </View>
        
            <View style={[styles.content,styles.enquiry]}> 
                <Text style={styles.contentTitle}>Enquiries Summary</Text>
                <EnquiryComponent  icon="https://i.ibb.co/9shVq8j/Enquiries.png" value="Total Enquiries" />
                <EnquiryComponent   icon="https://i.ibb.co/h8q6vSZ/Enquiries-6.png" value="More Information" />   
                <EnquiryComponent    icon="https://i.ibb.co/bgLr92Z/Enquiries-2.png" value="Check for Vacancies" />      
                <EnquiryComponent  icon="https://i.ibb.co/BLRVCWC/Enquiries-3.png" value="Book a Tour or Visit" />
            </View>
        </ScrollView>
    );
}
export default Summary;


const styles = StyleSheet.create({
    main: {
        marginHorizontal: 20,       
    },
    mainHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        flex:1,
        marginVertical:16
    },
    mainInfo: {
        flex:6,
        alignItems:'flex-start',
        
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
        marginVertical: 20,
        marginTop:20
    },
    contentRow: {
        flexDirection: 'row',
        marginBottom: 16,
        alignItems: 'center',
    },
    contentText: {
        fontSize: 16,
        marginHorizontal: 16,
    },
    content: {
        paddingHorizontal:16,
        borderRadius:12,
        backgroundColor:'white',
        borderColor: '#F2F0F0',
        borderWidth: 1,
    },
    flexEnd:{
        flex:1
    },
    enquiry:{
        marginTop:16
    },
    hr:{
        borderBottomColor: '#F2F0F0',
        borderBottomWidth: 1,
        marginVertical:4, 
        marginHorizontal:16
    }

})