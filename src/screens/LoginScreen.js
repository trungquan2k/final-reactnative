import React, { useEffect, useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { StyleSheet, TextInput, Text, TouchableOpacity, View, Image } from 'react-native'
import { auth } from '../auth/firebase'

import { Ionicons } from '@expo/vector-icons'
import WButton from '../components/WButton'

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [hidePass, setHidePass] = useState(true);
    // console.log(auth.currentUser)
  
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                navigation.replace('TabNavigation');
            }
        });
        return unsubscribe;
    }, []);


    const handleLogin = async () => {
        setLoading(true)
        await signInWithEmailAndPassword(auth, email, password)
            .then(userCredentials => {
                const user = userCredentials.user;
                setLoading(false)
            })
            .catch(error => {
                setLoading(false)
                console.log(error.message)
                alert(error?.message)
            })
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
                <TextInput
                    label="Email"
                    placeholder='Email'
                    value={email}
                    onChangeText={text => setEmail(text)}
                    style={styles.input}
                />
                <TextInput
                    placeholder="Password"
                    value={password}
                    onChangeText={text => setPassword(text)}
                    style={styles.input}
                    secureTextEntry={hidePass ? true : false}
                />
                <Ionicons
                    style={styles.iconPass}
                    name={hidePass ? 'ios-eye-off-outline' : 'ios-eye-outline'}
                    size={20}
                    color="grey"
                    onPress={() => setHidePass(!hidePass)}
                />
                <Text style={styles.forgotPassword} onPress={() => { navigation.navigate("ForgotPassword") }}>Forgot password?</Text>
            </View>
            <WButton
                loading={loading}
                disabled={loading}
                label="Login"
                onPress={handleLogin}

            />
            {/* <View style={styles.buttonContainer}>
                <TouchableOpacity
                    onPress={handleLogin}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
            </View> */}
            <View style={{}}>
                {/* <Text>If you have trouble logging in to KindiCare CRM,{'\n'} please contact our Customer Care team.</Text> */}
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
        top: 75,
        alignSelf:'flex-end',
        right:10
    }
})