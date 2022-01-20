import React,{useContext} from 'react';
import { View, StyleSheet, Text } from 'react-native';
import CenterContext from '../context/CenterContext';

const Information=({centerId})=> {
    const centers=  useContext(CenterContext);
    const {description,emailAdmin,address}= centers.find(v=>v.id===centerId);

    return (
        <>
            <View style={styles.content}>
                <Text style={styles.contentTitle}>Centre Description</Text>
                <Text style={styles.contentInfo}>
                    {description}
                    <Text style={{ color: '#DB147F', fontWeight: '700' }}>See More</Text>
                </Text>
            </View>
            <View style={styles.content}>
                <Text style={styles.contentTitle}>Additional Details</Text>
                <View style={styles.contentRow}>
                    <Text style={{ flex: 5, color: '#2D1F21' }}>Admin Email</Text>
                    <Text style={{ flex: 6, fontWeight: 'bold' }}>{emailAdmin}</Text>
                </View>
                <View style={styles.contentRow}>
                    <Text style={{ flex: 5, color: '#2D1F21' }}>Region</Text>
                    <Text style={{ flex: 6, fontWeight: 'bold' }}>{address.Region}</Text>
                </View>
                <View style={styles.contentRow}>
                    <Text style={{ flex: 5, color: '#2D1F21' }}>LGA</Text>
                    <Text style={{ flex: 6, fontWeight: 'bold' }}>{address.LGA}</Text>
                </View>
            </View>
        </>
    );
}
export default Information;
const styles = StyleSheet.create({
    content: {
        marginHorizontal: 20,
        padding: 16,
    },
    contentTitle: {
        fontSize: 16,
        fontWeight: '700',
        borderBottomColor: '#F2F2F2',
        borderBottomWidth: 1,
        paddingBottom: 8,
        marginBottom: 17
    },
    contentInfo: {
        lineHeight: 24
    },
    contentRow: {
        flexDirection: 'row',
        marginBottom: 12
    }
})