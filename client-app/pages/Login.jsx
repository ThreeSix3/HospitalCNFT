import React, {useState,useEffect} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import Input from '../components/Input';
import { encriptar,iniciarSesion } from '../functions/dbFunctions';
import { storeData, getData } from '../functions/asyncStorageFunctions';

export default function Login({onLayout, setToken}){
    const [isCheked, setIsCheked] = useState(false)
    const [nombre_usuario, setNombre_usuario] = useState("");
    const [contrasena, setContrasena] = useState("");
    
    const Header = () => {
        return (
        <View style={styles.header}>
            <Text style={styles.headerText}>Hospital</Text>
        </View>)
    }
   
     async function validarDatosSesion() {

        try{
            await iniciarSesion(nombre_usuario, contrasena).then(async (data)=>{
                isCheked ? await storeData('sesion', 1) : '';
                setToken(data);
                await storeData('token', data);
            })
        }catch(e){
            console.log("Error al iniciar sesión: "+e);
        }
    }
    
    return (
        <View style={styles.container} onLayout={onLayout}>
            <Header/>
            <Image style={styles.backgroundImage} source={require("../assets/images/Cargando.png")}/>
            <View style={styles.boxContainer}>
                <View style={styles.boxIniciaSesion}>
                    <Text style={styles.textIniciaSesion}>Inicia Sesion</Text>
                </View>
            
                <View style={styles.boxUsuario}>
                    <Image style={styles.imagen} source={require("../assets/images/Usuario.png")}/>
                    <Input placeholder={"Usuario"} estilo={"TextInputLogin"} contraseña={false} handleChange={setNombre_usuario} type={"text"} />
                </View>

                <View style={styles.boxContraseña}>
                    <Image style={styles.imagen} source={require("../assets/images/Contraseña.png")}/>
                    <Input placeholder={"Contraseña"} estilo={"TextInputLogin"} contraseña={false} handleChange={setContrasena} type={"text"} />
                </View>

                <View style={styles.boxIngresar}>
                    <TouchableOpacity onPress={()=>{
                        validarDatosSesion();
                    }}>
                        <Text style={styles.textIngresar}>INGRESAR</Text>
                    </TouchableOpacity>
                </View>
                
                <View style={styles.boxMantenerSesionIniciada}>
                    <TouchableOpacity onPress={() => setIsCheked(!isCheked)}>
                        {isCheked ? (
                            <Image style={styles.checkBox} source={require("../assets/images/cheked.png")}/>
                        ) : (
                            <Image style={styles.checkBox} source={require("../assets/images/uncheked.png")}/>  
                        )}
                    </TouchableOpacity>
                    <Text style={styles.textMantenerSesionIniciada}>Mantener sesion iniciada</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#70FBD8",
        alignItems:"center"
    },
    backgroundImage: {
        position: "absolute",
        opacity: 0.7,
        top: "30%",
        height: "50%",
        width:"70%"
    },
    header: {
        width: "100%",
        height: "30%",
        alignItems: "center",
        justifyContent: "center",
    },
    headerText: {
        fontSize: 85,
        color: "#FFF",
        textShadowColor: "#000",
        textShadowOffset: {
            width:0,
            height:3
        },
        textShadowRadius: 4,
        fontFamily:"Montserrat-Bold"
    },
    boxContainer: {
        width: "90%",
        height: "50%",
        backgroundColor: "rgba(255,255,255,0.75)",
        padding: 5, 
        alignItems: "center",
        justifyContent: "center",
        flexDirection:"row",
        flexWrap:"wrap",
        alignSelf: "center",
        borderRadius: 40,
    },
    boxUsuario: {
        width: "80%",
        height: "11%",
        padding: 5,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        borderWidth: 1,
        borderRadius: 15,
        backgroundColor: "rgba(255,255,255,0.8)",
    },
    boxContraseña: {
        width: "80%",
        height: "11%",
        padding: 5,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        borderWidth: 1,
        borderRadius: 15,
        backgroundColor: "rgba(255,255,255,0.8)",
        marginTop: 40
    },
    boxIniciaSesion: {
        width: "100%",
        height: "25%",
        padding: 5,
        alignItems: "center",
        justifyContent: "center",
    },
    textIniciaSesion: {
        fontSize: 40,
        color:"#333",
        
        fontFamily:"Montserrat-Bold"
    },
    boxIngresar: {
        width: "80%",
        height: "12%",
        padding: 5,
        alignItems: "center",
        justifyContent: "center",
        flexDirection:"row",
        borderWidth: 2,
        borderRadius: 15,
        backgroundColor: "#5FFFD6",
        margin: 20
    },
    textIngresar: {
        fontSize:24,
        fontFamily:"Montserrat-Bold"
    },
    boxMantenerSesionIniciada: {
        width: "80%",
        height: "20%",
        padding: 5,
        alignItems: "center",
        flexDirection: "row",
        justifyContent:"center",
    },
    textMantenerSesionIniciada: {
        fontSize: 18,
        fontFamily:"Montserrat"
    },
    imagen: {
        width: "9%",
        height: "100%",
    },
    textInput: {
        width: "83%",
        textAlign: "center",
        fontSize: 20,
        fontFamily:"Montserrat",
    },
    checkBox:{
        width:30,
        height:30,
        margin:5
    },
})

