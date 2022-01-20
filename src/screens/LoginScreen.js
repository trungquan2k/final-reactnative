import React, { useEffect, useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { StyleSheet, TextInput, Text, TouchableOpacity, View, Image } from 'react-native'
import { auth } from '../auth/firebase'
import { Ionicons } from '@expo/vector-icons'
import AsyncStorageLib from '@react-native-async-storage/async-storage'

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [hidePass, setHidePass] = useState(true);
    const [errors, setErrors] = useState('');
    
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                navigation.replace('TabNavigation');
            }
        });
        return unsubscribe;
    }, []);

    const checkError = (err) => {
        switch (err) {
            case 'auth/missing-email':
                setErrors('Email is required');
                break;
            case 'auth/invalid-email':
                setErrors('Invalid email');
                break;
            case 'auth/internal-error':
                setErrors('Password is required');
                break;
            case 'auth/user-not-found':
                setErrors('User not found');
                break;
            case 'auth/wrong-password':
                setErrors('Incorrect password');
                break;
            default:
                break;
        }
    };

    const handleLogin = async () => {
        try {
            setLoading(true);
            const users = await signInWithEmailAndPassword(auth, email, password);
            const token = users.user.getIdToken();
            if (users) {
                setLoading(false);
                await AsyncStorageLib.setItem('token', token);
            }
        } catch (error) {
            setLoading(false)
            checkError(error.code);
        }
    }
    
    return (
        <View
            style={styles.container}
            behavior="padding"
        >
            <View >
                <Image
                    style={styles.image}
                    source={require("../../assets/images/logoapp.png")}
                />
            </View>
            <View style={styles.inputContainer}>
                <View style={styles.input}>
                    <Text styles={styles.label}>Email</Text>
                    <TextInput
                        label="Email"
                        placeholder='Enter Your Email'
                        value={email}
                        onChangeText={text => setEmail(text)}
                    />
                </View>
                <View style={styles.input}>
                    <Text styles={styles.label}>Password</Text>
                    <TextInput
                        placeholder="Enter Your Password"
                        value={password}
                        onChangeText={text => setPassword(text)}

                        secureTextEntry={hidePass ? true : false}
                    />
                </View>
                <Ionicons
                    style={styles.iconPass}
                    name={hidePass ? 'ios-eye-off-outline' : 'ios-eye-outline'}
                    size={20}
                    color="grey"
                    onPress={() => setHidePass(!hidePass)}
                />
                <Text style={styles.forgotPassword} onPress={() => { navigation.navigate("ForgotPassword") }}>Forgot password?</Text>
            </View>
            <TouchableOpacity
                disabled={loading}
                activeOpacity={0.8}
                style={styles.button}
                onPress={handleLogin}
            >
                {loading ? (
                    <Text style={{ color: "white" }}>{'...Loading'}</Text>
                ) : (
                    <Text style={styles.buttonText}>Login</Text>
                )}

            </TouchableOpacity>
            <View>
                <Text style={styles.contextFooter}>If you have trouble logging in to KindiCare CRM,{'\n'} please contact our Customer Care team. </Text>
            </View>
        </View>
    )
}

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    image: {
        resizeMode: "contain",
        height: 80,
        width: 80,
    },
    inputContainer: {
        width: '80%',
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
    forgotPassword: {
        textAlign: 'right',
        color: "#DB147F",
        fontSize: 14,
        marginTop: 10
    },
    iconPass: {
        position: 'absolute',
        top: 113,
        alignSelf: 'flex-end',
        right: 10
    },
    contextFooter: {
        position: 'absolute',
        top: 160,
        left: -150,
        alignItems: 'flex-end',
        textAlign: 'center',
        letterSpacing: 0.02,
        fontSize: 14,
        lineHeight: 24
    },
    label: {
        fontSize: 12,
        lineHeight: 16
    },
    button: {
        backgroundColor: '#DB147F',
        width: '80%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 10
    },
    buttonText: {
        color: "white",
        fontSize: 14,
        lineHeight: 24
    }
})