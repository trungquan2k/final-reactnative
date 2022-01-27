import React, { useState } from "react";
import { View, StyleSheet, Text, TextInput, TouchableOpacity, Modal, Image } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../auth/firebase";

const ForgotPasswordScreen = ({ navigation }) => {

    const [email, setEmail] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [loading, setLoading] = useState(false);


    const forgotPassword = (Email) => {
        setModalVisible(false)
        setLoading(true)
        sendPasswordResetEmail(auth, Email, null)
            .then(() => {
                setModalVisible(true);
                setLoading(false);
            })
            .catch(function (e) {
                setLoading(false);
                setModalVisible(false);
            });
    };
    return (
        <View style={styles.container}>
            <View style={{ paddingVertical: 20 }}>
                <Ionicons name={'arrow-back-outline'} size={25} color="#857E7F" onPress={() => { navigation.goBack() }} />
            </View>
            <Text style={styles.title}>Forgot Password</Text>
            <Text style={styles.subtitle}>Please enter your email address to get reset link</Text>
            <View style={styles.input}>
                <Text styles={styles.label}>Email</Text>
                <TextInput
                    label="Forgot password"
                    placeholder='Enter your email'
                    value={email}
                    onChangeText={text => setEmail(text)}
                />
            </View>

            <TouchableOpacity
                disabled={loading}
                activeOpacity={0.8}
                style={styles.button}
                onPress={() => forgotPassword(email)}
            >
                {loading ? (
                    <Text style={{ color: "white" }}>{'...Loading'}</Text>
                ) : (
                    <Text style={styles.buttonText}>Get Reset Link</Text>
                )}

            </TouchableOpacity>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <View style={styles.backgroundImage}>
                            <Image
                                style={{
                                    resizeMode: "contain",
                                    height: 80,
                                    width: 80,

                                }}
                                source={require('../../assets/images/logoapp.png')}
                            />
                        </View>
                        <Text style={styles.title}>Success</Text>
                        <Text style={styles.subtitle}>Reset link has been sent to "{email}"</Text>
                        <TouchableOpacity
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Text style={styles.textStyle}>Ok</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },
    title: {
        lineHeight: 32,
        fontSize: 24,
        fontWeight: "bold"
    },
    subtitle: {
        lineHeight: 24,
        fontSize: 14,
    },
    input: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5,
        borderColor: 'gray',
        borderWidth: 1,
    },
    button: {
        backgroundColor: '#DB147F',
        width: '100%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 20
    },
    modalView: {
        margin: 20,
        marginTop: 100,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    backgroundImage: {
        width: 80,
        height: 80,

        borderRadius: 80,
    },
    buttonText: {
        color: "white",
        fontSize: 14,
        lineHeight: 24
    }
});

export default ForgotPasswordScreen;
