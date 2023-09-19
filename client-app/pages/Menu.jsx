import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { deleteData, getData } from '../functions/asyncStorageFunctions';

export default function Menu({navigation, setToken, onLayout}){
    
    const NavBar = () => {
        return (
        <View style={styles.navBar}>
            <Text style={styles.textNavBar}>Hospital</Text>
            <TouchableOpacity style={styles.imageNavBar} onPress={()=>{cerrarSesion();}}>
                <Image source={require("../assets/images/cerrarSesion.png")} style={{width: 50, height:50}}/>
            </TouchableOpacity>
        </View> )
    }

    const CodigoAzul = () => {
        return (
        <View style={styles.codigoAzul}>
            <Text>Codigo Azul</Text>
        </View> )
    }

    const NoAtendidos = () => {
        return (
        <View style={styles.noAtendidos}>
            <Text>NoAtendidos</Text>
        </View> )
    }

    const Atendidos = () => {
        return (
        <View style={styles.atendidos}>
            <Text>Atendidos</Text>
        </View> )
    }
    async function cerrarSesion() {
        await deleteData('token');
        await deleteData('sesion');
        setToken({});
    }

    const Footer = () => {
        return (
        <View style={styles.footer}>
            <TouchableOpacity style={styles.imageButton}>
                <Image style={styles.imageFooter} source={require("../assets/images/lupa.png")}/>
            </TouchableOpacity>
        </View> )
    }

    return (
        <View style={styles.container} onLayout={onLayout}>
            <NavBar/>
            <Image style={styles.backgroundImage} source={require("../assets/images/Cargando.png")}/>
            <View style={styles.content}>
                <CodigoAzul/>
                <NoAtendidos/>
                <Atendidos/>
            </View>
            <Footer/>
        </View>
    )
}







const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f8f8f8",
        alignItems:"center",
        flexDirection:"column"
    },
    backgroundImage: {
        position: "absolute",
        opacity: 0.2,
        top: "26%",
        height: "50%",
        width:"70%"
    },
    navBar: {
        height: "13%",
        width: "100%",
        backgroundColor:"#07D5A1",
        alignItems:"center",
        marginBottom:15,
        flexDirection:"row",
        justifyContent:"space-between",
        paddingTop:25,
    },
    content: {
        flex: 1,
        alignItems: 'center',
        width:"100%",
    },
    codigoAzul:{
        width:"96%",
        height:"10%",
        borderRadius:25,
        backgroundColor:"#F33",
        alignItems:"center",
        justifyContent:"center",
        marginBottom:7,
    },
    noAtendidos: {
        width:"96%",
        height:"10%",
        borderRadius:25,
        backgroundColor:"#07D5A1",
        alignItems:"center",
        justifyContent:"center",
        marginBottom:7,
    },
    atendidos: {
        width:"96%",
        height:"10%",
        borderRadius:25,
        backgroundColor:"#07D5A1",
        alignItems:"center",
        justifyContent:"center",
        marginBottom:7,
    },
    footer: {
        height:"10%",
        width:"100%",
        backgroundColor:"#07D5A1",
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"row"
    },
    imageButton:{
        width:"30%",
        height:"60%",
        justifyContent:"center",
        alignItems:"center",
        margin:"5%"
    },
    imageFooter:{
        width:"50%",
        height:"100%"
    },
    textNavBar:{
        fontSize:40,
        fontFamily: "Montserrat-Bold",
        color:"#f8f8f8",
        margin:10,

        textShadowColor: "#000",
        textShadowOffset: {
            width: 0,
            height: 1
        },
        textShadowRadius: 1,
    },
    imageNavBar:{
        margin:10,
    },

})