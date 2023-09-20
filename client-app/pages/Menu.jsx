import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Dimensions } from "react-native";
import { deleteData, getData } from "../functions/asyncStorageFunctions";
import Animated, { useSharedValue, withTiming, Easing, useAnimatedStyle, withRepeat, withSequence } from "react-native-reanimated";
import Alert from "../components/Alert";
import { obtenerLlamados, obtenerLlamadosPorEnfermero, marcarLlamadoComoAtendido, obtenerTodosLosLlamados } from "../functions/dbFunctions";

export default function Menu({ navigation, setToken, onLayout, id_enfermero }) {
  const [codigoAzulVisibleHook, setCodigoAzulVisibleHook] = useState(false);
  const [noAtendidosEnfermero, setNoAtendidosEnfermero] = useState([]);
  const [atendidosEnfermero, setAtendidosEnfermero] = useState([]);
  const [noAtendidosHook, setNoAtendidosHook] = useState(false);
  const [atendidosHook, setAtendidosHook] = useState(false);
  const [heightCard, setHeightCard] = useState("");
  const [heightCardNoAtendidos, setHeightCardNoAtendidos] = useState("");
  const [heightCardAtendidos, setHeightCardAtendidos] = useState("");
  const [codigoAzulLlamados, setCodigoAzulLlamados] = useState([]);
  const [confirmacionCerrarSesion, setConfirmacionCerrarSesion] = useState(false);
  async function renderizarLlamadosCodigoAzul() {
    await obtenerLlamados().then((data) => {
      setCodigoAzulLlamados(data);
    });
  }
  async function renderizarLlamadosPorEnfermeroNoAtendidos() {
    if(id_enfermero !== null){
      await obtenerLlamadosPorEnfermero(id_enfermero, 0).then((data) => {
        setNoAtendidosEnfermero(data);
      });
    }else{
      await obtenerTodosLosLlamados().then((data) => {
        setNoAtendidosEnfermero(data);
      });
    }
  }
  async function renderizarLlamadosPorEnfermeroAtendidos() {
    await obtenerLlamadosPorEnfermero(id_enfermero, 1).then((data) => {
      setAtendidosEnfermero(data);
    });
  }
  useEffect(() => {
    renderizarLlamadosCodigoAzul();
    renderizarLlamadosPorEnfermeroNoAtendidos();
    renderizarLlamadosPorEnfermeroAtendidos();
  }, [codigoAzulVisibleHook, noAtendidosHook, atendidosHook]);
  useEffect(() => {
    if (codigoAzulVisible) {
      if (codigoAzulLlamados.length === 1) {
        setHeightCard("40%");
      } else if (codigoAzulLlamados.length === 2) {
        setHeightCard("100.5%");
      } else if (codigoAzulLlamados.length === 0) {
        setHeightCard("0%");
      } else {
        setHeightCard("87%");
      }
    } else {
      setHeightCard("0%");
    }

    if (noAtendidosHook && id_enfermero !== null) {
      if (noAtendidosEnfermero.length === 1) {
        setHeightCardNoAtendidos("30%");
      } else if (noAtendidosEnfermero.length !== 0) {
        setHeightCardNoAtendidos("60%");
      } else {
        setHeightCardNoAtendidos("0%");
      }
    }else if(id_enfermero !== null){
      setHeightCardNoAtendidos("0%");
    }else{
      setHeightCardNoAtendidos("70%");//aca cambias la altura del scrollview cuando sos admin2
    }

    if(atendidosHook){
      if (atendidosEnfermero.length !== 0) {
        setHeightCardAtendidos("87%");
      } else {
        setHeightCardAtendidos("0%");
      }
    }else {
      setHeightCardAtendidos("0%");
    }
    
  }, [codigoAzulLlamados, atendidosEnfermero, noAtendidosEnfermero, codigoAzulVisibleHook, noAtendidosHook, atendidosHook]);

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
  const codigoAzulVisible = useSharedValue(false);

  const toggleCodigoAzul = () => {
    setAtendidosHook(false);
    atendidos.value = false;
    setNoAtendidosHook(false);
    noAtendidos.value = false;
    setCodigoAzulVisibleHook(!codigoAzulVisibleHook);
    codigoAzulVisible.value = !codigoAzulVisible.value;
  };

  const codigoAzulStyle = useAnimatedStyle(() => {
    return {
      height: withTiming(codigoAzulVisible.value ? heightCard : 0, {
        duration: 300,
      }),
      opacity: withTiming(codigoAzulVisible.value ? 1 : 0, { duration: 300 }),
    };
  });

  const noAtendidos = useSharedValue(false);

  const toggleNoAtendidos = () => {
    setAtendidosHook(false);
    atendidos.value = false;
    setCodigoAzulVisibleHook(false);
    codigoAzulVisible.value = false;
    setNoAtendidosHook(!noAtendidosHook);
    noAtendidos.value = !noAtendidos.value;
  };

  const noAtendidosStyle = useAnimatedStyle(() => {
    return {
      height: withTiming(noAtendidos.value ? heightCardNoAtendidos : 0, { duration: 300 }),
      opacity: withTiming(noAtendidos.value ? 1 : 0, { duration: 300 }),
    };
  });

  const atendidos = useSharedValue(false);

  const toggleAtendidos = () => {
    setNoAtendidosHook(false);
    noAtendidos.value = false;
    setCodigoAzulVisibleHook(false);
    codigoAzulVisible.value = false;
    setAtendidosHook(!atendidosHook);
    atendidos.value = !atendidos.value;
  };

  const atendidosStyle = useAnimatedStyle(() => {
    return {
      height: withTiming(atendidos.value ? "60%" : 0, {
        duration: 300,
      }),
      opacity: withTiming(atendidos.value ? 1 : 0, { duration: 300 }),
    };
  });
  const NavBar = () => {
    return (
      <View style={styles.navBar}>
        <Text style={styles.textNavBar}>Llamados</Text>
        <TouchableOpacity
          style={styles.imageNavBar}
          onPress={() => {
            /*cerrarSesion();*/ setConfirmacionCerrarSesion(true);
          }}
        >
          <Image source={require("../assets/images/cerrarSesion.png")} style={{ width: 50, height: 50 }} />
        </TouchableOpacity>
      </View>
    );
  };

  const CodigoAzul = () => {
    return (
      <TouchableOpacity style={styles.codigoAzul} onPress={toggleCodigoAzul}>
        <Text style={styles.textModal}>CÓDIGO AZUL</Text>
        <Image
          source={!codigoAzulVisibleHook ? require("../assets/images/modal.png") : require("../assets/images/modalInvertido.png")}
          style={styles.imageModal}
        />
      </TouchableOpacity>
    );
  };

  const NoAtendidos = () => {
    return (
      <TouchableOpacity style={styles.noAtendidos} onPress={toggleNoAtendidos}>
        <Text style={styles.textModal}>No Atendidos</Text>
        <Image
          source={!noAtendidosHook ? require("../assets/images/modal.png") : require("../assets/images/modalInvertido.png")}
          style={styles.imageModal}
        />
      </TouchableOpacity>
    );
  };

  const Atendidos = () => {
    return (
      <TouchableOpacity style={styles.noAtendidos} onPress={toggleAtendidos}>
        <Text style={styles.textModal}>Atendidos</Text>
        <Image
          source={!atendidosHook ? require("../assets/images/modal.png") : require("../assets/images/modalInvertido.png")}
          style={styles.imageModal}
        />
      </TouchableOpacity>
    );
  };
  async function cerrarSesion() {
    await deleteData("token");
    await deleteData("sesion");
    setToken({});
  }
  async function setearAtendido(id_llamado) {
    await marcarLlamadoComoAtendido(id_llamado);
    renderizarLlamadosCodigoAzul();
    renderizarLlamadosPorEnfermeroNoAtendidos();
    renderizarLlamadosPorEnfermeroAtendidos();
  }
  useEffect(()=>{
    setTimeout(() => {
      toggleCodigoAzul()
    }, 1000); 
  },[])
  return (
    <View style={styles.container} onLayout={onLayout}>
      <Alert
        content={
          <>
            <Text
              style={{
                fontFamily: "Montserrat-Bold",
                fontSize: 35,
                textAlign: "center",
                color: "#333333",
              }}
            >
              ¿Estás seguro/a de cerrar sesión?
            </Text>
            <TouchableOpacity
              onPress={() => {
                hide();
                setTimeout(() => {
                  cerrarSesion();
                }, 400);
              }}
              style={{
                width: "80%",
                marginTop: "10%",
                backgroundColor: "rgba(95, 255, 214, 1)",
                height: 50,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderWidth: 1,
                borderRadius: 15,
              }}
            >
              <Text
                style={{
                  fontFamily: "Montserrat-Bold",
                  fontSize: 22,
                  textAlign: "center",
                }}
              >
                Confirmar
              </Text>
            </TouchableOpacity>
          </>
        }
        hide={hide}
        state={confirmacionCerrarSesion}
        stateOpacity={opacityBoxConfirmacionCerrarSesion}
      />
      <NavBar />
      <Image style={styles.backgroundImage} source={require("../assets/images/Cargando.png")} />
      <View style={styles.content}>
        <CodigoAzul />

        <Animated.View style={[codigoAzulStyle]}>
          <ScrollView
            style={styles.scrollView}
            contentContainerStyle={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {codigoAzulLlamados.map((llamado) => (
              <View style={styles.animationBoxCodigoAzul} key={llamado.id_llamado}>
                <View
                  style={[
                    {
                      height: 60,
                      width: 60,
                      backgroundColor: "white",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: 100,
                    },
                  ]}
                >
                  <Image source={require("../assets/images/emergencia.webp")} style={{ width: 50, height: 50 }} />
                </View>
                <Text style={styles.atendidoText}>{!llamado.estado_llamado ? "NO ATENDIDO" : "ATENDIDO"}</Text>
                <Text style={styles.ubicacionText}>
                  {llamado.nombre_ubicacion} {llamado.numero_ubicacion}
                </Text>
                <Text style={styles.areaText}>Área: {llamado.nombre_area}</Text>
                <TouchableOpacity
                  style={styles.marcarAtendidoBox}
                  onPress={() => {
                    setearAtendido(llamado.id_llamado);
                  }}
                >
                  <Text style={styles.marcarAtendidoText}>Marcar como atendido</Text>
                </TouchableOpacity>
              </View>
            ))}
          </ScrollView>
        </Animated.View>

        {id_enfermero !== null ? (
          <>
            <NoAtendidos />

            <Animated.View style={[noAtendidosStyle]}>
              <ScrollView
                style={styles.scrollView}
                contentContainerStyle={{
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {noAtendidosEnfermero.map((llamado) => (
                  <View style={styles.animationBoxNoAtendidos} key={llamado.id_llamado}>
                    <Text style={styles.atendidoText}>NO ATENDIDO</Text>
                    <Text style={styles.ubicacionText}>
                      {llamado.nombre_ubicacion} {llamado.numero_ubicacion}
                    </Text>
                    <Text style={styles.areaText}>Área: {llamado.nombre_area}</Text>
                    <TouchableOpacity
                      style={styles.marcarAtendidoBoxAtendidos}
                      onPress={() => {
                        setearAtendido(llamado.id_llamado);
                      }}
                    >
                      <Text style={styles.marcarAtendidoText}>Marcar como atendido</Text>
                    </TouchableOpacity>
                  </View>
                ))}
              </ScrollView>
            </Animated.View>
            <Atendidos />
            <Animated.View style={[atendidosStyle]}>
              <ScrollView
                style={styles.scrollView}
                contentContainerStyle={{
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {atendidosEnfermero.map((llamado) => (
                  <View style={styles.animationBoxNoAtendidos} key={llamado.id_llamado}>
                    <Text style={styles.atendidoText}>ATENDIDO</Text>
                    <Text style={styles.ubicacionText}>
                      {llamado.nombre_ubicacion} {llamado.numero_ubicacion}
                    </Text>
                    <Text style={styles.areaText}>Área: {llamado.nombre_area}</Text>
                  </View>
                ))}
              </ScrollView>
            </Animated.View>
          </>
        ) : (
          <>
            <TouchableOpacity style={styles.noAtendidos} onPress={toggleNoAtendidos}>
              <Text style={styles.textModal}>Mostrar todos</Text>
              <Image
                source={!noAtendidosHook ? require("../assets/images/modal.png") : require("../assets/images/modalInvertido.png")}
                style={styles.imageModal}
              />
            </TouchableOpacity>
            <Animated.View style={[noAtendidosStyle]}>
              <ScrollView
                style={styles.scrollView}
                contentContainerStyle={{
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {noAtendidosEnfermero.map((llamado) => (
                  <View style={styles.animationBoxCodigoAzul} key={llamado.id_llamado}>
                    <Text>{JSON.stringify(llamado)}</Text>
                  </View>
                ))}
              </ScrollView>
            </Animated.View>
          </>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
    alignItems: "center",
    flexDirection: "column",
  },
  backgroundImage: {
    position: "absolute",
    opacity: 0.2,
    top: "26%",
    height: "50%",
    width: "70%",
  },
  navBar: {
    height: "13%",
    width: "100%",
    backgroundColor: "#07D5A1",
    alignItems: "center",
    marginBottom: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 25,
  },
  content: {
    flex: 1,

    height: Dimensions.get("window").height,
    width: "100%",
  },
  codigoAzul: {
    width: "96%",
    height: "12%",
    borderRadius: 35,
    backgroundColor: "#F33",
    alignItems: "center",
    marginBottom: 7,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 5,
    marginLeft: "2%",
  },
  noAtendidos: {
    width: "96%",
    height: "12%",
    borderRadius: 35,
    backgroundColor: "#07D5A1",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 7,
    flexDirection: "row",
    padding: 5,
    marginLeft: "2%",
  },
  imageButton: {
    width: "30%",
    height: "60%",
    justifyContent: "center",
    alignItems: "center",
    margin: "5%",
  },
  imageFooter: {
    width: 40,
    height: 40,
  },
  textNavBar: {
    fontSize: 40,
    fontFamily: "Montserrat-Bold",
    color: "#f8f8f8",
    margin: 10,
    textShadowColor: "#000",
    textShadowOffset: {
      width: 0,
      height: 1,
    },
    textShadowRadius: 1,
  },
  imageNavBar: {
    margin: 10,
  },
  textModal: {
    fontSize: 40,
    fontFamily: "Montserrat-Bold",
    color: "#f8f8f8",
    marginLeft: "2%",
    textShadowColor: "#000",
    textShadowOffset: {
      width: 0,
      height: 1,
    },
    textShadowRadius: 1,
  },
  imageModal: {
    marginRight: "3%",
  },
  animationBoxCodigoAzul: {
    width: "90%",
    paddingTop: 20,
    paddingBottom: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F94242",
    borderRadius: 25,
    marginBottom: 7,
  },
  atendidoText: {
    fontFamily: "Montserrat-Bold",
    color: "#f8f8f8",
    fontSize: 20,
  },
  ubicacionText: {
    fontFamily: "Montserrat-Bold-Italic",
    color: "#f8f8f8",
    fontSize: 32,
  },
  areaText: {
    fontFamily: "Montserrat-SemiBold",
    color: "#f8f8f8",
    fontSize: 18,
  },
  marcarAtendidoText: {
    fontFamily: "Montserrat",
    color: "#ffffff",
    textAlign: "center",
    fontSize: 18,
  },
  marcarAtendidoBox: {
    width: "80%",
    padding: 5,
    paddingTop: 10,
    paddingBottom: 10,
    elevation: 5,
    borderRadius: 30,
    backgroundColor: "#fa5a5a",
    margin: 20,
  },
  scrollView: {
    display: "flex",
  },
  animationBoxNoAtendidos: {
    width: "90%",
    paddingTop: 20,
    paddingBottom: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#07D5A1",
    borderRadius: 25,
    marginBottom: 7,
  },
  marcarAtendidoBoxAtendidos: {
    width: "80%",
    padding: 5,
    paddingTop: 10,
    paddingBottom: 10,
    elevation: 5,
    borderRadius: 30,
    backgroundColor: "rgba(217, 217, 217, 0.50)",
    margin: 20,
  },
});
