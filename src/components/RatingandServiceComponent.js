import React, { useState } from 'react'
import { TouchableOpacity, View, Text, LayoutAnimation, Image, ScrollView, FlatList, SafeAreaView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import DoubleSlider from './DoubleSlider';
import styles from '../css/RatingStyle';
import { Ionicons } from '@expo/vector-icons';



const RatingComponent = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = () => {
        setIsOpen(value => !value);
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    }

    return (
        <View style={styles.rating}>
            <View style={styles.body}>
                <Image
                    source={{ uri: props.imgUri }}
                    style={{
                        height: 48,
                        width: 48,
                        resizeMode: 'contain',
                    }}
                />
                <View style={styles.content}>
                    <Text style={styles.title}>{props.title}</Text>
                    <Text style={styles.title}>{props.subtitle}</Text>
                </View>
                <TouchableOpacity onPress={toggleOpen} activeOpacity={0.6} style={styles.button}>
                    {!isOpen ? <FontAwesome name={'chevron-down'} size={14} color="black" /> : <FontAwesome name={'chevron-up'} size={14} color="black" />}
                </TouchableOpacity>
            </View>
            <View style={[styles.list, !isOpen ? styles.hidden : undefined]}>
                <DoubleSlider />
            </View>
        </View>
    );
};

const ReviewUserComponent = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = () => {
        setIsOpen(value => !value);
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    }
    const listImage = [
        {
            id: 1,
            uri: 'https://reactjs.org/logo-og.png'
        },
        {
            id: 2,
            uri: 'https://reactjs.org/logo-og.png'
        },
        {
            id: 3,
            uri: 'https://reactjs.org/logo-og.png'
        },
        {
            id: 4,
            uri: 'https://reactjs.org/logo-og.png'
        },
        {
            id: 5,
            uri: 'https://reactjs.org/logo-og.png'
        },
        {
            id: 6,
            uri: 'https://reactjs.org/logo-og.png'
        }
    ]
    const renderImage = ({ item }) => {
        return (
            <Image source={{ uri: item.uri }}
                style={{
                    width: 70,
                    height: 70,
                    borderRadius: 8,
                }}
            />
        );
    }
    const RenderItem = () => {
        return (
            <View style={styles.userReview}>
                <View
                    style={{
                        flexDirection: 'row',
                    }}>
                    <View>
                        <Image source={{ uri: 'https://reactjs.org/logo-og.png' }} style={styles.avatar} />
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
                            <Text style={{ fontSize: 10, justifyContent: 'space-between', paddingHorizontal: 10 }}>Google Review</Text>
                            <Text style={{ fontSize: 10 }}>July 29, 2020</Text>
                        </View>
                    </View>
                </View>
                <View>
                    <Text style={{ justifyContent: 'space-between', paddingVertical: 10 }}>
                        Amet minim mollit non deserunt ullamco est
                        sit aliqua dolor do amet sint.
                    </Text>
                </View>
                <View style={styles.image}>
                    <ScrollView  horizontal={true}>
                    <Image source={{ uri: 'https://reactjs.org/logo-og.png' }}
                        style={{
                            width: 70,
                            height: 70,
                            borderRadius: 8,
                        }}
                    />
                    <Image source={{ uri: 'https://reactjs.org/logo-og.png' }} style={styles.imageSlide} />
                    <Image source={{ uri: 'https://reactjs.org/logo-og.png' }} style={styles.imageSlide} />
                    <Image source={{ uri: 'https://reactjs.org/logo-og.png' }} style={styles.imageSlide} />
                    </ScrollView>
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
                <View style={{ width: 54, height: 40, justifyContent: 'center', alignItems: 'center' }}>
                    <Image
                        source={{ uri: "https://i.ibb.co/BL505TS/ic-star-fill.png" }}
                        style={{
                            height: 20.25,
                            width: 21,
                            resizeMode: 'contain',
                        }}
                    />
                </View>
                <View style={styles.content}>
                    <Text style={styles.title}>KindiCare Rating</Text>
                    <Text style={styles.subtitle}>Very Good</Text>
                </View>
                <TouchableOpacity onPress={toggleOpen} activeOpacity={0.6} style={styles.button}>
                    {!isOpen ? <FontAwesome name={'chevron-down'} size={14} color="black" /> : <FontAwesome name={'chevron-up'} size={14} color="black" />}
                </TouchableOpacity>
            </View>
            <View style={[styles.list, !isOpen ? styles.hidden : undefined]}>
                <RenderItem />
            </View>
        </View>
    );
}


// NQS Rating Component

const NQSRatingComponent = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = () => {
        setIsOpen(value => !value);
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    }
    const data = [
        {
            id: 1,
            name: 'Education program and practice',
            link: 'Exceeding NQS'
        },
        {
            id: 2,
            name: 'Children’s health and safety',
            link: 'Exceeding NQS'
        },
        {
            id: 3,
            name: 'Physical environment',
            link: 'Exceeding NQS'
        },
        {
            id: 4,
            name: 'Staffing arrangement',
            link: 'Exceeding NQS'
        },
        {
            id: 5,
            name: 'Relationships with children',
            link: 'Exceeding NQS'
        },
        {
            id: 6,
            name: 'Collaborative partnerships with families and communities',
            link: 'Exceeding NQS'
        },
    ]

    const renderItem = ({ item }) => (
        <View style={{ flexDirection: 'column' }}>
            <View style={{ flexDirection: 'row', marginVertical: 5 }}>
                <Text style={{ flex: 1, }}>{item.id + '.'}</Text>
                <Text style={{ width: '60%' }}>{item.name}</Text>
                <Text style={{ color: '#FB8429' }}>{item.link}</Text>
            </View>
        </View>
    );

    return (
        <View style={styles.rating}>
            <View style={styles.body}>
                <View style={{ width: 54, height: 40 }}>
                    <Image
                        source={{ uri: "https://i.ibb.co/4pFhggT/NQS-Rating.png" }}
                        style={{
                            height: 36,
                            width: 47.25,
                            resizeMode: 'contain',
                        }}
                    />
                </View>

                <View style={styles.content}>
                    <Text style={styles.title}>NQS Rating</Text>
                    <Text style={styles.subtitle}>Last reviewed 21 September 2017</Text>
                </View>
                <TouchableOpacity onPress={toggleOpen} activeOpacity={0.6} style={styles.button}>
                    {!isOpen ? <FontAwesome name={'chevron-down'} size={14} color="black" /> : <FontAwesome name={'chevron-up'} size={14} color="black" />}
                </TouchableOpacity>
            </View>
            <View style={[styles.list, !isOpen ? styles.hidden : undefined]}>
                <View style={styles.listNQS}>
                    <View style={styles.nqsRating}>
                        <Image source={{ uri: 'https://reactjs.org/logo-og.png' }} style={styles.nqsImage} />
                        <Text style={{ color: '#857E7F', marginVertical: 10 }}>Last Reviewed 01 December 2019</Text>
                    </View>
                    <FlatList
                        data={data}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                    />
                </View>
            </View>
        </View>

    )
}



const ReviewComponent = () => {
    return (
        <SafeAreaView>
            <ReviewUserComponent />
            <NQSRatingComponent />
        </SafeAreaView>
    );
}

export { RatingComponent, ReviewUserComponent, NQSRatingComponent, ReviewComponent };





