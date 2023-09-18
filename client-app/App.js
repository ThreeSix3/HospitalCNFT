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
  useEffect(() => {
    (async () => {
      const sesion = await getData("sesion");
      if (sesion && sesion.length !== 0) {
        const tokenAux = await getData("token");
        setToken(tokenAux);
      }
    })();
  
    const cleanup = async () => {
      const sesion = await getData("sesion");
      if (!sesion || sesion.length === 0) {
        setToken({});
        try {
          await deleteData("token");
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
