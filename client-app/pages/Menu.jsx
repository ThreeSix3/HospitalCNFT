import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { deleteData, getData } from '../functions/asyncStorageFunctions';
import Animated, { withTiming, useSharedValue, useAnimatedStyle} from 'react-native-reanimated';
import Alert from "../components/Alert";

export default function Menu({navigation, setToken, onLayout}){
    const [confirmacionCerrarSesion, setConfirmacionCerrarSesion] = useState(false);
    const opacityConfirmacionCerrarSesion = useSharedValue(1);
    const opacityBoxConfirmacionCerrarSesion = useAnimatedStyle(() => {
    return {
        opacity: opacityConfirmacionCerrarSesion.value,
    };
    });
    const hide = () => {
    opacityConfirmacionCerrarSesion.value = withTiming(0, { duration: 400 });
    setTimeout(() => {
        setConfirmacionCerrarSesion(false);
    }, 400);
  };
  const show = () => {
    opacityConfirmacionCerrarSesion.value = withTiming(1, { duration: 300 });
    setConfirmacionCerrarSesion(true);
  };
    const codigoAzulVisible = useSharedValue(false)

    const toggleCodigoAzul = () => {
        codigoAzulVisible.value = !codigoAzulVisible.value
    }
    
    const codigoAzulStyle = useAnimatedStyle(() => {
        return {
            height: withTiming(codigoAzulVisible.value ? 150 : 0, { duration: 300 }),
            opacity: withTiming(codigoAzulVisible.value ? 1 : 0, { duration: 300 }),
        }

    })

    const NavBar = () => {
        return (
        <View style={styles.navBar}>
            <Text style={styles.textNavBar}>Hospital</Text>
            <TouchableOpacity style={styles.imageNavBar} onPress={()=>{/*cerrarSesion();*/setConfirmacionCerrarSesion(true)}}>
                <Image source={require("../assets/images/cerrarSesion.png")} style={{width: 50, height:50}}/>
            </TouchableOpacity>
        </View> )
    }

    const CodigoAzul = () => {
        return (
        <TouchableOpacity style={styles.codigoAzul} onPress={toggleCodigoAzul}>
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
            <Alert content={
                <>
                    <Text style={{ fontFamily: "Montserrat-Bold", fontSize: 35, textAlign: 'center', color:'#333333' }}>
                        ¿Estás seguro/a de cerrar sesión?
                    </Text>
                    <TouchableOpacity onPress={()=>{hide(); setTimeout(()=>{cerrarSesion()},400)}} style={{width: '80%', marginTop: '10%', backgroundColor: 'rgba(95, 255, 214, 1)', height: 50, display: 'flex', justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderRadius: 15}}>
                        <Text style={{ fontFamily: "Montserrat-Bold", fontSize: 22, textAlign: 'center' }}>Confirmar</Text>
                    </TouchableOpacity>
                </>
            }   
            hide={hide}
            state={confirmacionCerrarSesion}
            stateOpacity={opacityBoxConfirmacionCerrarSesion}
            />
            <NavBar/>
            <Image style={styles.backgroundImage} source={require("../assets/images/Cargando.png")}/>
            <View style={styles.content}>
                
                <CodigoAzul/>
                
                <Animated.View style={[codigoAzulStyle]}>
                    <ScrollView style={styles.scrollView}>
                        <View style={styles.animationBoxCodigoAzul}>
                            <Text style={styles.ubicacionText}>Quirofano 8</Text>
                            <Text style={styles.atendidoText}>NO ATENDIDO</Text>
                            <Text style={styles.areaText}>Area de emergencias</Text>
                            <TouchableOpacity style={styles.marcarAtendidoBox}><Text style={styles.marcarAtendidoText}>Marcar como atendido</Text></TouchableOpacity>
                        </View>
                        <View style={styles.animationBoxCodigoAzul}>
                            <Text style={styles.ubicacionText}>Quirofano 8</Text>
                            <Text style={styles.atendidoText}>NO ATENDIDO</Text>
                            <Text style={styles.areaText}>Area de emergencias</Text>
                            <TouchableOpacity style={styles.marcarAtendidoBox}><Text style={styles.marcarAtendidoText}>Marcar como atendido</Text></TouchableOpacity>
                        </View>
                    </ScrollView>
                </Animated.View>
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
        height:"12%",
        borderRadius:35,
        backgroundColor:"#07D5A1",
        alignItems:"center",
        justifyContent:"space-between",
        marginBottom:7,
        flexDirection:"row",
        padding:5
    },
    atendidos: {
        width:"96%",
        height:"12%",
        borderRadius:35,
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
        justifyContent:"center",
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
    animationBoxCodigoAzul:{
        width:"100%",
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#07D5A1",
        borderRadius:25,
        marginBottom:7,
    },
    ubicacionText:{
        fontFamily:"Montserrat-Bold",
        color:"#f8f8f8",
        fontSize:20
    },
    atendidoText:{
        fontFamily:"Montserrat-Bold",
        color:"#f8f8f8",
        fontSize:32
    },
    areaText:{
        fontFamily:"Montserrat-Bold",
        color:"#f8f8f8"
    },
    marcarAtendidoText:{
        fontFamily:"Montserrat-Bold",
        color:"#f8f8f8"
    },
    marcarAtendidoBox:{

    },
    scrollView:{
    
    },
})