import React,{useContext} from 'react';
import { View, StyleSheet, Text,ScrollView } from 'react-native';
import CenterContext from '../context/CenterContext';
import SeeMore from '../components/SeeMore';


const Information=({centerId})=> {

    const centers =  useContext(CenterContext);
    const {description,emailAdmin,address}= centers.find(v=>v.id===centerId);
    return (
        <ScrollView showsVerticalScrollIndicator={false} >
            <View style={styles.content}>
                <Text style={styles.contentTitle}>Centre Description</Text>
                <SeeMore numberOfLines={14}>
                    {description.split('\\n').join('\n')}
                </SeeMore>
            </View>
            <View style={styles.content}>
                <Text style={styles.contentTitle}>Additional Details</Text>
                <View style={styles.contentRow}>
                    <Text style={styles.rowTitle}>Admin Email</Text>
                    <Text style={styles.rowDes}>{emailAdmin}</Text>
                </View>
                <View style={styles.contentRow}>
                    <Text style={styles.rowTitle}>Region</Text>
                    <Text style={styles.rowDes}>{address.Region}</Text>
                </View>
                <View style={styles.contentRow}>
                    <Text style={styles.rowTitle}>LGA</Text>
                    <Text style={styles.rowDes}>{address.LGA}</Text>
                </View>
            </View>
        </ScrollView>
    )
};
export default Information;

const styles = StyleSheet.create({
    content: {
        marginHorizontal: 20,
        marginBottom:16,
        padding: 16,
        borderRadius:12,
        backgroundColor:'white',
    },
    contentTitle: {
        fontSize: 16,
        fontWeight: '700',
        borderBottomColor: '#F2F2F2',
        borderBottomWidth: 1,
        paddingBottom: 8,
        marginBottom: 17
    },
    contentRow: {
        flexDirection: 'row',
        marginBottom: 12
    },
    rowTitle:{
        flex: 5, 
        color: '#2D1F21'
    },
    rowDes:{
        flex: 6, 
        fontWeight: 'bold',
    }
})