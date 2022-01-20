import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import React from 'react';
import PropTypes from 'prop-types'
const WButton = ({
    label,
    buttonColor = '#DB147F',
    textColor = '#ffffff',
    loading,
    disabled,
    onPress,
    height = 44,
    width = "80%",
    style = {},
}) => {
    return (
        <TouchableOpacity
            disabled={disabled}
            activeOpacity={0.8}
            style={[styles.touchable, { height, width, backgroundColor: buttonColor }, style]}
            onPress={onPress}
        >
            {loading ? (
                <Text style={{color:textColor}}>{'...Loading'}</Text>
            ) : (
                <Text style={[styles.textButton, { color: textColor }]}>{label} </Text>
            )}

        </TouchableOpacity>
    );
};

export default WButton;

WButton.PropTypes = {
    label: PropTypes.string,
    buttonColor: PropTypes.string,
    textColor: PropTypes.string,
    disabled: PropTypes.bool,
    loading: PropTypes.bool,
    style: PropTypes.any,
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onPress: PropTypes.func

}
const styles = StyleSheet.create({
    touchable: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 6,
        marginTop:10

    },
    textButton: {
        fontSize: 14,
        fontWeight: '700'
    }
})
