import React from "react";
import { Stack} from 'expo-router'

import {useFonts} from 'expo-font'
import { useEffect } from 'react'
import { SplashScreen } from 'expo-router'


SplashScreen.preventAutoHideAsync();

const MainLayout = () =>{

    const [fontsLoaded, error] = useFonts({
        "Gayathri-Bold": require("../assets/fonts/Gayathri-Bold.ttf"),
        "Gayathri-Regular": require("../assets/fonts/Gayathri-Regular.ttf"),
        "Gayathri-Thin": require("../assets/fonts/Gayathri-Thin.ttf"),
        "Inter-Italic": require("../assets/fonts/Inter-Italic.ttf"),
        "Inter-Variable": require("../assets/fonts/Inter-Variable.ttf"),
      });
      
      useEffect(() => {
        if (error) throw error;
      
        if (fontsLoaded) {
          SplashScreen.hideAsync();
        }
      }, [fontsLoaded, error]);
      
      if (!fontsLoaded && !error) {
        return null;
      }
      

    return(
        <>
        <Stack>
            <Stack.Screen name="index" options={{
                headerShown: false
            }}/>
        </Stack>
        </>
    )
}

export default MainLayout