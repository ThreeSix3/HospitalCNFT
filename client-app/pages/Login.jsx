import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import Input from "../components/Input";
import { iniciarSesion } from "../functions/dbFunctions";
import { storeData, getData } from "../functions/asyncStorageFunctions";

export default function Login({ onLayout, setToken }) {
  const [isCheked, setIsCheked] = useState(false);
  const [nombre_usuario, setNombre_usuario] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [errorVisible, setErrorVisible] = useState(false);
  const opacityErrorVisible = useSharedValue(1);
  const opacityBoxErrorVisible = useAnimatedStyle(() => {
    return {
      opacity: opacityErrorVisible.value,
    };
  });
  const hide = () => {
    opacityErrorVisible.value = withTiming(0, { duration: 400 });
    setTimeout(() => {
      setErrorVisible(false);
    }, 400);
  };
  const show = () => {
    opacityErrorVisible.value = withTiming(1, { duration: 200 });
    setErrorVisible(true);
  };
  const Header = () => {
    return (
      <View style={styles.header}>
        <Text style={styles.headerText}>Hospital</Text>
      </View>
    );
  };

  async function validarDatosSesion() {
    try {
      const data = await iniciarSesion(nombre_usuario, contrasena);

      if (typeof data === "object" && data.hasOwnProperty("token")) {
        if (isCheked) {
          await storeData("sesion", 1);
        }
        setToken(data);
        await storeData("token", data.token); // Almacenar solo el valor del token
      } else {
        throw new Error("Los datos ingresados no son válidos");
      }
    } catch (e) {
      show();
    }
    
  }
  useEffect(() => {
    if (errorVisible) {
      setTimeout(() => {
        hide();
      }, 2500);
    }
  }, [errorVisible]);
  return (
    <View style={styles.container} onLayout={onLayout}>
      <Header />
      <Animated.View
        style={[
          {
            position: "absolute",
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            width: "100%",
            height: Dimensions.get("window").height + 100,
            zIndex: 2,
            display: errorVisible ? "flex" : "none",
            justifyContent: "center",
            alignItems: "center",
          },
          opacityBoxErrorVisible,
        ]}
      >
        <View
          style={{
            width: "85%",
            height: "35%",
            backgroundColor: "white",
            borderRadius: 30,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 10,
          }}
        >
          <View style={{ position: "absolute", left: "90%", bottom: "90%" }}>
            <TouchableOpacity
              onPress={() => {
                hide();
              }}
            >
              <Image
                source={require("../assets/images/cerrarNegro.png")}
                style={{ width: 25, height: 25 }}
              />
            </TouchableOpacity>
          </View>
          <Image
            source={require("../assets/images/cerrar.webp")}
            style={{ width: 100, height: 100 }}
          />
          <Text style={{ fontFamily: "Montserrat-Bold", fontSize: 35 }}>
            Error
          </Text>
          <Text
            style={{ fontFamily: "Montserrat", fontSize: 20, marginTop: 20 }}
          >
            Los datos son incorrectos
          </Text>
        </View>
      </Animated.View>
      <Image
        style={styles.backgroundImage}
        source={require("../assets/images/Cargando.png")}
      />
      <View style={styles.boxContainer}>
        <View style={styles.boxIniciaSesion}>
          <Text style={styles.textIniciaSesion}>Inicia Sesion</Text>
        </View>

        <View style={styles.boxUsuario}>
          <Image
            style={styles.imagen}
            source={require("../assets/images/Usuario.png")}
          />
          <Input
            placeholder={"Usuario"}
            estilo={"TextInputLogin"}
            contraseña={false}
            handleChange={setNombre_usuario}
            type={"text"}
          />
        </View>

        <View style={styles.boxContraseña}>
          <Image
            style={styles.imagen}
            source={require("../assets/images/Contraseña.png")}
          />
          <Input
            placeholder={"Contraseña"}
            estilo={"TextInputLogin"}
            contraseña={false}
            handleChange={setContrasena}
            type={"text"}
          />
        </View>

        <View style={styles.boxIngresar}>
          <TouchableOpacity
            onPress={() => {
              validarDatosSesion();
            }}
          >
            <Text style={styles.textIngresar}>INGRESAR</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.boxMantenerSesionIniciada}>
          <TouchableOpacity onPress={() => setIsCheked(!isCheked)}>
            {isCheked ? (
              <Image
                style={styles.checkBox}
                source={require("../assets/images/cheked.png")}
              />
            ) : (
              <Image
                style={styles.checkBox}
                source={require("../assets/images/uncheked.png")}
              />
            )}
          </TouchableOpacity>
          <Text style={styles.textMantenerSesionIniciada}>
            Mantener sesion iniciada
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#70FBD8",
    alignItems: "center",
  },
  backgroundImage: {
    position: "absolute",
    opacity: 0.7,
    top: "30%",
    height: "50%",
    width: "70%",
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
      width: 0,
      height: 3,
    },
    textShadowRadius: 4,
    fontFamily: "Montserrat-Bold",
  },
  boxContainer: {
    width: "90%",
    height: Dimensions.get("window").height / 2,
    backgroundColor: "rgba(255,255,255,0.75)",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
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
    marginTop: 40,
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
    color: "#333",

    fontFamily: "Montserrat-Bold",
  },
  boxIngresar: {
    width: "80%",
    height: "12%",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    borderWidth: 2,
    borderRadius: 15,
    backgroundColor: "#5FFFD6",
    margin: 20,
  },
  textIngresar: {
    fontSize: 24,
    fontFamily: "Montserrat-Bold",
  },
  boxMantenerSesionIniciada: {
    width: "80%",
    height: "20%",
    padding: 5,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  textMantenerSesionIniciada: {
    fontSize: 18,
    fontFamily: "Montserrat",
  },
  imagen: {
    width: "9%",
    height: "100%",
  },
  textInput: {
    width: "83%",
    textAlign: "center",
    fontSize: 20,
    fontFamily: "Montserrat",
  },
  checkBox: {
    width: 30,
    height: 30,
    margin: 5,
  },
});
