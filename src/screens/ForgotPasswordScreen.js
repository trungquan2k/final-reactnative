import React, { useState } from "react";
import { View, StyleSheet, Text, TextInput, TouchableOpacity, Modal, Image } from "react-native";

function ForgotPasswordScreen() {
    const [email, setEmail] = useState('');
    const [modalVisible, setModalVisible] = useState(false);

    const image = {
        uri: "https://i.ibb.co/HNDmKHP/logo-login.png",
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Forgot Password</Text>
            <Text style={styles.subtitle}>Please enter your email address to get reset link</Text>
            <TextInput
                label="Forgot password"
                placeholder='Enter your email'
                value={email}
                onChangeText={text => setEmail(text)}
                style={styles.input}
            />
            <TouchableOpacity
                onPress={() => setModalVisible(true)}
                style={styles.button}
            >
                <Text style={styles.buttonText}>Get Reset Link</Text>
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
                                    height: 40,
                                    width: 40,
                                    top: 20,
                                    left: 20,
                                }}
                                source={image}
                            />
                        </View>
                        <Text style={styles.title}>Success</Text>
                        <Text style={styles.subtitle}>Reset link has been sent to {email}</Text>
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
        backgroundColor: 'rgba(146, 226, 169, 0.32)',
        borderRadius: 80,
    },
    buttonText: {
        color: "white",
        fontSize: 14,
        lineHeight: 24
    }
});

export default ForgotPasswordScreen

