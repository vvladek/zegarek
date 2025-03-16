import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { Stack } from "expo-router";


SplashScreen.preventAutoHideAsync();


export default function RootLayout() {

  const [loaded, error] = useFonts({
    "MontserratBold": require("@/assets/fonts/Montserrat-Bold.ttf"),
  });


  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded && !error) {
    return null;
  }


  return (
    <Stack screenOptions={{ headerShown: false }} />
  );
}
