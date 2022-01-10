import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default function Information() {
    return (
        <>
            <View style={styles.content}>
                <Text style={styles.contentTitle}>Centre Description</Text>
                <Text style={styles.contentInfo}>
                    At Only About Children South Melbourne, we believe that our holistic
                    approach to childcare and kindergarten gives every child the best
                    opportunity to reach their full potential. Our quality early learning
                    programs are innovative, with a focus on health, wellbeing and education.
                    Our unique Campus is located 221 Ferrars Street, South Melbourne, in a
                    heritage listed train station which was built in 1883. Our two buildings
                    are named Westside and Eastside because they are separated by a tram line,
                    which runs between them. We are close to several local schools <Text style={{ color: '#DB147F', fontWeight: '700' }}>See More</Text>
                </Text>
            </View>
            <View style={styles.content}>
                <Text style={styles.contentTitle}>Additional Details</Text>
                <View style={styles.contentRow}>
                    <Text style={{ flex: 5, color: '#2D1F21' }}>Admin Email</Text>
                    <Text style={{ flex: 6, fontWeight: 'bold' }}>sthmelbourne@oac.edu.au</Text>
                </View>
                <View style={styles.contentRow}>
                    <Text style={{ flex: 5, color: '#2D1F21' }}>Region</Text>
                    <Text style={{ flex: 6, fontWeight: 'bold' }}>Victoria Metro</Text>
                </View>
                <View style={styles.contentRow}>
                    <Text style={{ flex: 5, color: '#2D1F21' }}>LGA</Text>
                    <Text style={{ flex: 6, fontWeight: 'bold' }}>Melbourne</Text>
                </View>
            </View>
        </>
    );
}

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