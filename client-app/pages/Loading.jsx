import React, { useEffect } from "react";
import { StyleSheet, View, Image, Text } from "react-native";

export default function Loading({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Menu");
    }, 1000);
  }, []);
  return (
    <View style={styles.container}>
      <Image style={styles.imagen} source={require("../assets/images/Cargando.png")} />
      <Text style={styles.textCargando}>Cargando...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#07D5A1",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  imagen: {
    marginBottom: "40%",
    width: "65%",
    height: "40%",
  },
  textCargando: {
    fontSize: 45,
    fontWeight: "800",
    fontFamily: "Montserrat",
    color: "#FFF",
    textShadowOffset: {
      width: 0,
      height: 3,
    },
    textShadowRadius: 4,
    marginBottom: "10%",
  },
});
