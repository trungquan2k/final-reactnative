
import React, { useState } from 'react'
import { TouchableOpacity, View, Text, LayoutAnimation, Image, FlatList, StyleSheet, ScrollView } from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import ImageView from "react-native-image-viewing";



const ReviewUserComponent = ({ title, subtitle, reviews }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [status, setStatus] = useState(true);
    const [visible, setIsVisible] = useState(false);
    const [imageArr, setImageArr] = useState([]);
    const [imageIndex, setImageIndex] = useState(0);

    const toggleOpen = () => {
        setIsOpen(value => !value);
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    }

    const RenderItem = ({ item }) => {
        const full = 3;
        const { id, user_avatar, user_name, images, description, type, rating, created_at } = item;
        return (
            <View style={styles.userReview}>
                <View style={{
                    flexDirection: 'row',
                }}>
                    <View>
                        <Image source={{ uri: user_avatar }} style={styles.user_avatar} />
                    </View>
                    <View style={styles.reviewer}>
                        <View style={styles.header}>
                            <Text style={styles.text}>{user_name}</Text>
                            <Ionicons
                                name="star-outline"
                                size={16}
                                color="black"
                                style={
                                    styles.star
                                } />
                            <Ionicons
                                name="star-outline"
                                size={16}
                                color="black"
                                style={
                                    styles.star
                                }
                            />
                            <Ionicons
                                name="star-outline"
                                size={16}
                                color="black"
                                style={
                                    styles.star
                                } />
                        </View>
                        <View style={styles.footer}>
                            <Text style={{ fontSize: 10, justifyContent: 'space-between', paddingHorizontal: 10 }}>{type}</Text>
                            <Text style={{ fontSize: 10 }}>{created_at}</Text>
                        </View>
                    </View>
                </View>
                <View>
                    <Text style={{ justifyContent: 'space-between', paddingVertical: 10 }}>
                        {description}
                    </Text>
                </View>
                
                <View style={styles.imageReview}>
                    {
                        images.map((value, index, arr) => {
                            if (index >= 0 && index < 3) {
                                return (
                                    <TouchableOpacity key={index} onPress={() => {
                                        setIsVisible(true);
                                        if (imageArr.length == 0) {
                                            images.map(v => {
                                                imageArr.push({ uri: v });
                                            })
                                        }
                                        setImageIndex(index);
                                    }}>
                                        <Image
                                            source={{ uri: value }}
                                            key={index}
                                            style={{
                                                width: 70,
                                                height: 70,
                                                borderRadius: 8,
                                                marginVertical: 5,
                                                marginHorizontal: 3
                                            }}
                                        />
                                    </TouchableOpacity>
                                )
                            }
                            else if (index === full) {
                                return (
                                    <TouchableOpacity  key={index} onPress={() => {
                                        setStatus(!status);
                                        if (!status) {
                                            setIsVisible(true);
                                            if (imageArr.length == 0) {
                                                images.map(v => {
                                                    imageArr.push({ uri: v });
                                                })
                                            }
                                            setImageIndex(index);
                                        }else{
                                            setIsVisible(!status)
                                        }
                                    }}>
                                        <Image
                                            source={{ uri: value }}
                                            key={index}
                                            style={[{
                                                width: 70,
                                                height: 70,
                                                borderRadius: 8,
                                                marginVertical: 5,
                                            }, status ? styles.opacity : undefined]}
                                        />
                                    </TouchableOpacity>
                                )
                            }
                            if (!status) {
                                return (
                                    <TouchableOpacity  key={index} onPress={() => {
                                        setIsVisible(true);
                                        if (imageArr.length == 0) {
                                            images.map(v => {
                                                imageArr.push({ uri: v });
                                            })
                                        }
                                        setImageIndex(index);
                                    }}>
                                        <Image
                                            source={{ uri: value }}
                                            style={{
                                                width: 70,
                                                height: 70,
                                                borderRadius: 8,
                                                marginVertical: 5,
                                            }}
                                        />
                                    </TouchableOpacity>
                                )
                            }

                        })
                    }
                    <Text style={{ position: 'absolute', right: 30, bottom: 30, color: 'white', fontSize: 16, fontWeight: 'bold' }}>
                        {status ? "+" : ''} {status ? images.length - full : null}
                    </Text>
                </View>
           
            </View>
        );
    }

    return (
        <View style={styles.rating}>
            <View style={styles.body}>
                <View style={styles.headerTitle}>
                    {
                        !isOpen ?
                            <Image
                                source={{ uri: "https://i.ibb.co/BL505TS/ic-star-fill.png" }}
                                style={styles.icon}
                            /> : null
                    }
                </View>
                <View style={styles.content}>
                    <Text style={!isOpen ? styles.title : styles.titles}>{title}</Text>
                    {!isOpen ? <Text style={styles.subtitle}>{subtitle}</Text> : <Text></Text>}
                </View>
                <TouchableOpacity onPress={toggleOpen} activeOpacity={0.6} style={styles.button}>
                    {!isOpen ? <FontAwesome name={'chevron-down'} size={14} color="black" /> : <FontAwesome name={'chevron-up'} size={14} color="black" />}
                </TouchableOpacity>
            </View>
            <View style={[styles.list, !isOpen ? styles.hidden : undefined]}>
                <FlatList
                    data={reviews}
                    renderItem={RenderItem}
                    keyExtractor={(item, index) => `review${index}`}
                />
            </View>
            <ImageView
                images={imageArr}
                imageIndex={imageIndex}
                visible={visible}
                onRequestClose={() => {
                    setIsVisible(false)
                    setImageArr([])
                }}
                animationType="fade"
            />
        </View>
    );
}
export default ReviewUserComponent;

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
        fontSize: 14,
        justifyContent: 'center'
    },
    titles: {
        color: 'black',
        fontWeight: 'bold',
        position: 'relative',
        top: 8,
        right: 50,
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
        height: 300,
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
        height: 20.25,
        width: 21,
    },
    //user review
    userReview: {
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
        height: 'auto'
    },
    user_avatar: {
        height: 40,
        width: 40,
        borderRadius: 8,
    },
    reviewer: {
        flexDirection: 'column',
    },
    header: {
        flexDirection: 'row',
    },
    text: {
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        fontSize: 14
    },
    star: {
        justifyContent: 'space-between',
        marginHorizontal: 5,
        marginVertical: 2
    },
    footer: {
        flexDirection: 'row'
    },

    // config images
    imageReview: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    opacity: {
        opacity: 0.54,
        backgroundColor: "#000"
    },

});
