
import React, { useState } from 'react'
import { TouchableOpacity, View, Text, LayoutAnimation, Image, FlatList, StyleSheet } from 'react-native';
import { FontAwesome ,Ionicons} from '@expo/vector-icons';



const ReviewUserComponent = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [status, setStatus] = useState(false);

    const toggleOpen = () => {
        setIsOpen(value => !value);
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    }
    const data = [
        {
            id: 1,
            avatar: 'https://reactjs.org/logo-og.png',
            name: 'Hoang Trung Quan',
            rating: 4,
            subtitle: 'Google Review',
            date: 'July 29, 2020',
            message: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.',
            image: [
                'https://afamilycdn.com/2019/7/7/capture-1562459163456860716620.png',
                'https://abacusmaster.edu.vn/wp-content/uploads/2018/10/toan-tu-duy-1-27.jpg',
                'https://afamilycdn.com/2019/7/7/capture-1562459163456860716620.png',
                'https://abacusmaster.edu.vn/wp-content/uploads/2018/10/toan-tu-duy-1-27.jpg',
                'https://afamilycdn.com/2019/7/7/capture-1562459163456860716620.png',
                'http://mghoacuc.tptdm.edu.vn/uploads/mghoacuc/news/2017_04/img_3458.jpg',
                'http://mghoacuc.tptdm.edu.vn/uploads/mghoacuc/news/2017_04/img_3458.jpg',
                'http://mghoacuc.tptdm.edu.vn/uploads/mghoacuc/news/2017_04/img_3458.jpg',
            ]
        },
        {
            id: 2,
            avatar: 'https://reactjs.org/logo-og.png',
            name: 'Hoang Trung Quan',
            rating: 4,
            subtitle: 'Google Review',
            date: 'July 29, 2020',
            message: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.',
            image: [
                'https://abacusmaster.edu.vn/wp-content/uploads/2018/10/toan-tu-duy-1-27.jpg',
                'https://afamilycdn.com/2019/7/7/capture-1562459163456860716620.png',
                'https://abacusmaster.edu.vn/wp-content/uploads/2018/10/toan-tu-duy-1-27.jpg',
                'https://afamilycdn.com/2019/7/7/capture-1562459163456860716620.png',
                'https://abacusmaster.edu.vn/wp-content/uploads/2018/10/toan-tu-duy-1-27.jpg',
                'http://mghoacuc.tptdm.edu.vn/uploads/mghoacuc/news/2017_04/img_3458.jpg',
                'https://abacusmaster.edu.vn/wp-content/uploads/2018/10/toan-tu-duy-1-27.jpg',
                'https://afamilycdn.com/2019/7/7/capture-1562459163456860716620.png',
            ]
        },

    ]
    const RenderItem = ({ item }) => {
        const full = 3;
        return (
            <View style={styles.userReview}>
                <View style={{ flexDirection: 'row', }}>
                    <View>
                        <Image source={{ uri: item.avatar }} style={styles.avatar} />
                    </View>
                    <View style={styles.reviewer}>
                        <View style={styles.header}>
                            <Text style={styles.text}>Hoang Trung Quan</Text>
                            <Ionicons
                                name="star-outline"
                                size={15}
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
                            <Text style={{ fontSize: 10, justifyContent: 'space-between', paddingHorizontal: 10 }}>{item.subtitle}</Text>
                            <Text style={{ fontSize: 10 }}>{item.date}</Text>
                        </View>
                    </View>
                </View>
                <View>
                    <Text style={{ justifyContent: 'space-between', paddingVertical: 10 }}>
                        {item.message}
                    </Text>
                </View>
                <View style={styles.imageReview}>
                    {
                        item.image.map((value, index, arr) => {

                            if (index >= 0 && index < 3) {
                                return (
                                    <View>
                                        <Image
                                            source={{ uri: value }}
                                            key={index}
                                            style={{
                                                width: 70,
                                                height: 70,
                                                borderRadius: 8,
                                                marginVertical: 5,
                                            }}
                                        />
                                    </View>
                                )
                            }
                            else if (index === full) {
                                return (
                                    <TouchableOpacity onPress={() => {
                                        setStatus(!status);

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
                            {/* if (!status) {
                                return (
                                    <Image
                                        source={{ uri: value }}
                                        style={{
                                            width: 70,
                                            height: 70,
                                            borderRadius: 8,
                                            marginVertical: 5,
                                        }}
                                    />
                                )
                            } */}
                        })
                    }
                    <Text style={{ position: 'absolute', right: 30, bottom: 30, color: 'white', fontSize: 16, fontWeight: 'bold' }}>
                        {status ? "+" : ''} {status ? item.image.length - full : null}
                    </Text>
                </View>
                <View
                    style={{
                        borderBottomColor: '#F2F2F2',
                        borderBottomWidth: 1,
                        marginVertical: 10
                    }}
                />
            </View>
        );
    }

    return (
        <View style={styles.rating}>
            <View style={styles.body}>
                <View style={styles.headerTitle}>
                    <Image
                        source={{ uri: "https://i.ibb.co/BL505TS/ic-star-fill.png" }}
                        style={styles.icon}
                    />
                </View>
                <View style={styles.content}>
                    <Text style={styles.title}>{props.title}</Text>
                    {!isOpen ? <Text style={styles.subtitle}>{props.subtitle}</Text> : <Text></Text>}
                </View>
                <TouchableOpacity onPress={toggleOpen} activeOpacity={0.6} style={styles.button}>
                    {!isOpen ? <FontAwesome name={'chevron-down'} size={14} color="black" /> : <FontAwesome name={'chevron-up'} size={14} color="black" />}
                </TouchableOpacity>
            </View>
            <View style={[styles.list, !isOpen ? styles.hidden : undefined]}>
                <FlatList
                    data={data}
                    renderItem={RenderItem}
                    keyExtractor={item => item.id}
                />
            </View>
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
    },
    avatar: {
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

    // config image
    imageReview: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    opacity: {
        opacity: 0.54,
        backgroundColor: "#000"
    },

});
