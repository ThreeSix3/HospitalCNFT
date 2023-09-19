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
        <TouchableOpacity style={styles.codigoAzul}>
            <Text style={styles.textModal}>CÓDIGO AZUL</Text>
            <Image source={require("../assets/images/modal.png")} style={styles.imageModal} />
        </TouchableOpacity> )
    }

    const NoAtendidos = () => {
        return (
        <TouchableOpacity style={styles.noAtendidos}>
            <Text style={styles.textModal}>No Atendidos</Text>
            <Image source={require("../assets/images/modal.png")} style={styles.imageModal} />
        </TouchableOpacity> )
    }

    const Atendidos = () => {
        return (
        <TouchableOpacity style={styles.atendidos}>
            <Text style={styles.textModal}>Atendidos</Text>
            <Image source={require("../assets/images/modal.png")} style={styles.imageModal} />
        </TouchableOpacity> )
    }
    async function cerrarSesion() {
        await deleteData('token');
        await deleteData('sesion');
        setToken({});
    }

    const Footer = () => {
        return (
        <View style={styles.footer}>
            <View style={styles.footerCircle}>
                <TouchableOpacity style={styles.imageButton}>
                    <Image style={styles.imageFooter} source={require("../assets/images/lupa.png")}/>
                </TouchableOpacity>
            </View>
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
        height:"12%",
        borderRadius:35,
        backgroundColor:"#F33",
        alignItems:"center",
        marginBottom:7,
        flexDirection:"row",
        justifyContent:"space-between",
        padding:5
    },
    noAtendidos: {
        width:"96%",
<<<<<<< Updated upstream
        height:"10%",
        borderRadius:25,
=======
        height:"12%",
        borderRadius:35,
>>>>>>> Stashed changes
        backgroundColor:"#07D5A1",
        alignItems:"center",
        justifyContent:"space-between",
        marginBottom:7,
        flexDirection:"row",
        padding:5
    },
    atendidos: {
        width:"96%",
<<<<<<< Updated upstream
        height:"10%",
        borderRadius:25,
=======
        height:"12%",
        borderRadius:35,
>>>>>>> Stashed changes
        backgroundColor:"#07D5A1",
        alignItems:"center",
        justifyContent:"space-between",
        marginBottom:7,
        flexDirection:"row",
        padding:5
    },
    footer: {
        height:"10%",
        width:"100%",
<<<<<<< Updated upstream
        backgroundColor:"#07D5A1",
        justifyContent:"center",
=======
>>>>>>> Stashed changes
        alignItems:"center",
        flexDirection:"row",
        justifyContent:"flex-end"
    },
    imageButton:{
        width:"30%",
        height:"60%",
        justifyContent:"center",
        alignItems:"center",
        margin:"5%"
    },
    imageFooter:{
        
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
    footerCircle:{
        width:80,
        height:80,
        borderRadius:40,
        backgroundColor:"#07D5A1",
        marginRight:20,
        marginBottom:20,
        justifyContent:"center",
        alignItems:"center"
    },
    textModal:{
        fontSize:40,
        fontFamily: "Montserrat-Bold",
        color:"#f8f8f8",
        marginLeft:"2%",
        textShadowColor: "#000",
        textShadowOffset: {
            width: 0,
            height: 1
        },
        textShadowRadius: 1,
    },
    imageModal:{
        marginRight:"3%"
    },
})