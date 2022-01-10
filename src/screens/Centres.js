import React, { useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, Switch, ScrollView, TouchableOpacity, Image, FlatList, Modal, Pressable } from 'react-native';
import { Ionicons, AntDesign, Entypo, EvilIcons, FontAwesome5, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { Searchbar, RadioButton } from 'react-native-paper';


export default function Centres() {
    const [visible, setVisible] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [checked, setChecked] = useState('item1');

    const data = [
        { id: 1, name: 'nam' },
        { id: 2, name: 'nam2' },
        { id: 3, name: 'nam2' },
        { id: 4, name: 'nam2' },
    ];

    const Header = () => {
        return (
            <View style={styles.searchBar}>
                <Searchbar
                    placeholder="Search Centre name"
                    onChangeText={(value) => setSearchQuery(value)}
                    value={searchQuery}
                    style={{
                        width: "85%",
                        height: 42,
                        backgroundColor: 'white',
                        elevation: 0,
                    }}
                />
                <TouchableOpacity style={styles.searchBarFilter}>
                    <Ionicons name="ios-filter-outline" size={20} color="#ABA7A7" />
                </TouchableOpacity>
            </View>
        )
    }

    const Item = () => (
        <View style={styles.itemBox}>
            <Text style={styles.itemPoint}>9.8</Text>
            <Image style={styles.itemLogo} source={require('../../assets/logo.png')} />
            <View style={{ overflow: 'hidden' }}>
                <Image source={require('../../assets/avatar.jpg')} style={styles.itemImg} />
            </View>
            <View style={styles.itemBody}>
                <Text style={styles.itemTitle}>Castle Hill Montessori Academy</Text>
                <View style={[styles.itemInfo, { width: '100%' }]}>
                    <Image source={require('../../assets/ic-map.png')} />
                    <Text style={{ marginLeft: 6 }}>1 Kerrs Road, Castle Hill, NSW 2154</Text>
                </View>
                <View style={styles.itemRow}>
                    <View style={styles.itemInfo}>
                        <Image source={require('../../assets/ic-baby.png')} />
                        <Text style={{ marginLeft: 6 }}>90 childrens</Text>
                    </View>
                    <View style={styles.itemInfo}>
                        <Image source={require('../../assets/ic-wailist.png')} />
                        <Text style={{ marginLeft: 6 }}>48 waitlisted</Text>
                    </View>
                </View>
                <View style={styles.itemRow}>
                    <View style={styles.itemInfo}>
                        <Image source={require('../../assets/ic-Kindi.png')} />
                        <Text style={styles.itemText}>KindiCare Basic</Text>
                    </View>
                    <View style={styles.itemInfo}>
                        <Image source={require('../../assets/ic-service.png')} />
                        <Text style={{ marginLeft: 6 }}>4 services</Text>
                    </View>
                </View>
            </View>
        </View>
    )

    return (
        <View style={styles.container}>
            <StatusBar style='light' />
            <View style={styles.header}>
                <Pressable style={styles.headerSelect} onPress={() => setVisible(true)}>
                    <Entypo name="shop" size={20} color='white' />
                    <Text style={styles.headerTitle}>All Centres</Text>
                    <AntDesign name="down" size={20} color="white" />
                </Pressable>
                <TouchableOpacity>
                    <AntDesign name="pluscircleo" size={20} color="white" />
                </TouchableOpacity>
            </View>
            <Modal
                animationType="fade"
                transparent={true}
                visible={visible}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <View style={styles.modalHeader}>
                            <AntDesign style={styles.modalClose} name="close" size={24} color="black" onPress={() => { setVisible(false) }} />
                            <Text style={styles.modalTitle}>Select Centre</Text>
                        </View>
                        <Searchbar
                            placeholder="Search Centre name"
                            onChangeText={setSearchQuery}
                            value={searchQuery}
                            style={{
                                marginTop: 12
                            }}
                        />
                        <View style={styles.modalItem}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Image style={styles.modalImg} source={require('../../assets/avatar.jpg')} />
                                <Text>All Centre</Text>
                            </View>
                            <RadioButton
                                value="item1"
                                status={checked === 'item1' ? 'checked' : 'unchecked'}
                                onPress={() => setChecked('item1')}
                                color='#DB147F'
                            />
                        </View>
                        <View style={styles.modalItem}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Image style={styles.modalImg} source={require('../../assets/avatar.jpg')} />
                                <Text>Goodstart Early Learning ABC</Text>
                            </View>
                            <RadioButton
                                value="item2"
                                status={checked === 'item2' ? 'checked' : 'unchecked'}
                                onPress={() => setChecked('item2')}
                                color='#DB147F'
                            />
                        </View>
                        <View style={styles.modalItem}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Image style={styles.modalImg} source={require('../../assets/avatar.jpg')} />
                                <Text>Goodstart Early Learning ABC</Text>
                            </View>
                            <RadioButton
                                value="item3"
                                status={checked === 'item3' ? 'checked' : 'unchecked'}
                                onPress={() => setChecked('item3')}
                                color='#DB147F'
                            />
                        </View>
                        <View style={styles.modalItem}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Image style={styles.modalImg} source={require('../../assets/avatar.jpg')} />
                                <Text>Goodstart Early Learning ABC</Text>
                            </View>
                            <RadioButton
                                value="item4"
                                status={checked === 'item4' ? 'checked' : 'unchecked'}
                                onPress={() => setChecked('item4')}
                                color='#DB147F'
                            />
                        </View>
                        <View style={styles.modalItem}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Image style={styles.modalImg} source={require('../../assets/avatar.jpg')} />
                                <Text>Goodstart Early Learning ABC</Text>
                            </View>
                            <RadioButton
                                value="item5"
                                status={checked === 'item5' ? 'checked' : 'unchecked'}
                                onPress={() => setChecked('item5')}
                                color='#DB147F'
                            />
                        </View>
                        <View style={styles.modalItem}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Image style={styles.modalImg} source={require('../../assets/avatar.jpg')} />
                                <Text>Goodstart Early Learning ABC</Text>
                            </View>
                            <RadioButton
                                value="item6"
                                status={checked === 'item6' ? 'checked' : 'unchecked'}
                                onPress={() => setChecked('item6')}
                                color='#DB147F'
                            />
                        </View>
                        <View style={styles.modalItem}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Image style={styles.modalImg} source={require('../../assets/avatar.jpg')} />
                                <Text>Goodstart Early Learning ABC</Text>
                            </View>
                            <RadioButton
                                value="item7"
                                status={checked === 'item7' ? 'checked' : 'unchecked'}
                                onPress={() => setChecked('item7')}
                                color='#DB147F'
                            />
                        </View>
                        <View style={styles.modalItem}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Image style={styles.modalImg} source={require('../../assets/avatar.jpg')} />
                                <Text>Goodstart Early Learning ABC</Text>
                            </View>
                            <RadioButton
                                value="item8"
                                status={checked === 'item8' ? 'checked' : 'unchecked'}
                                onPress={() => setChecked('item8')}
                                color='#DB147F'
                            />
                        </View>
                    </View>
                </View>
            </Modal>
            <ScrollView style={styles.slider} horizontal={true} showsHorizontalScrollIndicator={false}>
                <View style={styles.sliderItem}>
                    <View style={styles.sliderRow}>
                        <Entypo name="shop" size={20} color='pink' style={{ padding: 7, backgroundColor: '#FFF0FB', borderRadius: 20 }} />
                        <Text style={styles.sliderTitle}>Total Centres</Text>
                    </View>
                    <Text style={styles.sliderValue}>122</Text>
                </View>
                <View style={styles.sliderItem}>
                    <View style={styles.sliderRow}>
                        <Ionicons name="location-outline" size={20} color="#FB8429" style={{ padding: 7, backgroundColor: '#FFF4EC', borderRadius: 20 }} />
                        <Text style={styles.sliderTitle}>Total Places</Text>
                    </View>
                    <Text style={styles.sliderValue}>3200</Text>
                </View>
                <View style={styles.sliderItem}>
                    <View style={styles.sliderRow}>
                        <MaterialIcons name="attach-money" size={20} color="#32A4FC" style={{ padding: 7, backgroundColor: '#E9F4FF', borderRadius: 20 }} />
                        <Text style={styles.sliderTitle}>Est. Earning</Text>
                    </View>
                    <Text style={styles.sliderValue}>$3,465,000</Text>
                </View>
                <View style={styles.sliderItem}>
                    <View style={styles.sliderRow}>
                        <MaterialCommunityIcons name="clipboard-text-outline" size={20} color="#E62828" style={{ padding: 7, backgroundColor: '#FEEFEF', borderRadius: 20 }} />
                        <Text style={styles.sliderTitle}>Waitlist Value </Text>
                    </View>
                    <Text style={styles.sliderValue}>$3,465</Text>
                </View>
            </ScrollView>
            <FlatList
                data={data}
                renderItem={Item}
                keyExtractor={item => item.id}
                ListHeaderComponent={Header}
                style={styles.body}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        height: 136,
        backgroundColor: '#DB147F',
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 52,
        paddingHorizontal: 20
    },
    headerSelect: {
        flexDirection: 'row',
    },
    headerTitle: {
        color: 'white',
        fontSize: 14,
        paddingHorizontal: 10
    },
    modalContainer: {
        flex: 1,
        backgroundColor: 'rgba(45, 31, 33, 0.52)',
        justifyContent: 'flex-end',

    },
    modalContent: {
        opacity: 1,
        padding: 20,
        borderTopRightRadius: 12,
        borderTopLeftRadius: 12,
        backgroundColor: 'white',
    },
    modalHeader: {
        alignItems: 'center',
        paddingBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#F1F1F5'
    },
    modalClose: {
        position: 'absolute',
        top: 0,
        left: 0
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    modalItem: {
        marginTop: 12,
        padding: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    modalImg: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 12
    },
    body: {
        paddingHorizontal: 20,
        marginTop: 20
    },
    itemBox: {
        marginTop: 16,
    },
    itemImg: {
        height: 80,
        width: '100%',
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
    },
    itemBody: {
        padding: 12,
        height: 152,
        justifyContent: 'space-between'
    },
    itemTitle: {
        fontWeight: 'bold',
    },
    itemRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    itemInfo: {
        flexDirection: 'row',
        width: '48%',
        alignItems: 'center'
    },
    itemText: {
        marginLeft: 6,
        backgroundColor: '#E9F4FF',
        color: '#32A4FC',
        borderRadius: 6,
        paddingHorizontal: 8,
        paddingVertical: 4,
        fontWeight: '600'
    },
    itemPoint: {
        position: 'absolute',
        top: 10,
        left: 10,
        padding: 4,
        fontWeight: '700',
        color: 'white',
        backgroundColor: '#DB147F',
        zIndex: 10
    },
    itemLogo: {
        position: 'absolute',
        top: 40,
        right: 10,
        zIndex: 10
    },
    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    searchBarFilter: {
        width: 42,
        height: 42,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    slider: {
        paddingLeft: 20,
        marginTop: -41,
        height: 120,
    },
    sliderItem: {
        borderRadius: 12,
        width: 178,
        marginRight: 12,
        paddingLeft: 12,
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    sliderRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    sliderTitle: {
        marginLeft: 8
    },
    sliderValue: {
        fontSize: 24,
        lineHeight: 32,
        fontWeight: '700',
    }
})
