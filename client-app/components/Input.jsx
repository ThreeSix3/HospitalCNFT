import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
const Input = ({ placeholder, estilo, contraseña, handleChange, type }) => {
    return (
        <TextInput
            style={[styles[estilo]]}
            placeholder={placeholder}
            secureTextEntry={contraseña}
            onChangeText={handleChange}
            inputMode={type}
            placeholderTextColor="#A9A9A9"
        />
    );
};

const styles = StyleSheet.create({
    TextInputLogin: {
        width: "83%",
        textAlign: "center",
        fontSize: 20,
        fontFamily:"Montserrat",
    }
});

export default Input;