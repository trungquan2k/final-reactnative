import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const CardContentDashBoard = (props) => {
    return (
        <View style={styles.viewContent}>
            <View style={styles.card} >
                <View style={styles.leftCart} >
                    <View style={{ flexDirection: 'row' , alignItems:'center'}}>
                        <Image
                            source={{uri:props.imgUri}}
                            style={{
                                height: 30,
                                width: 30,
                                resizeMode: 'contain',
                            }}
                        />
                        <Text style={{ marginLeft: 16, fontSize: 16, fontWeight: 'bold' }}>{props.headerLeft}</Text>
                    </View>
                    <Text style={styles.textContent}>{props.contentLeft1}</Text>
                    <Text style={styles.textContent}>{props.contentLeft2}</Text>
                    <Text style={styles.textContent}>{props.contentLeft3}</Text>
                </View>
                <View style={styles.rightCard}>
                    <Text style={{ color: props.color, fontSize: 16, fontWeight: 'bold'}}>{props.headerRight}</Text>
                    <Text style={styles.textContent}>{props.contentRight1}</Text>
                    <Text style={styles.textContent}>{props.contentRight2}</Text>
                    <Text style={styles.textContent}>{props.contentRight3}</Text>
                </View>
            </View>
        </View>

    )
}

export default CardContentDashBoard

const styles = StyleSheet.create({
    viewContent: {
        padding: 20
    },
    card: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0,
        shadowRadius: 4.65,
        elevation: 1,
        height: 214,
        flexGrow: 0,
        flexDirection: "row",
        width: "100%",
        backgroundColor: "white",
        flexWrap: "wrap",
        borderColor: "black",
        borderBottomColor: '#DB147F',
        // borderTopRightRadius: 16,
        // borderTopLeftRadius: 16,
        borderRadius:16,
        //position
        position: 'relative',
        bottom: 50,
        padding: 16,
        alignItems:'center'

    },
    leftCart: {
        flex: 1,
        alignItems: "flex-start",
    },
    rightCard: {
        alignItems: "flex-end",
    },
    textContent: { 
        color: "black", 
        fontSize: 16, 
        lineHeight: 24, 
        paddingVertical: 15,
        justifyContent: 'space-between'
    }
})

{/* <View style={styles.leftCart} >
                    <View style={{flexDirection:'row'}}>
                        <Ionicons name="document-text-outline" size={20} color="#FB8429" />
                        <Text style={{marginLeft:16, fontSize:16, fontWeight:'bold'}}>Aplications</Text>
                    </View>
                    <Text style={styles.textContent}>Open Application Value</Text>
                    <Text style={styles.textContent}>Total Waitlisted</Text>
                    <Text style={styles.textContent}>Waitlist Value</Text>
                    
                </View>
                <View style={styles.rightCard}>
                    <Text style={{ color: "#FB8429",fontSize:16, fontWeight:'bold' }}>17</Text>
                    <Text style={styles.textContent}>116,688,8</Text>
                    <Text style={styles.textContent}>3</Text>
                    <Text style={styles.textContent}>$29,749 p.a</Text>
                </View> */}