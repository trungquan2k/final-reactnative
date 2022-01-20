
import React, { useState } from 'react'
import { TouchableOpacity, View, Text, LayoutAnimation, Image, FlatList, StyleSheet, } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

// NQS Rating Component
const NQSRatingComponent = ({title,subtitle,nqs_rating}) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = () => {
        setIsOpen(value => !value);
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    }
    

    const renderItem = ({ item,index }) => (
        <View style={{ flexDirection: 'column' }}>
            <View style={{
                flexDirection: 'row',
                marginVertical: 5
            }}>
                <Text style={{ flex: 1 }}>{index}</Text>
                <Text style={{ width: '60%' }}>{item.name}</Text>
                <Text style={{ color: '#FB8429' }}>{item.link}</Text>
            </View>
        </View>
    );

    return (
        <View style={styles.rating}>
            <View style={styles.body}>
                <View style={styles.headerTitle}>
                    <Image
                        source={{ uri: "https://i.ibb.co/4pFhggT/NQS-Rating.png" }}
                        style={styles.icon}
                    />
                </View>

                <View style={styles.content}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.subtitle}>{subtitle}</Text>
                </View>
                <TouchableOpacity onPress={toggleOpen} activeOpacity={0.6} style={styles.button}>
                    {!isOpen ? <FontAwesome name={'chevron-down'} size={14} color="black" /> : <FontAwesome name={'chevron-up'} size={14} color="black" />}
                </TouchableOpacity>
            </View>
            <View style={[styles.list, !isOpen ? styles.hidden : undefined]}>
                <View style={styles.listNQS}>
                    <View style={styles.nqsRating}>
                        <Image source={{ uri: 'https://reactjs.org/logo-og.png' }} style={styles.nqsImage} />
                        <Text style={{
                            color: '#857E7F',
                            marginVertical: 10
                        }}>Last Reviewed 01 December 2019</Text>
                    </View>
                    <FlatList
                        data={nqs_rating}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                    />
                </View>
            </View>
        </View>

    )
}

export default NQSRatingComponent;

const styles = StyleSheet.create({
    rating: {
        paddingTop: 20,
        paddingLeft: 20,
        paddingRight: 20,

    },
    body: {
        flexDirection: 'row',
        padding: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0,
        elevation: 1,
        backgroundColor: "white",
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,

    },
    content: {
        flexDirection: 'column',
        paddingHorizontal: 16,
        flex: 1
    },
    title: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 16,
        justifyContent: 'center'
    },
    subtitle: {
        fontSize: 12,
        color: 'black'
    },
    // style 
    hidden: {
        height: 0,
    },
    list: {
        overflow: 'hidden',
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
    },
    button: {
        padding: 5,
    },
    headerTitle: {
        width: 54,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {
        height: 36,
        width: 47.25,
    },
    // National Quality Standard
    nqsRating: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',

    },
    nqsImage: {
        height: 57,
        width: 91,
        borderRadius: 8,
        // backgroundColor:'black',  
    },
    listNQS: {
        flexDirection: 'column',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0,
        elevation: 1,
        backgroundColor: "white",
        padding: 20,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        marginBottom: 10
    },

});
