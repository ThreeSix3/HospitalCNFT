import React, { useCallback, useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./pages/Login";
import Loading from "./pages/Loading";
import Menu from "./pages/Menu";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { getData, deleteData } from "./functions/asyncStorageFunctions";
const Stack = createNativeStackNavigator();
SplashScreen.preventAutoHideAsync();
export default function App() {
  
  const [token, setToken] = useState({});
  const [id_enfermero, setId_enfermero] = useState(null);
  useEffect(() => {
    (async () => {
      const sesion = await getData("sesion");
      if (sesion && sesion.length !== 0) {
        const tokenAux = await getData("token");
        setToken(tokenAux);
        const id_enfermeroAux = await getData("id_enfermero");
        setId_enfermero(id_enfermeroAux);
      }
    })();
  
    const cleanup = async () => {
      const sesion = await getData("sesion");
      if (!sesion || sesion.length === 0) {
        setToken({});
        setId_enfermero(null);
        try {
          await deleteData("token");
        } catch (error) {
          console.error("Error:", error);
        }
        try {
          await deleteData("id_enfermero");
        } catch (error) {
          console.error("Error:", error);
        }
      }
    };
  
    return cleanup;
  }, []);
  const [fontsLoaded] = useFonts({
    Montserrat: require("./assets/fonts/Montserrat-Regular.ttf"),
    "Montserrat-SemiBold": require("./assets/fonts/Montserrat-SemiBold.ttf"),
    "Montserrat-Bold": require("./assets/fonts/Montserrat-Bold.ttf"),
    "Montserrat-Bold-Italic": require("./assets/fonts/Montserrat-BoldItalic.ttf"),
    "Montserrat-Black": require("./assets/fonts/Montserrat-Black.ttf"),
    "Montserrat-ExtraBold": require("./assets/fonts/Montserrat-ExtraBold.ttf"),
    "Montserrat-Thin": require("./assets/fonts/Montserrat-Thin.ttf"),
  });
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {Object.keys(token).length <= 0 ? (
          <Stack.Screen
            name="IniciarSesion"
            options={{ title: "IniciarSesion", headerShown: false }}
          >
            {(props) => (
              <Login
                {...props}
                onLayout={onLayoutRootView}
                setToken={setToken}
                setId_enfermero={setId_enfermero}
              />
            )}
          </Stack.Screen>
        ) : (
          <>
            <Stack.Screen
              name="Menu"
              options={{ title: "Menu", headerShown: false }}
            >
              {(props) => (
                <Menu
                  {...props}
                  onLayout={onLayoutRootView}
                  setToken={setToken}
                  id_enfermero={id_enfermero}
                />
              )}
            </Stack.Screen>
            <Stack.Screen
              name="Loading"
              component={Loading}
              options={{ title: "Loading", headerShown: false }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
